"use client";

import { Suspense } from "react";
import { useEffect, useCallback, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { useLessonStore } from "@/lib/store/lesson-store";
import { useProgressStore } from "@/lib/store/progress-store";
import { useConversationFlow } from "@/lib/hooks/useConversationFlow";
import { ChatPanel } from "@/components/chat/ChatPanel";
import { PromptCard } from "@/components/chat/PromptCard";
import { RecordButton } from "@/components/audio/RecordButton";
import { LessonHeader } from "@/components/lesson/LessonHeader";
import { PronunciationFeedback } from "@/components/pronunciation/PronunciationFeedback";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { TalkingHeadAvatarHandle } from "@/components/avatar/TalkingHeadAvatar";

// Dynamic import for TalkingHead (no SSR — uses WebGL + Web Audio)
const TalkingHeadAvatar = dynamic(
  () =>
    import("@/components/avatar/TalkingHeadAvatar").then((m) => ({
      default: m.TalkingHeadAvatar,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-[var(--color-text-muted)]">Loading 3D avatar...</p>
      </div>
    ),
  }
);

export default function LessonPage() {
  return (
    <Suspense fallback={
      <main className="flex min-h-screen items-center justify-center">
        <div className="text-[var(--color-text-muted)]">Loading lesson...</div>
      </main>
    }>
      <LessonContent />
    </Suspense>
  );
}

function LessonContent() {
  const searchParams = useSearchParams();
  const scenarioId = searchParams.get("id") || "cafe-ordering";
  const avatarGender = (searchParams.get("gender") as "male" | "female") || "female";
  const store = useLessonStore();
  const progressStore = useProgressStore();
  const [initialized, setInitialized] = useState(false);
  const [started, setStarted] = useState(false); // user clicked "Begin"
  const [progressSaved, setProgressSaved] = useState(false);
  const avatarTurnStartedRef = useRef<number>(-1);
  const avatarRef = useRef<TalkingHeadAvatarHandle | null>(null);

  const handleSpeakEnd = useCallback(() => {
    store.setAvatarSpeaking(false);
  }, [store]);

  const {
    startAvatarTurn,
    startRecording,
    stopRecordingAndProcess,
    listenToExpectedPhrase,
  } = useConversationFlow({
    avatarRef,
    gender: avatarGender,
  });

  // Load scenario
  useEffect(() => {
    if (initialized) return;

    async function init() {
      try {
        const response = await fetch(`/api/scenarios?id=${scenarioId}`);
        const scenario = await response.json();
        store.setScenario(scenario);
        store.resetLesson();
        setInitialized(true);
      } catch (error) {
        console.error("Failed to load scenario:", error);
      }
    }

    init();
  }, [initialized, store, scenarioId]);

  // Start avatar speaking when turn changes — requires user to have clicked "Begin"
  useEffect(() => {
    if (!initialized || !started || !store.scenario) return;
    if (store.isAvatarSpeaking || store.isProcessing || store.isRecording)
      return;

    const turnIndex = store.currentTurnIndex;
    const turn = store.getCurrentTurn();
    if (!turn) return;

    if (avatarTurnStartedRef.current >= turnIndex) return;
    avatarTurnStartedRef.current = turnIndex;

    // If this is the last turn with no expected user phrase, speak then auto-complete
    if (!turn.expectedUserPhrase) {
      startAvatarTurn().then(() => {
        // Small delay so the user hears the farewell before celebration screen
        setTimeout(() => {
          store.advanceTurn();
        }, 1500);
      });
    } else {
      startAvatarTurn();
    }
  }, [
    initialized,
    started,
    store.scenario,
    store.currentTurnIndex,
    store.isAvatarSpeaking,
    store.isProcessing,
    store.isRecording,
    startAvatarTurn,
    store,
  ]);

  // Save progress when lesson completes
  useEffect(() => {
    if (store.isLessonComplete && store.scenario && !progressSaved) {
      const avgScore =
        store.pronunciationResults.length > 0
          ? Math.round(
              store.pronunciationResults.reduce((sum, r) => sum + r.overallScore, 0) /
                store.pronunciationResults.length
            )
          : 0;

      // Collect all vocabulary from the scenario
      const allVocab = store.scenario.turns.flatMap((t) => t.vocabulary);
      progressStore.completeScenario(store.scenario.id, avgScore, allVocab);
      setProgressSaved(true);
    }
  }, [store.isLessonComplete, store.scenario, store.pronunciationResults, progressStore, progressSaved]);

  // Handle "Begin Lesson" click — unlocks AudioContext and starts first turn
  const handleBeginLesson = useCallback(async () => {
    // Unlock AudioContext with this user gesture
    try {
      const ctx = new AudioContext();
      await ctx.resume();
      ctx.close();
    } catch {
      // ignore
    }
    setStarted(true);
  }, []);

  const handleRecordToggle = useCallback(() => {
    if (store.isRecording) {
      stopRecordingAndProcess();
    } else {
      startRecording();
    }
  }, [store.isRecording, startRecording, stopRecordingAndProcess]);

  const currentTurn = store.getCurrentTurn();

  if (!store.scenario) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="text-[var(--color-text-muted)]">Loading lesson...</div>
      </main>
    );
  }

  if (store.isLessonComplete) {
    const avgScore =
      store.pronunciationResults.length > 0
        ? Math.round(
            store.pronunciationResults.reduce(
              (sum, r) => sum + r.overallScore,
              0
            ) / store.pronunciationResults.length
          )
        : 0;

    const getGrade = (score: number) => {
      if (score >= 90) return { emoji: "\uD83C\uDF1F", label: "Excelente!", sublabel: "Outstanding!" };
      if (score >= 75) return { emoji: "\uD83C\uDF89", label: "Muy Bien!", sublabel: "Great job!" };
      if (score >= 60) return { emoji: "\uD83D\uDC4D", label: "Bien!", sublabel: "Good work!" };
      return { emoji: "\uD83D\uDCAA", label: "Sigue Practicando!", sublabel: "Keep practicing!" };
    };
    const grade = getGrade(avgScore);

    const wordCount = store.pronunciationResults.reduce(
      (sum, r) => sum + (r.words?.length || 0), 0
    );

    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-[var(--color-bg)]">
        {/* Confetti-like particles */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {avgScore >= 75 && Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                backgroundColor: ['#E8553A', '#F4A261', '#2A9D8F', '#E9C46A', '#264653'][i % 5],
              }}
              initial={{ top: '-5%', opacity: 1, scale: 0 }}
              animate={{
                top: `${60 + Math.random() * 40}%`,
                opacity: [1, 1, 0],
                scale: [0, 1.5, 0.5],
                x: (Math.random() - 0.5) * 200,
                rotate: Math.random() * 720,
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                delay: Math.random() * 1.5,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 15, stiffness: 200 }}
          className="text-center max-w-md relative z-10"
        >
          {/* Trophy/emoji */}
          <motion.div
            className="text-7xl mb-4"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', delay: 0.3, damping: 10 }}
          >
            {grade.emoji}
          </motion.div>

          <motion.h1
            className="text-4xl font-bold mb-1"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {grade.label}
          </motion.h1>
          <motion.p
            className="text-lg text-[var(--color-text-muted)] mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {grade.sublabel}
          </motion.p>

          {/* Score ring */}
          <motion.div
            className="relative w-36 h-36 mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: 'spring' }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="42" fill="none" stroke="var(--color-surface-light)" strokeWidth="8" />
              <motion.circle
                cx="50" cy="50" r="42" fill="none"
                stroke="var(--color-primary)" strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 42}`}
                initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
                animate={{ strokeDashoffset: 2 * Math.PI * 42 * (1 - avgScore / 100) }}
                transition={{ delay: 0.8, duration: 1.5, ease: 'easeOut' }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                className="text-4xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                {avgScore}%
              </motion.span>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-3 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <div className="bg-[var(--color-surface)] rounded-xl p-3">
              <div className="text-xl font-bold text-[var(--color-primary)]">{store.pronunciationResults.length}</div>
              <div className="text-xs text-[var(--color-text-muted)]">Phrases</div>
            </div>
            <div className="bg-[var(--color-surface)] rounded-xl p-3">
              <div className="text-xl font-bold text-[var(--color-primary)]">{wordCount}</div>
              <div className="text-xs text-[var(--color-text-muted)]">Words</div>
            </div>
            <div className="bg-[var(--color-surface)] rounded-xl p-3">
              <div className="text-xl font-bold text-[var(--color-primary)]">{avgScore >= 75 ? '\u2B50' : '\u2014'}</div>
              <div className="text-xs text-[var(--color-text-muted)]">{avgScore >= 75 ? 'Star!' : 'Try again'}</div>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <button
              onClick={() => {
                store.resetLesson();
                avatarTurnStartedRef.current = -1;
                setStarted(false);
                setInitialized(false);
                setProgressSaved(false);
              }}
              className="flex-1 bg-[var(--color-surface-light)] hover:bg-[var(--color-surface)] text-white font-semibold px-6 py-3 rounded-xl transition-colors cursor-pointer"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="flex-1 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-center"
            >
              More Scenarios
            </Link>
          </motion.div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="flex flex-col h-screen bg-[var(--color-bg)]">
      {/* Header */}
      <LessonHeader
        title={store.scenario.title}
        currentTurn={store.currentTurnIndex}
        totalTurns={store.scenario.turns.length}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left/Top: Avatar area */}
        <div className="h-[35vh] lg:h-auto lg:w-3/5 flex flex-col bg-[var(--color-surface)] relative flex-shrink-0">
          <div className="flex-1 min-h-0">
            <TalkingHeadAvatar
              ref={avatarRef}
              gender={avatarGender}
              onSpeakEnd={handleSpeakEnd}
            />
          </div>

          {/* Begin lesson overlay — user must click to unlock AudioContext */}
          {initialized && !started && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <motion.button
                onClick={handleBeginLesson}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  handleBeginLesson();
                }}
                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg cursor-pointer touch-manipulation"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Begin Lesson
              </motion.button>
            </div>
          )}

          {/* Status indicators */}
          <div className="absolute top-4 left-4 z-10">
            {store.isAvatarSpeaking && (
              <motion.div
                className="flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.15,
                    }}
                  />
                ))}
                <span className="text-xs text-white ml-1">Speaking...</span>
              </motion.div>
            )}
            {store.isProcessing && (
              <motion.div
                className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <span className="text-xs text-white">Processing...</span>
              </motion.div>
            )}
          </div>

          {/* Record button */}
          <div className="absolute bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 z-50">
            <RecordButton
              isRecording={store.isRecording}
              isDisabled={
                store.isAvatarSpeaking ||
                store.isProcessing ||
                !currentTurn?.expectedUserPhrase
              }
              onToggle={handleRecordToggle}
            />
          </div>
        </div>

        {/* Right/Bottom: Chat + prompt */}
        <div className="flex-1 lg:w-2/5 flex flex-col border-t lg:border-t-0 lg:border-l border-[var(--color-surface-light)] min-h-0">
          {/* Translation toggle */}
          <div className="flex items-center justify-end px-3 py-1.5 border-b border-[var(--color-surface-light)] flex-shrink-0">
            <button
              onClick={() => store.toggleTranslation()}
              className={`text-xs px-3 py-1 rounded-full transition-colors cursor-pointer ${
                store.showTranslation
                  ? "bg-[var(--color-primary)]/20 text-[var(--color-primary)]"
                  : "bg-[var(--color-surface-light)] text-[var(--color-text-muted)]"
              }`}
            >
              {store.showTranslation ? "Hide" : "Show"} translations
            </button>
          </div>

          {/* Chat messages — takes all remaining space */}
          <div className="flex-1 min-h-0 overflow-y-auto">
            <ChatPanel
              messages={store.conversationHistory}
              showTranslation={store.showTranslation}
            />
          </div>

          {/* Pronunciation feedback */}
          <AnimatePresence>
            {store.latestPronunciation && (
              <motion.div
                className="flex-shrink-0"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
              >
                <PronunciationFeedback result={store.latestPronunciation} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Prompt card — pinned at bottom, compact */}
          {currentTurn && (
            <PromptCard
              turn={currentTurn}
              showTranslation={store.showTranslation}
              onListenClick={listenToExpectedPhrase}
            />
          )}
        </div>
      </div>
    </main>
  );
}

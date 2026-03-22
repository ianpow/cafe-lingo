"use client";

import { useState, useCallback } from "react";
import { useProgressStore } from "@/lib/store/progress-store";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { VocabItem } from "@/lib/types";

const LANGUAGES = [
  { code: "es", label: "Spanish", flag: "\uD83C\uDDEA\uD83C\uDDF8" },
  { code: "fr", label: "French", flag: "\uD83C\uDDEB\uD83C\uDDF7" },
  { code: "zh", label: "Chinese", flag: "\uD83C\uDDE8\uD83C\uDDF3" },
];

export default function VocabPage() {
  const progressStore = useProgressStore();
  const [selectedLang, setSelectedLang] = useState("es");
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [filter, setFilter] = useState<"all" | "noun" | "verb" | "phrase">("all");

  const vocab = progressStore.getVocabularyByLanguage(selectedLang);

  const filteredVocab = filter === "all"
    ? vocab
    : vocab.filter((v) => v.partOfSpeech === filter);

  const toggleFlip = useCallback((index: number) => {
    setFlippedCards((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }, []);

  const flipAll = useCallback(() => {
    if (flippedCards.size === filteredVocab.length) {
      setFlippedCards(new Set());
    } else {
      setFlippedCards(new Set(filteredVocab.map((_, i) => i)));
    }
  }, [flippedCards.size, filteredVocab]);

  return (
    <main className="min-h-screen bg-[var(--color-bg)] p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <Link
              href="/"
              className="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors mb-2 inline-block"
            >
              &larr; Back to scenarios
            </Link>
            <h1 className="text-3xl font-bold">
              Vocabulary <span className="text-[var(--color-primary)]">Review</span>
            </h1>
            <p className="text-[var(--color-text-muted)] text-sm mt-1">
              {vocab.length} words learned &middot; Tap cards to flip
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-3">
            <div className="bg-[var(--color-surface)] rounded-xl px-4 py-2 text-center">
              <div className="text-xl font-bold text-[var(--color-primary)]">
                {progressStore.getCompletedCount()}
              </div>
              <div className="text-xs text-[var(--color-text-muted)]">Lessons</div>
            </div>
            <div className="bg-[var(--color-surface)] rounded-xl px-4 py-2 text-center">
              <div className="text-xl font-bold text-[var(--color-primary)]">
                {progressStore.totalXP}
              </div>
              <div className="text-xs text-[var(--color-text-muted)]">XP</div>
            </div>
          </div>
        </div>

        {/* Language tabs */}
        <div className="flex gap-2 mb-4">
          {LANGUAGES.map((lang) => {
            const count = progressStore.getVocabularyByLanguage(lang.code).length;
            return (
              <button
                key={lang.code}
                onClick={() => {
                  setSelectedLang(lang.code);
                  setFlippedCards(new Set());
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  selectedLang === lang.code
                    ? "bg-[var(--color-primary)] text-white"
                    : "bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-light)]"
                }`}
              >
                <span>{lang.flag}</span>
                <span className="hidden sm:inline">{lang.label}</span>
                {count > 0 && (
                  <span className="bg-white/20 rounded-full px-1.5 text-xs">{count}</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Filter pills */}
        <div className="flex gap-2 mb-6">
          {(["all", "noun", "verb", "phrase"] as const).map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                setFlippedCards(new Set());
              }}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                filter === f
                  ? "bg-[var(--color-primary)]/20 text-[var(--color-primary)]"
                  : "bg-[var(--color-surface)] text-[var(--color-text-muted)]"
              }`}
            >
              {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1) + "s"}
            </button>
          ))}
          {filteredVocab.length > 0 && (
            <button
              onClick={flipAll}
              className="ml-auto px-3 py-1 rounded-full text-xs font-medium bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:text-white transition-all cursor-pointer"
            >
              {flippedCards.size === filteredVocab.length ? "Hide all" : "Show all"}
            </button>
          )}
        </div>

        {/* Vocab cards */}
        {filteredVocab.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-5xl mb-4">
              {LANGUAGES.find((l) => l.code === selectedLang)?.flag || "\uD83D\uDCDA"}
            </div>
            <h2 className="text-xl font-semibold mb-2">No words yet!</h2>
            <p className="text-[var(--color-text-muted)] mb-6">
              Complete {LANGUAGES.find((l) => l.code === selectedLang)?.label || ""} scenarios to build your vocabulary.
            </p>
            <Link
              href="/"
              className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Start Learning
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            <AnimatePresence mode="popLayout">
              {filteredVocab.map((item, index) => (
                <VocabCard
                  key={`${item.word}-${index}`}
                  item={item}
                  isFlipped={flippedCards.has(index)}
                  onFlip={() => toggleFlip(index)}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </main>
  );
}

function VocabCard({
  item,
  isFlipped,
  onFlip,
  index,
}: {
  item: VocabItem;
  isFlipped: boolean;
  onFlip: () => void;
  index: number;
}) {
  const posColors: Record<string, string> = {
    noun: "text-blue-400",
    verb: "text-green-400",
    adjective: "text-purple-400",
    adverb: "text-yellow-400",
    phrase: "text-orange-400",
    number: "text-pink-400",
    preposition: "text-teal-400",
    pronoun: "text-indigo-400",
    article: "text-gray-400",
    interjection: "text-red-400",
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.02 }}
      onClick={onFlip}
      className="cursor-pointer perspective-1000"
    >
      <div
        className={`relative w-full aspect-[3/2] transition-transform duration-500 transform-style-3d ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-[var(--color-surface)] hover:bg-[var(--color-surface-light)] rounded-xl p-4 flex flex-col items-center justify-center transition-colors">
          <span className="text-lg font-bold text-center leading-tight mb-1">
            {item.word}
          </span>
          <span className={`text-xs ${posColors[item.partOfSpeech] || "text-gray-400"}`}>
            {item.partOfSpeech}
          </span>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] bg-[var(--color-primary)] rounded-xl p-4 flex flex-col items-center justify-center">
          <span className="text-sm font-bold text-white text-center leading-tight mb-1">
            {item.translation}
          </span>
          <span className="text-xs text-white/70 text-center">
            {item.pronunciation}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useProgressStore } from "@/lib/store/progress-store";

interface ScenarioLevel {
  id: string;
  level: number;
  subtitle: string;
}

interface ScenarioCategory {
  icon: string;
  title: string;
  description: string;
  levels: ScenarioLevel[];
}

interface LanguageTab {
  code: string;
  label: string;
  flag: string;
  subtitle: string;
  categories: ScenarioCategory[];
}

const ofcomCategory: ScenarioCategory = {
  icon: "\uD83D\uDCE1",
  title: "Ofcom",
  description: "Discuss Ofcom's work and the Online Safety Act at international conferences.",
  levels: [
    { id: "ofcom-intro", level: 1, subtitle: "Introducing Ofcom" },
    { id: "ofcom-osa", level: 2, subtitle: "The Online Safety Act" },
    { id: "ofcom-roadmap", level: 2, subtitle: "Roadmap to Regulation" },
    { id: "ofcom-stakeholder", level: 3, subtitle: "Stakeholder Meeting" },
    { id: "ofcom-panel", level: 3, subtitle: "Conference Panel" },
  ],
};

const ofcomCategoryFr: ScenarioCategory = {
  icon: "\uD83D\uDCE1",
  title: "Ofcom",
  description: "Discuss Ofcom's work and the Online Safety Act at international conferences.",
  levels: [
    { id: "ofcom-intro-fr", level: 1, subtitle: "Introducing Ofcom" },
    { id: "ofcom-osa-fr", level: 2, subtitle: "The Online Safety Act" },
    { id: "ofcom-roadmap-fr", level: 2, subtitle: "Roadmap to Regulation" },
    { id: "ofcom-stakeholder-fr", level: 3, subtitle: "Stakeholder Meeting" },
    { id: "ofcom-panel-fr", level: 3, subtitle: "Conference Panel" },
  ],
};

const ofcomCategoryZh: ScenarioCategory = {
  icon: "\uD83D\uDCE1",
  title: "Ofcom",
  description: "Discuss Ofcom's work and the Online Safety Act at international conferences.",
  levels: [
    { id: "ofcom-intro-zh", level: 1, subtitle: "Introducing Ofcom" },
    { id: "ofcom-osa-zh", level: 2, subtitle: "The Online Safety Act" },
    { id: "ofcom-roadmap-zh", level: 2, subtitle: "Roadmap to Regulation" },
    { id: "ofcom-stakeholder-zh", level: 3, subtitle: "Stakeholder Meeting" },
    { id: "ofcom-panel-zh", level: 3, subtitle: "Conference Panel" },
  ],
};

const languages: LanguageTab[] = [
  {
    code: "es",
    label: "Spanish",
    flag: "\uD83C\uDDEA\uD83C\uDDF8",
    subtitle: "Learn Spanish by Speaking",
    categories: [
      {
        icon: "\u2615",
        title: "At the Cafe",
        description: "Order coffee and churros at Cafe Sol in Madrid.",
        levels: [
          { id: "cafe-ordering", level: 1, subtitle: "Basic ordering" },
          { id: "cafe-ordering-2", level: 2, subtitle: "Ordering for two" },
          { id: "cafe-ordering-3", level: 3, subtitle: "Handle mix-ups" },
        ],
      },
      {
        icon: "\uD83C\uDF7D\uFE0F",
        title: "At the Restaurant",
        description: "Dine at a traditional Spanish restaurant in Barcelona.",
        levels: [
          { id: "restaurant-ordering", level: 1, subtitle: "First meal out" },
          { id: "restaurant-ordering-2", level: 2, subtitle: "Dietary needs" },
          { id: "restaurant-ordering-3", level: 3, subtitle: "Special occasion" },
        ],
      },
      {
        icon: "\uD83D\uDDFA\uFE0F",
        title: "Asking for Directions",
        description: "Find your way around a Spanish city in Seville.",
        levels: [
          { id: "asking-directions", level: 1, subtitle: "Finding the museum" },
          { id: "asking-directions-2", level: 2, subtitle: "Public transport" },
          { id: "asking-directions-3", level: 3, subtitle: "Help a tourist" },
        ],
      },
      {
        icon: "\uD83C\uDFE8",
        title: "Hotel Check-in",
        description: "Stay at Hotel Esperanza in Granada.",
        levels: [
          { id: "hotel-checkin", level: 1, subtitle: "Checking in" },
          { id: "hotel-checkin-2", level: 2, subtitle: "Room requests" },
          { id: "hotel-checkin-3", level: 3, subtitle: "Checking out" },
        ],
      },
      {
        icon: "\uD83D\uDECD\uFE0F",
        title: "Shopping",
        description: "Buy souvenirs at shops in Madrid.",
        levels: [
          { id: "shopping", level: 1, subtitle: "First purchase" },
          { id: "shopping-2", level: 2, subtitle: "Try on & compare" },
          { id: "shopping-3", level: 3, subtitle: "Market bargaining" },
        ],
      },
      {
        icon: "\uD83C\uDFE2",
        title: "At the Office",
        description: "Navigate your first day at a Spanish workplace.",
        levels: [
          { id: "office-workplace", level: 1, subtitle: "First day" },
        ],
      },
      ofcomCategory,
    ],
  },
  {
    code: "fr",
    label: "French",
    flag: "\uD83C\uDDEB\uD83C\uDDF7",
    subtitle: "Learn French by Speaking",
    categories: [
      {
        icon: "\u2615",
        title: "At the Cafe",
        description: "Order coffee and pastries at Cafe de Flore in Paris.",
        levels: [
          { id: "cafe-ordering-fr", level: 1, subtitle: "Basic ordering" },
        ],
      },
      {
        icon: "\uD83D\uDDFA\uFE0F",
        title: "Asking for Directions",
        description: "Find your way around central Paris.",
        levels: [
          { id: "asking-directions-fr", level: 1, subtitle: "Near the Louvre" },
        ],
      },
      ofcomCategoryFr,
    ],
  },
  {
    code: "zh",
    label: "Chinese",
    flag: "\uD83C\uDDE8\uD83C\uDDF3",
    subtitle: "Learn Chinese by Speaking",
    categories: [
      {
        icon: "\u2615",
        title: "At the Cafe",
        description: "Order coffee and snacks at a cafe in Beijing.",
        levels: [
          { id: "cafe-ordering-zh", level: 1, subtitle: "Basic ordering" },
        ],
      },
      {
        icon: "\uD83D\uDDFA\uFE0F",
        title: "Asking for Directions",
        description: "Find your way around central Beijing.",
        levels: [
          { id: "asking-directions-zh", level: 1, subtitle: "Near Tiananmen" },
        ],
      },
      ofcomCategoryZh,
    ],
  },
];

const levelColors = [
  "bg-emerald-600 hover:bg-emerald-500",
  "bg-amber-600 hover:bg-amber-500",
  "bg-rose-600 hover:bg-rose-500",
];

export default function Home() {
  const [selectedLang, setSelectedLang] = useState("es");
  const [avatarGender, setAvatarGender] = useState<"female" | "male">("female");
  const [mounted, setMounted] = useState(false);
  const progressStore = useProgressStore();
  const currentLang = languages.find((l) => l.code === selectedLang) || languages[0];

  // Defer localStorage-dependent rendering to avoid SSR hydration mismatch
  useEffect(() => setMounted(true), []);

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8">
      {/* Hero */}
      <motion.div
        className="text-center max-w-5xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-2 mt-6 md:mt-12">
          Cafe<span className="text-[var(--color-primary)]">Lingo</span>
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-text-muted)] mb-6 md:mb-10">
          {currentLang.subtitle}
        </p>

        {/* Language selector */}
        <div className="flex justify-center gap-2 mb-6">
          {languages.map((lang) => {
            const completedInLang = mounted
              ? lang.categories.flatMap((c) => c.levels).filter((l) => progressStore.isCompleted(l.id)).length
              : 0;

            return (
              <button
                key={lang.code}
                onClick={() => setSelectedLang(lang.code)}
                className={`flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  selectedLang === lang.code
                    ? "bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/20"
                    : "bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-light)]"
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="hidden sm:inline">{lang.label}</span>
                {completedInLang > 0 && (
                  <span className={`text-xs px-1.5 rounded-full ${
                    selectedLang === lang.code ? "bg-white/20" : "bg-[var(--color-primary)]/20 text-[var(--color-primary)]"
                  }`}>
                    {completedInLang}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Avatar gender selector */}
        <div className="flex justify-center gap-2 mb-4">
          <span className="text-sm text-[var(--color-text-muted)] self-center mr-1">Avatar:</span>
          {(["female", "male"] as const).map((g) => (
            <button
              key={g}
              onClick={() => setAvatarGender(g)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                avatarGender === g
                  ? "bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/20"
                  : "bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-light)]"
              }`}
            >
              <span>{g === "female" ? "\u2640\uFE0F" : "\u2642\uFE0F"}</span>
              <span className="capitalize">{g}</span>
            </button>
          ))}
        </div>

        {/* Stats bar */}
        <div className="flex justify-center gap-4 mb-6 md:mb-8">
          <Link
            href="/vocab"
            className="flex items-center gap-2 bg-[var(--color-surface)] hover:bg-[var(--color-surface-light)] rounded-xl px-4 py-2 transition-colors"
          >
            <span className="text-lg">📚</span>
            <div className="text-left">
              <div className="text-sm font-bold text-[var(--color-primary)]">
                {mounted ? progressStore.getAllVocabulary().length : 0}
              </div>
              <div className="text-xs text-[var(--color-text-muted)]">Words Learned</div>
            </div>
          </Link>
          <div className="flex items-center gap-2 bg-[var(--color-surface)] rounded-xl px-4 py-2">
            <span className="text-lg">⭐</span>
            <div className="text-left">
              <div className="text-sm font-bold text-[var(--color-primary)]">
                {mounted ? progressStore.totalXP : 0}
              </div>
              <div className="text-xs text-[var(--color-text-muted)]">Total XP</div>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-[var(--color-surface)] rounded-xl px-4 py-2">
            <span className="text-lg">✅</span>
            <div className="text-left">
              <div className="text-sm font-bold text-[var(--color-primary)]">
                {mounted ? progressStore.getCompletedCount() : 0}
              </div>
              <div className="text-xs text-[var(--color-text-muted)]">Completed</div>
            </div>
          </div>
        </div>

        {/* How it works — hide on mobile when there's progress */}
        <div className="hidden md:grid grid-cols-3 gap-4 mb-10">
          {[
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--color-primary)">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                </svg>
              ),
              title: "Listen",
              description: "Hear your AI tutor speak naturally",
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--color-primary)">
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                  <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                </svg>
              ),
              title: "Speak",
              description: "Practice pronunciation with real-time feedback",
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--color-primary)">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                </svg>
              ),
              title: "Learn",
              description: "Build skills through real-world conversations",
            },
          ].map((step, i) => (
            <motion.div
              key={step.title}
              className="bg-[var(--color-surface)] rounded-xl p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <div className="flex justify-center mb-2">{step.icon}</div>
              <h3 className="font-semibold mb-1 text-sm">{step.title}</h3>
              <p className="text-xs text-[var(--color-text-muted)]">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Scenario selection */}
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Choose a Scenario</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 mb-8 text-left">
          {currentLang.categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className="bg-[var(--color-surface)] rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + ci * 0.06 }}
            >
              {/* Category header */}
              <div className="p-4 md:p-5 pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl md:text-3xl">{cat.icon}</span>
                  <div>
                    <h3 className="font-bold text-base md:text-lg">{cat.title}</h3>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-[var(--color-text-muted)]">{cat.description}</p>
              </div>

              {/* Level buttons */}
              <div className="px-4 md:px-5 pb-4 md:pb-5 flex flex-col gap-2">
                {cat.levels.map((level) => {
                  const completed = mounted && progressStore.isCompleted(level.id);
                  const bestScore = mounted ? progressStore.getBestScore(level.id) : 0;

                  return (
                    <Link
                      key={level.id}
                      href={`/lesson?id=${level.id}&gender=${avatarGender}`}
                      className={`flex items-center gap-3 px-3 md:px-4 py-2.5 rounded-lg text-white text-sm font-medium transition-all hover:scale-[1.02] ${levelColors[level.level - 1]}`}
                    >
                      <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {completed ? "\u2713" : level.level}
                      </span>
                      <span className="flex-1">{level.subtitle}</span>
                      {completed ? (
                        <span className="text-white/80 text-xs font-bold">{bestScore}%</span>
                      ) : (
                        <span className="text-white/60 text-xs">7 turns</span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-[var(--color-text-muted)] mb-8">
          Requires microphone access for speech practice
        </p>
      </motion.div>
    </main>
  );
}

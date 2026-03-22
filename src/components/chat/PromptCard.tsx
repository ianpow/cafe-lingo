"use client";

import type { Turn } from "@/lib/types";

interface PromptCardProps {
  turn: Turn;
  showTranslation: boolean;
  onListenClick?: () => void;
}

export function PromptCard({
  turn,
  showTranslation,
  onListenClick,
}: PromptCardProps) {
  if (!turn.expectedUserPhrase) return null;

  return (
    <div className="bg-[var(--color-surface)] border border-[var(--color-surface-light)] rounded-xl p-4 mx-4 mb-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide">
          Say this:
        </span>
        {onListenClick && (
          <button
            onClick={onListenClick}
            className="text-xs text-[var(--color-text-muted)] hover:text-white flex items-center gap-1 cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
            </svg>
            Listen
          </button>
        )}
      </div>
      <p className="text-lg font-medium">{turn.expectedUserPhrase}</p>
      {turn.pronunciationGuide && (
        <p className="text-base text-[var(--color-primary)] mt-1 italic">
          {turn.pronunciationGuide}
        </p>
      )}
      {showTranslation && (
        <p className="text-sm text-[var(--color-text-muted)] mt-1">
          {turn.expectedUserPhraseEn}
        </p>
      )}

      {/* Vocabulary */}
      {turn.vocabulary.length > 0 && (
        <div className="mt-3 pt-3 border-t border-[var(--color-surface-light)]">
          <span className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide">
            Vocabulary
          </span>
          <div className="flex flex-wrap gap-2 mt-2">
            {turn.vocabulary.map((item) => (
              <span
                key={item.word}
                className="text-xs bg-[var(--color-surface-light)] rounded-lg px-2 py-1"
              >
                <span className="font-medium">{item.word}</span>
                <span className="text-[var(--color-text-muted)]">
                  {" "}
                  = {item.translation}
                </span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Grammar note */}
      {turn.grammarNote && (
        <div className="mt-3 pt-3 border-t border-[var(--color-surface-light)]">
          <p className="text-xs text-[var(--color-text-muted)]">
            <span className="font-semibold text-[var(--color-secondary)]">
              Tip:{" "}
            </span>
            {turn.grammarNote}
          </p>
        </div>
      )}
    </div>
  );
}

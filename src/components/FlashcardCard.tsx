import { useState } from "react";
import type { StudyItem } from "../types/study";

type Props = {
  item: StudyItem;
};

export function FlashcardCard({ item }: Props) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="rounded-xl border p-4">
      <div className="mb-4 text-2xl font-bold">{item.promptJa}</div>
      <div className="mb-4 text-sm text-gray-600">{item.kana}</div>

      {revealed ? (
        <div className="mb-4 text-lg">{item.answerEn}</div>
      ) : (
        <div className="mb-4 text-lg text-gray-400">Tap reveal to show answer</div>
      )}

      <button
        className="rounded-lg border px-4 py-2"
        onClick={() => setRevealed((value) => !value)}
      >
        {revealed ? "Hide" : "Reveal"}
      </button>
    </div>
  );
}
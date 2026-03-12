import { useState } from "react";
import type { MultipleChoiceQuestion } from "../types/study";

type Props = {
  question: MultipleChoiceQuestion;
  onAnswered: (selected: string, wasCorrect: boolean) => void;
};

export function MultipleChoiceCard({ question, onAnswered }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [locked, setLocked] = useState(false);

  function handleSubmit(option: string) {
    if (locked) return;

    setSelected(option);
    setLocked(true);
    onAnswered(option, option === question.correctAnswer);
  }

  return (
    <div className="rounded-xl border p-4">
      <div className="mb-2 text-2xl font-bold">{question.prompt}</div>
      <div className="mb-4 text-sm text-gray-600">Choose the correct meaning</div>

      <div className="space-y-2">
        {question.options.map((option) => {
          const isCorrect = option === question.correctAnswer;
          const isSelected = option === selected;

          return (
            <button
              key={option}
              className="block w-full rounded-lg border px-4 py-2 text-left"
              onClick={() => handleSubmit(option)}
            >
              {option}
              {locked && isSelected && isCorrect ? " ✅" : ""}
              {locked && isSelected && !isCorrect ? " ❌" : ""}
              {locked && !isSelected && isCorrect ? " ✅" : ""}
            </button>
          );
        })}
      </div>
    </div>
  );
}
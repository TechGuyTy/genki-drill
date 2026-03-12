import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { FlashcardCard } from "../../components/FlashcardCard";
import { MultipleChoiceCard } from "../../components/MultipleChoiceCard";
import { lesson1 } from "../../data/lessons/lesson1";
import { recordAttempt } from "../../features/progress/progressService";
import { addIncorrectItemToReview } from "../../features/review/reviewService";
import { buildMultipleChoiceQuestion } from "../../features/study/studyEngine";

export function StudyPage() {
  const { lessonId, mode } = useParams();
  const [index, setIndex] = useState(0);

  const items = useMemo(() => {
    if (lessonId === "1") return lesson1;
    return [];
  }, [lessonId]);

  const item = items[index];

  if (!item) {
    return <div>No more items in this lesson.</div>;
  }

  async function handleAnswered(_: string, wasCorrect: boolean) {
    await recordAttempt(item.id, wasCorrect);

    if (!wasCorrect) {
      await addIncorrectItemToReview(item.id);
    }

    setIndex((value) => value + 1);
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">
        Lesson {lessonId} · {mode}
      </h1>

      <div className="text-sm text-gray-600">
        Item {index + 1} / {items.length}
      </div>

      {mode === "flashcard" && <FlashcardCard item={item} />}

      {mode === "multiple-choice" && (
        <MultipleChoiceCard
          question={buildMultipleChoiceQuestion(item)}
          onAnswered={handleAnswered}
        />
      )}

      {mode === "flashcard" && (
        <button className="rounded-lg border px-4 py-2" onClick={() => setIndex((value) => value + 1)}>
          Next
        </button>
      )}
    </div>
  );
}
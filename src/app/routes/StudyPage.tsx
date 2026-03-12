import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FlashcardCard } from "../../components/FlashcardCard";
import { MultipleChoiceCard } from "../../components/MultipleChoiceCard";
import { getAllItems, getItemsForLesson } from "../../data";
import { recordAttempt } from "../../features/progress/progressService";
import { addIncorrectItemToReview, getReviewItems, removeFromReviewQueue } from "../../features/review/reviewService";
import { buildMultipleChoiceQuestion } from "../../features/study/studyEngine";
import type { StudyItem } from "../../types/study";

export function StudyPage() {
  const navigate = useNavigate();
  const { lessonId, mode } = useParams();
  const [index, setIndex] = useState(0);
  const [reviewItems, setReviewItems] = useState<StudyItem[] | null>(null);

  const lessonItems = useMemo(() => {
    if (!lessonId || lessonId === "review") return [];
    return getItemsForLesson(lessonId);
  }, [lessonId]);

  const isReviewMode = lessonId === "review";

  useEffect(() => {
    if (isReviewMode) {
      getReviewItems(getAllItems()).then(setReviewItems);
    } else {
      setReviewItems(null);
    }
  }, [isReviewMode]);

  const items = isReviewMode ? reviewItems ?? [] : lessonItems;

  const item = items[index];
  const isLoadingReview = isReviewMode && reviewItems === null;

  if (isLoadingReview) {
    return (
      <div className="space-y-4">
        <button type="button" className="text-sm text-gray-600 underline" onClick={() => navigate("/review")}>
          ← Back to review
        </button>
        <p className="text-gray-600">Loading review items…</p>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="space-y-4">
        <button type="button" className="text-sm text-gray-600 underline" onClick={() => navigate("/")}>
          ← Back to home
        </button>
        <p>{isReviewMode ? "No more items to review. Great job!" : "No more items in this lesson. Great job!"}</p>
        {isReviewMode ? (
          <button className="rounded-lg border px-4 py-2" onClick={() => navigate("/review")}>
            Back to review
          </button>
        ) : (
          <button className="rounded-lg border px-4 py-2" onClick={() => navigate(`/lessons/${lessonId}`)}>
            Back to Lesson {lessonId}
          </button>
        )}
      </div>
    );
  }

  async function handleAnswered(_: string, wasCorrect: boolean) {
    await recordAttempt(item.id, wasCorrect);

    if (!wasCorrect) {
      await addIncorrectItemToReview(item.id);
    } else if (isReviewMode) {
      await removeFromReviewQueue(item.id);
    }

    // Let the user see ✅/❌ feedback before advancing to the next question
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIndex((value) => value + 1);
  }

  return (
    <div className="space-y-4">
      <button
        type="button"
        className="text-sm text-gray-600 underline"
        onClick={() => navigate(isReviewMode ? "/review" : `/lessons/${lessonId}`)}
      >
        ← Back to {isReviewMode ? "review" : "lesson"}
      </button>
      <h1 className="text-2xl font-bold">
        {isReviewMode ? "Review" : `Lesson ${lessonId}`} · {mode}
      </h1>

      <div className="text-sm text-gray-600">
        Item {index + 1} / {items.length}
      </div>

      {mode === "flashcard" && <FlashcardCard item={item} />}

      {mode === "multiple-choice" && (
        <MultipleChoiceCard
          key={item.id}
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
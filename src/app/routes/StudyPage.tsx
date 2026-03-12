import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FlashcardCard } from "../../components/FlashcardCard";
import { MultipleChoiceCard } from "../../components/MultipleChoiceCard";
import { getAllItems, getItemsForLesson } from "../../data";
import { recordAttempt } from "../../features/progress/progressService";
import { addIncorrectItemToReview, getReviewItems, removeFromReviewQueue } from "../../features/review/reviewService";
import { buildMultipleChoiceQuestion } from "../../features/study/studyEngine";
import type { StudyItem } from "../../types/study";
import { PageShell } from "../components/layout/PageShell";
import { Button } from "../components/ui/Button";
import { MutedText } from "../components/ui/Typography";

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
      <PageShell
        title="Loading review…"
        headerRight={
          <Button size="sm" variant="ghost" onClick={() => navigate("/review")}>
            ← Back to review
          </Button>
        }
      >
        <MutedText>Fetching your review queue.</MutedText>
      </PageShell>
    );
  }

  if (!item) {
    return (
      <PageShell
        title="All done!"
        headerRight={
          <Button size="sm" variant="ghost" onClick={() => navigate("/")}>
            ← Home
          </Button>
        }
      >
        <MutedText>
          {isReviewMode
            ? "No more items to review. Great job!"
            : "No more items in this lesson. Great job!"}
        </MutedText>
        <div className="flex flex-wrap gap-2">
          {isReviewMode ? (
            <Button variant="primary" onClick={() => navigate("/review")}>
              Back to review
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => navigate(`/lessons/${lessonId}`)}
            >
              Back to Lesson {lessonId}
            </Button>
          )}
        </div>
      </PageShell>
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

  const titlePrefix = isReviewMode ? "Review" : `Lesson ${lessonId}`;

  return (
    <PageShell
      title={`${titlePrefix} · ${mode}`}
      headerRight={
        <Button
          size="sm"
          variant="ghost"
          onClick={() => navigate(isReviewMode ? "/review" : `/lessons/${lessonId}`)}
        >
          ← Back
        </Button>
      }
    >
      <div className="space-y-2">
        <MutedText>
          Item {index + 1} / {items.length}
        </MutedText>

        {items.length > 1 && (
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={0}
              max={items.length - 1}
              value={index}
              onChange={(event) => setIndex(Number(event.target.value))}
              className="flex-1 accent-accent"
            />
          </div>
        )}
      </div>

      {mode === "flashcard" && <FlashcardCard item={item} />}

      {mode === "multiple-choice" && (
        <MultipleChoiceCard
          key={item.id}
          question={buildMultipleChoiceQuestion(item)}
          onAnswered={handleAnswered}
        />
      )}

      <div className="flex justify-between gap-3">
        <Button
          variant="secondary"
          disabled={index === 0}
          onClick={() => setIndex((value) => Math.max(0, value - 1))}
        >
          Previous
        </Button>
        <Button
          variant="primary"
          onClick={() => setIndex((value) => value + 1)}
        >
          Next
        </Button>
      </div>
    </PageShell>
  );
}
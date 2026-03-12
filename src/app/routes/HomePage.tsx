import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LessonCard } from "../../components/LessonCard";
import { getLessonIds } from "../../data";
import { getReviewCount } from "../../features/review/reviewService";
import { PageShell } from "../components/layout/PageShell";
import { Button } from "../components/ui/Button";
import { MutedText, SectionTitle } from "../components/ui/Typography";

export function HomePage() {
  const navigate = useNavigate();
  const [reviewCount, setReviewCount] = useState<number | null>(null);
  const lessonIds = getLessonIds();

  useEffect(() => {
    getReviewCount().then(setReviewCount);
  }, []);

  const reviewLabel =
    reviewCount !== null && reviewCount > 0
      ? `Review ${reviewCount} missed item${reviewCount !== 1 ? "s" : ""}`
      : "Review missed items";

  return (
    <PageShell
      title="Konnichiwassup!"
      headerRight={
        <MutedText className="hidden text-xs md:inline">
          Tiny daily reviews add up quickly.
        </MutedText>
      }
    >
      <section className="space-y-2">
        <SectionTitle>Lessons</SectionTitle>
        <MutedText>Work through each lesson, then drill what you miss.</MutedText>
      </section>

      <div className="space-y-3">
        {lessonIds.map((id) => (
          <LessonCard
            key={id}
            title={`Lesson ${id}`}
            description="Vocab review and quick quiz"
            onOpen={() => navigate(`/lessons/${id}`)}
          />
        ))}
      </div>

      <div className="mt-4 flex justify-end">
        <Button variant="primary" onClick={() => navigate("/review")}>
          {reviewLabel}
        </Button>
      </div>
    </PageShell>
  );
}
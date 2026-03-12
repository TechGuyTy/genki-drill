import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LessonCard } from "../../components/LessonCard";
import { getLessonIds } from "../../data";
import { getReviewCount } from "../../features/review/reviewService";

export function HomePage() {
  const navigate = useNavigate();
  const [reviewCount, setReviewCount] = useState<number | null>(null);
  const lessonIds = getLessonIds();

  useEffect(() => {
    getReviewCount().then(setReviewCount);
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Konnichiwassup!</h1>

      {lessonIds.map((id) => (
        <LessonCard
          key={id}
          title={`Lesson ${id}`}
          description="Vocab review and quick quiz"
          onOpen={() => navigate(`/lessons/${id}`)}
        />
      ))}

      <button className="rounded-lg border px-4 py-2" onClick={() => navigate("/review")}>
        {reviewCount !== null && reviewCount > 0
          ? `Review ${reviewCount} missed item${reviewCount !== 1 ? "s" : ""}`
          : "Review missed items"}
      </button>
    </div>
  );
}
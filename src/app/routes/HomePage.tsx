import { useNavigate } from "react-router-dom";
import { LessonCard } from "../../components/LessonCard";

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Genki Drill</h1>
      <p className="text-gray-600">A tiny local-first study app for Genki practice.</p>

      <LessonCard
        title="Lesson 1"
        description="Vocab review and quick quiz"
        onOpen={() => navigate("/lessons/1")}
      />

      <button className="rounded-lg border px-4 py-2" onClick={() => navigate("/review")}>
        Review Missed Items
      </button>
    </div>
  );
}
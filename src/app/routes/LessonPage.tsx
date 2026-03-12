import { useNavigate, useParams } from "react-router-dom";

export function LessonPage() {
  const navigate = useNavigate();
  const { lessonId } = useParams();

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Lesson {lessonId}</h1>

      <div className="space-x-2">
        <button
          className="rounded-lg border px-4 py-2"
          onClick={() => navigate(`/study/${lessonId}/flashcard`)}
        >
          Flashcards
        </button>

        <button
          className="rounded-lg border px-4 py-2"
          onClick={() => navigate(`/study/${lessonId}/multiple-choice`)}
        >
          Multiple Choice
        </button>
      </div>
    </div>
  );
}
import { useNavigate, useParams } from "react-router-dom";
import { PageShell } from "../components/layout/PageShell";
import { Button } from "../components/ui/Button";
import { MutedText } from "../components/ui/Typography";

export function LessonPage() {
  const navigate = useNavigate();
  const { lessonId } = useParams();

  return (
    <PageShell
      title={`Lesson ${lessonId}`}
      headerRight={
        <Button size="sm" variant="ghost" onClick={() => navigate("/")}>
          ← Home
        </Button>
      }
    >
      <section className="space-y-2">
        <MutedText>Choose how you want to study this lesson.</MutedText>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="primary"
            onClick={() => navigate(`/study/${lessonId}/flashcard`)}
          >
            Flashcards
          </Button>

          <Button
            variant="secondary"
            onClick={() => navigate(`/study/${lessonId}/multiple-choice`)}
          >
            Multiple choice
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
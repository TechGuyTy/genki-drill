import { useNavigate, useParams } from "react-router-dom";
import { getLessonMetaById } from "../../data";
import { PageShell } from "../components/layout/PageShell";
import { Button } from "../components/ui/Button";
import { MutedText, SectionTitle } from "../components/ui/Typography";
import { KanaChart } from "../components/KanaChart";

export function LessonPage() {
  const navigate = useNavigate();
  const { lessonId } = useParams();

  const meta = lessonId ? getLessonMetaById(lessonId) : undefined;
  const isKanaLesson = meta?.kind === "kana";

  const pageTitle = isKanaLesson
    ? `Kana · ${meta.title}`
    : `Lesson ${lessonId}`;

  const description =
    meta?.description ??
    (isKanaLesson
      ? "Practice the Japanese syllabary with flashcards or quizzes."
      : "Choose how you want to study this lesson.");

  return (
    <PageShell
      title={pageTitle}
      headerRight={
        <Button size="sm" variant="ghost" onClick={() => navigate("/")}>
          ← Home
        </Button>
      }
    >
      {isKanaLesson && lessonId && (
        <section className="mb-6 space-y-3">
          <SectionTitle>Reference chart</SectionTitle>
          <MutedText>
            Browse the full {lessonId === "100" ? "hiragana" : "katakana"} set, then jump into practice.
          </MutedText>
          <KanaChart script={lessonId === "100" ? "hiragana" : "katakana"} />
        </section>
      )}

      <section className="space-y-2">
        <MutedText>{description}</MutedText>
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
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllItems } from "../../data";
import { getReviewItems } from "../../features/review/reviewService";
import type { StudyItem } from "../../types/study";
import { PageShell } from "../components/layout/PageShell";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Card, CardBody } from "../components/ui/Card";
import { MutedText } from "../components/ui/Typography";

export function ReviewPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState<StudyItem[]>([]);

  useEffect(() => {
    getReviewItems(getAllItems()).then(setItems);
  }, []);

  const hasItems = items.length > 0;

  return (
    <PageShell
      title="Review missed items"
      headerRight={
        <Button
          size="sm"
          variant="ghost"
          onClick={() => navigate("/")}
        >
          ← Back home
        </Button>
      }
    >
      {!hasItems ? (
        <Card>
          <CardBody className="space-y-2">
            <h2 className="font-display text-lg text-text">Nothing to review 🎉</h2>
            <MutedText>Keep studying lessons and we will queue up anything you miss.</MutedText>
          </CardBody>
        </Card>
      ) : (
        <>
          <section className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <MutedText>
                {items.length} item{items.length !== 1 ? "s" : ""} waiting in your queue.
              </MutedText>
              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => navigate("/study/review/flashcard")}
                >
                  Flashcards
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => navigate("/study/review/multiple-choice")}
                >
                  Multiple choice
                </Button>
              </div>
            </div>
          </section>

          <ul className="mt-2 space-y-2">
            {items.map((item) => (
              <li key={item.id}>
                <Card className="px-3 py-3">
                  <CardBody className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <Badge>Lesson {item.lesson}</Badge>
                    </div>
                    <div className="text-base font-semibold text-text">{item.promptJa}</div>
                    <MutedText>{item.kana}</MutedText>
                    <div className="text-sm text-text">{item.answerEn}</div>
                  </CardBody>
                </Card>
              </li>
            ))}
          </ul>
        </>
      )}
    </PageShell>
  );
}
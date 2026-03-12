import { useState } from "react";
import type { StudyItem } from "../types/study";
import { Card, CardBody, CardFooter, CardHeader } from "../app/components/ui/Card";
import { Button } from "../app/components/ui/Button";
import { MutedText } from "../app/components/ui/Typography";

type Props = {
  item: StudyItem;
};

export function FlashcardCard({ item }: Props) {
  const [revealed, setRevealed] = useState(false);

  return (
    <Card>
      <CardHeader className="flex-col items-start gap-1">
        <div className="text-2xl font-bold text-text">{item.promptJa}</div>
        <MutedText>{item.kana}</MutedText>
      </CardHeader>
      <CardBody>
        {revealed ? (
          <div className="text-lg text-text">{item.answerEn}</div>
        ) : (
          <div className="text-lg text-text-muted">Tap reveal to show answer</div>
        )}
      </CardBody>
      <CardFooter className="justify-between">
        <MutedText className="text-xs">
          {revealed ? "Hide the English meaning" : "Reveal the English meaning"}
        </MutedText>
        <Button size="sm" variant="secondary" onClick={() => setRevealed((value) => !value)}>
          {revealed ? "Hide" : "Reveal"}
        </Button>
      </CardFooter>
    </Card>
  );
}
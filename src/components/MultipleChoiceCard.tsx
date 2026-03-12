import { useState } from "react";
import type { MultipleChoiceQuestion } from "../types/study";
import { Card, CardBody, CardFooter, CardHeader } from "../app/components/ui/Card";
import { Button } from "../app/components/ui/Button";
import { MutedText } from "../app/components/ui/Typography";

type Props = {
  question: MultipleChoiceQuestion;
  onAnswered: (selected: string, wasCorrect: boolean) => void;
};

export function MultipleChoiceCard({ question, onAnswered }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [locked, setLocked] = useState(false);

  function handleSubmit(option: string) {
    if (locked) return;

    setSelected(option);
    setLocked(true);
    onAnswered(option, option === question.correctAnswer);
  }

  const wasCorrect = locked && selected === question.correctAnswer;

  return (
    <Card>
      <CardHeader className="flex-col items-start gap-2">
        <div className="text-2xl font-bold text-text">{question.prompt}</div>
        <MutedText>
          {locked
            ? wasCorrect
              ? "Correct! Next question in a moment…"
              : "Incorrect. Next question in a moment…"
            : "Choose the correct meaning"}
        </MutedText>
      </CardHeader>

      <CardBody className="space-y-2">
        {question.options.map((option) => {
          const isCorrect = option === question.correctAnswer;
          const isSelected = option === selected;

          const stateClasses =
            locked && isSelected && isCorrect
              ? "border-success/80 bg-success/5"
              : locked && isSelected && !isCorrect
              ? "border-accent/70 bg-accent-soft/10"
              : locked && !isSelected && isCorrect
              ? "border-success/80 bg-success/5"
              : "border-subtle/80 hover:border-accent/70 hover:bg-surface-muted/70";

          return (
            <Button
              key={option}
              type="button"
              variant="secondary"
              size="md"
              className={`block w-full justify-between text-left ${stateClasses}`}
              onClick={() => handleSubmit(option)}
            >
              <span>{option}</span>
              {locked && isSelected && isCorrect && <span>✅</span>}
              {locked && isSelected && !isCorrect && <span>❌</span>}
              {locked && !isSelected && isCorrect && <span>✅</span>}
            </Button>
          );
        })}
      </CardBody>
      <CardFooter className="justify-between">
        <MutedText className="text-xs">
          Tap once to lock in your answer.
        </MutedText>
      </CardFooter>
    </Card>
  );
}
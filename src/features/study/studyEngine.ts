import type { MultipleChoiceQuestion, StudyItem } from "../../types/study";
import { shuffle } from "../../utils/shuffle";

export function buildMultipleChoiceQuestion(item: StudyItem): MultipleChoiceQuestion {
  const correctAnswer = item.answerEn ?? "";
  const wrongAnswers = item.distractors ?? [];

  return {
    item,
    prompt: item.promptJa ?? item.kana ?? item.romaji ?? "",
    correctAnswer,
    options: shuffle([correctAnswer, ...wrongAnswers]).slice(0, 4),
  };
}
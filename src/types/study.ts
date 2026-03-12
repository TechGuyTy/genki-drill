export type StudyCategory = "vocab" | "reading" | "grammar";
export type StudyMode = "flashcard" | "multiple-choice";

export type StudyItem = {
  id: string;
  lesson: number;
  category: StudyCategory;
  promptJa?: string;
  promptEn?: string;
  answerJa?: string;
  answerEn?: string;
  kana?: string;
  romaji?: string;
  distractors?: string[];
  tags?: string[];
};

export type ItemProgress = {
  itemId: string;
  attempts: number;
  correct: number;
  incorrect: number;
  lastSeenAt: number;
  lastCorrectAt?: number;
  lastIncorrectAt?: number;
  hard: boolean;
};

export type ReviewQueueItem = {
  itemId: string;
  priority: number;
  addedAt: number;
  source: "incorrect" | "manual";
};

export type SessionRecord = {
  id?: number;
  startedAt: number;
  endedAt?: number;
  lesson: number;
  mode: StudyMode;
  total: number;
  correct: number;
};

export type MultipleChoiceQuestion = {
  item: StudyItem;
  prompt: string;
  correctAnswer: string;
  options: string[];
};
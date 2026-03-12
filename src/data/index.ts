import type { StudyItem } from "../types/study";
import { lesson1 } from "./lessons/lesson1";
import { lesson2 } from "./lessons/lesson2";
import { lesson3 } from "./lessons/lesson3";
import { hiraganaKanaItems } from "./kana/hiragana";
import { katakanaKanaItems } from "./kana/katakana";

const lessons: Record<string, StudyItem[]> = {
  "1": lesson1,
  "2": lesson2,
  "3": lesson3,
  "100": hiraganaKanaItems,
  "101": katakanaKanaItems,
};

export type LessonKind = "core" | "kana";

export type LessonMeta = {
  id: string;
  kind: LessonKind;
  title: string;
  description?: string;
};

const lessonMeta: LessonMeta[] = [
  {
    id: "1",
    kind: "core",
    title: "Lesson 1",
    description: "Core vocab and expressions, Chapter 1.",
  },
  {
    id: "2",
    kind: "core",
    title: "Lesson 2",
    description: "Core vocab and expressions, Chapter 2.",
  },
  {
    id: "3",
    kind: "core",
    title: "Lesson 3",
    description: "Core vocab and expressions, Chapter 3.",
  },
  {
    id: "100",
    kind: "kana",
    title: "Hiragana basics",
    description: "Master the basic hiragana characters from あ to ん.",
  },
  {
    id: "101",
    kind: "kana",
    title: "Katakana basics",
    description: "Master the basic katakana characters from ア to ン.",
  },
];

export function getLessonIds(): string[] {
  return getCoreLessons().map((meta) => meta.id);
}

export function getCoreLessons(): LessonMeta[] {
  return lessonMeta.filter((meta) => meta.kind === "core");
}

export function getKanaLessons(): LessonMeta[] {
  return lessonMeta.filter((meta) => meta.kind === "kana");
}

export function getLessonMetaById(id: string): LessonMeta | undefined {
  return lessonMeta.find((meta) => meta.id === id);
}

export function getItemsForLesson(lessonId: string): StudyItem[] {
  return lessons[lessonId] ?? [];
}

export function getAllItems(): StudyItem[] {
  return Object.values(lessons).flat();
}


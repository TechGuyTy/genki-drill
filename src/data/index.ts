import type { StudyItem } from "../types/study";
import { lesson1 } from "./lessons/lesson1";
import { lesson2 } from "./lessons/lesson2";
import { lesson3 } from "./lessons/lesson3";

const lessons: Record<string, StudyItem[]> = {
  "1": lesson1,
  "2": lesson2,
  "3": lesson3,
};

export function getLessonIds(): string[] {
  return Object.keys(lessons).sort((a, b) => Number(a) - Number(b));
}

export function getItemsForLesson(lessonId: string): StudyItem[] {
  return lessons[lessonId] ?? [];
}

export function getAllItems(): StudyItem[] {
  return Object.values(lessons).flat();
}

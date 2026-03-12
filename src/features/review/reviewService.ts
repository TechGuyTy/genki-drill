import { db } from "../../db/db";
import type { StudyItem } from "../../types/study";

export async function addIncorrectItemToReview(itemId: string): Promise<void> {
  const existing = await db.reviewQueue.get(itemId);
  const now = Date.now();

  if (!existing) {
    await db.reviewQueue.put({
      itemId,
      priority: 1,
      addedAt: now,
      source: "incorrect",
    });
    return;
  }

  await db.reviewQueue.put({
    ...existing,
    priority: existing.priority + 1,
    addedAt: now,
  });
}

export async function getReviewItems(allItems: StudyItem[]): Promise<StudyItem[]> {
  const queue = await db.reviewQueue.orderBy("priority").reverse().toArray();
  const itemMap = new Map(allItems.map((item) => [item.id, item]));

  return queue
    .map((entry) => itemMap.get(entry.itemId))
    .filter((item): item is StudyItem => Boolean(item));
}
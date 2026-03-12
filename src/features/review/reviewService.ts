import { db } from "../../db/db";
import { getAllItems } from "../../data";
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

  const missingIds: string[] = [];
  const items: StudyItem[] = [];

  for (const entry of queue) {
    const item = itemMap.get(entry.itemId);
    if (item) {
      items.push(item);
    } else {
      missingIds.push(entry.itemId);
    }
  }

  if (missingIds.length > 0) {
    await db.reviewQueue.bulkDelete(missingIds);
  }

  return items;
}

export async function removeFromReviewQueue(itemId: string): Promise<void> {
  await db.reviewQueue.delete(itemId);
}

export async function getReviewCount(): Promise<number> {
  const items = await getReviewItems(getAllItems());
  return items.length;
}
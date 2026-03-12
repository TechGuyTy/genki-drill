import { db } from "../../db/db";

export async function recordAttempt(itemId: string, wasCorrect: boolean): Promise<void> {
  const existing = await db.itemProgress.get(itemId);
  const now = Date.now();

  if (!existing) {
    await db.itemProgress.put({
      itemId,
      attempts: 1,
      correct: wasCorrect ? 1 : 0,
      incorrect: wasCorrect ? 0 : 1,
      lastSeenAt: now,
      lastCorrectAt: wasCorrect ? now : undefined,
      lastIncorrectAt: wasCorrect ? undefined : now,
      hard: !wasCorrect,
    });
    return;
  }

  await db.itemProgress.put({
    ...existing,
    attempts: existing.attempts + 1,
    correct: existing.correct + (wasCorrect ? 1 : 0),
    incorrect: existing.incorrect + (wasCorrect ? 0 : 1),
    lastSeenAt: now,
    lastCorrectAt: wasCorrect ? now : existing.lastCorrectAt,
    lastIncorrectAt: wasCorrect ? existing.lastIncorrectAt : now,
    hard: !wasCorrect || existing.hard,
  });
}
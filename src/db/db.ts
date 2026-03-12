import Dexie, { type Table } from "dexie";
import type { ItemProgress, ReviewQueueItem, SessionRecord } from "../types/study";

class GenkiDrillDB extends Dexie {
  itemProgress!: Table<ItemProgress, string>;
  reviewQueue!: Table<ReviewQueueItem, string>;
  sessions!: Table<SessionRecord, number>;

  constructor() {
    super("GenkiDrillDB");

    this.version(1).stores({
      itemProgress: "itemId, attempts, correct, incorrect, lastSeenAt, hard",
      reviewQueue: "itemId, priority, addedAt, source",
      sessions: "++id, startedAt, endedAt, lesson, mode",
    });
  }
}

export const db = new GenkiDrillDB();
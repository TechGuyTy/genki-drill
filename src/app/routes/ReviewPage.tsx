import { useEffect, useState } from "react";
import { lesson1 } from "../../data/lessons/lesson1";
import { getReviewItems } from "../../features/review/reviewService";
import type { StudyItem } from "../../types/study";

export function ReviewPage() {
  const [items, setItems] = useState<StudyItem[]>([]);

  useEffect(() => {
    getReviewItems(lesson1).then(setItems);
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Review Missed Items</h1>

      {items.length === 0 ? (
        <p className="text-gray-600">No missed items yet.</p>
      ) : (
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id} className="rounded-lg border p-3">
              <div className="font-semibold">{item.promptJa}</div>
              <div className="text-sm text-gray-600">{item.kana}</div>
              <div>{item.answerEn}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
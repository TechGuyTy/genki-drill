import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllItems } from "../../data";
import { getReviewItems } from "../../features/review/reviewService";
import type { StudyItem } from "../../types/study";

export function ReviewPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState<StudyItem[]>([]);

  useEffect(() => {
    getReviewItems(getAllItems()).then(setItems);
  }, []);

  return (
    <div className="space-y-4">
      <button type="button" className="text-sm text-gray-600 underline" onClick={() => navigate("/")}>
        ← Back to home
      </button>
      <h1 className="text-3xl font-bold">Review Missed Items</h1>

      {items.length === 0 ? (
        <p className="text-gray-600">No missed items yet.</p>
      ) : (
        <>
          <p className="text-gray-600">
            {items.length} item{items.length !== 1 ? "s" : ""} to review. Study them below or start a session.
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              className="rounded-lg border px-4 py-2"
              onClick={() => navigate("/study/review/flashcard")}
            >
              Study with flashcards
            </button>
            <button
              className="rounded-lg border px-4 py-2"
              onClick={() => navigate("/study/review/multiple-choice")}
            >
              Study with multiple choice
            </button>
          </div>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.id} className="rounded-lg border p-3">
                <span className="mb-2 inline-block rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                  Lesson {item.lesson}
                </span>
                <div className="font-semibold">{item.promptJa}</div>
                <div className="text-sm text-gray-600">{item.kana}</div>
                <div>{item.answerEn}</div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
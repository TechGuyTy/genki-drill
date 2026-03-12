type Props = {
  title: string;
  description: string;
  onOpen: () => void;
};

export function LessonCard({ title, description, onOpen }: Props) {
  return (
    <div className="rounded-xl border p-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mb-4 text-sm text-gray-600">{description}</p>
      <button className="rounded-lg border px-4 py-2" onClick={onOpen}>
        Open
      </button>
    </div>
  );
}
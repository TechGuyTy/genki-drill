import { hiraganaKanaItems } from "../../data/kana/hiragana";
import { katakanaKanaItems } from "../../data/kana/katakana";
import { Card, CardBody } from "./ui/Card";
import { MutedText } from "./ui/Typography";

type KanaScript = "hiragana" | "katakana";

type Props = {
  script: KanaScript;
};

const VOWEL_HEADERS = ["a", "i", "u", "e", "o"] as const;

const ROW_LAYOUT: (string | null)[][] = [
  // a,  i,  u,  e,  o
  ["a", "i", "u", "e", "o"],
  ["ka", "ki", "ku", "ke", "ko"],
  ["sa", "shi", "su", "se", "so"],
  ["ta", "chi", "tsu", "te", "to"],
  ["na", "ni", "nu", "ne", "no"],
  ["ha", "hi", "fu", "he", "ho"],
  ["ma", "mi", "mu", "me", "mo"],
  ["ya", null, "yu", null, "yo"],
  ["ra", "ri", "ru", "re", "ro"],
  ["wa", null, null, null, "wo"],
];

export function KanaChart({ script }: Props) {
  const items =
    script === "hiragana" ? hiraganaKanaItems : katakanaKanaItems;

  const byRomaji = new Map(items.map((item) => [item.romaji, item]));
  const nItem = byRomaji.get("n");

  return (
    <Card>
      <CardBody className="space-y-3">
        <div className="grid grid-cols-5 gap-3 text-center text-text">
          {VOWEL_HEADERS.map((header) => (
            <div key={header} className="text-xs font-medium uppercase tracking-wide text-text-muted">
              {header}
            </div>
          ))}

          {ROW_LAYOUT.map((row, rowIndex) =>
            row.map((romaji, colIndex) => {
              if (!romaji) {
                return <div key={`${rowIndex}-${colIndex}`} />;
              }

              const item = byRomaji.get(romaji);
              if (!item) {
                return <div key={`${rowIndex}-${colIndex}`} />;
              }

              return (
                <div
                  key={item.id}
                  className="rounded-md border border-subtle/70 bg-surface-soft px-2 py-3"
                >
                  <div className="text-2xl font-semibold tracking-tight">
                    {item.kana}
                  </div>
                  <MutedText className="mt-1 text-xs uppercase tracking-wide">
                    {item.romaji}
                  </MutedText>
                </div>
              );
            })
          )}
        </div>

        {nItem && (
          <div className="flex justify-center">
            <div className="rounded-md border border-subtle/70 bg-surface-soft px-4 py-3 text-center text-text">
              <div className="text-2xl font-semibold tracking-tight">
                {nItem.kana}
              </div>
              <MutedText className="mt-1 text-xs uppercase tracking-wide">
                {nItem.romaji}
              </MutedText>
            </div>
          </div>
        )}
      </CardBody>
    </Card>
  );
}


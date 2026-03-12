import type { ReactNode } from "react";

type Props = {
  title?: string;
  children: ReactNode;
  headerRight?: ReactNode;
};

export function PageShell({ title, headerRight, children }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {title && (
        <header className="flex items-baseline justify-between gap-3">
          <h1 className="font-display text-2xl md:text-[1.7rem] tracking-tight text-text">
            {title}
          </h1>
          {headerRight}
        </header>
      )}
      <main className="flex flex-col gap-4">{children}</main>
    </div>
  );
}


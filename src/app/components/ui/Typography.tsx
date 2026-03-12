import type { HTMLAttributes } from "react";
import { clsx } from "clsx";

export function PageTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={clsx(
        "font-display text-3xl md:text-[2rem] tracking-tight text-text",
        className
      )}
      {...props}
    />
  );
}

export function SectionTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={clsx(
        "font-display text-xl md:text-[1.35rem] tracking-tight text-text",
        className
      )}
      {...props}
    />
  );
}

export function MutedText({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={clsx("text-sm text-text-muted", className)} {...props} />
  );
}


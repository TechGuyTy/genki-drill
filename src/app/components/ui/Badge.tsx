import type { HTMLAttributes } from "react";
import { clsx } from "clsx";

type BadgeVariant = "neutral" | "accent";

type Props = {
  variant?: BadgeVariant;
} & HTMLAttributes<HTMLSpanElement>;

export function Badge({ variant = "neutral", className, ...props }: Props) {
  const variantClasses: Record<BadgeVariant, string> = {
    neutral:
      "bg-surface-muted text-text-muted border border-subtle/70",
    accent:
      "bg-accent-soft/20 text-accent-deep border border-accent-soft/60",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}


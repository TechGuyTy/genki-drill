import type { HTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";

type Props = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: Props) {
  return (
    <div
      className={clsx(
        "rounded-xl bg-surface shadow-softer border border-subtle/80 px-4 py-4 md:px-5 md:py-5",
        className
      )}
      {...props}
    />
  );
}

type CardSectionProps = {
  children: ReactNode;
  className?: string;
};

export function CardHeader({ children, className }: CardSectionProps) {
  return (
    <div className={clsx("mb-3 flex items-baseline justify-between gap-2", className)}>
      {children}
    </div>
  );
}

export function CardBody({ children, className }: CardSectionProps) {
  return <div className={clsx("space-y-2 text-sm text-text", className)}>{children}</div>;
}

export function CardFooter({ children, className }: CardSectionProps) {
  return (
    <div className={clsx("mt-4 flex items-center justify-end gap-2", className)}>
      {children}
    </div>
  );
}


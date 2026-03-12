import type { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type Props = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  fullWidth,
  className,
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-lg font-medium transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-[rgb(var(--color-bg))] disabled:opacity-60 disabled:cursor-not-allowed active:translate-y-[1px]";

  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      "bg-accent text-white shadow-soft border border-transparent hover:bg-accent-deep",
    secondary:
      "bg-surface text-text border border-subtle hover:bg-surface-muted shadow-softer",
    ghost:
      "bg-transparent text-text-muted border border-transparent hover:bg-surface-muted/60",
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: "text-sm px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2 gap-2",
    lg: "text-base px-5 py-2.5 gap-2.5",
  };

  return (
    <button
      className={clsx(
        base,
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {leftIcon && <span className="-ml-0.5">{leftIcon}</span>}
      <span>{props.children}</span>
      {rightIcon && <span className="-mr-0.5">{rightIcon}</span>}
    </button>
  );
}


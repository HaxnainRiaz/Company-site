import React from "react";
import { cn } from "@/lib/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "muted" | "soft-primary" | "interactive";
}

export function Card({
  children,
  className,
  variant = "default",
  ...props
}: CardProps) {
  const variantStyles = {
    default: "bg-white border-border",
    muted: "bg-surface-muted border-border",
    "soft-primary": "bg-primary-soft border-primary/20",
    interactive:
      "bg-white border-border hover:border-input-border transition-colors shadow-2xs",
  };

  return (
    <div
      className={cn(
        "rounded-[12px] border p-6 sm:p-7 text-ink",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

import React from "react";
import { cn } from "@/lib/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "neutral" | "primary" | "accent" | "success" | "danger";
}

export function Badge({
  children,
  className,
  variant = "neutral",
  ...props
}: BadgeProps) {
  const variantStyles = {
    neutral: "bg-surface-muted text-ink border-border",
    primary: "bg-primary-soft text-primary border-primary/20",
    accent: "bg-accent-soft text-accent border-accent/20",
    success: "bg-[#EBF7F0] text-success border-success/20",
    danger: "bg-[#FDF0ED] text-danger border-danger/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border leading-normal tracking-wide",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

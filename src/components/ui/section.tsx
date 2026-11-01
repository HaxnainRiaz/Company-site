import React from "react";
import { cn } from "@/lib/cn";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "canvas" | "surface" | "muted" | "soft-accent";
  spacing?: "normal" | "compact" | "spacious";
  id?: string;
  "aria-labelledby"?: string;
}

export function Section({
  children,
  className,
  variant = "canvas",
  spacing = "normal",
  id,
  "aria-labelledby": ariaLabelledBy,
  ...props
}: SectionProps) {
  const variantStyles = {
    canvas: "bg-canvas",
    surface: "bg-white border-y border-border/60",
    muted: "bg-surface-muted border-y border-border/60",
    "soft-accent": "bg-accent-soft border-y border-border/60",
  };

  const spacingStyles = {
    normal: "py-12 sm:py-16 md:py-20",
    compact: "py-8 sm:py-10 md:py-12",
    spacious: "py-16 sm:py-20 md:py-24",
  };

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn(variantStyles[variant], spacingStyles[spacing], className)}
      {...props}
    >
      {children}
    </section>
  );
}

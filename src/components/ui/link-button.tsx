import React from "react";
import Link, { type LinkProps } from "next/link";
import { cn } from "@/lib/cn";

export interface LinkButtonProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "quiet" | "danger";
  size?: "normal" | "small";
  id?: string;
  target?: string;
  rel?: string;
}

export function LinkButton({
  children,
  className,
  variant = "primary",
  size = "normal",
  ...props
}: LinkButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus cursor-pointer text-center no-underline";

  const sizeStyles = {
    normal: "min-h-[44px] px-5 py-2.5 text-[15px]",
    small: "min-h-[44px] px-3.5 py-1.5 text-sm",
  };

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary-hover active:bg-primary-hover border border-transparent shadow-xs",
    secondary:
      "bg-white text-ink border border-border hover:bg-surface-muted hover:border-input-border active:bg-primary-soft",
    quiet:
      "bg-transparent text-primary hover:bg-primary-soft active:bg-border",
    danger:
      "bg-danger text-white hover:bg-[#911C13] active:bg-[#72150E] border border-transparent",
  };

  return (
    <Link
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
}

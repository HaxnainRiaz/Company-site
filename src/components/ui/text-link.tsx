import React from "react";
import Link, { type LinkProps } from "next/link";
import { cn } from "@/lib/cn";

export interface TextLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "accent" | "muted";
  target?: string;
  rel?: string;
  id?: string;
}

export function TextLink({
  children,
  className,
  variant = "primary",
  ...props
}: TextLinkProps) {
  const variantStyles = {
    primary: "text-primary hover:text-primary-hover underline decoration-primary/40 hover:decoration-primary-hover",
    accent: "text-accent hover:text-[#8C3F28] underline decoration-accent/40 hover:decoration-[#8C3F28]",
    muted: "text-ink-muted hover:text-ink underline decoration-border hover:decoration-ink",
  };

  return (
    <Link
      className={cn(
        "font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus rounded-xs",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

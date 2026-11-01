import React from "react";
import { cn } from "@/lib/cn";

export interface ScrollRegionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  label: string;
  className?: string;
}

export function ScrollRegion({
  children,
  label,
  className,
  ...props
}: ScrollRegionProps) {
  return (
    <div
      tabIndex={0}
      role="region"
      aria-label={label}
      className={cn(
        "overflow-x-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus rounded-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

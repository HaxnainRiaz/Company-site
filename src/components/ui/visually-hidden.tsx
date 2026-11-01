import React from "react";
import { cn } from "@/lib/cn";

export interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}

export function VisuallyHidden({
  children,
  className,
  ...props
}: VisuallyHiddenProps) {
  return (
    <span
      className={cn(
        "absolute w-[1px] h-[1px] p-0 -m-[1px] overflow-hidden clip-[rect(0,0,0,0)] whitespace-nowrap border-0",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

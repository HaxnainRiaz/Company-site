import React from "react";
import { cn } from "@/lib/cn";

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  className?: string;
}

export function Divider({ className, ...props }: DividerProps) {
  return (
    <hr
      className={cn("border-t border-border my-8 w-full", className)}
      {...props}
    />
  );
}

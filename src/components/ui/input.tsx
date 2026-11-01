import React from "react";
import { cn } from "@/lib/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isInvalid?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, isInvalid, disabled, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        disabled={disabled}
        aria-invalid={isInvalid ? "true" : undefined}
        className={cn(
          "w-full min-h-[44px] px-3.5 py-2 rounded-lg bg-white text-ink text-[15px] border placeholder:text-ink-muted/60 transition-colors",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
          "disabled:bg-surface-muted disabled:opacity-60 disabled:cursor-not-allowed",
          isInvalid
            ? "border-danger focus-visible:outline-danger"
            : "border-input-border hover:border-ink",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

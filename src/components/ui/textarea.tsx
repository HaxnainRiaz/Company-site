import React from "react";
import { cn } from "@/lib/cn";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isInvalid?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, isInvalid, disabled, rows = 4, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        disabled={disabled}
        aria-invalid={isInvalid ? "true" : undefined}
        className={cn(
          "w-full px-3.5 py-2.5 rounded-lg bg-white text-ink text-[15px] border placeholder:text-ink-muted/60 transition-colors resize-y leading-relaxed",
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

Textarea.displayName = "Textarea";

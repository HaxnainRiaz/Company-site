import React from "react";
import { cn } from "@/lib/cn";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  hint?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, id, label, hint, disabled, ...props }, ref) => {
    return (
      <div className={cn("flex items-start gap-3", className)}>
        <input
          ref={ref}
          type="checkbox"
          id={id}
          disabled={disabled}
          className={cn(
            "mt-1 w-4 h-4 rounded text-primary border-input-border focus:ring-focus focus:ring-offset-2 cursor-pointer",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
          {...props}
        />
        <label htmlFor={id} className="text-sm text-ink cursor-pointer select-none leading-snug">
          <div>{label}</div>
          {hint && <p className="text-xs text-ink-muted mt-0.5">{hint}</p>}
        </label>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

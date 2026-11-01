import React from "react";
import { cn } from "@/lib/cn";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: SelectOption[];
  isInvalid?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, isInvalid, disabled, options, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        disabled={disabled}
        aria-invalid={isInvalid ? "true" : undefined}
        className={cn(
          "w-full min-h-[44px] px-3.5 py-2 rounded-lg bg-white text-ink text-[15px] border transition-colors cursor-pointer",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
          "disabled:bg-surface-muted disabled:opacity-60 disabled:cursor-not-allowed",
          isInvalid
            ? "border-danger focus-visible:outline-danger"
            : "border-input-border hover:border-ink",
          className
        )}
        {...props}
      >
        {options
          ? options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))
          : children}
      </select>
    );
  }
);

Select.displayName = "Select";

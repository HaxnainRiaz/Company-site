import React from "react";
import { cn } from "@/lib/cn";
import { FieldError } from "./field-error";

export interface FormFieldProps {
  id: string;
  label: string;
  hint?: string;
  required?: boolean;
  optionalLabel?: boolean;
  error?: string | string[];
  children: React.ReactNode;
  className?: string;
}

export function FormField({
  id,
  label,
  hint,
  required,
  optionalLabel,
  error,
  children,
  className,
}: FormFieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <div className="flex items-baseline justify-between">
        <label
          htmlFor={id}
          className="text-[14px] font-medium text-ink flex items-center gap-1"
        >
          <span>{label}</span>
          {required && (
            <span className="text-danger text-sm" aria-hidden="true">
              *
            </span>
          )}
        </label>
        {optionalLabel && !required && (
          <span className="text-xs text-ink-muted">Optional</span>
        )}
      </div>

      {hint && (
        <p id={hintId} className="text-xs text-ink-muted">
          {hint}
        </p>
      )}

      <div>{children}</div>

      <FieldError id={errorId} error={error} />
    </div>
  );
}

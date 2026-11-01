import React from "react";
import { cn } from "@/lib/cn";

export interface FieldErrorProps {
  id?: string;
  error?: string | string[];
  className?: string;
}

export function FieldError({ id, error, className }: FieldErrorProps) {
  if (!error || (Array.isArray(error) && error.length === 0)) {
    return null;
  }

  const message = Array.isArray(error) ? error.join(", ") : error;

  return (
    <p
      id={id}
      role="alert"
      className={cn("mt-1.5 text-xs font-medium text-danger flex items-center gap-1", className)}
    >
      <svg
        className="w-3.5 h-3.5 shrink-0"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
      <span>{message}</span>
    </p>
  );
}

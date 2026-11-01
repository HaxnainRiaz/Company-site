import React from "react";
import { cn } from "@/lib/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "quiet" | "danger";
  size?: "normal" | "small";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "normal",
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const sizeStyles = {
      normal: "min-h-[44px] px-5 py-2.5 text-[15px]",
      small: "min-h-[44px] px-3.5 py-1.5 text-sm",
    };

    const variantStyles = {
      primary:
        "bg-primary text-white hover:bg-primary-hover active:bg-primary-hover border border-transparent shadow-xs",
      secondary:
        "bg-white text-ink border border-border hover:bg-surface-muted hover:border-input-border active:bg-primary-soft",
      quiet:
        "bg-transparent text-primary hover:bg-primary-soft active:bg-border",
      danger:
        "bg-danger text-white hover:bg-[#911C13] active:bg-[#72150E] border border-transparent",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {isLoading ? (
          <span className="inline-flex items-center gap-2">
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
            <span>Processing...</span>
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

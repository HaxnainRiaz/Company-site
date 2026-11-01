import React from "react";
import { cn } from "@/lib/cn";

export interface StatusMessageProps {
  type: "success" | "error" | "pending" | "info";
  title?: string;
  message: React.ReactNode;
  className?: string;
}

export function StatusMessage({
  type,
  title,
  message,
  className,
}: StatusMessageProps) {
  const typeStyles = {
    success: "bg-[#EBF7F0] border-success/30 text-success",
    error: "bg-[#FDF0ED] border-danger/30 text-danger",
    pending: "bg-primary-soft border-primary/30 text-primary",
    info: "bg-surface-muted border-input-border/30 text-ink",
  };

  return (
    <div
      role={type === "error" ? "alert" : "status"}
      aria-live={type === "error" ? "assertive" : "polite"}
      className={cn("p-4 rounded-lg border text-sm leading-relaxed", typeStyles[type], className)}
    >
      {title && <div className="font-semibold mb-1">{title}</div>}
      <div>{message}</div>
    </div>
  );
}

import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/cn";

export interface DeliverablesListProps {
  deliverables: string[];
  customerInputs: string[];
  className?: string;
}

export function DeliverablesList({
  deliverables,
  customerInputs,
  className,
}: DeliverablesListProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8", className)}>
      <Card variant="default" className="border-l-4 border-l-primary">
        <div className="flex items-center gap-2 mb-4">
          <span className="p-1.5 rounded-md bg-primary-soft text-primary">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <h3 className="text-lg font-medium text-ink">Tangible Deliverables We Provide</h3>
        </div>
        <ul className="space-y-3 text-sm text-ink-muted">
          {deliverables.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card variant="muted" className="border-l-4 border-l-accent">
        <div className="flex items-center gap-2 mb-4">
          <span className="p-1.5 rounded-md bg-accent-soft text-accent">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </span>
          <h3 className="text-lg font-medium text-ink">Customer Prerequisites & Inputs</h3>
        </div>
        <ul className="space-y-3 text-sm text-ink-muted">
          {customerInputs.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="text-accent font-bold mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

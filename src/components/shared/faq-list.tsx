import React from "react";
import type { FAQ } from "@/types/content";
import { cn } from "@/lib/cn";

export interface FaqListProps {
  faqs: FAQ[];
  className?: string;
}

export function FaqList({ faqs, className }: FaqListProps) {
  return (
    <div className={cn("space-y-4 max-w-[840px]", className)}>
      {faqs.map((faq, index) => (
        <details
          key={index}
          className="group rounded-xl border border-border bg-white transition-colors open:bg-surface-muted/40"
        >
          <summary className="flex cursor-pointer items-center justify-between p-5 sm:p-6 font-medium text-[16px] sm:text-[17px] text-ink select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus rounded-xl">
            <span className="pr-4">{faq.question}</span>
            <span
              aria-hidden="true"
              className="shrink-0 text-primary transition-transform duration-200 group-open:rotate-180"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>
          </summary>
          <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-[15px] leading-relaxed text-ink-muted border-t border-border/40 pt-4">
            {faq.answer}
          </div>
        </details>
      ))}
    </div>
  );
}

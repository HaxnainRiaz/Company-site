import React from "react";
import type { ServiceIntegration } from "@/types/content";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/cn";

export interface IntegrationListProps {
  integrations: ServiceIntegration[];
  className?: string;
}

export function IntegrationList({ integrations, className }: IntegrationListProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5", className)}>
      {integrations.map((item, idx) => (
        <Card key={idx} variant="default" className="p-5">
          <div className="flex items-start gap-3">
            <span className="p-1 rounded-md bg-primary-soft text-primary mt-0.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </span>
            <div>
              <h4 className="text-base font-medium text-ink mb-1">{item.name}</h4>
              <p className="text-xs text-ink-muted leading-relaxed">
                <span className="font-medium text-ink">Prerequisite: </span>
                {item.prerequisite}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

export interface StepItem {
  step: number;
  title: string;
  output?: string;
  tangibleOutput?: string;
  summary?: string;
  reviewPoint?: string;
}

export interface ProcessStepsProps {
  steps: StepItem[];
  className?: string;
}

export function ProcessSteps({ steps, className }: ProcessStepsProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6", className)}>
      {steps.map((item) => (
        <Card key={item.step} variant="default" className="flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-soft text-primary font-semibold text-sm">
                {item.step}
              </span>
              <Badge variant="neutral">Phase 0{item.step}</Badge>
            </div>
            <h3 className="text-lg font-medium text-ink mb-2">{item.title}</h3>
            {item.summary && (
              <p className="text-sm text-ink-muted leading-relaxed mb-4">{item.summary}</p>
            )}
          </div>

          <div className="pt-4 border-t border-border/60 mt-4 space-y-2 text-xs">
            {(item.output || item.tangibleOutput) && (
              <div className="bg-surface-muted p-2.5 rounded-md">
                <span className="font-semibold text-ink block mb-0.5">Tangible Output:</span>
                <span className="text-ink-muted">{item.output || item.tangibleOutput}</span>
              </div>
            )}
            {item.reviewPoint && (
              <div className="bg-accent-soft p-2.5 rounded-md">
                <span className="font-semibold text-accent block mb-0.5">Review Milestone:</span>
                <span className="text-ink-muted">{item.reviewPoint}</span>
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}

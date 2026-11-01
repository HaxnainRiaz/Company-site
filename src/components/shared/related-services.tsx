import React from "react";
import type { RelatedServiceRef } from "@/types/content";
import { servicesMap } from "@/content/services";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { cn } from "@/lib/cn";

export interface RelatedServicesProps {
  relatedServices: RelatedServiceRef[];
  className?: string;
}

export function RelatedServices({ relatedServices, className }: RelatedServicesProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6", className)}>
      {relatedServices.map((ref) => {
        const service = servicesMap[ref.slug];
        if (!service) return null;

        return (
          <Card key={ref.slug} variant="default" className="flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-wide text-accent font-semibold mb-2">
                Complementary Capability
              </div>
              <h4 className="text-lg font-medium text-ink mb-2">{service.title}</h4>
              <p className="text-sm text-ink-muted leading-relaxed mb-4">{ref.reason}</p>
            </div>
            <div className="pt-4 border-t border-border/60">
              <LinkButton
                href={`/services/${service.slug}`}
                variant="secondary"
                size="small"
                className="w-full sm:w-auto"
              >
                Explore {service.shortTitle} →
              </LinkButton>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

import React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { homeContent } from "@/content/home";

export function EngagementSection() {
  return (
    <Section variant="canvas">
      <Container>
        <SectionHeading
          eyebrow="Commercial Models"
          title="Four descriptive ways to begin working together"
          description="We tailor engagements around clear deliverables, milestone reviews, and agreed operational handovers—whether you need a single release or ongoing engineering support."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeContent.engagementOptions.map((opt, idx) => (
            <Card key={idx} variant="default" className="flex flex-col justify-between p-6">
              <div>
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  Option 0{idx + 1}
                </div>
                <h3 className="text-lg font-medium text-ink mb-1">{opt.title}</h3>
                <div className="text-xs text-accent font-medium mb-3">{opt.tagline}</div>
                <p className="text-xs text-ink-muted leading-relaxed mb-4">
                  <strong>Best for:</strong> {opt.bestFor}
                </p>

                <div className="pt-3 border-t border-border/60 space-y-2 mb-6">
                  <span className="text-xs font-semibold text-ink block">Typical Deliverables:</span>
                  <ul className="text-xs text-ink-muted space-y-1">
                    {opt.typicalOutputs.map((out, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-primary font-bold">•</span>
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-border/60">
                <LinkButton href="/contact" variant="secondary" size="small" className="w-full">
                  Discuss This Scope →
                </LinkButton>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

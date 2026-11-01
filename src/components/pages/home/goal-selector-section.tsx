import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeContent } from "@/content/home";

export function GoalSelectorSection() {
  return (
    <Section variant="canvas">
      <Container>
        <SectionHeading
          eyebrow="Commercial Focus"
          title="Choose your primary business goal"
          description="Select what you need to solve right now. Each path connects you directly to the relevant software architecture and demonstration."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {homeContent.goals.map((goal) => (
            <Link
              key={goal.id}
              href={goal.targetHref}
              className="group flex flex-col justify-between p-6 rounded-2xl bg-white border border-border hover:border-primary hover:shadow-xs transition-all focus-visible:outline-2 focus-visible:outline-focus"
            >
              <div>
                <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-2">
                  {goal.serviceTitle}
                </span>
                <h3 className="text-lg font-medium text-ink group-hover:text-primary transition-colors mb-2">
                  {goal.label}
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed mb-6">
                  {goal.description}
                </p>
              </div>

              <div className="pt-3 border-t border-border/60 text-xs font-medium text-primary group-hover:translate-x-0.5 transition-transform flex items-center justify-between">
                <span>Explore Solution</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

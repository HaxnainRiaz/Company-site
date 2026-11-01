import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { EnquiryCta } from "@/components/shared/enquiry-cta";
import { allSolutions } from "@/content/solutions";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Industry Solutions & Workflows",
  description:
    "Tailored software, inventory, and automation workflows engineered for Retail & Pharmacy, Clinics & Appointments, E-commerce Brands, and Professional Services.",
  path: "/solutions",
});

export default function SolutionsDirectoryPage() {
  return (
    <>
      <div className="pt-12 pb-14 bg-canvas border-b border-border/60">
        <Container>
          <div className="max-w-[760px]">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-2">
              Industry Workflows
            </span>
            <h1 className="text-[32px] sm:text-[38px] md:text-[42px] leading-[1.18] font-medium text-ink mb-4">
              Integrated operational systems for four core business sectors.
            </h1>
            <p className="text-[17px] sm:text-[18px] text-ink-muted leading-[1.65]">
              Every industry has distinct operational bottlenecks. Rather than forcing generic software templates, we design workflows specifically for retail counters, appointment clinics, online brands, and service practices.
            </p>
          </div>
        </Container>
      </div>

      <Section variant="surface">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allSolutions.map((sol) => (
              <Card key={sol.slug} variant="default" className="flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-2">
                    Industry Architecture
                  </span>
                  <h2 className="text-2xl font-medium text-ink mb-3">{sol.title}</h2>
                  <p className="text-sm text-ink-muted leading-relaxed mb-6">{sol.summary}</p>

                  <div className="bg-surface-muted p-4 rounded-xl text-xs space-y-2 mb-6">
                    <span className="font-semibold text-ink block">Primary Bottlenecks Solved:</span>
                    <ul className="space-y-1 text-ink-muted">
                      {sol.problems.map((p, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-accent font-bold">•</span>
                          <span>{p.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <LinkButton href={`/solutions/${sol.slug}`} variant="primary" size="small" className="w-full sm:w-auto">
                    Inspect Solution Workflow →
                  </LinkButton>
                  <Link
                    href={`/demos/${sol.demoSlug}`}
                    className="text-xs font-medium text-primary hover:underline"
                  >
                    Launch Relevant Demo
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <EnquiryCta
            headline="Operating in a specialized industry?"
            copy="Tell us about your inventory, customer inquiry volume, and operational systems. We will evaluate technical feasibility and recommend a clear roadmap."
            ctaText="Discuss Your Industry Workflow"
            sourceContext="solutions-directory"
          />
        </Container>
      </Section>
    </>
  );
}

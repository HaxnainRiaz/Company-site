import React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { EnquiryCta } from "@/components/shared/enquiry-cta";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Pricing & Commercial Engagements",
  description:
    "Transparent commercial frameworks: fixed-scope milestone projects, monthly retainers, focused pilots, and clear separation of external infrastructure fees.",
  path: "/pricing",
});

const PRICING_MODELS = [
  {
    title: "Fixed-Scope Milestone Project",
    eyebrow: "Best for Defined Builds",
    description:
      "A complete end-to-end software or website build with a clearly defined feature specification and agreed completion date.",
    fit: "Companies launching a new website, deploying a custom retail POS setup, or migrating an e-commerce catalog.",
    deliverables: [
      "Fixed project investment broken into 3-4 milestone payments",
      "Explicit statement of work with deliverables and exclusions",
      "30-day post-launch warranty for bug fixes",
      "Full source code and account ownership handover",
    ],
    ctaText: "Request Fixed-Scope Quote",
  },
  {
    title: "Phased Custom Development",
    eyebrow: "Best for Scaled Systems",
    description:
      "Staged agile development breaking complex platforms into focused, high-impact releases (MVP first, followed by enhancements).",
    fit: "Startups or established enterprises building custom operational portals, internal tools, or cross-platform mobile apps.",
    deliverables: [
      "Sprint-based milestone schedules with bi-weekly demos",
      "Granular feature prioritization based on user testing",
      "Architectural documentation and schema evolution",
      "Flexible roadmap adjustments between phases",
    ],
    ctaText: "Plan Phased Architecture",
  },
  {
    title: "Monthly Optimization Retainer",
    eyebrow: "Best for Ongoing Growth",
    description:
      "A dedicated monthly capacity commitment covering technical maintenance, SEO enhancements, workflow updates, and monitoring.",
    fit: "Businesses with active e-commerce stores, frequent seasonal campaigns, or mission-critical automation webhooks.",
    deliverables: [
      "Guaranteed senior engineering hours each month",
      "Continuous framework security updates and dependency upgrades",
      "Integration error monitoring and rapid bug resolution",
      "Monthly performance and analytics review meeting",
    ],
    ctaText: "Discuss Monthly Retainer",
  },
  {
    title: "Focused Pilot / Proof of Concept",
    eyebrow: "Best for Feasibility Validation",
    description:
      "A rapid, low-risk technical proof-of-concept proving the viability of a complex integration before broad operational commitment.",
    fit: "Teams evaluating AI voice reception, complex legacy database sync, or custom hardware barcode integration.",
    deliverables: [
      "Working prototype tested with real sample data",
      "Technical risk assessment and API compatibility report",
      "Clear go/no-go recommendation for full rollout",
      "Credited toward the full project if you proceed",
    ],
    ctaText: "Request Pilot Feasibility Study",
  },
];

const SCOPE_FACTORS = [
  {
    factor: "1. Screen Count & Workflow Depth",
    description: "The number of unique user journeys, forms, dashboards, and role-based views required.",
  },
  {
    factor: "2. Legacy Data Migration Volume",
    description: "The volume, format cleanliness, and complexity of existing spreadsheets or databases being imported.",
  },
  {
    factor: "3. Third-Party Integrations",
    description: "Connecting custom hardware, courier APIs, payment switches, or proprietary ERP systems.",
  },
  {
    factor: "4. Deployment Architecture",
    description: "Self-hosted high-security database infrastructure vs standard managed cloud platforms.",
  },
];

export default function PricingPage() {
  return (
    <>
      <div className="pt-12 pb-14 bg-canvas border-b border-border/60">
        <Container>
          <div className="max-w-[760px]">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-2">
              Commercial Clarity
            </span>
            <h1 className="text-[32px] sm:text-[38px] md:text-[42px] leading-[1.18] font-medium text-ink mb-4">
              Transparent, deliverable-driven investment models.
            </h1>
            <p className="text-[17px] sm:text-[18px] text-ink-muted leading-[1.65]">
              We do not fabricate artificial &quot;starting from&quot; prices, fake strikethrough discounts, or false scarcity timers. We scope projects based on defined technical deliverables and realistic engineering hours.
            </p>
          </div>
        </Container>
      </div>

      {/* Pricing Models */}
      <Section variant="surface">
        <Container>
          <SectionHeading
            eyebrow="Engagement Options"
            title="Choose the right engagement structure for your project"
            description="Every model emphasizes predictable milestone deliveries, complete ownership, and clear scope boundaries."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICING_MODELS.map((model, idx) => (
              <Card key={idx} variant="default" className="flex flex-col justify-between p-6">
                <div>
                  <Badge variant="primary" className="mb-2">
                    {model.eyebrow}
                  </Badge>
                  <h3 className="text-xl font-medium text-ink mb-2">{model.title}</h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
                    {model.description}
                  </p>

                  <div className="p-3 bg-surface-muted rounded-lg text-xs text-ink mb-4">
                    <strong>Ideal Fit:</strong> {model.fit}
                  </div>

                  <div className="space-y-1.5 text-xs text-ink-muted mb-6">
                    <span className="font-semibold text-ink block mb-1">Key Features:</span>
                    {model.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <span className="text-primary font-bold">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-border/60">
                  <LinkButton href="/contact" variant="secondary" size="small" className="w-full">
                    {model.ctaText} →
                  </LinkButton>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* How Quotes Are Produced & Cost Drivers */}
      <Section variant="canvas">
        <Container>
          <SectionHeading
            eyebrow="How Cost Is Determined"
            title="The four technical factors driving project scope"
            description="We evaluate these four concrete drivers during our initial discovery conversation to produce a fixed-scope milestone proposal."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[880px]">
            {SCOPE_FACTORS.map((factor, idx) => (
              <Card key={idx} variant="default" className="p-5">
                <h4 className="text-base font-semibold text-ink mb-1.5">{factor.factor}</h4>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  {factor.description}
                </p>
              </Card>
            ))}
          </div>

          {/* External Third-Party Costs Notice */}
          <div className="mt-8 p-6 bg-accent-soft border border-accent/20 rounded-2xl max-w-[880px] text-xs text-accent space-y-2">
            <span className="font-bold text-sm block">Separation of Third-Party External Costs</span>
            <p className="leading-relaxed">
              To ensure transparency, external third-party software subscriptions (e.g. domain registration, cloud hosting on AWS/Vercel, Twilio telephony charges, Meta WhatsApp API fees, payment gateway processing fees) are billed directly to your corporate credit card by those providers at cost. We never mark up third-party fees.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <EnquiryCta
            headline="Request a detailed milestone quote"
            copy="Tell us about your project requirements and target timeline. We will review your scope and provide a fixed proposal within one business day."
            ctaText="Request a Milestone Proposal"
            sourceContext="pricing-page"
          />
        </Container>
      </Section>
    </>
  );
}

import React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EnquiryCta } from "@/components/shared/enquiry-cta";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "How We Work — Delivery Methodology",
  description:
    "Our predictable six-stage delivery process covering discovery, fixed scoping, design, engineering, validation, and documented operational handover.",
  path: "/how-we-work",
});

const METHODOLOGY_STAGES = [
  {
    stage: 1,
    title: "Discovery & Operational Fit",
    input: "Your business goals, current bottlenecks, and software tool inventory.",
    output: "Technical feasibility assessment and recommended engagement model.",
    description:
      "We begin by understanding how your team actually operates today. We inspect your existing software tools, data formats, and team responsibilities to verify whether our capabilities represent the right technical fit before taking a deposit.",
  },
  {
    stage: 2,
    title: "Scope, Deliverables & Exclusions",
    input: "Prioritised features, API access permissions, and required release dates.",
    output: "Fixed-scope Statement of Work (SOW) with explicit deliverables & milestone fees.",
    description:
      "We define exactly what is included and what is explicitly out of scope. We outline external dependencies, account prerequisites, and delivery milestones. You receive fixed cost commitments rather than unpredictable hourly billing.",
  },
  {
    stage: 3,
    title: "UX Journeys & Workflow Blueprint",
    input: "Brand visual assets, approved service copy, and stakeholder feedback.",
    output: "Clickable wireframes, schema models, and interactive component tokens.",
    description:
      "Before writing production code, we design the user journeys, screen flows, and database schemas. You review and approve the exact interface layout, mobile wrapping, and permission levels.",
  },
  {
    stage: 4,
    title: "Engineering Increments & Sandbox Testing",
    input: "Timely milestone feedback and API testing credentials.",
    output: "Functional staging build updated continuously on private preview URLs.",
    description:
      "We build in fast, demonstrable increments with full TypeScript type safety and semantic HTML. You can test form submissions, database queries, and dashboard filters in an isolated staging environment.",
  },
  {
    stage: 5,
    title: "Validation, Edge Cases & Acceptance Fixes",
    input: "Staff user testing and edge-case scenario validation.",
    output: "Comprehensive QA verification report and signed acceptance checklist.",
    description:
      "We test boundary conditions: malformed inputs, slow network connections, peripheral hardware handshakes, and screen reader accessibility. Issues discovered during validation are resolved under our fixed-scope warranty.",
  },
  {
    stage: 6,
    title: "Documented Handover & Training",
    input: "Designated internal operational lead and staff attendees.",
    output: "Transferred source repositories, admin runbooks, and staff training session.",
    description:
      "We transfer all Git repositories, hosting setups, and API accounts directly to your company. We conduct hands-on training showing your team how to manage daily records and update content independently.",
  },
];

const COMMERCIAL_POLICIES = [
  {
    title: "Handling Change Requests",
    description:
      "If new requirements emerge during development, we do not ignore them or let scope silently balloon. We document the request, assess timeline and cost impacts, and present a separate mini-scope so you decide whether to incorporate it immediately or defer to Version 2.",
  },
  {
    title: "Third-Party Accounts & Licensing",
    description:
      "All third-party services (hosting, domains, Resend, Twilio, payment gateways) are created directly inside your company's own accounts. You retain direct ownership and control over billing at all times.",
  },
  {
    title: "Custom Code vs. Licensed Systems",
    description:
      "You own 100% of all custom code written for your application upon milestone settlement. Where third-party open-source libraries or platforms are used, their standard open-source licenses are documented and retained.",
  },
  {
    title: "Structured Milestone Payments",
    description:
      "Projects are structured around tangible delivery milestones (e.g. 30% kickoff / 40% functional staging / 30% final handover and acceptance). You never pay 100% upfront before seeing inspectable work.",
  },
  {
    title: "Post-Launch Warranty & Support Coverage",
    description:
      "Every project includes a 30-day post-launch warranty covering any bugs or deviations from the agreed specification. Following that period, flexible monthly maintenance retainers are available for ongoing security and feature additions.",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      <div className="pt-12 pb-14 bg-canvas border-b border-border/60">
        <Container>
          <div className="max-w-[760px]">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-2">
              Engineering Governance
            </span>
            <h1 className="text-[32px] sm:text-[38px] md:text-[42px] leading-[1.18] font-medium text-ink mb-4">
              Predictable, disciplined delivery from discovery to handover.
            </h1>
            <p className="text-[17px] sm:text-[18px] text-ink-muted leading-[1.65]">
              Great software requires rigorous operational discipline. Review our six delivery phases and formal commercial working policies below.
            </p>
          </div>
        </Container>
      </div>

      {/* Six Delivery Phases */}
      <Section variant="surface">
        <Container>
          <SectionHeading
            eyebrow="Delivery Roadmap"
            title="Our six-phase engineering lifecycle"
            description="Every phase produces tangible, inspectable outputs and includes an explicit stakeholder review milestone."
          />

          <div className="space-y-6 max-w-[880px]">
            {METHODOLOGY_STAGES.map((item) => (
              <div
                key={item.stage}
                className="p-6 rounded-2xl border border-border bg-white space-y-4 shadow-2xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary-soft text-primary font-semibold text-sm flex items-center justify-center">
                      0{item.stage}
                    </span>
                    <h3 className="text-lg font-medium text-ink">{item.title}</h3>
                  </div>
                  <Badge variant="neutral">Milestone Phase</Badge>
                </div>

                <p className="text-sm text-ink-muted leading-relaxed">{item.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-3 bg-surface-muted rounded-lg">
                    <span className="font-semibold text-ink block mb-0.5">Required Inputs:</span>
                    <span className="text-ink-muted">{item.input}</span>
                  </div>
                  <div className="p-3 bg-primary-soft rounded-lg">
                    <span className="font-semibold text-primary block mb-0.5">Tangible Output:</span>
                    <span className="text-ink">{item.output}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Commercial Terms & Governance */}
      <Section variant="canvas">
        <Container>
          <SectionHeading
            eyebrow="Commercial Principles"
            title="Policies governing changes, ownership, and support"
            description="Clear expectations established before project commencement prevent misunderstandings and protect your budget."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMERCIAL_POLICIES.map((policy, idx) => (
              <Card key={idx} variant="default" className="p-6">
                <span className="w-7 h-7 rounded-full bg-surface-muted text-ink text-xs font-semibold flex items-center justify-center mb-3">
                  0{idx + 1}
                </span>
                <h4 className="text-base font-medium text-ink mb-2">{policy.title}</h4>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  {policy.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <EnquiryCta
            headline="Ready to kick off Phase 01 Discovery?"
            copy="Tell us about your project goals and operational challenges. We will prepare an initial assessment within one business day."
            ctaText="Schedule Phase 01 Discovery"
            sourceContext="how-we-work-page"
          />
        </Container>
      </Section>
    </>
  );
}

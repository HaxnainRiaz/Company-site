import React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { siteConfig } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Book a Discovery Call",
  description:
    "Schedule a 25-minute discovery consultation with our senior engineering team to evaluate project feasibility and milestone planning.",
  path: "/book-a-call",
});

export default function BookACallPage() {
  return (
    <>
      <div className="pt-12 pb-14 bg-canvas border-b border-border/60">
        <Container>
          <div className="max-w-[760px]">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-2">
              Discovery Consultation
            </span>
            <h1 className="text-[32px] sm:text-[38px] md:text-[42px] leading-[1.18] font-medium text-ink mb-4">
              Schedule an architecture &amp; scoping call.
            </h1>
            <p className="text-[17px] sm:text-[18px] text-ink-muted leading-[1.65]">
              A focused, 25-minute consultation with senior engineers to discuss your technical bottlenecks, examine feasibility, and map out delivery milestones.
            </p>
          </div>
        </Container>
      </div>

      <Section variant="surface">
        <Container size="narrow">
          <Card variant="default" className="p-8 sm:p-10 text-center space-y-6">
            <div>
              <Badge variant="primary" className="mb-3">
                Consultation Arrangement
              </Badge>
              <h2 className="text-2xl font-medium text-ink">
                Request Your Discovery Consultation
              </h2>
            </div>

            {siteConfig.schedulingUrl ? (
              <div className="space-y-4">
                <p className="text-sm text-ink-muted">
                  Click below to open our live scheduling calendar and select your preferred time zone and meeting slot.
                </p>
                <LinkButton
                  href={siteConfig.schedulingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="normal"
                >
                  Open External Booking Calendar ↗
                </LinkButton>
              </div>
            ) : (
              <div className="space-y-4 text-xs sm:text-sm text-ink-muted leading-relaxed max-w-md mx-auto">
                <div className="p-4 bg-surface-muted rounded-xl border border-border text-left space-y-2">
                  <span className="font-semibold text-ink block">
                    Direct Calendar Integration Status:
                  </span>
                  <p>
                    Third-party automated calendar integration (Cal.com / Calendly) is currently awaiting official owner account credentials.
                  </p>
                  <p className="text-primary font-medium">
                    To schedule a call, please submit your contact details and availability preferences through our project intake form.
                  </p>
                </div>

                <div className="pt-2">
                  <LinkButton
                    href="/contact?service=discovery-call"
                    variant="primary"
                    size="normal"
                    className="w-full"
                  >
                    Go to Discovery Request Form →
                  </LinkButton>
                </div>
              </div>
            )}

            <div className="pt-6 border-t border-border/60 text-xs text-ink-muted text-left space-y-2">
              <span className="font-semibold text-ink block">What to expect on this call:</span>
              <p>• Zero high-pressure sales tactics or pitch decks.</p>
              <p>• Concrete review of your software stack, database, or retail counter flow.</p>
              <p>• Clear determination of whether your requirements align with our fixed-milestone model.</p>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}

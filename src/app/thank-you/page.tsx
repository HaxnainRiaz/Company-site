import React, { Suspense } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enquiry Received",
  description: "Confirmation of your project enquiry submission.",
  robots: {
    index: false,
    follow: false,
  },
};

function ThankYouContent({
  searchParams,
}: {
  searchParams: Promise<{ receipt?: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-sm text-ink-muted">
          Verifying receipt details...
        </div>
      }
    >
      <AsyncReceiptDisplay searchParams={searchParams} />
    </Suspense>
  );
}

async function AsyncReceiptDisplay({
  searchParams,
}: {
  searchParams: Promise<{ receipt?: string }>;
}) {
  const { receipt } = await searchParams;

  return (
    <Container size="narrow">
      <Card variant="default" className="p-8 sm:p-10 text-center space-y-6">
        {receipt ? (
          <>
            <div className="w-12 h-12 rounded-full bg-[#EBF7F0] text-success flex items-center justify-center mx-auto">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold text-success uppercase tracking-wider block">
                Submission Confirmed
              </span>
              <h1 className="text-2xl sm:text-3xl font-medium text-ink">
                Thank you. Your enquiry has been received.
              </h1>
              <p className="text-sm text-ink-muted max-w-md mx-auto leading-relaxed">
                A senior engineer has been notified and will evaluate your project scope. We will respond within one business day.
              </p>
            </div>

            <div className="p-4 bg-surface-muted rounded-xl border border-border max-w-md mx-auto text-xs text-left space-y-1">
              <span className="text-ink-muted block">Your Permanent Reference Receipt:</span>
              <div className="font-mono text-sm font-semibold text-primary">
                {receipt}
              </div>
              <p className="text-[11px] text-ink-muted pt-1">
                Please retain this receipt ID for reference when following up on your project submission.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="w-12 h-12 rounded-full bg-surface-muted text-ink-muted flex items-center justify-center mx-auto">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl font-medium text-ink">
                Direct Page Navigation
              </h1>
              <p className="text-sm text-ink-muted max-w-md mx-auto leading-relaxed">
                You have arrived at the confirmation screen directly without an active form submission. If you would like to discuss a project, please use our project intake form.
              </p>
            </div>

            <div>
              <LinkButton href="/contact" variant="primary" size="normal">
                Go to Project Enquiry Form →
              </LinkButton>
            </div>
          </>
        )}

        <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-center gap-4">
          <LinkButton href="/" variant="secondary" size="small">
            Return to Homepage
          </LinkButton>
          <LinkButton href="/demos" variant="quiet" size="small">
            Explore Interactive Demos
          </LinkButton>
        </div>
      </Card>
    </Container>
  );
}

export default function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ receipt?: string }>;
}) {
  return (
    <Section variant="canvas" className="py-16 sm:py-24">
      <ThankYouContent searchParams={searchParams} />
    </Section>
  );
}

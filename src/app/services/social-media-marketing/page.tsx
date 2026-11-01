import React from "react";
import { ServicePageShell } from "@/components/shared/service-page-shell";
import { socialMediaMarketing } from "@/content/services/social-media-marketing";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: socialMediaMarketing.title,
  description: socialMediaMarketing.intro,
  path: `/services/${socialMediaMarketing.slug}`,
});

export default function SocialMediaMarketingPage() {
  const distinctVisual = (
    <Card variant="default" className="p-6 sm:p-8 max-w-[960px] mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-border gap-2 mb-6">
        <div>
          <Badge variant="primary" className="mb-1">Campaign Strategy</Badge>
          <h4 className="text-lg font-medium text-ink">
            Editorial Content Planning &amp; Commercial Enquiry Routing
          </h4>
        </div>
        <span className="text-xs font-mono text-ink-muted bg-surface-muted px-2.5 py-1 rounded">
          Sample Editorial Board
        </span>
      </div>

      <div className="p-3 bg-surface-muted rounded-lg text-xs text-ink-muted mb-6">
        <strong>Strategic Notice:</strong> Advertising spend is paid directly by the client to advertising networks (Meta, LinkedIn, Google). We do not markup ad spend, invent arbitrary monthly post packages, or guarantee vanity follower milestones.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
        {/* Editorial Post 1: Educational Carousel */}
        <div className="bg-canvas border border-border rounded-xl p-4 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-primary">Tuesday (Organic)</span>
              <Badge variant="neutral">Carousel</Badge>
            </div>
            <div className="font-medium text-ink">5 Expiry Traps Retail Pharmacies Face</div>
            <p className="text-ink-muted">
              Educational breakdown of batch FEFO inventory dispensing with actionable guidance for store managers.
            </p>
          </div>
          <div className="pt-3 border-t border-border/60 mt-3 text-[11px] text-ink-muted">
            <strong>Destination:</strong> Links to retail pharmacy system solution guide.
          </div>
        </div>

        {/* Editorial Post 2: Paid Campaign */}
        <div className="bg-primary-soft/50 border-2 border-primary/40 rounded-xl p-4 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-primary">Continuous (Paid Meta Ads)</span>
              <Badge variant="primary">Lead Gen</Badge>
            </div>
            <div className="font-medium text-ink">Appointment Booking Automation Demo</div>
            <p className="text-ink">
              Short video walkthrough highlighting how clinics answer after-hours patient queries without missed calls.
            </p>
          </div>
          <div className="pt-3 border-t border-primary/30 mt-3 text-[11px] font-medium text-primary">
            <strong>Destination:</strong> Targeted contact intake form with instant lead routing.
          </div>
        </div>

        {/* Editorial Post 3: Case Breakdown */}
        <div className="bg-canvas border border-border rounded-xl p-4 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-accent">Thursday (Organic)</span>
              <Badge variant="accent">Insight</Badge>
            </div>
            <div className="font-medium text-ink">Website vs. Dashboard Decision Guide</div>
            <p className="text-ink-muted">
              Pragmatic analysis helping founders prioritize public marketing speed over internal tools.
            </p>
          </div>
          <div className="pt-3 border-t border-border/60 mt-3 text-[11px] text-ink-muted">
            <strong>Destination:</strong> Links to insights article and discovery call action.
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between text-xs text-ink-muted gap-3">
        <span>Request a structured social media audit and editorial strategy review:</span>
        <LinkButton href="/contact?service=social-media-marketing" variant="primary" size="small">
          Request Social Strategy Review →
        </LinkButton>
      </div>
    </Card>
  );

  return <ServicePageShell service={socialMediaMarketing} distinctVisual={distinctVisual} />;
}

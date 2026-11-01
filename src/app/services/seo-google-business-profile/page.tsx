import React from "react";
import { ServicePageShell } from "@/components/shared/service-page-shell";
import { seoGoogleBusinessProfile } from "@/content/services/seo-google-business-profile";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: seoGoogleBusinessProfile.title,
  description: seoGoogleBusinessProfile.intro,
  path: `/services/${seoGoogleBusinessProfile.slug}`,
});

export default function SeoGoogleBusinessProfilePage() {
  const distinctVisual = (
    <Card variant="default" className="p-6 sm:p-8 max-w-[960px] mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-border gap-2 mb-6">
        <div>
          <Badge variant="primary" className="mb-1">Illustrative Audit Blueprint</Badge>
          <h4 className="text-lg font-medium text-ink">
            Annotated Local Search &amp; Technical Audit Framework
          </h4>
        </div>
        <span className="text-xs font-mono text-ink-muted bg-surface-muted px-2.5 py-1 rounded">
          Sample Diagnostic Checklist
        </span>
      </div>

      <div className="p-3 bg-accent-soft border border-accent/20 rounded-lg text-xs text-accent mb-6">
        <strong>Notice on Audit Evidence:</strong> All figures below are illustrative sample metrics demonstrating our diagnostic method. In compliance with strict anti-fabrication guidelines, no fabricated Google ranking screenshots or fake client traffic metrics are presented.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
        {/* Audit Pillar 1 */}
        <div className="bg-canvas border border-border rounded-xl p-4 space-y-3">
          <div className="font-semibold text-sm text-ink flex items-center justify-between">
            <span>1. Technical Indexation</span>
            <span className="text-success font-bold">Passed</span>
          </div>
          <p className="text-ink-muted">
            Audit verifying server response codes, mobile Core Web Vitals, canonical tags, and clean sitemap generation.
          </p>
          <div className="pt-2 border-t border-border/60 space-y-1.5 text-[11px] text-ink-muted">
            <div>• Core Web Vitals LCP target: &le; 2.5s</div>
            <div>• Zero soft 404 crawl loops</div>
            <div>• Semantic H1/H2 header nesting</div>
          </div>
        </div>

        {/* Audit Pillar 2 */}
        <div className="bg-canvas border border-border rounded-xl p-4 space-y-3">
          <div className="font-semibold text-sm text-ink flex items-center justify-between">
            <span>2. Local Google Profile (GBP)</span>
            <span className="text-accent font-bold">Needs Action</span>
          </div>
          <p className="text-ink-muted">
            Verification of physical address eligibility (formerly Google My Business), primary category setup, and service menu definitions.
          </p>
          <div className="pt-2 border-t border-border/60 space-y-1.5 text-[11px] text-ink-muted">
            <div>• Verified in-person eligibility check</div>
            <div>• NAP consistency across directories</div>
            <div>• Compliant automated review request flows</div>
          </div>
        </div>

        {/* Audit Pillar 3 */}
        <div className="bg-canvas border border-border rounded-xl p-4 space-y-3">
          <div className="font-semibold text-sm text-ink flex items-center justify-between">
            <span>3. Search Intent Architecture</span>
            <span className="text-primary font-bold">Priority Focus</span>
          </div>
          <p className="text-ink-muted">
            Mapping high-intent customer search queries directly to dedicated service guide pages that convert visitors into phone calls.
          </p>
          <div className="pt-2 border-t border-border/60 space-y-1.5 text-[11px] text-ink-muted">
            <div>• Exclusion of zero-commercial intent queries</div>
            <div>• Transparent conversion goal tracking</div>
            <div>• Continuous monthly ranking reports</div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between text-xs text-ink-muted gap-3">
        <span>Request a comprehensive search and Google Business Profile baseline review for your business:</span>
        <LinkButton href="/contact?service=seo-google-business-profile" variant="primary" size="small">
          Request Diagnostic Review →
        </LinkButton>
      </div>
    </Card>
  );

  return <ServicePageShell service={seoGoogleBusinessProfile} distinctVisual={distinctVisual} />;
}

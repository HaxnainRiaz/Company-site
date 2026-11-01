import React from "react";
import { ServicePageShell } from "@/components/shared/service-page-shell";
import { websitesAdminDashboards } from "@/content/services/websites-admin-dashboards";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: websitesAdminDashboards.title,
  description: websitesAdminDashboards.intro,
  path: `/services/${websitesAdminDashboards.slug}`,
});

export default function WebsitesAdminDashboardsPage() {
  const distinctVisual = (
    <Card variant="default" className="p-6 sm:p-8 max-w-[960px] mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-border gap-2 mb-6">
        <div>
          <Badge variant="primary" className="mb-1">Architecture Comparison</Badge>
          <h4 className="text-lg font-medium text-ink">
            Public Website vs. Admin Dashboard vs. Client Portal
          </h4>
        </div>
        <span className="text-xs font-mono text-ink-muted bg-surface-muted px-2.5 py-1 rounded">
          System Decision Matrix
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
        {/* Column 1: Marketing Website */}
        <div className="bg-canvas border border-border rounded-xl p-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="text-xs font-bold text-primary uppercase tracking-wider">
              1. Marketing Website
            </div>
            <div className="font-semibold text-sm text-ink">Customer Discovery &amp; Conversion</div>
            <p className="text-ink-muted leading-relaxed">
              Publicly accessible, sub-second static server rendering designed to answer buying questions and capture new leads.
            </p>
            <div className="space-y-1.5 pt-2 border-t border-border/60">
              <span className="font-semibold text-ink block">Primary Focus:</span>
              <p className="text-ink-muted">• High search engine crawlability</p>
              <p className="text-ink-muted">• Zero authentication friction</p>
              <p className="text-ink-muted">• Clear value proposition &amp; forms</p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-border/60 text-[11px] font-medium text-primary">
            Best for: Commercial front door
          </div>
        </div>

        {/* Column 2: Internal Admin Dashboard */}
        <div className="bg-primary-soft/50 border-2 border-primary/40 rounded-xl p-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="text-xs font-bold text-primary uppercase tracking-wider">
              2. Internal Dashboard
            </div>
            <div className="font-semibold text-sm text-ink">Operational Data &amp; Controls</div>
            <p className="text-ink leading-relaxed">
              Password-protected back-office workspace allowing staff to manage records, verify stock, and audit activity.
            </p>
            <div className="space-y-1.5 pt-2 border-t border-primary/20">
              <span className="font-semibold text-ink block">Primary Focus:</span>
              <p className="text-ink">• Role-based permissions (RBAC)</p>
              <p className="text-ink">• Multi-filter searchable data tables</p>
              <p className="text-ink">• Bulk CSV imports &amp; export tools</p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-primary/30 text-[11px] font-bold text-primary">
            Best for: Eliminating spreadsheets
          </div>
        </div>

        {/* Column 3: Client / Vendor Portal */}
        <div className="bg-canvas border border-border rounded-xl p-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="text-xs font-bold text-accent uppercase tracking-wider">
              3. Self-Service Portal
            </div>
            <div className="font-semibold text-sm text-ink">Client Account Management</div>
            <p className="text-ink-muted leading-relaxed">
              Authenticated space where verified clients can review invoices, download deliverables, and submit support tickets.
            </p>
            <div className="space-y-1.5 pt-2 border-t border-border/60">
              <span className="font-semibold text-ink block">Primary Focus:</span>
              <p className="text-ink-muted">• Secure customer session logins</p>
              <p className="text-ink-muted">• Self-service document downloads</p>
              <p className="text-ink-muted">• Direct support ticket logging</p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-border/60 text-[11px] font-medium text-accent">
            Best for: Reducing support tickets
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between text-xs text-ink-muted gap-3">
        <span>Inspect our working interactive operations dashboard with sample order filters:</span>
        <LinkButton href="/demos/admin-dashboard" variant="primary" size="small">
          Launch Operations Dashboard Demo →
        </LinkButton>
      </div>
    </Card>
  );

  return <ServicePageShell service={websitesAdminDashboards} distinctVisual={distinctVisual} />;
}

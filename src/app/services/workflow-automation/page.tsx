import React from "react";
import { ServicePageShell } from "@/components/shared/service-page-shell";
import { workflowAutomation } from "@/content/services/workflow-automation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: workflowAutomation.title,
  description: workflowAutomation.intro,
  path: `/services/${workflowAutomation.slug}`,
});

export default function WorkflowAutomationPage() {
  const distinctVisual = (
    <Card variant="default" className="p-6 sm:p-8 max-w-[960px] mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-border gap-2 mb-6">
        <div>
          <Badge variant="primary" className="mb-1">Operational Comparison</Badge>
          <h4 className="text-lg font-medium text-ink">
            Manual Team Process vs. Resilient Automated Pipeline
          </h4>
        </div>
        <span className="text-xs font-mono text-ink-muted bg-surface-muted px-2.5 py-1 rounded">
          Workflow Architecture
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start text-xs">
        {/* Before: Manual Fragmentation */}
        <div className="bg-canvas border border-border rounded-xl p-5 space-y-3">
          <div className="font-semibold text-sm text-danger flex items-center justify-between border-b border-border/60 pb-2">
            <span>Before: Fragmented Manual Routine</span>
            <span>Manual Bottleneck</span>
          </div>

          <div className="space-y-2 text-ink-muted">
            <p>1. Customer submits a website enquiry form.</p>
            <p>2. Form lands as unread email in general admin inbox (4-12 hours lag).</p>
            <p>3. Staff manually re-types name, email, and scope into shared Google Sheet.</p>
            <p>4. Staff emails sales rep to check calendar availability.</p>
            <p>5. If rep is busy or out of office, lead sits untouched over the weekend.</p>
          </div>

          <div className="mt-4 pt-3 border-t border-border/60 bg-[#FDF0ED] p-2.5 rounded text-danger">
            <strong>Operational Risk:</strong> Inbound leads wait an average of 14 hours for initial contact; data entry typos cause lost contact records.
          </div>
        </div>

        {/* After: Resilient Automation */}
        <div className="bg-primary-soft/50 border-2 border-primary/40 rounded-xl p-5 space-y-3">
          <div className="font-semibold text-sm text-primary flex items-center justify-between border-b border-primary/20 pb-2">
            <span>After: Validated Automated Chain</span>
            <span className="font-bold">Automated &amp; Audited</span>
          </div>

          <div className="space-y-2 text-ink">
            <p>1. Customer form submission triggers webhook with payload validation.</p>
            <p>2. Lead deduplication runs: checks existing CRM contact records instantly.</p>
            <p>3. Deal created in CRM; assigned account manager alerted on Slack/SMS.</p>
            <p>4. Client receives instant branded email confirmation with booking link.</p>
            <p>5. <em>Defensive Failure Trap:</em> If CRM API drops, payload is saved to retry queue and alerts human coordinator.</p>
          </div>

          <div className="mt-4 pt-3 border-t border-primary/30 bg-[#EBF7F0] p-2.5 rounded text-success">
            <strong>Operational Outcome:</strong> Response time reduced to 15 seconds; zero manual transcription; guaranteed error fallback.
          </div>
        </div>
      </div>

      {/* Assumptions-Visible Time Estimate */}
      <div className="mt-6 p-4 bg-surface-muted rounded-xl text-xs space-y-2">
        <div className="font-semibold text-ink">
          Illustrative Time Reclaim Estimate (Visible Calculation Assumptions):
        </div>
        <p className="text-ink-muted leading-relaxed">
          Formula: <code className="bg-white px-1.5 py-0.5 rounded border border-border">[Tasks per Week &times; Minutes per Task] &divide; 60</code>.
          For a team processing 60 new customer leads per week spending approximately 15 minutes per lead on manual transcription and email scheduling, automating this single pipeline frees approximately <strong>15 staff hours every week</strong> for customer service.
        </p>
        <span className="text-[11px] text-ink-muted block italic">
          *Note: This is an illustrative estimate based on stated task assumptions, not a guarantee of financial return.
        </span>
      </div>

      <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between text-xs text-ink-muted gap-3">
        <span>Map your team&apos;s repetitive workflows with our engineering team:</span>
        <LinkButton href="/contact?service=workflow-automation" variant="primary" size="small">
          Map My Workflow →
        </LinkButton>
      </div>
    </Card>
  );

  return <ServicePageShell service={workflowAutomation} distinctVisual={distinctVisual} />;
}

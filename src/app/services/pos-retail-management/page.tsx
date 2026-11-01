import React from "react";
import { ServicePageShell } from "@/components/shared/service-page-shell";
import { posRetailManagement } from "@/content/services/pos-retail-management";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: posRetailManagement.title,
  description: posRetailManagement.intro,
  path: `/services/${posRetailManagement.slug}`,
});

export default function PosRetailManagementPage() {
  const distinctVisual = (
    <Card variant="default" className="p-6 sm:p-8 max-w-[960px] mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-border gap-2 mb-6">
        <div>
          <Badge variant="primary" className="mb-1">Retail Architecture Matrix</Badge>
          <h4 className="text-lg font-medium text-ink">
            How POS &amp; Inventory Rules Adapt by Store Vertical
          </h4>
        </div>
        <span className="text-xs font-mono text-ink-muted bg-surface-muted px-2.5 py-1 rounded">
          Operational Breakdown
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
        {/* Vertical 1: Pharmacy & Healthcare */}
        <div className="bg-canvas border border-border rounded-xl p-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="text-xs font-bold text-primary uppercase tracking-wider">
              1. Pharmacy &amp; Clinic
            </div>
            <div className="font-semibold text-sm text-ink">Batch, Expiry &amp; Pack Units</div>
            <p className="text-ink-muted leading-relaxed">
              Strict First-Expiry-First-Out (FEFO) dispensing rules, multi-unit breakdown (box vs blister vs single tablet), and expiration warning thresholds.
            </p>
            <div className="space-y-1 pt-2 border-t border-border/60 text-[11px] text-ink-muted">
              <span className="font-semibold text-ink block">Core Capabilities:</span>
              <p>• Mandatory batch intake logging</p>
              <p>• Blocking expired batch sales at counter</p>
              <p>• Dosage and unit conversion calculations</p>
            </div>
          </div>
        </div>

        {/* Vertical 2: Fashion & Footwear */}
        <div className="bg-canvas border border-border rounded-xl p-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="text-xs font-bold text-primary uppercase tracking-wider">
              2. Apparel &amp; Footwear
            </div>
            <div className="font-semibold text-sm text-ink">Matrix Variant Hierarchies</div>
            <p className="text-ink-muted leading-relaxed">
              Parent-child SKU structures managing dozens of size, color, and fit permutations with thermal barcode sticker label generation.
            </p>
            <div className="space-y-1 pt-2 border-t border-border/60 text-[11px] text-ink-muted">
              <span className="font-semibold text-ink block">Core Capabilities:</span>
              <p>• Multi-attribute grid matrix billing</p>
              <p>• Seasonal discount &amp; bundle engines</p>
              <p>• Customer exchange voucher tracking</p>
            </div>
          </div>
        </div>

        {/* Vertical 3: General Retail & Grocery */}
        <div className="bg-canvas border border-border rounded-xl p-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="text-xs font-bold text-accent uppercase tracking-wider">
              3. Grocery &amp; Multi-Branch
            </div>
            <div className="font-semibold text-sm text-ink">High-Velocity Counter Checkout</div>
            <p className="text-ink-muted leading-relaxed">
              Sub-second barcode scanning, electronic scale integration, cash drawer kickouts, and inter-branch warehouse transfer manifests.
            </p>
            <div className="space-y-1 pt-2 border-t border-border/60 text-[11px] text-ink-muted">
              <span className="font-semibold text-ink block">Core Capabilities:</span>
              <p>• Sub-second scanner hotkey lookup</p>
              <p>• Offline counter billing resilience</p>
              <p>• Blind shift-end cashier reconciliation</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between text-xs text-ink-muted gap-3">
        <span>Test simulated cash sales and minor-currency integer calculations in your browser:</span>
        <LinkButton href="/demos/retail-pos" variant="primary" size="small">
          Launch Retail POS Counter Demo →
        </LinkButton>
      </div>
    </Card>
  );

  return <ServicePageShell service={posRetailManagement} distinctVisual={distinctVisual} />;
}

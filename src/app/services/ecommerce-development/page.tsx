import React from "react";
import { ServicePageShell } from "@/components/shared/service-page-shell";
import { ecommerceDevelopment } from "@/content/services/ecommerce-development";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: ecommerceDevelopment.title,
  description: ecommerceDevelopment.intro,
  path: `/services/${ecommerceDevelopment.slug}`,
});

export default function EcommerceDevelopmentPage() {
  const distinctVisual = (
    <Card variant="default" className="p-6 sm:p-8 max-w-[960px] mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-border gap-2 mb-6">
        <div>
          <Badge variant="primary" className="mb-1">Commerce Architecture</Badge>
          <h4 className="text-lg font-medium text-ink">
            Front-of-House Shopping vs. Back-of-House Operations
          </h4>
        </div>
        <span className="text-xs font-mono text-ink-muted bg-surface-muted px-2.5 py-1 rounded">
          Full Journey Map
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start text-xs">
        {/* Customer Storefront Journey */}
        <div className="bg-canvas border border-border rounded-xl p-5 space-y-3">
          <div className="font-semibold text-sm text-primary flex items-center justify-between border-b border-border/60 pb-2">
            <span>Customer Shopping Experience</span>
            <span>Front-of-House</span>
          </div>

          <div className="space-y-2 text-ink-muted">
            <p>• <strong>Instant Discovery:</strong> Fast mobile collection pages with facet filters.</p>
            <p>• <strong>Clear Variant Selection:</strong> Live stock badge per size/color combination.</p>
            <p>• <strong>One-Page Checkout:</strong> Streamlined COD or card payment without forced signup.</p>
            <p>• <strong>Order Transparency:</strong> Instant confirmation SMS and tracking link.</p>
          </div>
        </div>

        {/* Operational Warehouse Journey */}
        <div className="bg-primary-soft/50 border-2 border-primary/40 rounded-xl p-5 space-y-3">
          <div className="font-semibold text-sm text-primary flex items-center justify-between border-b border-primary/20 pb-2">
            <span>Fulfillment &amp; Logistics Execution</span>
            <span>Back-of-House</span>
          </div>

          <div className="space-y-2 text-ink">
            <p>• <strong>Inventory Lock:</strong> Stock reserved immediately to prevent overselling.</p>
            <p>• <strong>Automated Courier Booking:</strong> Trax / Leopard API generates Airway Bill (AWB).</p>
            <p>• <strong>Picking &amp; Packing:</strong> Warehouse slip with barcode verification.</p>
            <p>• <strong>Delivery Callback:</strong> Courier updates sync status to customer portal.</p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between text-xs text-ink-muted gap-3">
        <span>Test our interactive e-commerce product and preview checkout demonstration:</span>
        <LinkButton href="/demos/ecommerce-store" variant="primary" size="small">
          Launch E-commerce Demo →
        </LinkButton>
      </div>
    </Card>
  );

  return <ServicePageShell service={ecommerceDevelopment} distinctVisual={distinctVisual} />;
}

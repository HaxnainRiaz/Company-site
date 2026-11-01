import React from "react";
import { ServicePageShell } from "@/components/shared/service-page-shell";
import { mobileAppDevelopment } from "@/content/services/mobile-app-development";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: mobileAppDevelopment.title,
  description: mobileAppDevelopment.intro,
  path: `/services/${mobileAppDevelopment.slug}`,
});

export default function MobileAppDevelopmentPage() {
  const distinctVisual = (
    <Card variant="default" className="p-6 sm:p-8 max-w-[960px] mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-border gap-2 mb-6">
        <div>
          <Badge variant="primary" className="mb-1">Platform Decision Guide</Badge>
          <h4 className="text-lg font-medium text-ink">
            Native Mobile App vs. Responsive Web Application
          </h4>
        </div>
        <span className="text-xs font-mono text-ink-muted bg-surface-muted px-2.5 py-1 rounded">
          Engineering Tradeoffs
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
        {/* When Responsive Web is Better */}
        <div className="bg-canvas border border-border rounded-xl p-5 space-y-3">
          <div className="font-semibold text-sm text-primary border-b border-border/60 pb-2">
            When a Responsive Web App Is Better
          </div>
          <p className="text-ink-muted leading-relaxed">
            If your target audience visits infrequently (e.g. once every few months to check pricing or read an article), asking them to download an app introduces massive drop-off.
          </p>
          <div className="space-y-1.5 text-[11px] text-ink-muted">
            <p>• Zero download barrier; immediate Google Search indexing</p>
            <p>• Lower initial investment and instant code updates</p>
            <p>• No Apple / Google 15-30% in-app transaction fees</p>
          </div>
        </div>

        {/* When a Mobile App is Necessary */}
        <div className="bg-primary-soft/50 border-2 border-primary/40 rounded-xl p-5 space-y-3">
          <div className="font-semibold text-sm text-primary border-b border-primary/20 pb-2">
            When a Mobile App Is Strictly Justified
          </div>
          <p className="text-ink leading-relaxed">
            When your business demands repeat weekly engagement, offline data collection, push notifications, or direct hardware access (biometrics, Bluetooth, camera scanners).
          </p>
          <div className="space-y-1.5 text-[11px] text-ink">
            <p>• High-retention push notification alerts (order status, chats)</p>
            <p>• Field staff offline data collection in areas with no internet</p>
            <p>• Persistent biometric Face ID / Touch ID instant login</p>
          </div>
        </div>
      </div>

      {/* Code-Native Screen Sequence Demonstrating One Task */}
      <div className="mt-8 pt-6 border-t border-border space-y-4">
        <div className="text-xs font-semibold text-ink uppercase tracking-wider">
          Task Execution Flow: 3-Tap Mobile Service Booking
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          {/* Screen 1 */}
          <div className="bg-white border border-border rounded-xl p-4 shadow-2xs space-y-2">
            <span className="text-[10px] font-mono text-primary font-bold">SCREEN 01</span>
            <div className="font-medium text-ink">Select Service &amp; Doctor</div>
            <p className="text-[11px] text-ink-muted">
              Thumb-friendly list showing verified clinician profile, fees, and next open date.
            </p>
          </div>

          {/* Screen 2 */}
          <div className="bg-white border border-border rounded-xl p-4 shadow-2xs space-y-2">
            <span className="text-[10px] font-mono text-primary font-bold">SCREEN 02</span>
            <div className="font-medium text-ink">Time Slot Grid</div>
            <p className="text-[11px] text-ink-muted">
              Real-time available appointment slots synced with practitioner backend calendar.
            </p>
          </div>

          {/* Screen 3 */}
          <div className="bg-white border border-border rounded-xl p-4 shadow-2xs space-y-2">
            <span className="text-[10px] font-mono text-primary font-bold">SCREEN 03</span>
            <div className="font-medium text-ink">Apple / Google Pay One-Tap</div>
            <p className="text-[11px] text-ink-muted">
              Frictionless biometric authorization and calendar sync with reminder push alert.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between text-xs text-ink-muted gap-3">
        <span>Plan your mobile application release with our architecture leads:</span>
        <LinkButton href="/contact?service=mobile-app-development" variant="primary" size="small">
          Plan My App →
        </LinkButton>
      </div>
    </Card>
  );

  return <ServicePageShell service={mobileAppDevelopment} distinctVisual={distinctVisual} />;
}

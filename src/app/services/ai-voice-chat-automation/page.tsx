import React from "react";
import { ServicePageShell } from "@/components/shared/service-page-shell";
import { aiVoiceChatAutomation } from "@/content/services/ai-voice-chat-automation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: aiVoiceChatAutomation.title,
  description: aiVoiceChatAutomation.intro,
  path: `/services/${aiVoiceChatAutomation.slug}`,
});

export default function AiVoiceChatAutomationPage() {
  const distinctVisual = (
    <Card variant="default" className="p-6 sm:p-8 max-w-[880px] mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-border gap-2 mb-6">
        <div>
          <Badge variant="primary" className="mb-1">Conversational Blueprint</Badge>
          <h4 className="text-lg font-medium text-ink">
            Annotated Call &amp; Chat Routing Execution
          </h4>
        </div>
        <span className="text-xs font-mono text-ink-muted bg-surface-muted px-2.5 py-1 rounded">
          Scripted Architecture
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start text-xs">
        {/* Dialogue Stream */}
        <div className="bg-canvas border border-border rounded-xl p-4 space-y-3">
          <div className="font-semibold text-ink border-b border-border/60 pb-1.5 flex justify-between">
            <span>Inbound Interaction</span>
            <span className="text-primary">Live Verification</span>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 bg-white border border-border/80 rounded-lg text-ink">
              <span className="text-[10px] text-ink-muted block font-semibold">CALLER:</span>
              &quot;Hi, I need to see Dr. Ayesha for an appointment tomorrow afternoon. Are there open slots?&quot;
            </div>

            <div className="p-2.5 bg-primary-soft text-ink rounded-lg">
              <span className="text-[10px] text-primary block font-semibold">ASSISTANT (GROUNDED):</span>
              &quot;Dr. Ayesha has two slots available tomorrow: 2:15 PM and 4:30 PM. Would either of those work for you?&quot;
            </div>

            <div className="p-2.5 bg-white border border-border/80 rounded-lg text-ink">
              <span className="text-[10px] text-ink-muted block font-semibold">CALLER:</span>
              &quot;2:15 PM works well. My name is Tariq Mahmood.&quot;
            </div>

            <div className="p-2.5 bg-primary-soft text-ink rounded-lg">
              <span className="text-[10px] text-primary block font-semibold">ASSISTANT (CONFIRMATION):</span>
              &quot;Thank you, Mr. Tariq. I have reserved 2:15 PM tomorrow for you. A WhatsApp confirmation has just been dispatched.&quot;
            </div>
          </div>
        </div>

        {/* Backend Assignment Result */}
        <div className="bg-surface-muted border border-border rounded-xl p-4 space-y-3">
          <div className="font-semibold text-ink border-b border-border/60 pb-1.5 flex justify-between">
            <span>Resulting Operational State</span>
            <span className="text-success font-bold">Synchronized</span>
          </div>

          <div className="space-y-2.5">
            <div className="p-2.5 bg-white rounded-lg border border-border/60">
              <span className="text-[10px] text-ink-muted block font-semibold">CALENDAR ACTION:</span>
              <span className="font-medium text-ink">Google Calendar event created:</span>
              <p className="text-ink-muted mt-0.5">&quot;Tariq Mahmood — Dental Consultation (2:15 PM)&quot; with 15-min buffer.</p>
            </div>

            <div className="p-2.5 bg-white rounded-lg border border-border/60">
              <span className="text-[10px] text-ink-muted block font-semibold">MESSAGING WEBHOOK:</span>
              <span className="font-medium text-ink">Meta WhatsApp Cloud API payload sent:</span>
              <p className="text-ink-muted mt-0.5">Template &quot;appointment_reminder&quot; queued with 1-tap reschedule link.</p>
            </div>

            <div className="p-2.5 bg-white rounded-lg border border-border/60">
              <span className="text-[10px] text-ink-muted block font-semibold">CRM LOGGING:</span>
              <span className="font-medium text-ink">New contact profile created:</span>
              <p className="text-ink-muted mt-0.5">Contact tagged &quot;New Patient / Scheduled&quot; with full transcript audit.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between text-xs text-ink-muted gap-3">
        <span>Test this workflow interactively in your browser with synthetic patient data:</span>
        <LinkButton href="/demos/booking-flow" variant="primary" size="small">
          Launch Scripted Booking Flow Demo →
        </LinkButton>
      </div>
    </Card>
  );

  return <ServicePageShell service={aiVoiceChatAutomation} distinctVisual={distinctVisual} />;
}

import React from "react";
import { OfferingMotion } from "@/components/shared/offering-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allDemos, getDemoBySlug } from "@/content/demos";
import { servicesMap } from "@/content/services";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { DemoIntroduction, demoThemes } from "@/components/shared/demo-introduction";
import { LinkButton } from "@/components/ui/link-button";
import { EnquiryCta } from "@/components/shared/enquiry-cta";
import { DashboardDemo } from "@/components/demos/dashboard-demo";
import { RetailPosDemo } from "@/components/demos/retail-pos-demo";
import { EcommerceDemo } from "@/components/demos/ecommerce-demo";
import { BookingFlowDemo } from "@/components/demos/booking-flow-demo";
import { createPageMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return allDemos.map((demo) => ({
    slug: demo.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const demo = getDemoBySlug(slug);

  if (!demo) {
    return createPageMetadata({
      title: "Demo Not Found",
      description: "The requested interactive demonstration could not be found.",
    });
  }

  return createPageMetadata({
    title: `${demo.title} — Interactive Demo`,
    description: demo.summary,
    path: `/demos/${demo.slug}`,
  });
}

export default async function DemoDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const demo = getDemoBySlug(slug);

  if (!demo) {
    notFound();
  }

  const relatedService = servicesMap[demo.relatedServiceSlug];

  return (
    <OfferingMotion className={`offering-page offering-${demoThemes[demo.slug]} demo-detail-page`}>
      <DemoIntroduction demo={demo}/>
      {/* Main Interactive Demo Workspace */}
      <Section id="demo-workspace" variant="canvas" className="demo-live-section">
        <Container>
          {slug === "admin-dashboard" && <DashboardDemo />}
          {slug === "retail-pos" && <RetailPosDemo />}
          {slug === "ecommerce-store" && <EcommerceDemo />}
          {slug === "booking-flow" && <BookingFlowDemo />}
        </Container>
      </Section>

      {/* Production Architecture & Limitations */}
      <Section variant="canvas">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* What Production Would Connect */}
            <Card variant="default" className="p-6 sm:p-8">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-2">
                Production System Design
              </span>
              <h3 className="text-xl font-medium text-ink mb-3">
                How this connects to your business
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed mb-6">
                A production implementation can connect to your chosen tools, subject to access, scope, and compatibility:
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-ink-muted">
                {demo.productionConnections.map((conn, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span>{conn}</span>
                  </li>
                ))}
              </ul>

              {relatedService && (
                <div className="mt-8 pt-4 border-t border-border/60">
                  <LinkButton
                    href={`/services/${relatedService.slug}`}
                    variant="secondary"
                    size="small"
                  >
                    View {relatedService.shortTitle} Service Scope →
                  </LinkButton>
                </div>
              )}
            </Card>

            {/* Prototype Boundaries & Disclaimers */}
            <Card variant="muted" className="p-6 sm:p-8">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-2">
                Demonstration Scope
              </span>
              <h3 className="text-xl font-medium text-ink mb-3">
                What to know about this demo
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed mb-6">
                These examples use sample data and work inside your browser:
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-ink-muted">
                {demo.limitations.map((lim, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-accent font-bold mt-0.5">•</span>
                    <span>{lim}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-3 bg-white rounded-lg border border-border/60 text-xs text-ink-muted">
                <strong className="text-ink">Data Privacy:</strong> No personal details, credit cards, or passwords are asked or stored in this demonstration.
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Contextual CTA */}
      <Section variant="muted">
        <Container>
          <EnquiryCta
            headline={`Interested in building a custom ${demo.category}?`}
            copy="Tell us about your current workflow, database requirements, and target timeline. We will review your scope and provide a fixed milestone proposal."
            ctaText="Request Architecture Proposal"
            serviceSlug={demo.relatedServiceSlug}
            sourceContext={`demo-${demo.slug}`}
          />
        </Container>
      </Section>
    </OfferingMotion>
  );
}


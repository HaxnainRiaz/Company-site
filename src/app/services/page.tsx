import React from "react";
import Link from "next/link";
import { DirectoryHero } from "@/components/shared/directory-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { EnquiryCta } from "@/components/shared/enquiry-cta";
import { allServices } from "@/content/services";
import { serviceGroupLabels } from "@/content/site";
import { homeContent } from "@/content/home";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Services & Technical Capabilities",
  description:
    "Explore our eight focused services across Build & Sell, Automate & Operate, and Attract & Grow. Built for Pakistani and international businesses.",
  path: "/services",
});

export default function ServicesDirectoryPage() {
  const groups = ["build-sell", "automate-operate", "attract-grow"] as const;

  return (
    <>
      <DirectoryHero eyebrow="WHAT WE DO / CONNECT THE POSSIBILITIES" title={<>Creative minds.<br /><span>Practical solutions.</span></>} description={<>A better first impression. A smoother everyday workflow.<br />Eight connected services, built around your business.</>} />

      {/* Grouped Services */}
      <Section variant="surface">
        <Container>
          <div className="space-y-16">
            {groups.map((group) => {
              const items = allServices.filter((s) => s.group === group);
              return (
                <div key={group} className="space-y-6">
                  <div className="border-b border-border pb-3">
                    <h2 className="text-xl font-medium text-ink">
                      {serviceGroupLabels[group]}
                    </h2>
                    <p className="text-xs text-ink-muted mt-1">
                      {group === "build-sell" && "Customer-facing web, mobile, and commerce applications engineered for speed and conversion."}
                      {group === "automate-operate" && "Internal software, retail POS systems, and automated data bridges between your tools."}
                      {group === "attract-grow" && "Technical search foundations, local Google Business Profiles, and structured editorial campaigns."}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((service) => (
                      <ServiceCard key={service.slug} service={service} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Goal-Based Navigation Links */}
      <Section variant="canvas">
        <Container>
          <SectionHeading
            eyebrow="Commercial Pathways"
            title="Prefer to navigate by immediate business goal?"
            description="Select your objective to view the recommended combination of services."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {homeContent.goals.map((goal) => (
              <Link
                key={goal.id}
                href={goal.targetHref}
                className="p-5 rounded-xl border border-border bg-white hover:border-primary transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-medium text-base text-ink mb-1">{goal.label}</h3>
                  <p className="text-xs text-ink-muted leading-relaxed mb-4">{goal.description}</p>
                </div>
                <span className="text-xs font-semibold text-primary flex items-center justify-between">
                  <span>Explore Solution</span>
                  <span>→</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Final Call to Action */}
      <Section variant="muted">
        <Container>
          <EnquiryCta
            headline="Need guidance choosing the right scope?"
            copy="Tell us about your team size, current software, and the bottleneck you want to solve. We respond with a tailored recommendation within one business day."
            ctaText="Request an Initial Assessment"
            sourceContext="services-directory"
          />
        </Container>
      </Section>
    </>
  );
}

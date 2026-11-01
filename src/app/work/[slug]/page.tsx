import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProjects, getProjectBySlug } from "@/content/projects";
import { servicesMap } from "@/content/services";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { EnquiryCta } from "@/components/shared/enquiry-cta";
import { createPageMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return allProjects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createPageMetadata({
      title: "Project Not Found",
      description: "The requested project record could not be found.",
    });
  }

  return createPageMetadata({
    title: `${project.title} — Technical Record`,
    description: project.context,
    path: `/work/${project.slug}`,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedService = servicesMap[project.relatedServiceSlug];

  return (
    <>
      <div className="pt-8 pb-10 bg-canvas border-b border-border/60">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs text-ink-muted">
              <li>
                <Link href="/" className="hover:text-ink transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/work" className="hover:text-ink transition-colors">
                  Work
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink font-medium truncate">
                {project.title}
              </li>
            </ol>
          </nav>

          <div className="max-w-[800px]">
            <Badge variant="primary" className="mb-3">
              {project.category}
            </Badge>
            <h1 className="text-[28px] sm:text-[34px] md:text-[38px] leading-[1.2] font-medium text-ink mb-3">
              {project.title}
            </h1>
            <p className="text-[16px] sm:text-[17px] text-ink-muted leading-[1.65]">
              {project.context}
            </p>
          </div>
        </Container>
      </div>

      <Section variant="surface">
        <Container>
          <div className="max-w-[840px] space-y-8">
            <Card variant="default" className="p-6 sm:p-8 space-y-4">
              <h2 className="text-xl font-medium text-ink">Technical Engineering Scope</h2>
              <ul className="space-y-2.5 text-sm text-ink-muted">
                {project.scope.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>

              {project.resultsNote && (
                <div className="p-4 bg-[#EBF7F0] border border-success/30 rounded-lg text-xs sm:text-sm text-success leading-relaxed mt-6">
                  <span className="font-bold block mb-1">Empirical Observation:</span>
                  {project.resultsNote}
                </div>
              )}
            </Card>

            {relatedService && (
              <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-canvas border border-border rounded-xl gap-4">
                <div>
                  <span className="text-xs text-ink-muted block">Underlying Studio Service:</span>
                  <div className="font-medium text-base text-ink">{relatedService.title}</div>
                </div>
                <LinkButton href={`/services/${relatedService.slug}`} variant="secondary" size="small">
                  View Full Service Details →
                </LinkButton>
              </div>
            )}
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <EnquiryCta
            headline="Plan a similar implementation for your business?"
            copy="Discuss technical requirements, milestones, and deliverable commitments with our team."
            ctaText="Discuss Your Project"
            serviceSlug={project.relatedServiceSlug}
            sourceContext={`project-${project.slug}`}
          />
        </Container>
      </Section>
    </>
  );
}

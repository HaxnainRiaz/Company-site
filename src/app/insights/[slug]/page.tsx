import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allArticles, getArticleBySlug } from "@/content/articles";
import { servicesMap } from "@/content/services";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { EnquiryCta } from "@/components/shared/enquiry-cta";
import { createPageMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return allArticles.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return createPageMetadata({
      title: "Article Not Found",
      description: "The requested insight guide could not be found.",
    });
  }

  return createPageMetadata({
    title: article.title,
    description: article.description,
    path: `/insights/${article.slug}`,
  });
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedService = article.relatedServiceSlug
    ? servicesMap[article.relatedServiceSlug]
    : undefined;

  return (
    <>
      <article className="pt-8 pb-16 bg-canvas">
        <Container size="narrow">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-ink-muted">
              <li>
                <Link href="/" className="hover:text-ink transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/insights" className="hover:text-ink transition-colors">
                  Insights
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink font-medium truncate">
                {article.title}
              </li>
            </ol>
          </nav>

          <header className="mb-10 pb-8 border-b border-border/60 space-y-4">
            <div className="flex items-center gap-3 text-xs text-ink-muted">
              <Badge variant="primary">{article.readingTime}</Badge>
              <span>{article.authorRole}</span>
              <span aria-hidden="true">•</span>
              <span>{article.publishedNotice}</span>
            </div>

            <h1 className="text-[28px] sm:text-[34px] md:text-[40px] leading-[1.2] font-medium text-ink">
              {article.title}
            </h1>

            <p className="text-[17px] sm:text-[18px] text-ink-muted leading-[1.65]">
              {article.description}
            </p>
          </header>

          {/* Article Body Sections */}
          <div className="space-y-10 text-[16px] leading-[1.75] text-ink">
            {article.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-medium text-ink pt-2">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-ink-muted">
                    {p}
                  </p>
                ))}
                {section.callout && (
                  <div className="my-6 p-4 sm:p-5 rounded-xl bg-primary-soft border border-primary/20 text-sm text-primary font-medium leading-relaxed">
                    {section.callout}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Key Takeaways Box */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-border space-y-4 shadow-2xs">
            <h3 className="text-lg font-medium text-ink flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" />
              Key Executive Takeaways
            </h3>
            <ul className="space-y-2.5 text-sm text-ink-muted">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Service Bridge */}
          {relatedService && (
            <div className="mt-8 p-6 rounded-xl bg-surface-muted border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-ink-muted font-semibold block mb-1">
                  Connected Capability
                </span>
                <div className="text-base font-medium text-ink">{relatedService.title}</div>
              </div>
              <LinkButton href={`/services/${relatedService.slug}`} variant="primary" size="small">
                Explore {relatedService.shortTitle} Service →
              </LinkButton>
            </div>
          )}
        </Container>
      </article>

      <Section variant="muted">
        <Container>
          <EnquiryCta
            headline="Want to evaluate this for your business?"
            copy="Discuss your technical architecture and operational priorities with our senior engineers."
            ctaText="Discuss Your Project"
            serviceSlug={article.relatedServiceSlug}
            sourceContext={`article-${article.slug}`}
          />
        </Container>
      </Section>
    </>
  );
}

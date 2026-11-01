import React from "react";
import Link from "next/link";
import type { PolicyDocument } from "@/content/policies";
import { Container } from "@/components/ui/container";

export interface PolicyPageShellProps {
  document: PolicyDocument;
}

export function PolicyPageShell({ document }: PolicyPageShellProps) {
  return (
    <article className="pt-8 pb-16 bg-canvas">
      <Container size="narrow">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-ink-muted">
            <li>
              <Link href="/" className="hover:text-ink transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-ink font-medium truncate">
              {document.title}
            </li>
          </ol>
        </nav>

        <header className="mb-8 pb-6 border-b border-border/60 space-y-3">
          <div className="text-xs text-ink-muted font-medium">
            Status: {document.lastUpdated}
          </div>
          <h1 className="text-[30px] sm:text-[36px] font-medium text-ink">
            {document.title}
          </h1>
          <p className="text-base text-ink-muted leading-relaxed">
            {document.introduction}
          </p>
        </header>

        {/* Legal Notice Callout */}
        <div className="p-4 bg-accent-soft border border-accent/20 rounded-xl text-xs text-accent leading-relaxed mb-8">
          {document.legalEntityNotice}
        </div>

        {/* Policy Sections */}
        <div className="space-y-8 text-sm leading-[1.7] text-ink">
          {document.sections.map((section, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-lg font-medium text-ink pt-2 border-t border-border/40">
                {section.title}
              </h2>
              {section.content.map((p, pIdx) => (
                <p key={pIdx} className="text-ink-muted">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-border/60 flex items-center justify-between text-xs text-ink-muted">
          <div>Questions regarding this policy?</div>
          <Link href="/contact" className="text-primary font-medium hover:underline">
            Contact Studio Operations →
          </Link>
        </div>
      </Container>
    </article>
  );
}

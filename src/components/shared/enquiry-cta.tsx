import React from "react";
import { LinkButton } from "@/components/ui/link-button";
import { cn } from "@/lib/cn";

export interface EnquiryCtaProps {
  headline?: string;
  copy?: string;
  ctaText?: string;
  serviceSlug?: string;
  sourceContext?: string;
  className?: string;
}

export function EnquiryCta({
  headline = "What would you like to improve?",
  copy = "Tell us about your customers, your current tools, and the work you want to make easier. We respond with a clear evaluation within one business day.",
  ctaText = "Discuss your project",
  serviceSlug,
  sourceContext,
  className,
}: EnquiryCtaProps) {
  const queryParams = new URLSearchParams();
  if (serviceSlug) queryParams.set("service", serviceSlug);
  if (sourceContext) queryParams.set("source", sourceContext);
  const contactHref = `/contact${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;

  return (
    <div
      className={cn(
        "rounded-2xl border border-primary/20 bg-primary-soft p-8 sm:p-10 md:p-12 text-ink max-w-[960px] mx-auto text-center",
        className
      )}
    >
      <h3 className="text-2xl sm:text-3xl font-medium tracking-tight mb-3 text-ink">
        {headline}
      </h3>
      <p className="text-base sm:text-lg text-ink-muted max-w-[640px] mx-auto mb-8 leading-relaxed">
        {copy}
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <LinkButton href={contactHref} variant="primary" size="normal" className="w-full sm:w-auto">
          {ctaText}
        </LinkButton>
        <LinkButton href="/demos" variant="secondary" size="normal" className="w-full sm:w-auto">
          Explore interactive demos
        </LinkButton>
      </div>
    </div>
  );
}

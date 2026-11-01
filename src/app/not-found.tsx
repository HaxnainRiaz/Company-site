import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";

export default function NotFound() {
  return (
    <div className="py-20 sm:py-28 text-center">
      <Container size="narrow">
        <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-2 block">
          Error 404
        </span>
        <h1 className="text-3xl sm:text-4xl font-medium text-ink mb-4">
          Page Not Found
        </h1>
        <p className="text-base sm:text-lg text-ink-muted leading-relaxed mb-8">
          The requested address does not correspond to an active route. It may have been relocated, or the specific resource slug may not exist.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <LinkButton href="/" variant="primary" size="normal">
            Return to Homepage
          </LinkButton>
          <LinkButton href="/services" variant="secondary" size="normal">
            Browse Services
          </LinkButton>
          <LinkButton href="/contact" variant="quiet" size="normal">
            Contact Support
          </LinkButton>
        </div>

        <div className="mt-12 pt-8 border-t border-border/60 text-xs text-ink-muted">
          Looking for a specific interactive demonstration? Explore our{" "}
          <Link href="/demos" className="text-primary underline">
            Interactive Demos Directory
          </Link>
          .
        </div>
      </Container>
    </div>
  );
}

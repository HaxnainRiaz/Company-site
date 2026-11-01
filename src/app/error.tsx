"use client";

import React, { useEffect } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unexpected errors to internal monitoring if configured
    console.error("Runtime error caught by boundary:", error.message);
  }, [error]);

  return (
    <div className="py-20 sm:py-28 text-center" role="alert">
      <Container size="narrow">
        <span className="text-sm font-semibold text-danger uppercase tracking-wider mb-2 block">
          Application Notice
        </span>
        <h1 className="text-3xl sm:text-4xl font-medium text-ink mb-4">
          An Unexpected Display Issue Occurred
        </h1>
        <p className="text-base sm:text-lg text-ink-muted leading-relaxed mb-8">
          The requested page could not be displayed properly. Our technical team has been alerted. You can attempt to reload the component or navigate back to the home page.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={() => reset()} variant="primary" size="normal">
            Try Again
          </Button>
          <LinkButton href="/" variant="secondary" size="normal">
            Return to Homepage
          </LinkButton>
          <LinkButton href="/contact" variant="quiet" size="normal">
            Report Issue
          </LinkButton>
        </div>

        {error.digest && (
          <p className="mt-8 text-xs text-ink-muted">
            Reference Digest ID: <code className="bg-surface-muted px-1.5 py-0.5 rounded">{error.digest}</code>
          </p>
        )}
      </Container>
    </div>
  );
}

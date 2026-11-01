import React from "react";
import { SolutionPageShell } from "@/components/shared/solution-page-shell";
import { serviceBusinessesSolution } from "@/content/solutions";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: serviceBusinessesSolution.title,
  description: serviceBusinessesSolution.summary,
  path: `/solutions/${serviceBusinessesSolution.slug}`,
});

export default function ServiceBusinessesSolutionPage() {
  return <SolutionPageShell solution={serviceBusinessesSolution} />;
}

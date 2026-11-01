import React from "react";
import { SolutionPageShell } from "@/components/shared/solution-page-shell";
import { retailPharmacySolution } from "@/content/solutions";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: retailPharmacySolution.title,
  description: retailPharmacySolution.summary,
  path: `/solutions/${retailPharmacySolution.slug}`,
});

export default function RetailPharmacySolutionPage() {
  return <SolutionPageShell solution={retailPharmacySolution} />;
}

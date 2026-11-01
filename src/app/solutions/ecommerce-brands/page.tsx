import React from "react";
import { SolutionPageShell } from "@/components/shared/solution-page-shell";
import { ecommerceBrandsSolution } from "@/content/solutions";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: ecommerceBrandsSolution.title,
  description: ecommerceBrandsSolution.summary,
  path: `/solutions/${ecommerceBrandsSolution.slug}`,
});

export default function EcommerceBrandsSolutionPage() {
  return <SolutionPageShell solution={ecommerceBrandsSolution} />;
}

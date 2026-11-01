import React from "react";
import { SolutionPageShell } from "@/components/shared/solution-page-shell";
import { clinicsAppointmentsSolution } from "@/content/solutions";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: clinicsAppointmentsSolution.title,
  description: clinicsAppointmentsSolution.summary,
  path: `/solutions/${clinicsAppointmentsSolution.slug}`,
});

export default function ClinicsAppointmentsSolutionPage() {
  return <SolutionPageShell solution={clinicsAppointmentsSolution} />;
}

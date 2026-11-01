import React from "react";
import { PolicyPageShell } from "@/components/shared/policy-page-shell";
import { termsOfServiceContent } from "@/content/policies";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: termsOfServiceContent.title,
  description: termsOfServiceContent.introduction,
  path: "/terms",
});

export default function TermsPage() {
  return <PolicyPageShell document={termsOfServiceContent} />;
}

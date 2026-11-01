import React from "react";
import { PolicyPageShell } from "@/components/shared/policy-page-shell";
import { privacyPolicyContent } from "@/content/policies";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: privacyPolicyContent.title,
  description: privacyPolicyContent.introduction,
  path: "/privacy",
});

export default function PrivacyPage() {
  return <PolicyPageShell document={privacyPolicyContent} />;
}

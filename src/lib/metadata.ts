import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export function createPageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const siteUrl = process.env.SITE_URL;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    robots: siteConfig.isPublicationReady
      ? {
          index: true,
          follow: true,
        }
      : {
          index: false,
          follow: false,
          nocache: true,
        },
  };

  // Only configure metadataBase and canonical URLs if a valid domain is set
  if (siteConfig.isPublicationReady && siteUrl && !siteUrl.includes("localhost")) {
    metadata.metadataBase = new URL(siteUrl);
    if (path) {
      metadata.alternates = {
        canonical: path,
      };
    }
  }

  return metadata;
}

import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { allServices } from "@/content/services";
import { allSolutions } from "@/content/solutions";
import { allDemos } from "@/content/demos";
import { allArticles } from "@/content/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  // If not publication ready, omit production sitemap
  if (!siteConfig.isPublicationReady) {
    return [];
  }

  const siteUrl = process.env.SITE_URL || "https://example.com";

  const staticRoutes = [
    "",
    "/services",
    "/solutions",
    "/work",
    "/demos",
    "/about",
    "/how-we-work",
    "/pricing",
    "/insights",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
    "/accessibility",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  for (const service of allServices) {
    sitemapEntries.push({
      url: `${siteUrl}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const solution of allSolutions) {
    sitemapEntries.push({
      url: `${siteUrl}/solutions/${solution.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const demo of allDemos) {
    sitemapEntries.push({
      url: `${siteUrl}/demos/${demo.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const article of allArticles) {
    sitemapEntries.push({
      url: `${siteUrl}/insights/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return sitemapEntries;
}

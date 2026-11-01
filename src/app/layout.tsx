import type { Metadata } from "next";
import { instrumentSans } from "@/lib/fonts";
import { SkipLink } from "@/components/layout/skip-link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { siteConfig } from "@/content/site";
import "./globals.css";
import "./refined.css";
import "./offerings.css";
import "./offering-experiences.css";
import "./studio-evolution.css";
import "./interaction-fixes.css";

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.name}`,
    default: `${siteConfig.name} — Software, Automation & Digital Growth`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.svg",
  },
  robots: siteConfig.isPublicationReady
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink font-sans">
        <SkipLink />
        <SiteHeader />
        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}

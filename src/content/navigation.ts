import type { ServiceSlug, SolutionSlug } from "@/types/content";

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavServiceItem {
  slug: ServiceSlug;
  label: string;
  href: string;
  description: string;
  group: "build-sell" | "automate-operate" | "attract-grow";
}

export interface NavSolutionItem {
  slug: SolutionSlug;
  label: string;
  href: string;
  description: string;
}

export const navigationServices: NavServiceItem[] = [
  // Build & Sell
  {
    slug: "websites-admin-dashboards",
    label: "Websites & Admin Dashboards",
    href: "/services/websites-admin-dashboards",
    description: "Fast customer websites and operational internal portals.",
    group: "build-sell",
  },
  {
    slug: "ecommerce-development",
    label: "E-commerce Development",
    href: "/services/ecommerce-development",
    description: "Online stores connected to billing, stock, and shipping.",
    group: "build-sell",
  },
  {
    slug: "mobile-app-development",
    label: "Mobile App Development",
    href: "/services/mobile-app-development",
    description: "Focused mobile applications for customers or field staff.",
    group: "build-sell",
  },
  // Automate & Operate
  {
    slug: "ai-voice-chat-automation",
    label: "AI Voice & Chat Automation",
    href: "/services/ai-voice-chat-automation",
    description: "Inbound call and chat assistants with clear team handoff.",
    group: "automate-operate",
  },
  {
    slug: "workflow-automation",
    label: "Workflow Automation",
    href: "/services/workflow-automation",
    description: "Connect spreadsheets, forms, and CRMs without manual data entry.",
    group: "automate-operate",
  },
  {
    slug: "pos-retail-management",
    label: "POS & Retail Management",
    href: "/services/pos-retail-management",
    description: "Billing, barcode scanning, stock alerts, and multi-branch control.",
    group: "automate-operate",
  },
  // Attract & Grow
  {
    slug: "seo-google-business-profile",
    label: "SEO & Google Business Profile",
    href: "/services/seo-google-business-profile",
    description: "Technical foundations, local search profiles, and search content.",
    group: "attract-grow",
  },
  {
    slug: "social-media-marketing",
    label: "Social Media Marketing",
    href: "/services/social-media-marketing",
    description: "Structured content calendars and campaigns tied to real enquiries.",
    group: "attract-grow",
  },
];

export const navigationSolutions: NavSolutionItem[] = [
  {
    slug: "retail-pharmacy",
    label: "Retail & Pharmacy",
    href: "/solutions/retail-pharmacy",
    description: "Fast counter billing, expiry alerts, and stock across stores.",
  },
  {
    slug: "clinics-appointments",
    label: "Clinics & Appointments",
    href: "/solutions/clinics-appointments",
    description: "Scheduling, patient enquiry capture, and automated reminders.",
  },
  {
    slug: "ecommerce-brands",
    label: "E-commerce Brands",
    href: "/solutions/ecommerce-brands",
    description: "Storefront UX, inventory sync, order fulfillment, and COD.",
  },
  {
    slug: "service-businesses",
    label: "Service Businesses",
    href: "/solutions/service-businesses",
    description: "Lead capture, automated qualification, and quote workflows.",
  },
];

export const primaryNavLinks: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Work", href: "/work" },
  { label: "Demos", href: "/demos" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Insights", href: "/insights" },
];

export const footerCompanyLinks: NavLink[] = [
  { label: "About Studio", href: "/about" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Pricing & Engagement", href: "/pricing" },
  { label: "Interactive Demos", href: "/demos" },
  { label: "Work & Case Studies", href: "/work" },
  { label: "Insights & Guides", href: "/insights" },
];

export const footerPolicyLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Accessibility Statement", href: "/accessibility" },
];

import type { SiteConfig } from "@/types/content";

export const siteConfig: SiteConfig = {
  name: "Company Name",
  previewLabel: "Company Name (Preview Mode)",
  description:
    "Software, automation and digital growth studio building websites, admin dashboards, retail management systems, automated workflows, and customer assistants.",
  tagline: "Win more customers. Make business easier to run.",
  email: null, // Owner has not provided verified business email
  phone: null, // Owner has not provided verified phone number
  whatsappNumber: null, // Owner has not provided WhatsApp business number
  schedulingUrl: null, // Owner has not provided calendar/booking URL
  location: null, // Owner has not provided verified physical office address
  isPublicationReady: false,
  productVisibility: false, // Set to true only when proprietary product specifications are approved
  missingOwnerFacts: [
    "Final legal business name & brand trademark",
    "Verified commercial email address for inbound enquiries",
    "Verified telephone and WhatsApp Business contact numbers",
    "Third-party calendar booking link (Calendly / Cal.com / similar)",
    "Registered office address / jurisdiction for legal notices",
    "Corporate privacy policy & terms of service final legal review",
    "Production database & email notification credentials",
    "Verified production domain & SSL certificates",
  ],
};

export const serviceGroupLabels: Record<string, string> = {
  "build-sell": "Build & Sell",
  "automate-operate": "Automate & Operate",
  "attract-grow": "Attract & Grow",
};

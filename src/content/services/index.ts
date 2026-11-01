import type { ServiceItem, ServiceSlug } from "@/types/content";
import { aiVoiceChatAutomation } from "./ai-voice-chat-automation";
import { websitesAdminDashboards } from "./websites-admin-dashboards";
import { posRetailManagement } from "./pos-retail-management";
import { seoGoogleBusinessProfile } from "./seo-google-business-profile";
import { workflowAutomation } from "./workflow-automation";
import { ecommerceDevelopment } from "./ecommerce-development";
import { mobileAppDevelopment } from "./mobile-app-development";
import { socialMediaMarketing } from "./social-media-marketing";

export const allServices: ServiceItem[] = [
  // Build & Sell
  websitesAdminDashboards,
  ecommerceDevelopment,
  mobileAppDevelopment,
  // Automate & Operate
  aiVoiceChatAutomation,
  workflowAutomation,
  posRetailManagement,
  // Attract & Grow
  seoGoogleBusinessProfile,
  socialMediaMarketing,
];

export const servicesMap: Record<ServiceSlug, ServiceItem> = {
  "ai-voice-chat-automation": aiVoiceChatAutomation,
  "websites-admin-dashboards": websitesAdminDashboards,
  "pos-retail-management": posRetailManagement,
  "seo-google-business-profile": seoGoogleBusinessProfile,
  "workflow-automation": workflowAutomation,
  "ecommerce-development": ecommerceDevelopment,
  "mobile-app-development": mobileAppDevelopment,
  "social-media-marketing": socialMediaMarketing,
};

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  if (slug in servicesMap) {
    return servicesMap[slug as ServiceSlug];
  }
  return undefined;
}

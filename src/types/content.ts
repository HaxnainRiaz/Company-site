export type ServiceSlug =
  | "ai-voice-chat-automation"
  | "websites-admin-dashboards"
  | "pos-retail-management"
  | "seo-google-business-profile"
  | "workflow-automation"
  | "ecommerce-development"
  | "mobile-app-development"
  | "social-media-marketing";

export type ServiceGroup = "build-sell" | "automate-operate" | "attract-grow";

export interface Subservice {
  title: string;
  description: string;
}

export interface ServiceIntegration {
  name: string;
  prerequisite: string;
}

export interface ServiceDeliveryStep {
  step: number;
  title: string;
  output: string;
  reviewPoint: string;
}

export interface ServiceInvestmentModel {
  modelSummary: string;
  costDrivers: string[];
  externalCharges: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface RelatedServiceRef {
  slug: ServiceSlug;
  reason: string;
}

export interface ServiceItem {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  group: ServiceGroup;
  h1: string;
  intro: string;
  outcome: string;
  audience: string[];
  situations: string[];
  subservices: Subservice[];
  deliverables: string[];
  customerInputs: string[];
  integrations: ServiceIntegration[];
  deliverySteps: ServiceDeliveryStep[];
  investmentModel: ServiceInvestmentModel;
  faqs: FAQ[];
  relatedServices: RelatedServiceRef[];
  ctaText: string;
  demoSlug?: DemoSlug;
}

export type SolutionSlug =
  | "retail-pharmacy"
  | "clinics-appointments"
  | "ecommerce-brands"
  | "service-businesses";

export interface SolutionProblem {
  title: string;
  description: string;
}

export interface SolutionWorkflowStep {
  step: number;
  title: string;
  description: string;
  humanTouchpoint?: string;
}

export interface SolutionItem {
  slug: SolutionSlug;
  title: string;
  h1: string;
  summary: string;
  targetAudience: string;
  problems: SolutionProblem[];
  workflow: SolutionWorkflowStep[];
  recommendedServices: { slug: ServiceSlug; role: string }[];
  rolloutInputs: string[];
  faqs: FAQ[];
  ctaText: string;
  demoSlug: DemoSlug;
}

export type DemoSlug =
  | "admin-dashboard"
  | "retail-pos"
  | "ecommerce-store"
  | "booking-flow";

export interface DemoItem {
  slug: DemoSlug;
  title: string;
  category: string;
  summary: string;
  task: string;
  mode: string;
  limitations: string[];
  productionConnections: string[];
  relatedServiceSlug: ServiceSlug;
}

export type ArticleSlug =
  | "website-or-dashboard"
  | "choosing-retail-pos"
  | "first-workflow-to-automate";

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  callout?: string;
}

export interface ArticleItem {
  slug: ArticleSlug;
  title: string;
  description: string;
  readingTime: string;
  authorRole: string;
  publishedNotice: string;
  sections: ArticleSection[];
  keyTakeaways: string[];
  relatedServiceSlug?: ServiceSlug;
}

export interface SiteConfig {
  name: string;
  previewLabel: string;
  description: string;
  tagline: string;
  email: string | null;
  phone: string | null;
  whatsappNumber: string | null;
  schedulingUrl: string | null;
  location: string | null;
  isPublicationReady: boolean;
  missingOwnerFacts: string[];
  productVisibility: boolean;
}

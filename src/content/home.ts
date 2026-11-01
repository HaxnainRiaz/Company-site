export interface HomeHeroContent {
  eyebrow: string;
  h1: string;
  supportingCopy: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
}

export interface CapabilityItem {
  title: string;
  description: string;
  href: string;
}

export interface GoalItem {
  id: string;
  label: string;
  description: string;
  targetHref: string;
  serviceTitle: string;
}

export interface EngagementOption {
  title: string;
  tagline: string;
  bestFor: string;
  scopeSummary: string;
  typicalOutputs: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  summary: string;
  tangibleOutput: string;
}

export interface TrustPractice {
  title: string;
  description: string;
}

export const homeContent = {
  hero: {
    eyebrow: "Software, automation & digital growth",
    h1: "Win more customers. Make business easier to run.",
    supportingCopy:
      "We design websites, build business software, and connect the tools behind your sales and operations—from online stores and POS systems to AI receptionists and automated workflows.",
    primaryCtaText: "Discuss your project",
    primaryCtaHref: "/contact",
    secondaryCtaText: "Explore our demos",
    secondaryCtaHref: "/demos",
  } satisfies HomeHeroContent,

  capabilities: [
    {
      title: "Customer-Facing Websites",
      description: "Fast, readable websites and landing pages engineered to earn commercial trust and convert visitors.",
      href: "/services/websites-admin-dashboards",
    },
    {
      title: "Connected Business Tools",
      description: "Retail POS and internal admin portals that keep inventory, orders, and customer records organized.",
      href: "/services/pos-retail-management",
    },
    {
      title: "Operational Automation",
      description: "Automated data handoffs, invoice drafts, and AI voice/chat reception that eliminate repetitive manual work.",
      href: "/services/workflow-automation",
    },
    {
      title: "Digital Growth & Search",
      description: "Technical SEO, verified local Google profiles, and campaign content built around commercial buyer intent.",
      href: "/services/seo-google-business-profile",
    },
  ] satisfies CapabilityItem[],

  goals: [
    {
      id: "enquiries",
      label: "Get more enquiries",
      description: "Attract high-intent buyers through search and convert them with clear service pages and fast forms.",
      targetHref: "/solutions/service-businesses",
      serviceTitle: "Websites, SEO & Lead Capture",
    },
    {
      id: "sell-online",
      label: "Sell online",
      description: "Launch or upgrade an e-commerce storefront connected directly to your courier and inventory tools.",
      targetHref: "/solutions/ecommerce-brands",
      serviceTitle: "E-commerce Development",
    },
    {
      id: "reduce-manual",
      label: "Reduce manual work",
      description: "Connect spreadsheets, forms, and email into automated workflows that route data without copy-pasting.",
      targetHref: "/services/workflow-automation",
      serviceTitle: "Workflow Automation",
    },
    {
      id: "manage-stores",
      label: "Manage stores and stock",
      description: "Implement barcode scanning, counter billing, and real-time inventory tracking across retail branches.",
      targetHref: "/solutions/retail-pharmacy",
      serviceTitle: "POS & Retail Management",
    },
  ] satisfies GoalItem[],

  engagementOptions: [
    {
      title: "Website & Presence Launch",
      tagline: "For businesses establishing or modernizing their commercial front door.",
      bestFor: "Companies with dated sites, low search visibility, or launching a new service line.",
      scopeSummary: "Comprehensive design, content architecture, responsive development, and local SEO configuration.",
      typicalOutputs: ["Responsive Next.js website", "Verified Google Business Profile", "Lead routing form"],
    },
    {
      title: "Store & Inventory Operations",
      tagline: "For retailers upgrading counter speed and stock accuracy.",
      bestFor: "Single-store retailers expanding branches, pharmacies needing batch/expiry, or stores launching online.",
      scopeSummary: "Hardware pairing, catalog cleansing, cashier billing workflows, and live multi-branch inventory tracking.",
      typicalOutputs: ["Configured POS software", "Clean SKU master database", "Cashier operating guide"],
    },
    {
      title: "Customer Response & Assistants",
      tagline: "For businesses losing after-hours callers and appointment requests.",
      bestFor: "Clinics, service contractors, and customer teams receiving high volumes of routine repetitive questions.",
      scopeSummary: "Grounded conversational knowledge base, calendar availability checks, and clear human escalation.",
      typicalOutputs: ["Tested conversational assistant", "Calendar sync integration", "Handoff runbook"],
    },
    {
      title: "Continuous Growth & Automation",
      tagline: "For growing teams needing ongoing technical support and workflow optimization.",
      bestFor: "Established brands running multi-channel campaigns, frequent catalogue updates, and system integrations.",
      scopeSummary: "Monthly sprint retainers covering workflow integrations, new landing pages, and search optimization.",
      typicalOutputs: ["Monthly optimization sprints", "Integration error monitoring", "Performance reporting"],
    },
  ] satisfies EngagementOption[],

  deliveryProcess: [
    {
      step: 1,
      title: "Discover the Need",
      summary: "We inspect your business operations, current tools, and operational bottlenecks before writing code.",
      tangibleOutput: "Documented project brief & integration architecture",
    },
    {
      step: 2,
      title: "Agree the Scope",
      summary: "We establish clear deliverables, exclusions, technical prerequisites, and milestone schedules.",
      tangibleOutput: "Fixed-scope statement of work & timeline",
    },
    {
      step: 3,
      title: "Design & Build",
      summary: "We develop functional increments with full type safety, semantic HTML, and responsive components.",
      tangibleOutput: "Working interactive staging application",
    },
    {
      step: 4,
      title: "Test & Review",
      summary: "We rigorously test edge cases, error fallbacks, and real staff workflows with your team.",
      tangibleOutput: "QA test matrix & staff training walkthrough",
    },
    {
      step: 5,
      title: "Hand Over & Support",
      summary: "We transfer account ownership, provide operational documentation, and monitor initial launch days.",
      tangibleOutput: "Full source repository, runbooks & warranty period",
    },
  ] satisfies ProcessStep[],

  trustPractices: [
    {
      title: "Clear Scope & Fixed Commitments",
      description: "We detail exactly what is included, what is excluded, and all external software dependencies upfront before commencing work.",
    },
    {
      title: "Direct Access to Practitioners",
      description: "You communicate directly with the senior engineers and designers building your software—no junior intermediaries or account-executive runarounds.",
    },
    {
      title: "Complete Code & Account Ownership",
      description: "You own all custom source code, repositories, and third-party developer accounts upon project completion. We do not lock you into proprietary studio portals.",
    },
    {
      title: "Documented Handover & Training",
      description: "Every build includes concise written runbooks, video walkthroughs, and hands-on staff training to ensure your team is confident from day one.",
    },
  ] satisfies TrustPractice[],

  faqs: [
    {
      question: "Can you work with our existing software and databases?",
      answer:
        "Yes. In most projects, we connect directly to your existing tools—such as Google Workspace, QuickBooks, existing SQL databases, or CRM systems—via webhooks and REST APIs rather than forcing you to abandon functional platforms.",
    },
    {
      question: "How is project investment and cost determined?",
      answer:
        "We price transparently based on defined deliverables and technical complexity rather than arbitrary hourly padding. After our initial discovery conversation, you receive a detailed proposal specifying fixed milestone fees and external software fees.",
    },
    {
      question: "Can we begin with a small, focused project first?",
      answer:
        "Yes. We strongly advocate for focused first releases. Starting with a single high-priority workflow—such as a fast marketing website or an automated lead-routing pipeline—allows you to validate results before committing to broader operational software.",
    },
    {
      question: "Who manages and updates the system once it is launched?",
      answer:
        "We build systems with clear administrative interfaces so your internal team can manage day-to-day operations independently. For ongoing framework maintenance, security updates, and new features, we offer flexible monthly support agreements.",
    },
    {
      question: "What support is available if an integration fails or an issue arises?",
      answer:
        "Every project includes a 30-day post-launch warranty covering any technical bugs. Furthermore, our automations are built with defensive error handling that immediately alerts designated staff if an external API experiences an outage.",
    },
  ],
};

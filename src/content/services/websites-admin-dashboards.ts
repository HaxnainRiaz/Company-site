import type { ServiceItem } from "@/types/content";

export const websitesAdminDashboards: ServiceItem = {
  slug: "websites-admin-dashboards",
  title: "Websites & Admin Dashboards",
  shortTitle: "Websites & Dashboards",
  group: "build-sell",
  h1: "A better experience for customers. A clearer workspace for your team.",
  intro:
    "We build customer-facing websites and operational dashboards around clear user journeys, appropriate permissions and the systems your business uses.",
  outcome:
    "Replace sluggish, confusing interfaces with fast, structured web applications that guide buyers and streamline staff work.",
  audience: [
    "Businesses running on outdated or slow websites that fail to explain their offerings or generate qualified leads.",
    "Operations teams juggling disconnected spreadsheets and manual data entry across multiple departments.",
    "Enterprises needing a custom customer, vendor, or staff portal with granular security permissions.",
  ],
  situations: [
    "Prospective clients bounce because the current website loads slowly, looks dated on mobile phones, and hides contact options.",
    "Internal team members spend hours searching across scattered Google Sheets to track customer orders, inventory, or billing status.",
    "Customer service staff lack a unified dashboard to view client history, causing repeated questions and slow turnaround.",
  ],
  subservices: [
    {
      title: "Company & Marketing Websites",
      description:
        "High-performance marketing sites engineered with semantic HTML, clean typography, and search engine foundations.",
    },
    {
      title: "Targeted Landing Pages & Microsites",
      description:
        "Focussed single-action pages designed for specific advertising campaigns or product releases.",
    },
    {
      title: "Responsive UX & Component Design",
      description:
        "Consistent design systems, accessible colour contrasts, and thoughtful layouts optimised across mobile and desktop viewports.",
    },
    {
      title: "Structured CMS & Content Authoring",
      description:
        "Custom content editing setups allowing non-technical marketing staff to update copy, articles, and case studies safely.",
    },
    {
      title: "Website Redesign & Platform Migration",
      description:
        "Careful URL mapping, 301 redirect management, and asset preservation to retain historical SEO equity during platform upgrades.",
    },
    {
      title: "Internal Admin Dashboards",
      description:
        "Custom back-office control panels for managing inventory, tracking user registrations, or monitoring operational metrics.",
    },
    {
      title: "Customer, Staff & Vendor Portals",
      description:
        "Secure web applications with authenticated member accounts, document uploads, and self-service account management.",
    },
    {
      title: "Role-Based Access Control (RBAC)",
      description:
        "Granular security matrices ensuring staff, supervisors, and external clients access only the data permitted by their roles.",
    },
    {
      title: "Record Management & Advanced Search",
      description:
        "Fast client-side and server-side filtering, multi-field search, status sorting, and paginated data tables for thousands of entries.",
    },
    {
      title: "Bulk Data Imports & Exports",
      description:
        "Validated CSV, Excel, and JSON ingestion pipelines with field mapping, syntax checks, and downloadable audit logs.",
    },
    {
      title: "Custom REST & GraphQL API Integration",
      description:
        "Reliable connections to proprietary billing backends, external ERP databases, and third-party SaaS platforms.",
    },
    {
      title: "Performance & Accessibility Maintenance",
      description:
        "Ongoing audits to ensure sub-second page loads, WCAG contrast compliance, and zero cumulative layout shifts.",
    },
  ],
  deliverables: [
    "Sitemap, screen inventory, and responsive wireframes",
    "Design system specification (colour tokens, typography scale, component tokens)",
    "Production Next.js application codebase with full TypeScript type safety",
    "Role-based permission matrix and security model documentation",
    "Validated API integrations and data import scripts",
    "End-to-end testing verification report and administrative handover guide",
  ],
  customerInputs: [
    "Existing brand assets (vector logos, brand guidelines, verified photography)",
    "Content drafts, service details, and verified company credentials",
    "Access to existing hosting environment, domain registrar, or backend API documentation",
    "User role definitions and access permission requirements",
  ],
  integrations: [
    {
      name: "Headless CMS Platforms (Sanity, Strapi, Contentful)",
      prerequisite: "Content models and API access keys configured for read/preview operations.",
    },
    {
      name: "Authentication Providers (Auth0, Clerk, NextAuth/Auth.js)",
      prerequisite: "Configured OAuth callback URLs and tenant application credentials.",
    },
    {
      name: "Database Engines (PostgreSQL, MySQL, SQLite/libSQL)",
      prerequisite: "Direct connection URI or REST database proxy with connection pooling.",
    },
    {
      name: "Analytics & Monitoring (Plausible, PostHog, Sentry)",
      prerequisite: "Privacy-compliant tracking account keys with script configuration.",
    },
  ],
  deliverySteps: [
    {
      step: 1,
      title: "Architecture & User Journey Mapping",
      output: "Approved sitemap, screen blueprints, and functional scope definition.",
      reviewPoint: "Stakeholder approval of page hierarchy and core user flows.",
    },
    {
      step: 2,
      title: "Visual Design & Component Foundations",
      output: "Figma or coded interactive components covering all responsive states.",
      reviewPoint: "Design review confirming brand alignment and accessibility standards.",
    },
    {
      step: 3,
      title: "Frontend & Backend Development",
      output: "Working staging build with static server rendering and client state.",
      reviewPoint: "Interactive walkthrough of forms, dashboards, and role permissions.",
    },
    {
      step: 4,
      title: "Data Migration & Integration Verification",
      output: "Migrated legacy records, tested API connections, and redirect maps.",
      reviewPoint: "Sanity check on data accuracy, form submissions, and 404 redirects.",
    },
    {
      step: 5,
      title: "Production Deployment & Handover",
      output: "Domain DNS routing, SSL provisioning, and training session for team.",
      reviewPoint: "Formal acceptance sign-off and transfer of deployment repository.",
    },
  ],
  investmentModel: {
    modelSummary:
      "Milestone-based project investment structured into discovery/design, core build, and deployment phases; optional ongoing SLA for maintenance and security patches.",
    costDrivers: [
      "Total page count and unique screen templates",
      "Complexity of custom dashboard features (role permissions, data tables, bulk tools)",
      "Legacy data migration volume and format cleanliness",
      "Number of third-party API and database integrations",
    ],
    externalCharges: [
      "Hosting & compute infrastructure (Vercel, AWS, Cloudflare, or VPS)",
      "Database hosting (Supabase, Neon, AWS RDS, Turso)",
      "Domain registration and managed DNS services",
    ],
  },
  faqs: [
    {
      question: "Can our marketing team edit website content without writing code?",
      answer:
        "Yes. We configure structured content models via your choice of headless CMS or typed local markdown. Your team can publish new articles, change headlines, and update team members without touching the application code.",
    },
    {
      question: "How do you connect a new dashboard to our existing backend database?",
      answer:
        "We begin by reviewing your backend API documentation, database schemas, and authentication protocols. We build typed server actions or API proxies in Next.js that communicate securely with your existing backend without exposing database credentials to browser clients.",
    },
    {
      question: "Who owns the code, design, and assets upon project completion?",
      answer:
        "You own 100% of the custom application codebase, designs, and content upon final milestone settlement. We transfer the Git repository and design assets directly to your company accounts.",
    },
    {
      question: "How are user permissions and roles managed in the admin dashboard?",
      answer:
        "We implement role-based access control (RBAC). For instance, an 'Operator' can search and update order status, while a 'Manager' can view financial summaries and export customer lists, and an 'Admin' can manage staff accounts.",
    },
    {
      question: "What happens to our current search engine rankings during a redesign?",
      answer:
        "We perform a comprehensive pre-launch URL audit. Every legacy page URL is either preserved or mapped directly to its new equivalent using permanent 301 redirects, ensuring you retain search ranking equity.",
    },
    {
      question: "What maintenance and bug-fix support is provided after launch?",
      answer:
        "Every project includes a 30-day post-launch warranty for bug fixes. Following that period, we offer flexible monthly maintenance retainers covering security updates, framework upgrades, and feature additions.",
    },
  ],
  relatedServices: [
    {
      slug: "ecommerce-development",
      reason: "Upgrade a marketing website into a complete online sales platform.",
    },
    {
      slug: "seo-google-business-profile",
      reason: "Ensure your new website ranks properly for local and regional search terms.",
    },
    {
      slug: "workflow-automation",
      reason: "Automate form submissions and customer data routing directly from your site.",
    },
  ],
  ctaText: "Get a website or dashboard plan",
  demoSlug: "admin-dashboard",
};

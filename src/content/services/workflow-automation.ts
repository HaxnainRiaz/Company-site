import type { ServiceItem } from "@/types/content";

export const workflowAutomation: ServiceItem = {
  slug: "workflow-automation",
  title: "Workflow Automation",
  shortTitle: "Workflow Automation",
  group: "automate-operate",
  h1: "Connect your tools. Reduce the work between them.",
  intro:
    "We map repetitive tasks and connect your forms, spreadsheets, CRM and operational tools, with clear ownership and exception handling.",
  outcome:
    "Eliminate hours of manual copy-pasting, eliminate forgotten customer follow-ups, and keep operational data in sync across your stack.",
  audience: [
    "Operations teams spending hours manually copying entries between website forms, Google Sheets, and CRMs.",
    "Sales and service businesses where customer leads get forgotten or delayed due to manual assignment.",
    "Companies with multi-step approval workflows (quotes, invoices, onboarding) that bottleneck in email inboxes.",
  ],
  situations: [
    "When a new customer enquiry arrives, staff must manually transcribe information into a spreadsheet, email a colleague, and create a calendar invite.",
    "Sales reps forget to follow up with prospective clients because leads sit unassigned in an inbox over the weekend.",
    "A team member manually downloads CSV reports every Friday and spends two hours reorganizing rows for executive review.",
  ],
  subservices: [
    {
      title: "Business Process Discovery & Mapping",
      description:
        "Interviewing your operational staff to document exactly how tasks move through your business, identifying bottlenecks and redundant steps.",
    },
    {
      title: "Form-to-CRM Automated Lead Ingestion",
      description:
        "Instant ingestion of website enquiries into your CRM with automatic field mapping, lead scoring, and instant email confirmations.",
    },
    {
      title: "Lead Deduplication & Smart Assignment",
      description:
        "Rules-based routing that detects existing contacts, avoids duplicate records, and distributes enquiries to available reps based on territory or schedule.",
    },
    {
      title: "Customer & Client Onboarding Sequences",
      description:
        "Automated delivery of welcome documents, contract e-signatures, intake questionnaires, and initial account provisioning upon deal closing.",
    },
    {
      title: "Appointment Booking & SMS/Email Reminders",
      description:
        "Synchronized appointment scheduling with automated multi-channel reminder sequences that drastically reduce no-show rates.",
    },
    {
      title: "Quote & Invoice Draft Generation",
      description:
        "Triggering preliminary draft invoices or PDF proposals from CRM deal stages directly into QuickBooks, Xero, or Stripe.",
    },
    {
      title: "Multi-Tier Approval Workflows",
      description:
        "Interactive Slack, Microsoft Teams, or email approval buttons allowing managers to authorize discounts or expense requests with one tap.",
    },
    {
      title: "Inventory & Order Status Alerts",
      description:
        "Instant notifications dispatched to warehouse staff or logistics couriers when customer orders are marked ready for dispatch.",
    },
    {
      title: "Bidirectional Spreadsheet & Database Sync",
      description:
        "Scheduled or event-driven two-way synchronization keeping operational databases, airtables, and legacy spreadsheets consistent.",
    },
    {
      title: "Automated Executive Metric Digest",
      description:
        "Daily or weekly operational summaries compiling pipeline stats, revenue numbers, and open tickets delivered straight to team chat.",
    },
    {
      title: "Custom Webhook & REST API Integrations",
      description:
        "Bespoke backend middleware connecting legacy proprietary software that lacks native pre-built marketplace connectors.",
    },
    {
      title: "Resilient Error Handling & Retry Logic",
      description:
        "Production-grade flow designs featuring automated retries, dead-letter queues, and urgent alert notifications if a third-party API fails.",
    },
  ],
  deliverables: [
    "Visual workflow diagram (BPMN / flowchart format) mapping inputs, logic, and handoffs",
    "Field mapping specification detailing data transformation rules between tools",
    "Fully configured automation scenarios in n8n, Make, Zapier, or custom Node.js webhooks",
    "Comprehensive test matrix covering success paths, malformed data, and edge cases",
    "Failure alerting mechanism notifying designated staff via Slack/email of API errors",
    "Operational ownership handover documentation and runbook for maintenance",
  ],
  customerInputs: [
    "List of software applications currently used (CRM, accounting, forms, communication)",
    "API tokens or administrator credentials for target platforms",
    "Sample customer records and representative edge-case scenarios",
    "Designated human owners for exception handling and manual approvals",
  ],
  integrations: [
    {
      name: "Workflow Orchestrators (n8n, Make, Zapier)",
      prerequisite: "Active self-hosted or cloud workspace subscription with webhook endpoints enabled.",
    },
    {
      name: "CRM & Sales Platforms (HubSpot, Pipedrive, ActiveCampaign)",
      prerequisite: "API key or OAuth permissions to read/create deals and contact records.",
    },
    {
      name: "Accounting & Payments (QuickBooks, Xero, Stripe)",
      prerequisite: "Developer sandbox or production keys with restricted invoice creation permissions.",
    },
    {
      name: "Internal Chat (Slack, Microsoft Teams, Discord)",
      prerequisite: "Incoming webhook URL or installed workspace bot with channel posting rights.",
    },
  ],
  deliverySteps: [
    {
      step: 1,
      title: "Process Discovery & Boundary Definition",
      output: "Documented workflow blueprint showing human decisions versus automated actions.",
      reviewPoint: "Owner confirms business logic, mandatory fields, and escalation points.",
    },
    {
      step: 2,
      title: "Sandbox Environment & API Configuration",
      output: "Connected platform credentials and isolated test staging environments.",
      reviewPoint: "Security review of permission scopes granted to automation webhooks.",
    },
    {
      step: 3,
      title: "Scenario Construction & Error Handling",
      output: "Operational automation flows with automated retry loops and failure traps.",
      reviewPoint: "Dry run of 20+ test transactions verifying field mapping accuracy.",
    },
    {
      step: 4,
      title: "Live Pilot & Exception Monitoring",
      output: "Parallel execution alongside manual team workflows to verify consistency.",
      reviewPoint: "Staff feedback on notification clarity and turnaround speed.",
    },
    {
      step: 5,
      title: "Cutover & Administrative Runbook",
      output: "Full automation activation and handover of documentation to team lead.",
      reviewPoint: "Sign-off on monitoring procedures and alerting channels.",
    },
  ],
  investmentModel: {
    modelSummary:
      "Per-workflow fixed-scope implementation fee encompassing discovery, development, validation, and training; optional quarterly maintenance retainer.",
    costDrivers: [
      "Total number of distinct software applications being integrated",
      "Complexity of conditional logic branching and multi-tier approval rules",
      "Volume of records processed per month (determines webhook tier)",
      "Whether legacy tools require custom REST API middleware",
    ],
    externalCharges: [
      "Subscription costs for workflow orchestrators (Zapier, Make.com, or n8n cloud / server hosting)",
      "Target SaaS platform API tier upgrades if needed for webhook access",
    ],
  },
  faqs: [
    {
      question: "Can we automate workflows using our existing software tools?",
      answer:
        "In the vast majority of cases, yes. As long as your software provides an open REST API, webhook support, or standard email triggers, we can integrate it without requiring you to switch platforms.",
    },
    {
      question: "What happens if one of our connected software tools goes offline?",
      answer:
        "We build defensive automation flows. If an endpoint times out or returns an error, the system pauses execution, queues the payload, executes exponential backoff retries, and notifies your team if intervention is required.",
    },
    {
      question: "Is AI required for workflow automation?",
      answer:
        "No. The vast majority of business workflows are best served by reliable, deterministic logic (if X occurs, then execute Y). We introduce AI only where unstructured data—like parsing PDFs or categorizing sentiment—explicitly benefits from it.",
    },
    {
      question: "Who owns the automation accounts and workflows?",
      answer:
        "You retain 100% ownership. We build directly inside your company's own n8n, Make, or cloud accounts. We do not hold your automations hostage inside proprietary studio portals.",
    },
    {
      question: "How do you protect sensitive customer data passing through webhooks?",
      answer:
        "We follow the principle of least privilege. We transmit only the data fields required for each specific step, enforce HTTPS and signature verification on all webhooks, and ensure credentials are never hardcoded.",
    },
    {
      question: "Can staff manually override or intervene in automated workflows?",
      answer:
        "Yes. Every high-stakes workflow (such as sending formal quotes or issuing refunds) is engineered with explicit human-in-the-loop approval checkpoints before final execution.",
    },
  ],
  relatedServices: [
    {
      slug: "ai-voice-chat-automation",
      reason: "Route conversation outcomes and appointment requests directly into automated workflows.",
    },
    {
      slug: "websites-admin-dashboards",
      reason: "Connect custom website enquiry forms directly to your operational CRM pipeline.",
    },
    {
      slug: "ecommerce-development",
      reason: "Trigger automated dispatch emails and courier pickups when store orders are placed.",
    },
  ],
  ctaText: "Map my workflow",
};

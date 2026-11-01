import type { ServiceItem } from "@/types/content";

export const aiVoiceChatAutomation: ServiceItem = {
  slug: "ai-voice-chat-automation",
  title: "AI Voice & Chat Automation",
  shortTitle: "AI Voice & Chat",
  group: "automate-operate",
  h1: "Help customers get answers and bookings—even when your team is busy.",
  intro:
    "We design voice and chat assistants around your business information, scheduling rules and support process, with clear handoff to your team.",
  outcome:
    "Capture customer enquiries 24/7, qualify appointments, and route complex requests without leaving callers on hold.",
  audience: [
    "Appointment-driven businesses (clinics, salons, consultancies) losing calls while serving existing clients.",
    "Support and operations teams handling repeated questions about pricing, hours, or order status.",
    "Service contractors and professional agencies needing rapid initial enquiry qualification before staff callbacks.",
  ],
  situations: [
    "Staff spend hours answering the same ten routine questions instead of completing revenue-generating work.",
    "Customers calling after hours or over weekends hang up and call competitors rather than leaving a voicemail.",
    "Enquiries arrive across phone, website chat, and messaging apps without consistent notes or calendar confirmation.",
  ],
  subservices: [
    {
      title: "Inbound AI Reception",
      description:
        "Professional automated greetings that identify caller intent, collect essential facts, and route callers to the right department.",
    },
    {
      title: "After-Hours & Overflow Handling",
      description:
        "Reliable call and message answering when staff are busy or closed, capturing caller details with explicit callback promises.",
    },
    {
      title: "Automated Booking Flows",
      description:
        "Structured calendar queries that verify real-time availability, offer time slots, and schedule or reschedule appointments cleanly.",
    },
    {
      title: "Website Chat Assistants",
      description:
        "Interactive chat windows grounded strictly in your verified knowledge base, capturing leads and directing visitors to clear next actions.",
    },
    {
      title: "WhatsApp Business Automation",
      description:
        "Official Meta Cloud API integrations following policy guidelines to handle customer messages, FAQs, and appointment notifications.",
    },
    {
      title: "FAQ & Knowledge-Base Engineering",
      description:
        "Source-controlled documentation that ensures AI answers remain truthful, restricted to approved business facts, and never invent policies.",
    },
    {
      title: "Lead Qualification & Routing",
      description:
        "Pre-agreed discovery questions that assess customer budget, timeline, and service needs before notifying your sales staff.",
    },
    {
      title: "CRM, Calendar & Helpdesk Integration",
      description:
        "Scoped read/write connections to Google Calendar, Cal.com, HubSpot, Zendesk, or custom backends using strict least-privilege permissions.",
    },
    {
      title: "Human Handoff & Escalation",
      description:
        "Immediate detection of confused, frustrated, or emergency requests with graceful transfer to on-duty staff via email, SMS, or phone transfer.",
    },
    {
      title: "Summaries, Transcripts & Quality Audits",
      description:
        "Clean call transcripts, structured outcome tags, and weekly accuracy reviews to continuously refine assistant responses.",
    },
  ],
  deliverables: [
    "Comprehensive conversation map & escalation flowchart",
    "Source-controlled knowledge base and forbidden response rules",
    "Configured voice/chat channel integrations with security tokens",
    "Suite of tested conversational scenarios (happy path, edge cases, abuse)",
    "Calendar and CRM webhook integration specification",
    "Staff operating manual and transcript review checklist",
  ],
  customerInputs: [
    "Authorised business FAQ document, pricing guidelines, and operating policies",
    "Access to phone number routing / telephony provider account for call forwarding",
    "Read/write API credentials for scheduling tool and customer CRM",
    "Designated staff contact for live call transfer and urgent escalation alerts",
  ],
  integrations: [
    {
      name: "Telephony & VoIP Providers (Twilio, SIP trunking)",
      prerequisite: "Active phone carrier account with call-forwarding or SIP trunk capabilities.",
    },
    {
      name: "Scheduling Platforms (Google Calendar, Cal.com, Calendly)",
      prerequisite: "Admin access with OAuth or API token permissions to create and read events.",
    },
    {
      name: "CRM Systems (HubSpot, Salesforce, Pipedrive, custom SQL)",
      prerequisite: "Predefined customer fields and webhook endpoints for lead data creation.",
    },
    {
      name: "WhatsApp Business API",
      prerequisite: "Verified Meta Business Manager account and approved display name.",
    },
  ],
  deliverySteps: [
    {
      step: 1,
      title: "Discovery & Conversational Scope",
      output: "Documented call flows, forbidden actions, and system boundaries.",
      reviewPoint: "Owner reviews approved answers and escalation criteria.",
    },
    {
      step: 2,
      title: "Knowledge Grounding & Scenario Writing",
      output: "Structured source database and sample dialogue scripts.",
      reviewPoint: "Review and sign-off on exact responses to standard questions.",
    },
    {
      step: 3,
      title: "Tool & API Wiring",
      output: "Tested calendar scheduling, CRM logging, and webhook callbacks.",
      reviewPoint: "End-to-end sandbox booking test with sample appointments.",
    },
    {
      step: 4,
      title: "Internal Pilot & Call Simulation",
      output: "Transcript audit log from 50+ scripted test interactions.",
      reviewPoint: "Team verification of handoff speed and transcription accuracy.",
    },
    {
      step: 5,
      title: "Controlled Launch & Monitoring",
      output: "Live call routing with daily transcript reviews and fallback alerts.",
      reviewPoint: "Two-week operational review of resolution rate and customer feedback.",
    },
  ],
  investmentModel: {
    modelSummary:
      "Fixed-scope setup and integration fee covering architecture, knowledge engineering, and testing; ongoing support covers model monitoring and transcript audits.",
    costDrivers: [
      "Number of telephony channels (voice phone lines, WhatsApp, web chat)",
      "Inbound call and conversation volume per month",
      "Complexity of CRM and booking software integrations",
      "Multilingual translation and dialect support requirements",
    ],
    externalCharges: [
      "Telephony provider charges (Twilio / carrier minutes per call)",
      "LLM inference API tokens (OpenAI, Anthropic, or chosen provider)",
      "Meta WhatsApp conversation fees for business-initiated templates",
    ],
  },
  faqs: [
    {
      question: "Can we use our existing business telephone number?",
      answer:
        "Yes. In most setups, we configure conditional call forwarding from your existing carrier to an automation SIP trunk or Twilio number. You do not need to abandon your published business phone number.",
    },
    {
      question: "How does the assistant check real-time calendar availability?",
      answer:
        "The assistant connects via secured API to your scheduling tool (such as Google Calendar or Cal.com), checking current busy/free slots and applying your buffers before confirming a booking.",
    },
    {
      question: "What happens when a caller asks something outside the approved knowledge base?",
      answer:
        "The system acknowledges the boundary honestly ('I don't have that specific information in my records'), takes the caller's contact details, and immediately dispatches a notification or transfers the call to a designated staff member.",
    },
    {
      question: "Can the assistant speak languages other than English?",
      answer:
        "Yes, but multi-language capabilities must be evaluated and tested during discovery. While modern models handle multiple languages well, domain-specific terminology and regional accents require rigorous simulation before launch.",
    },
    {
      question: "Are there unexpected monthly usage fees?",
      answer:
        "We maintain clear cost separation: our studio invoice covers engineering, monitoring, and updates. Usage fees from telephony carriers (minutes) and AI inference (tokens) are billed directly to your accounts at transparent cost.",
    },
    {
      question: "How do we update business information like hours or pricing changes?",
      answer:
        "We store knowledge in a clean, versioned document format. When you have updates, submit them through our agreed change process, and we update the grounding dataset with immediate validation.",
    },
  ],
  relatedServices: [
    {
      slug: "workflow-automation",
      reason: "Connect call outcomes directly to CRM tasks, invoices, or team Slack channels.",
    },
    {
      slug: "websites-admin-dashboards",
      reason: "Embed web chat into a fast site and provide a private dashboard for call logs.",
    },
  ],
  ctaText: "Plan my voice or chat assistant",
  demoSlug: "booking-flow",
};

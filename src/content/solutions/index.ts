import type { SolutionItem, SolutionSlug } from "@/types/content";

export const retailPharmacySolution: SolutionItem = {
  slug: "retail-pharmacy",
  title: "Retail & Pharmacy Operations",
  h1: "Connect your counter, stockroom and online store.",
  summary:
    "A unified operational system engineered for pharmacies, grocery stores, and retail boutiques balancing fast counter checkout, batch and expiry tracking, and branch inventory.",
  targetAudience:
    "Independent pharmacies, multi-store retailers, cosmetic stores, and apparel boutiques handling hundreds of daily walk-in customers and growing online orders.",
  problems: [
    {
      title: "Slow Counter Checkout & Price Memory Reliance",
      description:
        "Cashiers calculating totals manually from printed price sheets cause long customer lines and costly cashier shortages.",
    },
    {
      title: "Expired Stock Loss & Uncontrolled Shrinkage",
      description:
        "Without automated batch and expiration tracking, expired medicine or perishable stock sits undiscovered on shelves, resulting in total write-offs.",
    },
    {
      title: "Disconnected Storefront & Online Inventory",
      description:
        "Customers order products online that were sold out hours earlier in the physical store, causing frustrating cancellations.",
    },
  ],
  workflow: [
    {
      step: 1,
      title: "Goods Intake & Barcode Labeling",
      description:
        "Shipments from suppliers are received, cost-averaged, tagged with batch numbers and expiration dates, and labeled with thermal barcode stickers.",
    },
    {
      step: 2,
      title: "Sub-Second Counter Billing",
      description:
        "Cashier scans items with a handheld barcode scanner. Subtotals, tax rules, and batch FEFO (First-Expiry-First-Out) are calculated instantly.",
    },
    {
      step: 3,
      title: "Synchronized Stock Decrement",
      description:
        "Counter sales immediately decrease available stock across the store network and mark items out-of-stock on the web storefront.",
    },
    {
      step: 4,
      title: "Reorder Trigger & Supplier PO",
      description:
        "When stock falls below agreed safety thresholds, the system flags a recommended purchase order for manager sign-off.",
      humanTouchpoint: "Procurement manager reviews suggested quantities and authorizes supplier dispatch.",
    },
    {
      step: 5,
      title: "Daily Register Audit & Reconciliation",
      description:
        "Cashiers perform blind end-of-day register drawer counts; variances are logged with manager sign-off.",
    },
  ],
  recommendedServices: [
    {
      slug: "pos-retail-management",
      role: "Core billing software, barcode generation, and multi-branch inventory tracking.",
    },
    {
      slug: "ecommerce-development",
      role: "Digital storefront with live stock availability and local delivery checkout.",
    },
    {
      slug: "workflow-automation",
      role: "Automated low-stock supplier reorder notifications and daily manager sales digests.",
    },
  ],
  rolloutInputs: [
    "Clean inventory master list with current prices, barcodes, and stock levels",
    "Hardware specifications for receipt printers, cash drawers, and barcode scanners",
    "Staff cashier list and role permissions (cashier vs store supervisor)",
    "Supplier contact list and reorder pack unit sizes",
  ],
  faqs: [
    {
      question: "Can this system track medicine batches and expiration dates for pharmacies?",
      answer:
        "Yes. In pharmacy mode, stock entries require batch numbers and expiration dates. During billing, the system highlights expiring batches first (FEFO) and blocks sales of expired medicine completely.",
    },
    {
      question: "Can we use barcode scanners and thermal printers we already own?",
      answer:
        "In most cases, yes. Standard USB/Bluetooth ESC/POS thermal printers (Epson, Star, Xprinter) and USB barcode scanners are supported out of the box.",
    },
    {
      question: "What happens during a sudden internet outage?",
      answer:
        "Terminals cache the product database locally. Cashiers continue scanning items and printing paper receipts offline. When internet connectivity returns, sales sync seamlessly to the central database.",
    },
    {
      question: "How long does staff training take?",
      answer:
        "Because our checkout interface is designed for simplicity, cashiers typically become proficient within a single 45-minute training session.",
    },
    {
      question: "Can we manage multiple retail branch stores from one login?",
      answer:
        "Yes. Store owners and managers have a central dashboard showing real-time sales, inventory levels, and transfer requests across all store locations.",
    },
  ],
  ctaText: "Discuss retail & pharmacy systems",
  demoSlug: "retail-pos",
};

export const clinicsAppointmentsSolution: SolutionItem = {
  slug: "clinics-appointments",
  title: "Clinics & Appointment Practices",
  h1: "Make enquiries and scheduling easier to manage.",
  summary:
    "Professional web, scheduling, and communication automation tailored for medical clinics, dental practices, wellness centers, and consulting studios.",
  targetAudience:
    "Doctors, dentists, physical therapists, veterinary clinics, and professional consultants who need automated scheduling and patient enquiry capture without administrative chaos.",
  problems: [
    {
      title: "Phone Lines Jammed with Routine Inquiries",
      description:
        "Receptionists spend half their day answering basic questions about hours, fees, and location instead of greeting in-person patients.",
    },
    {
      title: "High Appointment No-Show Rates",
      description:
        "Without automated multi-channel SMS and WhatsApp appointment reminders, up to 25% of booked time slots are lost to absent clients.",
    },
    {
      title: "Missed After-Hours Inquiries",
      description:
        "Patients looking for weekend or evening appointments abandon booking when no one answers the clinic telephone.",
    },
  ],
  workflow: [
    {
      step: 1,
      title: "Patient Discovery & Clinic Website",
      description:
        "Prospective patient discovers the clinic via Google Maps or website search, finding clear doctor profiles, clinic hours, and verified fees.",
    },
    {
      step: 2,
      title: "Interactive Slot Selection",
      description:
        "Patient selects desired practitioner, service category, and convenient date/time slot from live, real-time availability.",
    },
    {
      step: 3,
      title: "Administrative Intake Confirmation",
      description:
        "System captures patient name and contact details, sending an immediate confirmation email and calendar invitation.",
      humanTouchpoint: "Clinic receptionist reviews the daily intake manifest and allocates treatment rooms.",
    },
    {
      step: 4,
      title: "Automated 24-Hour & 2-Hour Reminders",
      description:
        "Automated WhatsApp/SMS reminders give the patient a 1-tap option to confirm or request rescheduling.",
    },
    {
      step: 5,
      title: "Post-Visit Follow-Up & Feedback",
      description:
        "Following the completed appointment, an automated message invites the patient to leave an honest Google review.",
    },
  ],
  recommendedServices: [
    {
      slug: "ai-voice-chat-automation",
      role: "24/7 receptionist answering routine clinic FAQs and booking appointments.",
    },
    {
      slug: "websites-admin-dashboards",
      role: "Fast, reassuring clinic website with doctor bios and patient booking portal.",
    },
    {
      slug: "seo-google-business-profile",
      role: "Dominant local Google Maps visibility for patients searching in your area.",
    },
  ],
  rolloutInputs: [
    "Practitioner weekly schedules, room availability, and appointment durations",
    "List of standard clinic services, consultation pricing, and preparation guidelines",
    "Clinic contact phone numbers for emergency escalation and live transfer",
    "Google Business Profile access for local search setup",
  ],
  faqs: [
    {
      question: "Does the system collect confidential medical records or clinical data?",
      answer:
        "No. Our solutions focus purely on administrative scheduling, contact intake, and appointment reminders. We do not store medical charts, diagnostic records, or clinical notes.",
    },
    {
      question: "Can patients reschedule or cancel appointments on their own?",
      answer:
        "Yes, subject to your clinic's advance notice policy. Confirmation emails and WhatsApp messages include a secure link allowing patients to select a new slot without calling reception.",
    },
    {
      question: "How does the assistant handle patient emergencies?",
      answer:
        "The assistant is explicitly programmed with strict safety guardrails. If a user describes emergency symptoms, it immediately advises them to seek emergency services or call an urgent hospital line.",
    },
    {
      question: "Can multiple practitioners maintain different schedules and locations?",
      answer:
        "Yes. Each doctor or therapist can have distinct working hours, appointment durations, and location schedules, preventing double-bookings.",
    },
    {
      question: "How are WhatsApp reminders dispatched to patients?",
      answer:
        "Reminders are sent via the official Meta WhatsApp Business API using approved template messages, ensuring high deliverability and compliance.",
    },
  ],
  ctaText: "Plan appointment automation",
  demoSlug: "booking-flow",
};

export const ecommerceBrandsSolution: SolutionItem = {
  slug: "ecommerce-brands",
  title: "E-commerce & D2C Brands",
  h1: "Connect your storefront to the work behind every order.",
  summary:
    "End-to-end commerce architecture connecting customer-facing mobile shopping with real-time inventory, local courier delivery, and customer retention.",
  targetAudience:
    "Direct-to-consumer apparel, beauty, electronics, and consumer packaged goods brands seeking higher mobile conversion rates and smooth fulfillment.",
  problems: [
    {
      title: "High Checkout Abandonment on Mobile Devices",
      description:
        "Cluttered multi-page checkouts and sluggish page speeds cause mobile shoppers to drop off right before payment.",
    },
    {
      title: "Cash on Delivery Fake Orders & High Returns",
      description:
        "Unverified COD orders lead to high courier delivery failure rates (RTO), wasting shipping fees on fake or canceled packages.",
    },
    {
      title: "Manual Courier Booking & Tracking Friction",
      description:
        "Fulfillment teams spending hours manually generating airway bills on courier portals delays dispatch and increases errors.",
    },
  ],
  workflow: [
    {
      step: 1,
      title: "Sub-Second Mobile Browsing",
      description:
        "Shopper lands on clean, high-speed collection pages with instant search, clear variant pickers, and rapid image galleries.",
    },
    {
      step: 2,
      title: "Streamlined One-Page Checkout",
      description:
        "Shopper completes purchase via card, digital wallet, or Cash on Delivery (with optional instant SMS OTP confirmation).",
    },
    {
      step: 3,
      title: "Automated Courier Booking & Slip Generation",
      description:
        "Confirmed orders instantly generate parcel booking in the courier portal, printing shipping labels with barcode tracking.",
      humanTouchpoint: "Warehouse staff pick items, scan barcode verification, and hand parcels to the courier driver.",
    },
    {
      step: 4,
      title: "Customer WhatsApp Order Tracking",
      description:
        "Customer receives automated WhatsApp updates at dispatch, out-for-delivery, and completed delivery milestones.",
    },
    {
      step: 5,
      title: "Automated Post-Purchase Retention",
      description:
        "Automated email sequence invites product reviews and shares tailored replenishment recommendations 14 days later.",
    },
  ],
  recommendedServices: [
    {
      slug: "ecommerce-development",
      role: "High-performance storefront, optimized checkout, and courier API integration.",
    },
    {
      slug: "social-media-marketing",
      role: "Catalog-driven ad campaigns and creator content that drives qualified buyers.",
    },
    {
      slug: "workflow-automation",
      role: "Fulfillment automation, COD verification, and automated customer notifications.",
    },
  ],
  rolloutInputs: [
    "Product catalog with variants, high-res photography, and stock counts",
    "Corporate courier account credentials (Trax, Leopard, TCS, DHL, etc.)",
    "Payment gateway merchant keys and banking details",
    "Brand visual assets, packaging guidelines, and return policy rules",
  ],
  faqs: [
    {
      question: "How do you reduce Cash on Delivery (COD) return-to-origin (RTO) rates?",
      answer:
        "We implement automated phone/SMS verification for first-time COD buyers, flag incomplete addresses before dispatch, and send automated WhatsApp delivery day alerts so customers have cash ready.",
    },
    {
      question: "Can our storefront handle thousands of concurrent shoppers during sales events?",
      answer:
        "Yes. We build on battle-tested infrastructure (Shopify Plus or serverless Next.js edge networks) engineered to handle sudden viral traffic spikes without crashing.",
    },
    {
      question: "How is in-store retail stock synchronized with the online store?",
      answer:
        "We configure real-time webhooks connecting your POS and online catalog. When a unit sells in-store, online inventory is decremented within seconds, preventing accidental overselling.",
    },
    {
      question: "Can you migrate our existing store from WooCommerce or Magento?",
      answer:
        "Yes. We carry out complete data migrations covering customer accounts, order history, and product catalogs, with 301 redirects for every old product URL to retain search rankings.",
    },
    {
      question: "Do you integrate with regional courier tracking APIs?",
      answer:
        "Yes. We integrate directly with major regional logistics providers for automated booking, bulk airway bill (AWB) printing, and live tracking status callbacks.",
    },
  ],
  ctaText: "Scale your e-commerce brand",
  demoSlug: "ecommerce-store",
};

export const serviceBusinessesSolution: SolutionItem = {
  slug: "service-businesses",
  title: "Professional & Field Services",
  h1: "Turn interest into organised enquiries and bookings.",
  summary:
    "Lead qualification, instant quote generation, and operational job dispatch tailored for contractors, consultants, agencies, and maintenance companies.",
  targetAudience:
    "HVAC and electrical contractors, corporate legal and accounting firms, creative design agencies, and home maintenance businesses.",
  problems: [
    {
      title: "Delayed Follow-Ups Costing Deals",
      description:
        "High-intent website enquiries sit in unmonitored email inboxes for 24-48 hours, by which time the client has booked a competitor.",
    },
    {
      title: "Wasting Time on Unqualified Leads",
      description:
        "Sales teams spend hours on discovery calls with prospects whose budgets or timelines are completely misaligned with your minimums.",
    },
    {
      title: "Manual Job Scheduling & Invoice Delays",
      description:
        "Technicians or consultants finish assignments but delay submitting notes, causing delayed client invoicing and cash flow gaps.",
    },
  ],
  workflow: [
    {
      step: 1,
      title: "Targeted Search & Social Lead Capture",
      description:
        "Prospective client lands on a dedicated service page explaining your approach, pricing framework, and service area.",
    },
    {
      step: 2,
      title: "Structured Intake & Qualification",
      description:
        "Short, interactive form captures project scope, timeline, and budget, instantly categorizing lead tier.",
    },
    {
      step: 3,
      title: "Instant Staff Notification & Lead Assignment",
      description:
        "CRM automatically creates deal card, notifies the right account manager on Slack/phone, and sends the client a confirmation.",
      humanTouchpoint: "Account manager reviews submitted scope notes and calls or sends an approved proposal.",
    },
    {
      step: 4,
      title: "Digital Proposal & E-Signature",
      description:
        "Client receives interactive proposal, signs agreement digitally, and pays initial deposit online.",
    },
    {
      step: 5,
      title: "Automated Onboarding & Kickoff",
      description:
        "Signed contracts trigger project board creation, welcome email dispatch, and calendar booking for project kickoff.",
    },
  ],
  recommendedServices: [
    {
      slug: "websites-admin-dashboards",
      role: "High-trust service website and internal deal-tracking operational dashboard.",
    },
    {
      slug: "workflow-automation",
      role: "Instant lead routing, proposal generation, and onboarding sequences.",
    },
    {
      slug: "seo-google-business-profile",
      role: "Local search presence capturing high-intent commercial clients searching nearby.",
    },
  ],
  rolloutInputs: [
    "Service catalogue, minimum project sizes, and target customer profiles",
    "Existing lead capture forms, CRM accounts, and proposal templates",
    "Staff sales rep territories, specialities, and notification channels",
    "Standard engagement contract clauses and payment schedule milestones",
  ],
  faqs: [
    {
      question: "How quickly does our team get notified when a high-value lead submits a form?",
      answer:
        "Within seconds. Our automation sends immediate Slack, SMS, or email alerts with the lead's contact details, budget range, and project requirements.",
    },
    {
      question: "Can the system filter out inquiries that don't meet our budget minimums?",
      answer:
        "Yes. We configure qualification logic. Prospects below your minimum threshold receive a polite automated referral or guide, while high-value prospects are routed directly to senior sales staff.",
    },
    {
      question: "Can we automate client proposals and contracts?",
      answer:
        "Yes. Deal stages in your CRM can trigger pre-filled digital proposals and e-signature contracts, speeding up deal closing from days to minutes.",
    },
    {
      question: "Can this system integrate with QuickBooks or Xero for client invoicing?",
      answer:
        "Yes. When a client signs a proposal, the system automatically creates the customer profile and generates a draft or active invoice in your accounting software.",
    },
    {
      question: "Who manages the system once it is set up?",
      answer:
        "Your everyday operations run smoothly inside the tools your team already knows (CRM, email, Slack). We provide full documentation and remain on standby for updates.",
    },
  ],
  ctaText: "Streamline your service business",
  demoSlug: "admin-dashboard",
};

export const allSolutions: SolutionItem[] = [
  retailPharmacySolution,
  clinicsAppointmentsSolution,
  ecommerceBrandsSolution,
  serviceBusinessesSolution,
];

export const solutionsMap: Record<SolutionSlug, SolutionItem> = {
  "retail-pharmacy": retailPharmacySolution,
  "clinics-appointments": clinicsAppointmentsSolution,
  "ecommerce-brands": ecommerceBrandsSolution,
  "service-businesses": serviceBusinessesSolution,
};

export function getSolutionBySlug(slug: string): SolutionItem | undefined {
  if (slug in solutionsMap) {
    return solutionsMap[slug as SolutionSlug];
  }
  return undefined;
}

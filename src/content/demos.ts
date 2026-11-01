import type { DemoItem, DemoSlug } from "@/types/content";

export const allDemos: DemoItem[] = [
  {
    slug: "admin-dashboard",
    title: "Operations & Order Management Dashboard",
    category: "Internal Tooling & Portals",
    summary:
      "A working simulation of an operations control panel featuring live search, multi-status filtering, responsive record inspection, and derived summary metrics.",
    task: "Inspect recent incoming orders, filter by dispatch status, and open order details, and update a sample status.",
    mode: "Interactive simulation with synthetic customer records.",
    limitations: [
      "All customer names, addresses, and order values are synthetic demonstration records.",
      "Changes to record statuses or search queries are stored purely in local browser memory and reset on reload.",
      "Does not connect to a live SQL database or transmit production updates.",
    ],
    productionConnections: [
      "PostgreSQL or MySQL relational database via authenticated Prisma / Drizzle ORM.",
      "Role-Based Access Control (RBAC) authentication via OAuth / enterprise SSO.",
      "Live webhook alerts to Slack or Microsoft Teams for urgent status changes.",
      "Automated CSV/Excel bulk export jobs queued on background Redis workers.",
    ],
    relatedServiceSlug: "websites-admin-dashboards",
  },
  {
    slug: "retail-pos",
    title: "Retail Counter POS & Barcode Checkout",
    category: "Point of Sale & Inventory",
    summary:
      "A working simulation of a fast retail billing counter featuring barcode lookup, integer-based currency math, stock deduction, and a local receipt preview.",
    task: "Scan sample product barcodes or click items to add them to the ticket, adjust quantities, execute a simulated cash sale, and review the receipt.",
    mode: "Interactive simulation with integer minor-currency math and local inventory tracking.",
    limitations: [
      "All currency math is computed in minor currency units (cents / paisas) to eliminate floating-point rounding errors.",
      "Inventory deductions persist only in your current browser session until reset.",
      "Does not open a physical cash drawer or submit tax invoices to government fiscal authorities.",
    ],
    productionConnections: [
      "Direct USB/Ethernet connection to ESC/POS thermal receipt printers and cash drawer solenoids.",
      "Central retail management server synchronizing stock across multiple physical branches.",
      "Barcode sticker label printers for newly received inventory stock.",
      "Integrated credit card EMV chip-and-PIN terminal payments via bank API.",
    ],
    relatedServiceSlug: "pos-retail-management",
  },
  {
    slug: "ecommerce-store",
    title: "E-commerce Storefront & Mobile Checkout",
    category: "Digital Storefronts",
    summary:
      "A working simulation of a modern consumer storefront featuring attribute variant selection, live subtotal calculation, and preview checkout flow.",
    task: "Browse products, select product options, add items to the shopping basket, review line items, and navigate through the simulated checkout flow.",
    mode: "Interactive demonstration with synthetic product catalog and preview checkout.",
    limitations: [
      "Checkout is strictly an illustrative simulation; no credit cards, personal addresses, or live payments are accepted.",
      "Cart state is stored locally in browser session memory.",
      "Does not dispatch parcels or trigger third-party courier pickup requests.",
    ],
    productionConnections: [
      "Shopify Storefront API, MedusaJS, or headless Next.js Commerce engine.",
      "Direct payment gateway settlement via Stripe, Apple Pay, or Cash on Delivery verification.",
      "Automated courier API integration generating live Airway Bills (Trax, Leopard, DHL).",
      "Real-time inventory decrementing synced across physical retail store counters.",
    ],
    relatedServiceSlug: "ecommerce-development",
  },
  {
    slug: "booking-flow",
    title: "AI Receptionist & Appointment Scheduling Flow",
    category: "Conversational Automation",
    summary:
      "A scripted interactive simulation demonstrating how an automated assistant greets clients, answers routine questions, schedules an appointment, or initiates a human handoff.",
    task: "Select common customer scenarios (e.g. Schedule consultation, Ask pricing, or Request human handoff) and observe how the assistant responds.",
    mode: "Scripted dialogue simulation with real-time slot selection and booking confirmation.",
    limitations: [
      "This is a deterministic scripted demonstration of conversational workflows; it does not place live telephone calls or execute unvetted LLM queries.",
      "Dates and available slots are illustrative demonstration data.",
      "No real personal details or clinical medical information are requested or stored.",
    ],
    productionConnections: [
      "Twilio Voice SIP trunking or WebRTC audio streaming for real-time voice conversations.",
      "Live calendar synchronization with Google Calendar, Cal.com, or Microsoft Outlook.",
      "Instant SMS/WhatsApp appointment confirmation and reminder delivery via Meta API.",
      "Immediate live-call transfer to on-duty staff phone numbers when escalation criteria are met.",
    ],
    relatedServiceSlug: "ai-voice-chat-automation",
  },
];

export const demosMap: Record<DemoSlug, DemoItem> = {
  "admin-dashboard": allDemos[0],
  "retail-pos": allDemos[1],
  "ecommerce-store": allDemos[2],
  "booking-flow": allDemos[3],
};

export function getDemoBySlug(slug: string): DemoItem | undefined {
  if (slug in demosMap) {
    return demosMap[slug as DemoSlug];
  }
  return undefined;
}

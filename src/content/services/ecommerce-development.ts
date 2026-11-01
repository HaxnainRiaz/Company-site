import type { ServiceItem } from "@/types/content";

export const ecommerceDevelopment: ServiceItem = {
  slug: "ecommerce-development",
  title: "E-commerce Development",
  shortTitle: "E-commerce",
  group: "build-sell",
  h1: "Build an online store that works from discovery to delivery.",
  intro:
    "We plan and build online stores around your catalogue, checkout, payments and fulfilment process, with a platform suited to your needs.",
  outcome:
    "Launch an online storefront with fast mobile navigation, seamless checkout, reliable inventory synchronization, and courier tracking.",
  audience: [
    "Established brick-and-mortar retailers expanding into online retail and multi-channel fulfillment.",
    "D2C brands dealing with high cart abandonment on slow, cluttered e-commerce templates.",
    "Wholesale or specialized distributors needing B2B pricing tiers, bulk order matrices, and custom invoice checkouts.",
  ],
  situations: [
    "Shoppers browse on mobile devices but abandon their carts because checkout requires unnecessary registration steps or freezes.",
    "Store staff accidentally sell items online that were already purchased in-store earlier the same day.",
    "Fulfillment teams waste hours manually typing customer shipping addresses into courier portal software.",
  ],
  subservices: [
    {
      title: "Objective Platform Selection & Strategy",
      description:
        "Evaluating your SKU count, transaction volume, and operational team skills to recommend Shopify, WooCommerce, or headless Next.js.",
    },
    {
      title: "Mobile-First Storefront UX Design",
      description:
        "Responsive, thumb-friendly navigation, quick-view drawers, persistent add-to-cart bars, and distraction-free checkout flows.",
    },
    {
      title: "Structured Catalogue & Product Taxonomy",
      description:
        "Logical collection architectures, multi-attribute variants (size, color, material), and breadcrumb navigation designed for shoppers.",
    },
    {
      title: "Fast Faceted Search & Filtering",
      description:
        "Instant client-side and server-side product filtering by price, availability, brand, and specifications with instant results.",
    },
    {
      title: "Payment Gateway & Cash on Delivery (COD)",
      description:
        "Integration of Stripe, credit card processors, local bank payment switches, and robust Cash on Delivery workflows.",
    },
    {
      title: "Regional Courier & Shipping Automation",
      description:
        "Connecting courier APIs (Trax, Leopard, TCS, DHL, FedEx) for automatic shipping label generation and live parcel tracking links.",
    },
    {
      title: "In-Store POS & Real-Time Inventory Sync",
      description:
        "Two-way stock reservation locking that updates warehouse numbers immediately when an item sells either online or in-store.",
    },
    {
      title: "Order Management & Fulfillment Portal",
      description:
        "Clear operational views for picking, packing, dispatch verification, and customer return tracking.",
    },
    {
      title: "Promotions, Bundles & Discount Engine",
      description:
        "Automated tier pricing, buy-one-get-one promotions, coupon codes with usage limits, and customer loyalty points.",
    },
    {
      title: "Abandoned Cart & Customer Retention Flows",
      description:
        "Targeted automated email and WhatsApp reminders recovering unfinished customer checkouts with dynamic cart links.",
    },
    {
      title: "E-Commerce Analytics & Conversion Tracking",
      description:
        "Complete Google Analytics 4 e-commerce event setup (view_item, add_to_cart, begin_checkout, purchase) and Meta Pixel tracking.",
    },
    {
      title: "Catalogue Migration & SEO Preservation",
      description:
        "Zero-downtime migration of customer accounts, historical orders, and product URLs with 301 redirects to protect search rankings.",
    },
  ],
  deliverables: [
    "Comprehensive e-commerce requirements and platform architecture blueprint",
    "Custom responsive storefront design matching brand guidelines across mobile and desktop",
    "Configured checkout, tax calculation rules, and payment gateway sandbox validation",
    "Courier shipping integration and automated label printing setup",
    "Migrated customer, product, and historical inventory database",
    "Staff order fulfillment guide and post-launch operational training session",
  ],
  customerInputs: [
    "Clean product catalogue spreadsheet (titles, descriptions, SKUs, prices, inventory levels)",
    "High-resolution product photography with transparent or clean backgrounds",
    "Approved payment gateway merchant account credentials",
    "Courier corporate account credentials and shipping rate matrices",
  ],
  integrations: [
    {
      name: "E-Commerce Engines (Shopify, WooCommerce, Medusa, Next.js Commerce)",
      prerequisite: "Active store account with admin API tokens and permissions.",
    },
    {
      name: "Payment Gateways (Stripe, Paymob, Checkout.com, 2Checkout)",
      prerequisite: "Verified corporate merchant account with API secret keys.",
    },
    {
      name: "Logistics & Couriers (Trax, Leopards, TCS, ShipStation, EasyPost)",
      prerequisite: "Corporate courier account with active API booking credentials.",
    },
    {
      name: "Email Marketing (Klaviyo, Mailchimp, Omnisend)",
      prerequisite: "Account API key and verified sender domain DNS records.",
    },
  ],
  deliverySteps: [
    {
      step: 1,
      title: "Catalogue & Fulfillment Architecture",
      output: "Platform recommendation, data schema, and payment/courier feasibility assessment.",
      reviewPoint: "Owner confirms platform choice and integration roadmap.",
    },
    {
      step: 2,
      title: "Storefront UX & Design Prototyping",
      output: "High-fidelity mockups of homepage, collection pages, product pages, and checkout.",
      reviewPoint: "Design review approving mobile layout, typography, and color tokens.",
    },
    {
      step: 3,
      title: "Theme & Store Development",
      output: "Functional staging store with working cart, filters, and dynamic calculations.",
      reviewPoint: "Interactive testing of product variant selection and cart actions.",
    },
    {
      step: 4,
      title: "Payment, Courier & Stock Integration",
      output: "Tested sandbox checkout transactions, label generation, and stock decrement.",
      reviewPoint: "End-to-end simulated purchase with sample invoice and tracking link.",
    },
    {
      step: 5,
      title: "Data Migration, Cutover & Launch",
      output: "Import of live stock, DNS cutover, SSL activation, and live order monitoring.",
      reviewPoint: "Post-launch verification of first live test transaction.",
    },
  ],
  investmentModel: {
    modelSummary:
      "Fixed project investment structured across discovery/design, platform build, and integration; optional monthly maintenance retainer for continuous CRO and updates.",
    costDrivers: [
      "Choice of platform (custom headless Next.js vs standard Shopify / WooCommerce)",
      "Total number of products and depth of attribute variant combinations",
      "Customisation requirements for checkout and order picking workflows",
      "Number of connected third-party systems (ERP, retail POS, custom courier APIs)",
    ],
    externalCharges: [
      "Platform subscription fees (Shopify monthly plan or web hosting)",
      "Payment gateway transaction fees (percentage per successful credit card charge)",
      "Paid third-party apps or plugins if specific specialized features are requested",
    ],
  },
  faqs: [
    {
      question: "Which platform should we choose: Shopify, WooCommerce, or custom Next.js?",
      answer:
        "We guide you objectively. Shopify is ideal for standard direct-to-consumer retail wanting low maintenance. WooCommerce suits content-heavy businesses wanting self-hosted control. Headless Next.js is recommended for high-volume stores needing sub-second speeds and custom workflows.",
    },
    {
      question: "Can we migrate our existing customer data and order history?",
      answer:
        "Yes. We export, sanitize, and import customer profiles, address books, product catalogs, and historical orders. We also implement 301 redirects for every legacy URL to preserve search rankings.",
    },
    {
      question: "How do you handle Cash on Delivery (COD) and courier integration?",
      answer:
        "We configure COD with optional phone/SMS verification to prevent fraudulent orders. When an order is confirmed, our courier integration automatically books the parcel, generates shipping labels, and shares tracking codes with the buyer.",
    },
    {
      question: "Will our online store update stock levels automatically when items sell in-store?",
      answer:
        "Yes, provided your physical POS supports API inventory sync. We configure bidirectional synchronization so a sale in your physical store instantly decrements available inventory on your website.",
    },
    {
      question: "Are there unexpected monthly app subscription fees?",
      answer:
        "We intentionally avoid bloating your store with dozens of recurring paid apps. We code core features (such as currency selectors, size charts, and notification popups) natively into your theme to keep monthly overhead minimal.",
    },
    {
      question: "How do our staff manage orders after the store is live?",
      answer:
        "Your team receives a streamlined administrative interface. We conduct complete staff training showing your team how to review new orders, print shipping slips, mark packages dispatched, and handle customer returns.",
    },
  ],
  relatedServices: [
    {
      slug: "pos-retail-management",
      reason: "Connect online inventory directly to physical counter billing and warehouse stock.",
    },
    {
      slug: "seo-google-business-profile",
      reason: "Rank your product categories on Google to drive high-intent organic buyer traffic.",
    },
    {
      slug: "social-media-marketing",
      reason: "Run targeted product catalog ad campaigns that drive direct store purchases.",
    },
  ],
  ctaText: "Plan my online store",
  demoSlug: "ecommerce-store",
};

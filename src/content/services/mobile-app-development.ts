import type { ServiceItem } from "@/types/content";

export const mobileAppDevelopment: ServiceItem = {
  slug: "mobile-app-development",
  title: "Mobile App Development",
  shortTitle: "Mobile Apps",
  group: "build-sell",
  h1: "Turn your business idea into an app people can use.",
  intro:
    "We define a focused first release, design the user journey and build the app and integrations needed to support it.",
  outcome:
    "Deliver polished iOS and Android applications that delight frequent customers or empower field operations with offline capabilities.",
  audience: [
    "Businesses with repeat customer touchpoints (loyalty clubs, recurring bookings, on-demand services) that justify a home-screen icon.",
    "Companies with mobile field staff (technicians, delivery couriers, inspectors) who require camera, GPS, and offline data collection.",
    "Founders building and validating a focused Minimum Viable Product (MVP) for market testing.",
  ],
  situations: [
    "Customers frequently book appointments or reorder products and find opening a mobile browser slow and cumbersome.",
    "Field service technicians lose signal in basements or rural areas, preventing them from completing work orders on a web browser.",
    "An entrepreneur has a validated digital service idea but lacks the technical architecture to build and deploy cross-platform apps.",
  ],
  subservices: [
    {
      title: "MVP Scope & User Journey Discovery",
      description:
        "Trimming feature bloat to prioritize the essential, high-impact user flows required for a successful Version 1 release.",
    },
    {
      title: "Interactive Wireframes & UX Prototyping",
      description:
        "Designing clickable Figma prototypes that test gesture navigation, visual hierarchy, and user feedback before engineering begins.",
    },
    {
      title: "Cross-Platform React Native Development",
      description:
        "Building a unified, production-grade TypeScript codebase that delivers native performance on both iOS and Android simultaneously.",
    },
    {
      title: "Platform-Specific Native Enhancements",
      description:
        "Writing custom native modules when specific hardware integrations (BLE peripherals, biometric sensors) demand platform code.",
    },
    {
      title: "Secure Authentication & User Accounts",
      description:
        "Frictionless login experiences via Apple Sign-In, Google One-Tap, SMS OTP verification, and biometric Face ID/Touch ID access.",
    },
    {
      title: "Push Notifications & Message Center",
      description:
        "Targeted, transactional push notifications alerting users to order milestones, appointment reminders, and account alerts.",
    },
    {
      title: "Offline Storage & Background Sync",
      description:
        "Local database caching (SQLite / WatermelonDB) allowing users to create entries offline that sync automatically when reconnected.",
    },
    {
      title: "In-App Payments & Mobile Checkout",
      description:
        "Seamless digital checkout integrations with Apple Pay, Google Pay, Stripe SDK, and supported regional payment methods.",
    },
    {
      title: "Device Hardware Integration",
      description:
        "Utilising device GPS for live location tracking, camera for barcode scanning and photo uploads, and Bluetooth for peripherals.",
    },
    {
      title: "Crash Reporting & Performance Telemetry",
      description:
        "Integrating Sentry or Datadog to capture real-time crash stack traces, slow render frames, and battery efficiency metrics.",
    },
    {
      title: "App Store & Google Play Submission",
      description:
        "Handling App Store Connect and Google Play Console compliance, privacy manifest disclosures, screenshot assets, and review responses.",
    },
    {
      title: "Ongoing Maintenance & OS Version Updates",
      description:
        "Regular dependency updates ensuring compatibility with annual major iOS and Android operating system upgrades.",
    },
  ],
  deliverables: [
    "Prioritised MVP backlog and interactive clickable prototype",
    "Complete cross-platform source code repository with comprehensive build scripts",
    "Backend REST API endpoints and data schemas powering the mobile client",
    "Comprehensive QA testing report across physical iOS and Android test devices",
    "App Store and Google Play listing metadata, screenshots, and privacy policies",
    "App Store submission support through official approval and public release",
  ],
  customerInputs: [
    "Enrolment in the Apple Developer Program (Organization account) and Google Play Console",
    "Brand identity guidelines, vector iconography, and approved color palettes",
    "Business workflow definitions, user roles, and payment provider credentials",
    "Target device list and minimum supported operating system versions",
  ],
  integrations: [
    {
      name: "Apple Developer & Google Play Services",
      prerequisite: "Active paid developer organization accounts with administrative access.",
    },
    {
      name: "Push Notification Services (Firebase Cloud Messaging, OneSignal)",
      prerequisite: "Configured APNs authentication key (.p8) and FCM server tokens.",
    },
    {
      name: "Payment Gateways (Stripe SDK, Apple Pay, Google Pay)",
      prerequisite: "Merchant IDs configured in Apple Developer and verified payment gateway account.",
    },
    {
      name: "Backend Cloud Infrastructure (Supabase, AWS, Custom Node.js)",
      prerequisite: "Secure REST/GraphQL API server with SSL certificates and database models.",
    },
  ],
  deliverySteps: [
    {
      step: 1,
      title: "Product Discovery & User Journey",
      output: "Focussed feature specification, screen flow diagram, and architecture choice.",
      reviewPoint: "Owner confirms MVP feature list and explicitly excluded out-of-scope items.",
    },
    {
      step: 2,
      title: "UX/UI Design & Interactive Prototype",
      output: "Clickable Figma prototype demonstrating key user interactions.",
      reviewPoint: "Interactive review session testing navigation and ergonomics on mobile.",
    },
    {
      step: 3,
      title: "Core App Development & API Hookup",
      output: "Staging build distributed to client testers via TestFlight and Google Play Internal.",
      reviewPoint: "Testing session on physical devices validating data entry and auth.",
    },
    {
      step: 4,
      title: "Hardware Integration & Offline QA",
      output: "Completed features covering push notifications, offline storage, and payments.",
      reviewPoint: "Verification of offline data recovery and push alert delivery.",
    },
    {
      step: 5,
      title: "Store Submission & Production Release",
      output: "Approved listing on Apple App Store and Google Play Store.",
      reviewPoint: "Public download verification on clean test devices.",
    },
  ],
  investmentModel: {
    modelSummary:
      "Staged milestone investment covering prototyping, client build, backend API development, and store submission; optional ongoing support SLA.",
    costDrivers: [
      "Total number of distinct screen flows and unique user roles",
      "Need for complex offline synchronization and conflict resolution",
      "Custom hardware integration (Bluetooth devices, external sensors)",
      "Whether backend APIs already exist or must be built from scratch",
    ],
    externalCharges: [
      "Apple Developer Program annual fee ($99/year paid directly to Apple)",
      "Google Play Console one-time registration fee ($25 paid directly to Google)",
      "Backend hosting and server infrastructure (database and cloud compute)",
    ],
  },
  faqs: [
    {
      question: "Do we need a mobile app, or would a responsive web app be better?",
      answer:
        "We help you decide honestly. If your customers only visit once a month to read information, a fast responsive website is faster and far cheaper to build. An app is warranted when you need repeat engagement, push notifications, offline capabilities, or device sensor integration.",
    },
    {
      question: "Can one codebase run on both iOS and Android?",
      answer:
        "Yes. We use React Native with TypeScript, allowing up to 90% shared code across both platforms. This halves development and maintenance costs while delivering genuine native performance and platform-accurate UI.",
    },
    {
      question: "Can the mobile app connect to our existing website or database?",
      answer:
        "Yes. As long as your existing backend provides or can be extended with REST or GraphQL API endpoints, the mobile app connects directly to your existing database, ensuring data remains completely synchronized.",
    },
    {
      question: "What is included in an MVP (Minimum Viable Product)?",
      answer:
        "An MVP focuses strictly on the core problem your app solves. We identify the single most valuable workflow—such as finding a service and completing a booking—and polish it thoroughly, leaving secondary nice-to-have features for future updates.",
    },
    {
      question: "Who owns the developer accounts and store listings?",
      answer:
        "You own them entirely. We guide you through creating your own official Apple and Google organization accounts. The apps are published under your company name, and you retain all rights and customer relationships.",
    },
    {
      question: "Can you guarantee that Apple and Google will approve our app?",
      answer:
        "We build rigorously to Apple Human Interface Guidelines and Google Play Review Policies. While final approval rests with the store review teams, we handle all review responses and technical clarifications until your app is approved and live.",
    },
  ],
  relatedServices: [
    {
      slug: "websites-admin-dashboards",
      reason: "Deploy an administrative dashboard to manage app users, content, and transactions.",
    },
    {
      slug: "workflow-automation",
      reason: "Trigger automated notifications and backend sync jobs from mobile app actions.",
    },
    {
      slug: "ecommerce-development",
      reason: "Connect your mobile app directly to your centralized e-commerce product catalog.",
    },
  ],
  ctaText: "Plan my app",
};

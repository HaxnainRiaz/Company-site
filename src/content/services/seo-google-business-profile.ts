import type { ServiceItem } from "@/types/content";

export const seoGoogleBusinessProfile: ServiceItem = {
  slug: "seo-google-business-profile",
  title: "SEO & Google Business Profile",
  shortTitle: "SEO & GBP",
  group: "attract-grow",
  h1: "Help the right customers find your business.",
  intro:
    "We improve the technical foundations, content and local information behind your search presence, with clear priorities and reporting.",
  outcome:
    "Attract buyers actively searching for your specific products and services, without relying solely on paid ads or guessing search keywords.",
  audience: [
    "Eligible physical and service-area businesses seeking verified Google Business Profile visibility in local maps.",
    "B2B service providers and professional practices whose websites lack indexable, informative service pages.",
    "E-commerce brands seeking organic category and product visibility to lower customer acquisition costs.",
  ],
  situations: [
    "Potential customers in your immediate service area search Google Maps and find competitors with higher review counts and verified profiles.",
    "A company website was launched recently but remains completely unindexed or ranks poorly due to crawl errors and missing meta descriptions.",
    "Website traffic has plateaued because pages lack keyword-focused content that answers real customer buying questions.",
  ],
  subservices: [
    {
      title: "Technical Search Foundations Audit",
      description:
        "Comprehensive analysis of page rendering, mobile speed, crawl errors, robots.txt directives, and canonical tag integrity.",
    },
    {
      title: "Customer Intent & Keyword Research",
      description:
        "Identification of high-intent search terms that real buyers use when seeking your services, excluding vanity search terms.",
    },
    {
      title: "On-Page Hierarchy & Semantic Content",
      description:
        "Crafting descriptive title tags, H1/H2 structures, meta descriptions, and clean internal link networks across key landing pages.",
    },
    {
      title: "Helpful Service Guides & Content Architecture",
      description:
        "Authoring in-depth, decision-oriented service guides that educate prospective clients and answer common pre-purchase questions.",
    },
    {
      title: "E-Commerce Catalogue & Category SEO",
      description:
        "Structuring product categories, faceted filter parameters, and breadcrumb navigation to prevent duplicate content traps.",
    },
    {
      title: "Platform Migration & 301 Redirect Mapping",
      description:
        "Preserving hard-won organic authority during website rebuilds by auditing historical backlinks and mapping legacy URLs.",
    },
    {
      title: "GBP Setup, Eligibility & Verification Support",
      description:
        "Guiding qualifying in-person businesses through official Google Business Profile (formerly Google My Business / GMB) verification.",
    },
    {
      title: "Local Categories, Service Menus & Hours",
      description:
        "Configuring primary and secondary business categories, descriptive service lists, holiday hours, and high-resolution photos.",
    },
    {
      title: "Genuine Review Collection Strategy",
      description:
        "Establishing compliant post-service review request workflows via email and SMS that generate authentic customer feedback.",
    },
    {
      title: "NAP Consistency & Local Directory Citations",
      description:
        "Auditing and standardising your business Name, Address, and Phone number across key authoritative local directories.",
    },
    {
      title: "Google Search Console & Analytics Integration",
      description:
        "Setting up accurate sitemap submission, index monitoring, search query tracking, and conversion goal measurement.",
    },
    {
      title: "Monthly Enquiry & Visibility Reporting",
      description:
        "Clear monthly reports tracking impressions for target search queries, phone calls from Google Maps, and qualified form leads.",
    },
  ],
  deliverables: [
    "Comprehensive technical audit report with prioritised issue fixes",
    "Targeted keyword roadmap mapped to current and recommended site pages",
    "On-page optimisation guide (titles, meta copy, header hierarchies, image alt text)",
    "Fully verified and optimised Google Business Profile for eligible physical locations",
    "Sitemap validation and Google Search Console property verification",
    "Monthly organic search performance and lead attribution dashboard",
  ],
  customerInputs: [
    "Google Search Console and Google Analytics property access (or admin rights to configure them)",
    "Google Business Profile manager invitation for eligible physical storefronts or verified service areas",
    "Approved list of primary target services, service geographic areas, and business operating hours",
    "High-quality, genuine photography of your physical storefront, reception, and completed work",
  ],
  integrations: [
    {
      name: "Google Search Console & Bing Webmaster Tools",
      prerequisite: "Domain DNS TXT record or HTML tag verification rights.",
    },
    {
      name: "Google Business Profile API & Dashboard",
      prerequisite: "Legitimate physical business address with in-person customer interaction.",
    },
    {
      name: "Analytics Platforms (Google Analytics 4, Plausible)",
      prerequisite: "Measurement ID or tracking script embedded on the primary website.",
    },
    {
      name: "Local Citation Directories (Industry Directories, YellowPages, Bing Places)",
      prerequisite: "Verified legal business name, physical street address, and local phone number.",
    },
  ],
  deliverySteps: [
    {
      step: 1,
      title: "Search Foundation Audit & Baseline Setup",
      output: "Diagnostic report covering indexation health, speed bottlenecks, and current keyword ranks.",
      reviewPoint: "Technical review to approve priority code and metadata fixes.",
    },
    {
      step: 2,
      title: "Local Eligibility & GBP Verification",
      output: "Verified profile with verified categories, service listings, and photography.",
      reviewPoint: "Owner confirms business description, operating hours, and contact numbers.",
    },
    {
      step: 3,
      title: "On-Page Structural Optimisation",
      output: "Rewritten page titles, meta descriptions, heading structures, and schema markup.",
      reviewPoint: "Content review ensuring messaging remains brand-aligned and accurate.",
    },
    {
      step: 4,
      title: "Content Expansion & Internal Linking",
      output: "Publication of targeted service guides addressing common search customer queries.",
      reviewPoint: "Verification of information accuracy and conversion call-to-actions.",
    },
    {
      step: 5,
      title: "Ongoing Monitoring & Iteration",
      output: "Monthly ranking, search impressions, phone call clicks, and enquiry reviews.",
      reviewPoint: "Monthly strategy sync to identify new keyword opportunities.",
    },
  ],
  investmentModel: {
    modelSummary:
      "Initial technical foundation and setup audit followed by a structured monthly retainer covering on-page optimization, content additions, and profile management.",
    costDrivers: [
      "Total number of physical business branch locations needing Google Business Profiles",
      "Size and complexity of existing website catalogue (5 pages vs 500 pages)",
      "Competitive density of the target geographic market and service sector",
      "Scope of new content authoring and technical remediation required",
    ],
    externalCharges: [
      "Any paid citation directory listings if chosen by the client",
      "Third-party rank-tracking or search analytics subscriptions if dedicated accounts requested",
    ],
  },
  faqs: [
    {
      question: "What is the difference between Google Business Profile and Google My Business (GMB)?",
      answer:
        "They are the exact same platform. Google rebranded Google My Business (GMB) to Google Business Profile (GBP) in late 2021. We use the official current name, though older literature and search queries often still refer to GMB.",
    },
    {
      question: "Is every business eligible for a Google Business Profile listing?",
      answer:
        "No. Google strictly requires that businesses either have a physical storefront where customers visit them, or travel to meet customers directly within a defined service area. Purely online businesses or businesses using virtual mailboxes/PO boxes are ineligible under Google guidelines.",
    },
    {
      question: "Can you guarantee a number-one ranking on Google Search?",
      answer:
        "No ethical agency can guarantee a #1 ranking. Google's search algorithms use hundreds of proprietary factors that change continuously. We guarantee rigorous adherence to Google Search Essentials, transparent reporting, and solid technical foundations that steadily build visibility.",
    },
    {
      question: "Do we need to build a brand new website to improve our SEO?",
      answer:
        "Not necessarily. If your current website is fast, secure, and mobile-friendly, we can frequently optimise the existing pages, improve content hierarchy, and fix crawl errors without a complete rebuild.",
    },
    {
      question: "Can we purchase online reviews to boost our local profile?",
      answer:
        "Never. Purchasing fake reviews directly violates Google anti-spam guidelines, FTC regulations, and consumer protection laws. It risks total profile suspension. Instead, we implement compliant automated workflows to invite honest reviews from your real satisfied customers.",
    },
    {
      question: "How long does it typically take to see measurable SEO results?",
      answer:
        "Technical fixes and Google Business Profile updates can improve local map visibility within weeks. Broad organic search rankings for competitive terms typically require 3 to 6 months of steady content publishing and authority building.",
    },
  ],
  relatedServices: [
    {
      slug: "websites-admin-dashboards",
      reason: "Ensure your website loads fast and provides clear conversion paths for search visitors.",
    },
    {
      slug: "social-media-marketing",
      reason: "Complement search intent with active social proof and brand presence.",
    },
    {
      slug: "workflow-automation",
      reason: "Automate post-appointment review request emails to happy clients.",
    },
  ],
  ctaText: "Request a website and local search review",
};

import type { ServiceItem } from "@/types/content";

export const socialMediaMarketing: ServiceItem = {
  slug: "social-media-marketing",
  title: "Social Media Marketing",
  shortTitle: "Social Media",
  group: "attract-grow",
  h1: "Give your social channels a clear job in your business.",
  intro:
    "We plan content and campaigns around the audience you want to reach and the action you want them to take.",
  outcome:
    "Turn erratic posting into a predictable editorial process that builds commercial trust and delivers qualified customer leads.",
  audience: [
    "Businesses with dormant, erratic, or inconsistent social media accounts that harm brand credibility.",
    "Companies wanting a structured monthly content production calendar without hiring an expensive in-house creative team.",
    "Brands running digital ads that want direct attribution to real customer enquiries rather than vanity likes.",
  ],
  situations: [
    "A company posts randomly once every few weeks with no clear visual identity or distinct call-to-action.",
    "Paid advertisements generate plenty of cheap clicks and likes, but almost zero actual sales or qualified client inquiries.",
    "Customer direct messages and comments go unanswered for days because nobody owns the inbox triage process.",
  ],
  subservices: [
    {
      title: "Audience & Competitor Content Audit",
      description:
        "Analysing what your target customers care about, reviewing competitor blind spots, and identifying content themes with high commercial intent.",
    },
    {
      title: "Platform Selection & Positioning",
      description:
        "Focussing resources on the channels where your buyers actually spend time (LinkedIn for B2B, Instagram/Facebook for consumer retail).",
    },
    {
      title: "Editorial Strategy & Monthly Calendars",
      description:
        "Structuring content into educational pillars, customer case studies, and product highlights planned weeks in advance.",
    },
    {
      title: "Visual Design, Carousels & Infographics",
      description:
        "Custom, brand-aligned graphics and informative carousel slide decks engineered for clarity and high save/share rates.",
    },
    {
      title: "Short-Form Video Editing & Subtitles",
      description:
        "Editing customer interviews, behind-the-scenes footage, and product demos into dynamic reels and shorts with bold captions.",
    },
    {
      title: "Compelling Copywriting & Clear CTAs",
      description:
        "Drafting clear, readable captions that explain the benefit to the reader and invite a specific commercial next step.",
    },
    {
      title: "Editorial Approval & Scheduling Workflow",
      description:
        "Collaborative review boards where your leadership reviews and approves all assets and copy before scheduled automated publishing.",
    },
    {
      title: "Community Management & Message Triage",
      description:
        "Monitoring public comments and triaging direct messages, filtering spam, and routing sales questions directly to your team.",
    },
    {
      title: "Targeted Paid Social Advertising Campaigns",
      description:
        "Managing Meta (Facebook/Instagram) or LinkedIn sponsored campaigns focused strictly on lead generation and product conversions.",
    },
    {
      title: "Landing Page & Lead Form Alignment",
      description:
        "Ensuring the destination page or lead form exactly mirrors the promise made in the social post, preventing visitor bounce.",
    },
    {
      title: "Creative A/B Testing & Iteration",
      description:
        "Systematically testing hooks, creative angles, and headlines to identify top-performing combinations and lower acquisition costs.",
    },
    {
      title: "Enquiry-Focussed Monthly Reporting",
      description:
        "Transparent monthly reports reporting on qualified leads, cost-per-acquisition, and conversion metrics rather than vanity follower counts.",
    },
  ],
  deliverables: [
    "Comprehensive social media positioning and tone-of-voice guide",
    "Monthly content calendar with pre-approved publishing schedule",
    "Custom graphic templates and branded asset library",
    "Targeted paid advertising campaign setup and tracking pixel validation",
    "Community comment and DM escalation protocol document",
    "Monthly attribution performance report covering leads, spend, and engagement",
  ],
  customerInputs: [
    "Brand visual assets (logos, typography, color palettes, product imagery)",
    "Access to social media business accounts and Meta / LinkedIn Ad Managers",
    "Designated staff reviewer for monthly content approval sign-offs",
    "Customer service contact for technical or operational message escalations",
  ],
  integrations: [
    {
      name: "Social Media Platforms (Meta Business Suite, LinkedIn Page, YouTube)",
      prerequisite: "Admin or Partner access granted via official business manager tools.",
    },
    {
      name: "Social Scheduling Tools (Buffer, Hootsuite, Later, Publer)",
      prerequisite: "Active workspace subscription with connected channel profiles.",
    },
    {
      name: "Paid Ads Managers (Meta Ads Manager, LinkedIn Campaign Manager)",
      prerequisite: "Verified advertising account with corporate billing and payment method attached.",
    },
    {
      name: "Website Analytics & Tracking (Meta Pixel, LinkedIn Insight Tag, GA4)",
      prerequisite: "Tag manager or website access to verify event tracking and conversion goals.",
    },
  ],
  deliverySteps: [
    {
      step: 1,
      title: "Audience Audit & Brand Positioning",
      output: "Documented content strategy, platform focus, and creative style direction.",
      reviewPoint: "Owner confirms tone of voice, visual direction, and priority products.",
    },
    {
      step: 2,
      title: "Editorial Calendar & Template Creation",
      output: "First month's calendar of posts, copy, and reusable Canva/Figma templates.",
      reviewPoint: "Review and approval of specific post topics, captions, and creative.",
    },
    {
      step: 3,
      title: "Campaign Setup & Pixel Tracking",
      output: "Configured advertising account, audiences, and conversion tracking events.",
      reviewPoint: "Verification of test conversion event firing on website checkout/forms.",
    },
    {
      step: 4,
      title: "Scheduled Publishing & Active Triage",
      output: "Consistent content delivery and prompt triage of inbound user messages.",
      reviewPoint: "Weekly check-in on comment response quality and incoming lead inquiries.",
    },
    {
      step: 5,
      title: "Monthly Review & Creative Refinement",
      output: "Comprehensive performance review detailing top posts and cost-per-lead.",
      reviewPoint: "Monthly alignment meeting to approve next month's focus areas.",
    },
  ],
  investmentModel: {
    modelSummary:
      "Structured monthly management retainer covering content strategy, asset production, scheduling, and campaign management; advertising spend is billed directly by platforms.",
    costDrivers: [
      "Total number of active social media networks managed simultaneously",
      "Volume of custom visual assets, carousels, and video edits per month",
      "Scope of paid social ad management and budget scale",
      "Involvement required for custom on-site photography or video recording",
    ],
    externalCharges: [
      "Paid media advertising budget (paid directly by the client to Meta or LinkedIn)",
      "Dedicated social scheduling software subscriptions if requested",
    ],
  },
  faqs: [
    {
      question: "Which social media platforms should our business be active on?",
      answer:
        "We avoid spreading you thin. If you sell B2B services, LinkedIn and email often deliver 90% of value. If you sell consumer retail or hospitality, Instagram and Facebook dominate. We focus strictly where your actual buyers pay attention.",
    },
    {
      question: "Is professional photography and video production included?",
      answer:
        "Our standard scope includes custom graphic design, carousel layouts, and editing client-supplied video/photo assets. If on-location shoots or professional actors are required, we scope that as a separate physical production engagement.",
    },
    {
      question: "How do we approve content before it gets published online?",
      answer:
        "Nothing goes live without your sign-off. We prepare monthly content calendars two weeks in advance. Your team reviews all copy, graphics, and video in an easy visual dashboard and approves them with one click.",
    },
    {
      question: "How is the advertising budget managed for paid campaigns?",
      answer:
        "You pay the advertising networks (Meta, LinkedIn, Google) directly via your corporate credit card attached to your own Ad Manager. We never mark up ad spend or hold your ad accounts inside studio accounts.",
    },
    {
      question: "What happens when someone asks a complex technical question in comments or DMs?",
      answer:
        "We triage routine queries (such as office hours or service links) using approved guidelines. Complex technical or commercial enquiries are immediately routed to your designated staff contact via email or Slack alert.",
    },
    {
      question: "How do you measure success if you don't focus on follower counts?",
      answer:
        "We track commercially meaningful metrics: link clicks, qualified enquiry submissions, phone calls, and cost per lead. A small following of genuine prospective buyers is worth far more than thousands of irrelevant bot followers.",
    },
  ],
  relatedServices: [
    {
      slug: "websites-admin-dashboards",
      reason: "Pair your social campaigns with high-converting, fast landing pages.",
    },
    {
      slug: "ecommerce-development",
      reason: "Run dynamic product catalog ads driving direct sales to your online store.",
    },
    {
      slug: "workflow-automation",
      reason: "Instantly capture leads from social ad forms and sync them into your CRM.",
    },
  ],
  ctaText: "Request a social media review",
};

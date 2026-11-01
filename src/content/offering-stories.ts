import type { ServiceVisualKind } from './visuals';

export interface OfferingStory {
  label: string;
  title: string;
  promise: string;
  scopeTitle: string;
  journeyTitle: string;
  journeyIntro: string;
  stages: { title: string; copy: string; output: string }[];
  difference: { title: string; copy: string }[];
  groups: string[];
  closing: string;
}

export const offeringStories: Record<ServiceVisualKind, OfferingStory> = {
  website: {
    label: 'WEBSITES / DASHBOARDS / PORTALS',
    title: 'Win the first impression. Simplify everything after.',
    promise: 'A website that explains your value. A workspace that helps your team deliver it. Designed as one connected experience.',
    scopeTitle: 'Your public face. Your working engine.',
    journeyTitle: 'Two experiences. One connected business.',
    journeyIntro: 'Your customers need a clear next step. Your team needs the context to act on it. We design both sides of that handover.',
    stages: [
      { title: 'Discover & enquire', copy: 'Clear service pages, useful content, and focused enquiry forms help visitors understand your offer.', output: 'A structured enquiry' },
      { title: 'Review & assign', copy: 'A protected workspace brings records, ownership, and next actions together for the right people.', output: 'An accountable next step' },
      { title: 'Deliver & stay connected', copy: 'Give clients access to the updates and documents they need, without another email chain.', output: 'A useful client portal' },
    ],
    difference: [
      { title: 'Journeys before screens', copy: 'We map who needs to do what before deciding which pages and controls to build.' },
      { title: 'Permissions by design', copy: 'Public content, staff tools, and client records each get appropriate access boundaries.' },
      { title: 'A handover you can use', copy: 'Source code, content editing guidance, and administrator documentation stay with your team.' },
    ],
    groups: ['Attract & explain', 'Manage & collaborate', 'Connect & maintain'],
    closing: 'Build the website your customers need. And the workspace your team deserves.',
  },
  commerce: {
    label: 'STOREFRONT / CHECKOUT / FULFILMENT',
    title: 'Make the next add-to-cart feel effortless.',
    promise: 'Thoughtful online stores that connect product discovery, payment, and the work behind every delivery.',
    scopeTitle: 'A good store goes beyond the storefront.',
    journeyTitle: 'Follow the order. Not just the click.',
    journeyIntro: 'A beautiful product page is the beginning. The complete shopping experience includes stock, delivery choices, and a team that can fulfil the promise.',
    stages: [
      { title: 'Find the right product', copy: 'Useful categories, filters, and variant information make a growing catalogue easier to shop.', output: 'Discovery → product' },
      { title: 'Buy with confidence', copy: 'Clear totals, payment options, and delivery information help customers make an informed decision.', output: 'Basket → checkout' },
      { title: 'Keep the promise', copy: 'Connect the paid order to inventory, courier workflows, and the people packing it.', output: 'Order → doorstep' },
    ],
    difference: [
      { title: 'Platform fit comes first', copy: 'We choose the store approach around your catalogue, budget, and operational needs.' },
      { title: 'Local buying habits matter', copy: 'Payment, cash on delivery, and regional courier needs are considered in the scope.' },
      { title: 'Operations are part of UX', copy: 'Stock and fulfilment are designed alongside the customer-facing experience.' },
    ],
    groups: ['Find & choose', 'Pay & fulfil', 'Return & grow'],
    closing: 'Give your products a store that does them justice.',
  },
  mobile: {
    label: 'PRODUCT STRATEGY / iOS / ANDROID',
    title: 'A useful little part of your customer’s day.',
    promise: 'Mobile products built around the moments that matter—from a first tap to the task people return for.',
    scopeTitle: 'Small screen. Carefully considered details.',
    journeyTitle: 'One useful action. A whole product around it.',
    journeyIntro: 'Start with the job someone needs to finish on their phone. Then make the journey work across devices, interruptions, and everyday use.',
    stages: [
      { title: 'Get started simply', copy: 'Introduce the value, ask for relevant permissions, and make account creation understandable.', output: 'Open → understand' },
      { title: 'Complete the core task', copy: 'Prioritise the booking, purchase, or field action your customers actually came to do.', output: 'Choose → complete' },
      { title: 'Come back with context', copy: 'Useful notifications, saved state, and scoped offline support keep the experience coherent.', output: 'Return → continue' },
    ],
    difference: [
      { title: 'An MVP with a purpose', copy: 'We agree the essential journey before expanding the feature list.' },
      { title: 'Real device thinking', copy: 'Permissions, poor connectivity, and device differences are considered during design and QA.' },
      { title: 'Beyond the final screen', copy: 'Store submission, crash reporting, and ongoing OS changes are part of release planning.' },
    ],
    groups: ['Discover & prototype', 'Build the experience', 'Test & release'],
    closing: 'Let’s turn your idea into someone’s go-to app.',
  },
  voice: {
    label: 'VOICE / CHAT / HUMAN HANDOFF',
    title: 'The conversation starts here. Even when you’re busy.',
    promise: 'AI assistants for routine questions, qualified enquiries, and booking flows—with a clear route to a real person.',
    scopeTitle: 'Every conversation needs the right next step.',
    journeyTitle: 'Helpful answers. Clear boundaries. Human backup.',
    journeyIntro: 'We design what the assistant can answer, what it can do, and exactly when it should involve your team.',
    stages: [
      { title: 'Understand the request', copy: 'A caller or visitor asks a routine question through the channels agreed in your scope.', output: 'Enquiry captured' },
      { title: 'Use approved information', copy: 'The assistant responds from your knowledge base and uses connected tools for permitted actions.', output: 'Answer or booking request' },
      { title: 'Hand over with context', copy: 'Complex, sensitive, or unsupported requests reach a person with a useful conversation summary.', output: 'Your team takes over' },
    ],
    difference: [
      { title: 'Grounded in your business', copy: 'Approved answers and service boundaries guide the conversation.' },
      { title: 'Escalation is designed in', copy: 'Handoff rules are agreed before launch, including what happens when a tool fails.' },
      { title: 'Pilot before scaling', copy: 'Scenario reviews and call simulations help expose gaps before wider use.' },
    ],
    groups: ['Meet the customer', 'Understand & connect', 'Escalate & improve'],
    closing: 'Make the first conversation a helpful one.',
  },
  automation: {
    label: 'TRIGGERS / CONNECTIONS / APPROVALS',
    title: 'Move the work forward. Without moving it by hand.',
    promise: 'Connect the tools you already use, reduce repeated entry, and keep your team in charge of the decisions.',
    scopeTitle: 'The right action, in the right system.',
    journeyTitle: 'A new enquiry. No copy-and-paste relay.',
    journeyIntro: 'Here’s one practical starting point: turn an incoming form into a clean, assigned record and a visible follow-up.',
    stages: [
      { title: 'A useful trigger', copy: 'A form submission or system event starts the workflow with the fields your team actually needs.', output: 'Event received' },
      { title: 'Check before acting', copy: 'Validate fields, check for duplicates, and route exceptions for review instead of silently losing them.', output: 'Clean record / review queue' },
      { title: 'Act, then leave a trail', copy: 'Assign the record, notify its owner, and keep a log so someone can investigate and retry a failed step.', output: 'Owner notified + activity log' },
    ],
    difference: [
      { title: 'Exceptions are first-class', copy: 'Retries, duplicate events, and incomplete data get explicit handling.' },
      { title: 'People keep authority', copy: 'Approvals protect the actions your business wants a person to own.' },
      { title: 'Start with one bottleneck', copy: 'A focused pilot proves the workflow before you connect more of the business.' },
    ],
    groups: ['Capture & organise', 'Route & approve', 'Connect & monitor'],
    closing: 'Which repetitive task would you like off your plate?',
  },
  retail: {
    label: 'COUNTER / STOCKROOM / STORE CONTROL',
    title: 'A quicker counter. A better handle on your store.',
    promise: 'Retail software that connects a sale to the stock, staff, and daily records behind it.',
    scopeTitle: 'Everything behind a well-run counter.',
    journeyTitle: 'One sale should tell the whole store story.',
    journeyIntro: 'The receipt is only one part of the transaction. Stock movement, returns, permissions, and cash reconciliation matter just as much.',
    stages: [
      { title: 'Scan & bill', copy: 'Find the item, check the price, and complete the sale using a clear cashier workspace.', output: 'Item → receipt' },
      { title: 'Keep stock accountable', copy: 'Record purchases, transfers, returns, and adjustments so managers can trace changes.', output: 'Sale → stock movement' },
      { title: 'Close with clarity', copy: 'Review the shift, reconcile the drawer, and see the items that need attention tomorrow.', output: 'Shift → reconciliation' },
    ],
    difference: [
      { title: 'The counter comes first', copy: 'Cashier tasks and existing hardware guide the setup.' },
      { title: 'Stock has a history', copy: 'Movement records and staff permissions make discrepancies easier to investigate.' },
      { title: 'Rollout includes people', copy: 'Catalogue preparation, staff training, and transition support sit alongside configuration.' },
    ],
    groups: ['At the counter', 'In the stockroom', 'In the manager’s view'],
    closing: 'Give your team a better day at the counter.',
  },
  seo: {
    label: 'SEARCH FOUNDATIONS / LOCAL DISCOVERY',
    title: 'Be there when the right customer starts looking.',
    promise: 'Useful content, healthier search foundations, and an accurate local presence that make your business easier to discover.',
    scopeTitle: 'Build visibility from the foundations up.',
    journeyTitle: 'From a customer’s question to a relevant enquiry.',
    journeyIntro: 'Search work should connect what people need with what your business actually offers. We work across your site, local profile, and measurement.',
    stages: [
      { title: 'Understand the search', copy: 'Research customer intent and audit the pages that should answer it.', output: 'Intent & baseline' },
      { title: 'Make the answer useful', copy: 'Improve page structure, technical access, and accurate local business information.', output: 'Pages & profile' },
      { title: 'Measure meaningful actions', copy: 'Review visibility alongside calls, enquiries, and the next priorities—not rankings in isolation.', output: 'Evidence & next actions' },
    ],
    difference: [
      { title: 'No ranking promises', copy: 'We establish a baseline and explain what we can improve and what search platforms control.' },
      { title: 'Local accuracy matters', copy: 'Eligibility, categories, opening hours, and consistent business details get attention.' },
      { title: 'Reporting with a next step', copy: 'Findings become an actionable content and technical backlog.' },
    ],
    groups: ['Technical foundations', 'Useful content', 'Local trust & measurement'],
    closing: 'Help the people looking for you find a clearer answer.',
  },
  social: {
    label: 'STRATEGY / CREATIVE / CAMPAIGNS',
    title: 'Less posting for the sake of it. More reasons to care.',
    promise: 'A recognisable voice, a considered content calendar, and campaigns with a clear next step for your audience.',
    scopeTitle: 'A content system. Not a pile of posts.',
    journeyTitle: 'One idea. A week of connected conversations.',
    journeyIntro: 'Build around what your audience cares about. Give each format a job, keep approvals clear, and use the response to shape what comes next.',
    stages: [
      { title: 'Give the story a direction', copy: 'Define the audience, content themes, and the offer the campaign supports.', output: 'Audience → editorial plan' },
      { title: 'Make it worth stopping for', copy: 'Create visual posts, carousels, and short-form edits with a consistent voice and useful message.', output: 'Idea → approved creative' },
      { title: 'Listen, learn, repeat', copy: 'Publish, triage replies, and review creative and enquiry performance to inform the next cycle.', output: 'Response → next campaign' },
    ],
    difference: [
      { title: 'A voice that belongs to you', copy: 'Positioning and visual templates come before the publishing calendar.' },
      { title: 'Approval without the scramble', copy: 'A visible review workflow keeps your team involved before content goes live.' },
      { title: 'Attention with somewhere to go', copy: 'Campaigns connect to an aligned landing page, enquiry form, or offer.' },
    ],
    groups: ['Set the direction', 'Create & publish', 'Respond & improve'],
    closing: 'Give your audience a reason to stop. And a reason to stay.',
  },
};

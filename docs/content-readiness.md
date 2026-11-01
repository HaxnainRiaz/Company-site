# Content Readiness & Publication Safeguards

## 1. Overview
This website is currently running in **Preview Mode** (`isPublicationReady = false`).
In accordance with Section B2 and B3 of the master implementation prompt:
- No real company identity, telephone numbers, addresses, client names, or awards have been fabricated.
- The neutral brand label **"Company Name"** is used locally.
- Development-only preview notices alert reviewers to the staging status.
- Meta robots defaults to `noindex, nofollow` to prevent premature indexing by search crawlers.
- Invalid canonical URLs and social open-graph domains are suppressed until a verified domain is configured.

## 2. Outstanding Publication Blockers

Before the site can be switched to `isPublicationReady = true` and deployed to production, the owner must provide the following verified facts:

| Item | Status | Impact / Requirement |
|---|---|---|
| **Legal Entity & Brand Name** | Pending Owner Input | Replace "Company Name" with registered trademark / business name. |
| **Commercial Email Address** | Pending Owner Input | Legitimate inbound contact address for prospective clients. |
| **Phone & WhatsApp Business** | Pending Owner Input | Verified telephone number and WhatsApp Business number for instant chat routing. |
| **Calendar Booking URL** | Pending Owner Input | Real Calendly, Cal.com, or Google Calendar link for discovery call scheduling. |
| **Physical Office / Legal Address** | Pending Owner Input | Physical street address or registered legal jurisdiction for compliance policies. |
| **Legal Review of Policies** | Pending Owner Review | Formal legal review of Privacy Policy, Terms of Service, and Cookie Policy. |
| **Production Database Credentials** | Pending Infrastructure | Dedicated LibSQL / Turso or PostgreSQL connection URI for durable lead persistence. |
| **Resend Email API Credentials** | Pending Infrastructure | Verified domain sender key (`RESEND_API_KEY`) and notification recipient mailbox. |
| **Production Domain & SSL** | Pending DNS Configuration | Verified public production domain for metadata base and sitemap canonical URLs. |

## 3. Operational Fallback Behavior in Preview
1. **Discovery Call Actions:** Because a calendar URL is not yet configured, buttons labeled "Book a Discovery Call" route directly to `/contact?service=discovery-call` with the discovery consultation context preselected. No fake interactive calendars are presented.
2. **WhatsApp Action:** Because no verified WhatsApp Business number has been supplied, the optional floating WhatsApp widget and actions are omitted, avoiding dead links or 404s.
3. **Product Page Navigation:** Proprietary product routes (`/products`, `/products/retail-pos`) remain disabled (`productVisibility: false`) until final product feature scope and availability dates are formally verified.
4. **Case Studies:** `/work` transparently features verified studio demonstrations and explains their technical scope rather than manufacturing fictitious client portfolio entries.

## Design revamp preview content

The new brand wall, milestone figures, and testimonial carousel are complete visual examples, marked as fictional/sample content in the interface. Replace the entries in src/content/design-preview.ts with approved genuine evidence before publication, and update their labels and attribution at the same time. Photography is licensed stock context and is not a verified staff, office, or customer representation. Final company identity, domain, contact channels, policies, durable lead storage, and notification configuration remain required.

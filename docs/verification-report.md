# Design revision 2 — 28 October 2026

This revision follows the owner’s supplied layout references and exact four-color direction: white #FFFFFF, violet #5F01FB, muted purple #514A85, and near-black #0B0D1B. Instrument Sans remains unchanged.

## Implemented

- All eight service pages now have a substantial dark product hero, service-specific interface artwork, illustrated subservice cards, an expandable complete scope, a benefits/photo composition, a visual delivery roadmap, integration details, investment breakdown, FAQ, related services, and a large closing panel.
- Service artwork is distinct for websites/dashboards, commerce, mobile, voice/chat, workflow automation, retail POS, SEO, and social campaigns. Code-native interfaces are original studio concepts.
- All four solution detail pages use image-led heroes, visual workflow cards, a relevant interface preview, connected service cards, and rollout details.
- All four live demonstrations were rebuilt. The dashboard supports views, search/status filters, sorting, derived metrics, CSV export, and status inspection/editing. Retail supports search/categories, barcode lookup, stock-aware quantities, sample tax, receipts, and reset. Commerce supports category/search filters, saved products, accessible product-option dialogs, basket quantities/removal, checkout preview, and inline confirmation. The booking assistant supports scenarios, simple scripted question routing, sample days/times, simulated confirmation, and reset.
- Project and demo posters use the new product interfaces and photography with generic product names rather than invented company identities.
- The project carousel has real translated slides, arrows, position dots, keyboard arrow controls, and swipe support. It has no visible overflow scrollbar.
- The home logo showcase has exactly twenty actual company marks, ten per row, moving in opposing directions. Pause, hover, focus, and reduced-motion behavior are supported.
- Client perspectives use three distinct contextual stock portraits and manual carousel controls. The sample attribution, sample rating, and stock-photo status remain explicit.
- Nineteen additional local photographs replace repeated editorial imagery. Catalogue imagery is intentionally reused where it depicts the same example product.
- Home and insights now include photo-led article cards. The footer, CTA surfaces, typography, and demo detail framing use the new palette.

## Verification

The production build includes Next.js compilation and TypeScript validation. One initial type narrowing error in subservice artwork was corrected. The final build result is recorded in docs/revision-2-build.log.

No separate test suite, lint round, Lighthouse audit, automated accessibility audit, or repeated responsive test matrix was run for this revision, following the owner’s request to concentrate on implementation. Earlier JSON/lint reports in docs belong to the previous revision and should not be treated as new verification.

Live browser appearance and runtime interaction have not been visually verified in this session. The prior browser origin approval denial was respected; no alternate browser route was used. Build success does not certify screenshot quality, accessibility compliance, or every interactive path.

## Content and assets

The twenty visible company brands are Stripe, Shopify, Figma, GitHub, Notion, Vercel, Cloudflare, GitLab, Docker, MongoDB, Supabase, Netlify, HubSpot, Dropbox, Asana, Atlassian, Mailchimp, Zoom, Zapier, and Linear. They are identified as technology/platform companies, not clients or endorsers.

See docs/editorial-asset-register.md and docs/editorial-assets.json for exact source pages, dimensions, sizes, license links, and context notes. Brand symbols come from Simple Icons, with the downloaded source license retained under public/licenses/SIMPLE-ICONS-LICENSE.md. Brand rights remain with their owners.

The former unused fictional brand wall and fictional project identities were removed from preview content. Metrics and quotes are still labelled samples; these must be replaced with verified evidence before publication. Owner identity, contact/policy approval, and enquiry configuration remain incomplete; no publication or real communication was performed.

## Key edit locations

- src/content/visuals.ts: service presentation map and the twenty company marks.
- src/components/shared/service-page-shell.tsx and service-artwork.tsx: new service compositions and artwork.
- src/components/shared/demo-poster.tsx and product-preview.tsx: original product presentation.
- src/components/demos/: all four rebuilt interactive demos.
- src/components/pages/home/: logo marquee, project carousel, portraits, article section, and existing home sections.
- src/app/refined.css: four-color revision, product/UI styling, and responsive rules.
- src/content/design-preview.ts: sample milestone figures and testimonial copy.

## Run locally

From C:\Users\Hasnain\Desktop\business-site\company-website run npm run dev, then open http://localhost:3000. For production mode run npm run build then npm run start.

No dependency versions were changed or packages installed for this revision. No site was deployed.


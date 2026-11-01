# Offering page design review

Updated service detail pages, industry solution pages, and interactive demo introductions. The homepage is outside this redesign.

## Design

- One shared violet, ink, white, and lavender palette.
- Eight service-specific hero illustrations, a clinic illustration, and a small animated studio companion. Original PNGs are retained in `src/assets/offerings`; optimized WebP files are in `public/images/offerings`.
- Separate interactive stories: website-to-workspace handover, commerce journey, tappable mobile prototype, support conversation scenarios, workflow with an exception branch, retail stock movement, search/local discovery, and campaign formats.
- Contextual photography, grouped service disclosures, delivery details, and service-specific benefits.
- Scroll reveals, reading progress, headline fills, hover effects, and optional popover notes. Offscreen decorative loops pause; reduced-motion preferences and a manual pause control are supported.
- Popover notes close with Escape and return keyboard focus to their trigger.

## Browser verification

- Desktop: all eight service heroes loaded, shared accent verified as `#5f01fb`, no document overflow at 1366 px.
- Phone: all eight services, four solutions, and four demos checked at 390 px; no horizontal document overflow observed.
- Exercised the mobile prototype through confirmation; commerce through fulfilment; workflow through exception review; retail scan through stock deduction; website enquiry through team workspace; support human handoff; local search view; and campaign format switching.
- Exercised illustration popups, companion notes, Escape focus restoration, service disclosures, and motion pause.
- Existing retail product demo completed a sample sale and displayed its local receipt; no payment collected.
- Representative screenshots are saved in `docs/previews`.

Image-generation prompts and output records: `docs/offering-image-prompts.json`. Optimized file dimensions and sizes: `docs/offering-image-sizes.json`.

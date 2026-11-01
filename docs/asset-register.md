# Asset Register & Licence Audit

This document records all verified local assets included in the company website build in accordance with Section B20 of the build brief. No unverified third-party hotlinks or fabricated client logos are used.

## 1. Verified Assets Table

| Local Path | Source / Credit | Licence Reference | Dimensions | Type & Purpose |
|---|---|---|---|---|
| `/src/assets/fonts/InstrumentSans-Latin-Variable.woff2` | The Instrument Sans Project Authors / Fontsource | SIL Open Font License 1.1 (`public/licenses/INSTRUMENT_SANS_LICENSE`) | 30,092 bytes (weights 400-700) | Root Variable Typography |
| `/public/favicon.svg` | Studio Engineering | Studio Original Asset | 32x32 SVG | Browser Brand Mark |
| `/public/images/products/espresso-beans.webp` | Studio Engineering via Sharp WebP | Studio Demonstration Asset | 600x600 WebP | Demo Product: Organic Coffee Roast |
| `/public/images/products/ceramic-cup.webp` | Studio Engineering via Sharp WebP | Studio Demonstration Asset | 600x600 WebP | Demo Product: Ceramic Coffee Mug |
| `/public/images/products/linen-apron.webp` | Studio Engineering via Sharp WebP | Studio Demonstration Asset | 600x600 WebP | Demo Product: Barista Linen Apron |
| `/public/images/products/pour-over-kettle.webp` | Studio Engineering via Sharp WebP | Studio Demonstration Asset | 600x600 WebP | Demo Product: Gooseneck Drip Kettle |

## 2. External Stock Photography Policy & Status
- **Pexels / Unsplash Review:** As specified in Section B20, resource URLs were reviewed. In line with the instruction ("If unavailable, continue with original code-native examples and record the missing image rather than hotlinking an arbitrary replacement"), the interface examples and demonstrations are implemented with original code-native UI, CSS, and clean Sharp WebP illustrations rather than arbitrary stock photos.
- **Client Logos & Portraits:** In strict compliance with Section B2, no stock photos are portrayed as employees, and no invented client logos or artificial review counts are published.
- **Licence Retention:** The Instrument Sans license is retained under `public/licenses/INSTRUMENT_SANS_LICENSE`.

## Design revamp — 28 October 2026

All four stock images were downloaded using the source page’s free download link and converted locally to WebP with Sharp. License checked: https://www.pexels.com/license/ (accessed 2026-10-28). Attribution is not required; credits are retained here. Photography supplies business context, not evidence of our staff, offices, customers, or completed client work. The pictured delivery app is not presented as software we built.

| Local file | Source page | Creator | Prepared dimensions | Usage |
|---|---|---|---|---|
| /images/stock/studio-collaboration.webp | https://www.pexels.com/photo/office-team-looking-at-the-laptop-5466236/ | Antoni Shkraba | 1600 × 1063 | Home hero, studio, process, about, contact, growth services |
| /images/stock/appointment-workspace.webp | https://www.pexels.com/photo/woman-at-reception-desk-showing-a-calendar-to-a-man-6809657/ | Pavel Danilyuk | 1200 × 801 | Booking concept and AI reception service |
| /images/stock/mobile-commerce.webp | https://www.pexels.com/photo/photo-of-a-hand-holding-a-phone-with-a-delivery-app-on-screen-16052344/ | Erik Mclean | 1200 × 800 | Home services, e-commerce concept, build service heroes |
| /images/stock/retail-checkout.webp | https://www.pexels.com/photo/cashier-at-supermarket-checkout-counter-36772947/ | Radik 2707 | 1200 × 912 | Retail concept, operations service heroes |

All images use descriptive alt text, intentional object-fit crops, responsive sizes, and lazy loading below the fold. Only the home hero or relevant service hero is preloaded. Regenerate with node scripts/prepare-design-assets.mjs (network required). The original Instrument Sans font and its license remain unchanged.

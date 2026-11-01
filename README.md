This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Design revamp

The site now includes a photo-led hero, coral/ivory palette, scroll-fill statement and process, project slider, selectable demo previews, sample brand wall, team/milestones section, and testimonial carousel. Instrument Sans and the existing App Router/component structure are retained.

Run locally with npm run dev, then open http://localhost:3000.
Checks: npm run lint, npm run typecheck, npm run build, npm run check:built.
The last command inspects generated production HTML and should follow a successful build.

See docs/verification-report.md for exact results and verification limits. Update src/content/design-preview.ts for example figures, brands and testimonials. Sample content remains visibly labelled; real business evidence and contact configuration are still needed before publishing.

## Reference-driven violet revision

The current design follows the supplied references with #FFFFFF, #5F01FB, #514A85, and #0B0D1B. Service and solution pages have richer visual sections; four demos and their posters were rebuilt. Twenty actual company marks appear in two opposing animated rows, identified as technology brands. Sample testimonials use clearly labelled stock portraits.

Current presentation: src/content/visuals.ts.
Current CSS: src/app/refined.css.
New asset records: docs/editorial-asset-register.md.
Current verification notes: docs/verification-report.md.
Final production build log: docs/revision-2-build.log.
Earlier lint and offline route reports are historical.

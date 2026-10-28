# Nitish Kumar / Portfolio

A responsive Next.js portfolio connecting Nitish’s websites, browser tools, applications, and open-source packages.

## Run locally

```sh
npm install
npm run dev -- --port 3003
```

Open http://localhost:3003. Use a different free port if needed. The production checks are `npm run lint` and `npm run build`.

## Edit the content

- `app/data/portfolio.ts`: contact and profile links, project cards, npm packages, and capabilities. Add projects to the typed `projects` array; category filters update automatically.
- `app/page.tsx`: hero, introduction, about section, and contact copy.
- `app/components/LogFeed.tsx`: dated development notes and their categories. Historical notes remain dated; update release statuses separately.
- `app/globals.css`: shared layouts, interactions, and mobile breakpoints.
- `app/clay.css`: claymorphism and maximalist art direction, material tokens, dimensional surfaces, and responsive theme refinements. Headings use Bricolage Grotesque; body copy uses DM Sans.
- `app/layout.tsx`: metadata, fonts, canonical address, and existing Vercel Speed Insights.
- `app/opengraph-image.tsx` and `app/icon.svg`: social preview and favicon.
- `public/Nitish_Kumar_Frontend.pdf`: the existing downloadable résumé.

## Project artwork

`public/work/northline.webp` and `public/work/extensions.webp` are optimized captures of the actual local Demo Lab and Extensions websites, taken during this redesign. Refresh them when those sites change. MindMesh, Invoice-Book, and Spy use decorative CSS artwork, not purported application screenshots.

Demo Lab links to `https://www.demos.nishkumar.dev`; Extensions links to `https://www.extensions.nishkumar.dev`. Keep these synchronized with the other projects. Text Extractor is marked **in store review**, and Pure Anime **coming soon**; no install availability or usage metrics are invented.

## Interactions and accessibility

Project and note filters announce their result counts and expose their selected states. The mobile menu supports Escape, outside click, and automatic close after selection. Capabilities use native disclosure controls. Clipboard buttons report success and offer manual-copy guidance if access fails. Navigation has visible keyboard focus, a skip link, and touch-friendly controls. Reduced-motion preferences are respected, and content stays visible without JavaScript.

Contact links open the visitor’s email application or LinkedIn. There is no contact-form backend or simulated submission. No extra runtime dependencies were added for this redesign.

## Deployment

Build and deploy this existing Next.js project through its normal hosting workflow. Local changes do not update the live portfolio until deployed. Confirm the two showcase domains are connected before promoting the links publicly.

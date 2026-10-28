# Search visibility and deployment

## Canonical sites

- Portfolio: https://www.nishkumar.dev/
- Extensions: https://www.extensions.nishkumar.dev/
- Demo Lab: https://www.demos.nishkumar.dev/

The Extensions Next.js config permanently redirects the non-www host to the www host, preserving paths and query strings. Both hostnames must remain connected to the same hosting project with valid HTTPS certificates; redirects cannot repair DNS or TLS failures. The www hostname was confirmed to respond during implementation.

## Implemented

- Crawlable content: Next.js prerenders the portfolio and known extension pages; Demo Lab now generates complete static HTML for all ten routes during `npm run build`.
- Unique titles/descriptions, canonical URLs, absolute social-preview URLs, and meaningful heading structure.
- Each site exposes `/sitemap.xml` and `/robots.txt`. Sitemaps list only URLs owned by that site and do not fabricate last-modified dates.
- Portfolio Person/ProfilePage structured data; Extensions collection, software descriptions, and breadcrumbs; Demo Lab collection/page structured data. No invented reviews, ratings, sales, or results.
- Direct navigation and project links between all three sites, with additional portfolio links to specific demos and extensions.
- Distinct themes: peach, plum, and pastel clay surfaces for the portfolio; deep-teal opening and mint surfaces for Extensions.

## After deploying all three projects

1. Keep each project's normal build command. Demo Lab must use `npm run build`, including its new HTML-generation step; deploy the entire `dist` folder with its updated Vercel configuration. Do not restore the old catch-all rewrite to `index.html`.
2. In Google Search Console, verify the `nishkumar.dev` domain property (covers its subdomains), or verify the exact individual URL-prefix properties.
3. Submit each site's sitemap: `https://www.nishkumar.dev/sitemap.xml`, `https://www.extensions.nishkumar.dev/sitemap.xml`, and `https://www.demos.nishkumar.dev/sitemap.xml`.
4. Use URL Inspection on the three homepages and important product/demo pages to inspect rendered content and request indexing.
5. Confirm old extension links redirect to the same path on the www host and unknown URLs return 404. Confirm production pages have no hosting-level noindex restrictions.
6. Update product status, store links, project content, and preview images as releases change. Avoid presenting fictional demo-business claims as your own client results.

Search Console verification and sitemap submission require account access and were not performed. SEO improvements help discovery and interpretation; ranking or special search-result treatments are not guaranteed.

## Checks

- Each project: `npm run build` and `npm run lint`.
- Demo Lab: after building, `npm run test:seo` checks raw HTML, unique metadata, structured data, canonical links, sitemap, and 404 handling.
- Check mobile/desktop layouts, keyboard navigation, product filters, and contact links after content changes.

References: [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) and [JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).

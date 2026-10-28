# Medical Insights — private medical blog preview

## Website review and corrections

The revised interface includes a reading-room homepage, responsive article cards, working specialty links, labelled search and filter controls, mobile navigation, a collapsible mobile table of contents, and stable article heading anchors. Listing pages send summaries rather than full Markdown to the browser. Images resolve to their existing filenames and retain their bytes and aspect ratio.

Verification executed: all 60 production article URLs returned HTTP 200; 240 article/related-card image responses passed; all article pages had exactly one H1 and valid contents anchors. Homepage, listing, robots.txt, noindex metadata, response headers and absent sitemap were checked. Browser interactions covered search, filtering, pagination, category deep links and mobile navigation, including a 390px viewport without horizontal overflow. No browser console errors were observed during these checks.

There are 87 editorial link placeholders (`CTA_URL`, `PDF_URL`, `INTERNAL_LINK_URL`) in the supplied content. They display as text until an editor provides real destinations. External reference websites were not exhaustively revalidated in this website review. Medical copy remains an editorial draft; the website review is not clinical approval.

To check production responses, run `npx next start -p 3012` after building, then `node scripts/check-http.mjs http://localhost:3012`. Results are written to `HTTP_VALIDATION_REPORT.json`.

To import the supplied extracted collection again, run `npx tsx scripts/import-articles.ts "C:/path/to/extracted/collection"`. The script preserves Markdown bytes, copies referenced images, checks their hashes and rejects duplicate slugs. Runtime rendering maps local images to the public directory. Use the same source collection for repeat imports; unrelated existing folders are retained.

Standalone Next.js App Router preview for the 60 supplied Markdown articles. It does not connect to Qurovo production systems and does not add authentication.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validate and build

```bash
npm run validate
npm run typecheck
npm run build
```

The validator checks article count, unique slugs, front matter and local image references. Content remains in `content/blogs`; images are copied to `public/blog-images`.

## Search restrictions

`app/robots.ts` returns `User-agent: * / Disallow: /`. Metadata sets noindex/nofollow/noimageindex, and `next.config.ts` sends `X-Robots-Tag`. These are crawler cooperation directives, not privacy or security controls; robots blocking can prevent crawlers from seeing noindex, and non-compliant bots may ignore both.

## Deployment

Push this folder to a private GitHub repository, import it into Vercel, use the default Next.js build settings, and verify `/robots.txt`, the noindex meta tag and `X-Robots-Tag` in the deployed preview. No database, API key or external image service is required.

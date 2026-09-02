# MFM Peterborough — church website

The live website for Mountain of Fire and Miracles Ministries, Peterborough branch. Next.js 15
(App Router) + TypeScript + Tailwind CSS, backed by the shared **Jerur** platform for church data
(settings, sliders, events, fellowship groups, service and prayer times).

This repo started life as a reusable church-site template — some boilerplate patterns you'll still
see (the Jerur integration, the SWR data-fetching hooks, the form-submission flow) come from that
origin. It has since diverged into MFM Peterborough's actual site: the copy, branding, legal
pages, and resource links throughout are this church's real content, not placeholders.

## Getting started

1. Copy `.env.example` to `.env.local` and fill in real values (see below) — `.env.local` is
   git-ignored and never committed.
2. `yarn install`
3. `yarn dev` — runs on `http://localhost:3000` by default; if another local project (e.g. the
   Jerur backend itself, if you're running it locally too) already holds port 3000, Next.js falls
   back to 3001 and prints which port it picked.

Without real env values the site still runs — API calls fail gracefully and pages fall back to
empty states rather than crashing.

## Environment variables

See `.env.example` for the full list. Three groups:

- **Jerur backend** (`JERUR_NEXT_BASE_URL`, `JERUR_NEXT_API_KEY`) — the external service that owns
  church settings, sliders, events, fellowship groups, and regular/prayer service times.
  `JERUR_NEXT_API_KEY` is this church's own key (an encrypted identifier, not a shared secret — see
  the comment in `lib/api-client.ts`). This app only ever *reads* from Jerur, via the proxy routes
  under `app/api/*`.
- **Brevo** (`BREVO_API_KEY`, `USER_NAME`, `CHURCH_INBOX_EMAIL`, `TEAM`) — sends the contact,
  prayer request, and testimony form submissions (and WOFBI registration, if that feature is on)
  as email to this church's inbox.
- **`NEXT_PUBLIC_SITE_URL`** — the site's real production domain. Backs canonical links, Open
  Graph/Twitter card images, and `sitemap.xml`/`robots.txt` (see `app/layout.tsx`, `app/sitemap.ts`,
  `app/robots.ts`). Defaults to `http://localhost:3001` for local dev — **update this to the real
  domain before launch**, or search engines and social previews will point at localhost.

## Feature flags (`lib/features.ts`, `church.config.ts`)

Every church-specific *program* — as opposed to core pages every church gets (Home, Events, Give,
Fellowship, Service Times, Prayer, Contact, New Here, About) — is gated behind a flag in
`church.config.ts`: `wofbi`, `bfc`, `freeTransport`, `foodBank`. All default to `false`.
`requireFeature()` is a real guard: a disabled feature's route returns an actual 404, not just a
hidden nav link that's still reachable by URL. `hasFeature()` is the read-only check used to
conditionally render nav links and homepage cards.

WOFBI and BFC (under `app/resources/`) ship with real Winners Chapel Peterborough content still
inside them, deliberately — they're 404-gated off by default, but left as complete, worked
examples of what a church-specific program page looks like end to end. Confirm with MFM
Peterborough directly before turning either flag on or reusing that content as-is.

## The home page "Resources" section

`components/home/get-involved.tsx` links out to MFM UK's national resource library
(mountainoffire.org.uk) — prayer points, PMCH downloads, and the Salvation in Christ page — rather
than hosting that content here. Jerur doesn't have a concept of these resources, so this section is
static, hand-written copy with external links, not backend-driven like the rest of the site.

## SEO

- `app/layout.tsx` sets `metadataBase`, Open Graph/Twitter card metadata, keywords, favicon, and a
  `Church` JSON-LD block whose address/phone/email are pulled live from Jerur settings where
  available.
- Every page title reads `<Page> — MFM Peterborough`; the home page is the one exception and reads
  just `MFM Peterborough` (see the comment in `app/page.tsx`).
- `app/sitemap.ts` / `app/robots.ts` generate `sitemap.xml` and `robots.txt`, both driven by
  `NEXT_PUBLIC_SITE_URL` — see the env var note above.

## Legal pages

`app/privacy-policy/`, `app/terms/`, `app/cookies/` contain real, usable policy text grounded in
what this codebase actually does (checked against the contact/prayer/testimony/event-registration
forms and confirmed there's no analytics or tracking anywhere in the site). Contact details on
these pages pull live from Jerur settings, falling back to `church.config.ts`. Still worth a
solicitor's review before treating this as final legal cover — especially the donations clause in
`app/terms/page.tsx` once MFM Peterborough's charity/legal registration status is confirmed.

## Known gaps, inherited from the live Winners Chapel site this template was extracted from

- **No public Jerur endpoint for contact/prayer-request/testimony submissions** — these go through
  this site's own Brevo integration (`lib/handle-submission.ts`). Fine for a single-church
  deployment like this one; would be a real problem in a shared multi-tenant deployment.
- **No public Jerur endpoint for approved testimonies either** — `components/home/testimony-band.tsx`
  is manually-curated static content until that read endpoint exists (see the comment at the top of
  that file).
- **Don't remove `lib/route-cache.ts`.** It caches the Jerur read routes; without it, every SWR
  revalidation (window focus, reconnect) would hit Jerur directly with zero caching in between,
  which caused a real 429 rate-limit incident on the live Winners Chapel site.

## Project structure

```
church.config.ts      The one file most day-to-day edits touch — theme, features, identity
app/                   Pages (App Router) and API routes
  api/                Proxy routes to Jerur + email submission routes
  resources/           Feature-gated example program pages (WOFBI, BFC) — off by default
  sitemap.ts           Generates sitemap.xml
  robots.ts            Generates robots.txt
components/
  layout/              Navbar, footer, page header, legal-page section helper
  home/                Hero, info bar, welcome statement, quick cards, resources, testimony band
  illustrations/       Hand-built SVG illustrations — brand-agnostic, no stock photos needed
  forms/               Shared submission form used by contact/prayer/testimony
  faq/                 Accordion used on the New Here page
  ui/                  Button
hooks/                 SWR data hooks + form submission hooks
lib/                   axios client, error handling, email sending/templates, feature flags, utils
types/                 Shared TypeScript types
```

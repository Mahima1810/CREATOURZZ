# CREATOURZZ — *Discover More. Travel Better.*

A complete, working travel discovery and booking-enquiry website, built as a product
demonstration. Eight destinations, thirteen costed itineraries, real search and
filtering, day-wise package pages, and an enquiry flow that is honest about what it
does.

> **This is a demonstration project.** CREATOURZZ is not a registered travel company.
> Pricing, itineraries, reviews and contact details are sample or indicative content.
> **No payment gateway is integrated anywhere**, and no enquiry is emailed or sent to a
> real company. Every surface that could mislead says so in place.

---

## Running it

```bash
npm install
npm run dev          # http://localhost:3000
```

```bash
npm run build && npm start   # production build
npm run typecheck            # tsc --noEmit
```

No linter is wired up: `next lint` is deprecated in Next 15 and removed in 16, and
adding a half-configured ESLint setup seemed worse than leaving it to you.
`npm run typecheck` is the gate this project actually uses.

Node 20+ is required. Photography is fetched from Wikimedia Commons at render time, so
the first load of each page needs network access.

---

## Deploying

**GitHub alone will not host this.** GitHub Pages serves static files only, and this
app is not static: `/api/enquiries` is a Node route handler, `/enquiry/confirmation`
renders per-request from the query string, and `next/image` optimises photographs at
runtime. Forcing `output: 'export'` to fit Pages would delete the enquiry API and the
image pipeline — most of what makes it an application.

Use GitHub as the source of truth and a host that runs Next.js. **Vercel** is the
straightforward choice: same team as Next.js, no configuration, free Hobby tier.

```bash
git init && git add -A && git commit -m "CREATOURZZ"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```

Then at [vercel.com/new](https://vercel.com/new), import the repository. Vercel detects
Next.js on its own — framework preset, build command and output directory all need no
input. Every later `git push` to `main` redeploys; pull requests get their own preview
URLs. Netlify, Render and Railway work the same way if you prefer one of those.

### What breaks on a serverless host, and why

The enquiry store writes to `.data/enquiries.json` on the server's filesystem. Vercel
gives each function a **read-only filesystem**, so that write fails. It fails *safely* —
`saveEnquiry` catches it, the API returns `persisted: false`, and the confirmation page
says the enquiry was not stored rather than claiming it was. Nothing crashes and nobody
is misled.

But it does mean **a deployed demo collects nothing**: every enquiry is validated, given
a reference, and dropped. That is fine for a portfolio piece people click through. If you
want the enquiries to survive, give the app somewhere real to put them before you deploy
— see *Connecting a production backend* below. Free options that suit this shape:

| Option | Good for |
|---|---|
| Vercel Postgres / [Neon](https://neon.tech) | A real `enquiries` table; `StoredEnquiry` is already the row shape |
| [Upstash Redis](https://upstash.com) | Simplest possible append-only list |
| [Resend](https://resend.com) | Email the enquiry to yourself instead of storing it |

Whichever you choose, only `src/lib/enquiry-store.ts` changes.

### Before you make the repository public

- `.data/` is gitignored, so locally submitted enquiries are not pushed. Keep it that way
  — it holds names, emails and phone numbers typed into the form.
- There are no secrets or API keys in the codebase today. If you add one, put it in
  `.env.local` (already ignored) and in your host's environment variables — never in a
  committed file.
- `src/app/layout.tsx` sets `robots: { index: false, follow: false }`, so search engines
  are told to skip the site. That is deliberate: it is a demonstration project that
  should not surface as a real travel agency. Remove it only if you mean to.

---

## Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 15, App Router, React 19 |
| Language | TypeScript, strict |
| Styling | Tailwind CSS 3 with a bespoke token layer |
| Icons | lucide-react (brand glyphs drawn in `components/site/SocialIcons.tsx`, since lucide v1 dropped them) |
| Type | Instrument Serif (display) + Inter (UI), via `next/font` |
| Data | Typed modules under `src/data` — no CMS, no database |

---

## Pages

| Route | What it is |
|---|---|
| `/` | Home — hero search, destinations, flagship band, featured packages, why us, testimonials |
| `/destinations` | Explore destinations, searchable |
| `/packages` | All packages with search, four filters and sorting |
| `/packages/[slug]` | Package detail — gallery, day-wise itinerary, inclusions, policies, enquiry |
| `/packages/rajasthan-heritage` | The flagship: editorial treatment, heritage dossiers, three price tiers, FAQs |
| `/about`, `/contact` | Company pages; contact carries a general enquiry form |
| `/enquiry/confirmation` | Confirmation screen with the issued reference |
| `/credits` | Photography attribution — required by the image licences |
| `/terms`, `/privacy` | Sample policies, labelled as such |
| `/api/enquiries` | `POST` to record an enquiry, `GET` for a store health check |

---

## Project structure

```
src/
  app/                     routes, API handler, error/loading/not-found states
  components/
    site/                  Navbar, Footer, PageHeader, Logo, Reveal, LegalPage
    travel/                domain components — cards, search, itinerary, enquiry
    ui/                    Button, Badge, SectionHeading, EmptyState, Spinner
  data/
    destinations.ts        the eight destinations
    packages.ts            the catalogue; imports the flagship
    rajasthan-heritage.ts  the flagship package, with route reasoning documented
    images.ts              generated photo manifest with licence metadata
    testimonials.ts        clearly-labelled demo reviews
  lib/
    types.ts               the domain model
    catalogue.ts           search scoring, filtering, sorting
    validation.ts          shared by the browser form and the API route
    enquiry-store.ts       the demo persistence layer — swap this one file
    format.ts              currency, duration, class names
```

### Adding a destination or a package

Append to `src/data/destinations.ts` or `src/data/packages.ts`. Nothing else needs to
change: cards, search, filters, the destination page, sitemap-style listings and the
statically generated detail route all read from those arrays. A destination's
"from" price is computed as the minimum across its packages, so it stays correct.

A package only needs the required fields in `Package`. The optional ones —
`intro`, `routeStops`, `heritage`, `tiers`, `faqs`, `accommodation`, `editorial` —
each switch on an extra section of the detail page when present. That is how the
Rajasthan flagship gets its editorial treatment from the same route component.

---

## The enquiry flow

There is no checkout. "Enquire Now" opens a validated form; on submit the app `POST`s
to `/api/enquiries`, which validates again server-side, issues a reference such as
`CTZ-7KQ2M4`, and appends the enquiry to **`.data/enquiries.json`** in the project
directory. The confirmation page renders the reference from the URL on the server, so
it is legible even before hydration, and fills in the submitted details from
`sessionStorage` once mounted.

The API response says `delivered: false`, and the confirmation screen states plainly
that nothing was emailed and no company was contacted. Please keep that honesty if you
fork this.

### Connecting a production backend

Everything above the storage layer talks to two functions, so **one file changes**:
`src/lib/enquiry-store.ts`.

```ts
// src/lib/enquiry-store.ts
export async function saveEnquiry(enquiry: StoredEnquiry): Promise<{ persisted: boolean }>;
export async function readEnquiries(): Promise<StoredEnquiry[]>;
```

Replace the `fs` calls with your destination:

- **Database** — swap in Prisma/Drizzle and an `enquiries` table. The `StoredEnquiry`
  type in `src/lib/types.ts` is already the row shape.
- **Email** — call Resend/SendGrid inside `saveEnquiry`, then set `delivered: true` in
  `src/app/api/enquiries/route.ts` **only once an email is genuinely being sent**, and
  update the copy on the confirmation page and in `EnquiryForm` to match.
- **CRM** — post to HubSpot/Salesforce from the same function.

Then add the real-deployment essentials this demo deliberately omits: rate limiting on
the route, spam protection, a retention policy, and a privacy policy that reflects
where the data actually goes (`/privacy` currently documents the demo behaviour
accurately — it will need rewriting).

The file store will not persist on an ephemeral/serverless filesystem; `saveEnquiry`
catches that case and returns `persisted: false` rather than failing the request.

---

## Content and sourcing

**Photography.** Every image is openly licensed material from Wikimedia Commons, served
from its thumbnail endpoint. Author and licence travel with each entry in
`src/data/images.ts` and are rendered on `/credits`, as those licences require.

**Historical content.** The heritage dossiers on the Rajasthan flagship cite UNESCO's
World Heritage listing for the Hill Forts of Rajasthan and the linked encyclopaedia
articles, and each monument separates *On the record* from *Tradition and legend* —
Rajasthan's forts attract a great deal of both, and the page does not blur them.

**What is deliberately not invented.** No hotel names or partnerships, no ticket prices,
no customer reviews presented as real, no company credentials, no transport guarantees.
The testimonials are labelled sample content; contact details are labelled placeholders;
tier pricing is labelled indicative.

---

## Accessibility and responsiveness

Skip link, landmark regions and labelled controls throughout. The enquiry dialog traps
focus, closes on <kbd>Esc</kbd> and restores focus on close. The gallery lightbox is
keyboard-navigable. Results counts are announced with `aria-live`. Filters and search
are mirrored into the URL, so results are shareable and the back button behaves.
`prefers-reduced-motion` disables the scroll reveals and transitions. Layouts were
checked at 390 px, 768 px and 1440 px with no horizontal overflow.

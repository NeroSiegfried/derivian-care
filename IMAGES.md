# DeRivian Care — Image Reference

All images live in `public/images/`. Next.js serves them automatically from there; reference them in code as `/images/filename.jpg` (no `public/` prefix needed).

Logo SVGs are in the same folder. See the [Logo section](#logo) below.

---

## Site images

### `hero.jpg` — Home page hero

**Used on:** Home page, top of page, full-width behind the headline.
**Dimensions:** 1600 × 900 px minimum (16:9 or wider). This is the first image visitors see.
**What to use:** A warm, real scene of someone in their own home — relaxed, independent, comfortable. Could be a person making a cup of tea in their own kitchen, sitting reading in their living room, or heading out of their front door. Natural light. The person is the focus, not a carer.
**Avoid:** Institutional settings, clinical white backgrounds, anything that looks like a care home or hospital. Avoid images that centre the support worker more than the resident.

---

### `feature-0.jpg` — Home features block / daily living

**Used on:** Home page "What sets our support apart" section (first panel). Services page daily living panel. Services hero image.
**Dimensions:** 800 × 600 px minimum (4:3).
**What to use:** A relaxed, domestic scene — someone in their own home going about a daily task (making a meal, tidying up, sorting laundry). Could show a support worker nearby but not doing the task for them. Conveys independence and homeliness.

---

### `feature-1.jpg` — Home features block / professional

**Used on:** Home page features section (second panel). About page "DeRivian way" panel 01 (induction). Blog thumbnail for post #2.
**Dimensions:** 800 × 600 px minimum (4:3).
**What to use:** Two colleagues or a support worker and a manager reviewing notes, a support plan or a tablet together at a desk. Conveys professionalism, co-production and communication.

---

### `feature-2.jpg` — Home features block / life skills

**Used on:** Home page features section (third panel). Services page life skills panel and personal care panel. About page "DeRivian way" panels. Blog thumbnail for post #3.
**Dimensions:** 800 × 600 px minimum (4:3).
**What to use:** A support worker and resident working on something practical together — could be a budget spreadsheet, a recipe, a form, or a task at a table. Side-by-side, not face-to-face. Conveys empowerment and skill-building.

---

### `feature-3.jpg` — Community access / outdoors

**Used on:** Home page services section (community card). Services page community access panel. About page hero image. Blog thumbnail for post #7.
**Dimensions:** 800 × 600 px minimum (4:3).
**What to use:** A person or two people out in the community — at a market, a park, a café, a community centre. Active, natural, real. Conveys social inclusion and community participation. Can show a support worker accompanying but not dominating.

---

### `feature-4.jpg` — Health & wellbeing / medication

**Used on:** Home page services section (health card). Services page health & wellbeing panel. About page "DeRivian way" panel 02. Blog thumbnail for post #5.
**Dimensions:** 800 × 600 px minimum (4:3).
**What to use:** A support worker or resident looking at a pill organiser, a blister pack or a health app on a tablet — calm, careful, organised. No syringes or anything alarming.

---

### `blog-0.jpg` — Blog thumbnail A

**Used on:** Blog list page (static fallback cards), blog post #1.
**Dimensions:** 800 × 533 px minimum (3:2 — this is the aspect ratio the blog cards use).
**What to use:** Two people having a warm, easy conversation — on a sofa, at a table, in a garden. Natural, human, not staged. Works as a general "trust and connection" image.

---

### `blog-1.jpg` — Blog thumbnail B

**Used on:** Blog list page (static fallback cards), blog posts #4, #6.
**Dimensions:** 800 × 533 px minimum (3:2).
**What to use:** A person using a tablet, laptop or phone in a relaxed home setting — looking at something together with a support worker, or independently. Conveys planning, communication and digital access.

---

### `blog-2.jpg` — Blog thumbnail C

**Used on:** Home page "recent posts" section, blog list page (static fallback cards), blog post #6.
**Dimensions:** 800 × 533 px minimum (3:2).
**What to use:** A resident and support worker going through a document, notebook or plan together — side by side on a sofa or at a table. Conveys co-production, reviews and planning.

---

## Logo

Logo files are SVGs (vector, any size). Replace these when your logo is ready.

| File | Where used |
|---|---|
| `public/images/logo-dark.svg` | Nav bar (appears on light backgrounds) |
| `public/images/logo-light.svg` | Footer (appears on dark background) |

The logo SVG should export two versions: one with dark text/mark for light backgrounds, one with white/light text for the dark footer. The current code renders the logo as a text-based "D / DeRivian Care" mark — swap in your SVG by updating `Nav.jsx` and `Footer.jsx` where the `.logo` elements are, or replace the SVG files directly if you keep the same `<img src>` approach.

---

## Image tone guidance

Supported living imagery should feel different from domiciliary care or care home photography. Key principles:

- **The resident is the subject.** Support workers are supporting characters, not the centre of the image.
- **Their home, not a facility.** Décor, plants, personal items, mess — real homes look lived-in.
- **Capable and active.** Show people doing things, going places, making choices — not passively receiving care.
- **Diverse.** Reflect London's diversity in ethnicity, age, disability visibility and background.
- **Natural light and real settings.** Avoid studio shots, matching uniforms in clinical environments, or anything that looks like a stock-photo care scene.

Suitable sources: Shutterstock (search "supported living", "independent living adult", "learning disability community"), Magnific for AI upscaling, or generate with an AI tool using the descriptions above.

---

## Adding a new image

1. Drop the file into `public/images/`
2. Reference it as `/images/your-file.jpg` in JSX or in the `imageUrl` field of a blog post (via Prisma seed or direct DB entry)
3. No import needed — Next.js serves `public/` as static assets

### Recommended formats
- Photos: **JPG** at 80–85% quality. Aim for under 200 KB for thumbnails, under 400 KB for hero.
- Logos / icons: **SVG** (scalable, tiny file size).
- Avoid PNG for photos (much larger file size for no visible benefit on this site).

### Adding a new blog post image
Seed new posts in `prisma/seed.js` and reference the image:
```js
imageUrl: "/images/your-new-image.jpg",
imageAlt: "Descriptive alt text for screen readers",
```
Then re-run `npm run db:seed`.

---

## Summary table

| File | Aspect ratio | Min size | Page(s) |
|---|---|---|---|
| `hero.jpg` | 16:9 | 1600 × 900 | Home hero |
| `feature-0.jpg` | 4:3 | 800 × 600 | Home features, services, daily living |
| `feature-1.jpg` | 4:3 | 800 × 600 | Home features, about, blog posts |
| `feature-2.jpg` | 4:3 | 800 × 600 | Home features, services, life skills |
| `feature-3.jpg` | 4:3 | 800 × 600 | Services community, about hero, blog posts |
| `feature-4.jpg` | 4:3 | 800 × 600 | Home services, health panel, blog posts |
| `blog-0.jpg` | 3:2 | 800 × 533 | Blog cards |
| `blog-1.jpg` | 3:2 | 800 × 533 | Blog cards |
| `blog-2.jpg` | 3:2 | 800 × 533 | Blog cards, home recent posts |
| `logo-dark.svg` | — | Vector | Nav bar |
| `logo-light.svg` | — | Vector | Footer |

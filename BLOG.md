# DeRivian Care — Blog Guide

How to add, edit and manage blog posts on the DeRivian Care site.

---

## How posts are stored

The site has two sources for blog posts, used in priority order:

1. **Database (live)** — posts stored in the Prisma Postgres database. Used on the live site in production.
2. **Static fallback (`src/lib/staticPosts.js`)** — hardcoded posts used when the database is unavailable. Used during local development without a DB connection, and as a content safety net.

When the database returns posts they take priority. If the database is unreachable, the static posts appear instead.

---

## Adding a post — the quick way (database)

### 1. Add the post to `prisma/seed.js`

Open [`prisma/seed.js`](prisma/seed.js) and add a new object to the `posts` array. Copy an existing post and edit each field:

```js
{
  slug: "your-post-slug",           // URL-safe, lowercase, hyphens only. Must be unique.
  title: "Your Post Title",
  excerpt: "One or two sentence summary shown on blog list and home page previews.",
  content: `
    <p class="lede">Opening paragraph — displayed larger than body text.</p>

    <h2>Section heading</h2>
    <p>Body paragraph.</p>

    <h3>Sub-heading</h3>
    <p>Another paragraph.</p>

    <blockquote>"A quotation, if relevant."</blockquote>

    <ul>
      <li>Bullet point</li>
      <li>Another point</li>
    </ul>
  `,
  category: "Supported Living Advice",   // See categories below
  categoryKey: "advice",                  // See categories below
  featured: false,                        // true = shown in featured slot (one post only)
  authorName: "Vivienne Ewah",
  authorInitials: "VE",
  authorRole: "Registered Manager",
  readTime: 4,                            // Estimated minutes to read
  publishedAt: new Date("2026-06-07"),    // ISO date string
  imageUrl: "/images/blog-0.jpg",         // See image reference below
  imageAlt: "Descriptive alt text for screen readers",
  tags: ["Tag one", "Tag two"],           // Array of strings, shown on post page
},
```

### 2. Run the seed script

```bash
node --env-file=.env.local prisma/seed.js
```

The seed uses `upsert` (slug as key), so re-running it is safe — it updates existing posts and adds new ones without duplicating.

### 3. Deploy

Commit your changes and push to `main`. Vercel will build and deploy automatically.

---

## Available categories

Use one of these category / categoryKey pairs for consistency:

| `category` (display) | `categoryKey` |
|---|---|
| `"Supported Living Advice"` | `"advice"` |
| `"Care Tips"` | `"tips"` |
| `"CQC Updates"` | `"cqc"` |
| `"Community Events"` | `"community"` |

To add a new category, just pick a new display name and key — the site renders whatever value is in the DB.

---

## Content formatting (HTML in `content`)

The `content` field is raw HTML rendered inside a `.prose` wrapper. Supported elements:

| Element | Use for |
|---|---|
| `<p class="lede">` | Opening paragraph — rendered larger |
| `<h2>` | Section heading |
| `<h3>` | Sub-heading |
| `<p>` | Body paragraph |
| `<blockquote>` | Pull quote |
| `<ul>` / `<li>` | Bullet list |
| `<ol>` / `<li>` | Numbered list |
| `<strong>` | Bold emphasis |
| `<em>` | Italic |
| `<a href="...">` | Link |
| `<figure>` + `<figcaption>` | Image with caption |

### Embedding an image in post content

```html
<figure>
  <div class="img-frame ratio-2-1">
    <img src="/images/your-image.jpg" alt="Descriptive alt text" />
  </div>
  <figcaption>Caption text here.</figcaption>
</figure>
```

---

## Blog images

All images live in `public/images/` and are referenced as `/images/filename.jpg`.

### Existing blog thumbnail files

| File | Aspect ratio | Used as |
|---|---|---|
| `/images/blog-0.jpg` | 3:2 | General warmth / community scene |
| `/images/blog-1.jpg` | 3:2 | Planning / digital / tablet scene |
| `/images/blog-2.jpg` | 3:2 | Resident + support worker reviewing together |
| `/images/feature-0.jpg` | 4:3 | Daily living / home scene |
| `/images/feature-1.jpg` | 4:3 | Professional / desk / notes scene |
| `/images/feature-2.jpg` | 4:3 | Life skills / practical task |
| `/images/feature-3.jpg` | 4:3 | Community / outdoors |
| `/images/feature-4.jpg` | 4:3 | Health / medication |

### Adding a new image for a post

1. Add your image file to `public/images/` (JPG, 80–85% quality, under 200 KB for thumbnails)
2. Reference it in the seed post as `imageUrl: "/images/your-file.jpg"`
3. Write a descriptive `imageAlt` — screen readers depend on this

See [IMAGES.md](IMAGES.md) for full image guidance and naming conventions.

---

## Updating an existing post

Edit the matching object in `prisma/seed.js` and re-run the seed. The `upsert` by slug will overwrite the existing database record with your updated content.

If you also want the static fallback to match, update the same post in [`src/lib/staticPosts.js`](src/lib/staticPosts.js). The format is identical except `publishedAt` is a string (`"2026-06-07"`) rather than a `Date` object.

---

## Deleting a post

The seed script does not delete posts that no longer appear in its array. To remove a post from the database, run:

```bash
node --env-file=.env.local -e "
const { PrismaClient } = require('./node_modules/@prisma/client')
const p = new PrismaClient()
p.post.delete({ where: { slug: 'the-post-slug' } })
  .then(() => { console.log('Deleted'); return p.\$disconnect() })
"
```

Then remove it from `prisma/seed.js` (and `staticPosts.js` if it appears there too).

---

## Featured posts

Set `featured: true` on one post to make it appear in the featured/hero slot on the blog list page. All other posts should have `featured: false`. Only one featured post is used at a time; if multiple are marked, the most recently published is used.

---

## Authors

Authors are taken directly from the post fields — `authorName`, `authorInitials`, `authorRole`. They are not linked to the team config. Keep initials to two characters (used as the avatar fallback).

---

## Environments

| Environment | DB used | How to seed |
|---|---|---|
| Local dev (with DB) | `.env.local` DB | `node --env-file=.env.local prisma/seed.js` |
| Production (Vercel) | Vercel / Prisma Postgres | `node --env-file=.env.production prisma/seed.js` |
| Local dev (no DB) | None — static fallback | Edit `src/lib/staticPosts.js` directly |

Pull fresh Vercel env vars locally with:
```bash
vercel env pull --environment=production .env.production
```

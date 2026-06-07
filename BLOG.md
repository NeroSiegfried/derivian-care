# DeRivian Care — Blog Guide

How to add, edit and manage blog posts on the DeRivian Care site.

---

## How posts are stored

All blog content lives in the **Prisma Postgres database**. The seed file (`prisma/seed.js`) is the source of truth — it defines every post and pushes it to the database with `upsert`, so re-running it is always safe.

There is no static fallback. If the database is unreachable, no posts are shown.

---

## Adding a post

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
  imageUrl: "/images/25.jpg",            // Path to thumbnail — see Blog images below
  imageAlt: "Descriptive alt text for screen readers",
  tags: ["Tag one", "Tag two"],           // Array of strings, shown on post page
},
```

### 2. Add the image

Drop your image file into `public/images/` (JPG, max 800px wide, under 200 KB — see compression below). Name it the next available number (e.g. `25.jpg` if 24 is the last existing one). Update `imageUrl` in the seed to match.

See [IMAGES.md](IMAGES.md) for descriptions of all existing images and what each number looks like.

### 3. Run the seed

```bash
# Local
node --env-file=.env.local prisma/seed.js

# Production
node --env-file=.env.production prisma/seed.js
```

### 4. Deploy

Commit your changes (seed file + image) and push to `main`. Vercel builds automatically.

---

## Available categories

| `category` (display) | `categoryKey` |
|---|---|
| `"Supported Living Advice"` | `"advice"` |
| `"Care Tips"` | `"tips"` |
| `"CQC Updates"` | `"cqc"` |
| `"Community Events"` | `"community"` |

To add a new category, use any display name and key — the site renders whatever value is in the database.

---

## Blog images

Each post has two image fields stored in the database:

| Field | Type | Purpose |
|---|---|---|
| `imageUrl` | `String` | Path to the thumbnail, e.g. `/images/25.jpg` |
| `imageAlt` | `String` | Alt text shown to screen readers and on image failure |

You can use any image you like — the field accepts any path under `public/`. Recommended workflow for new posts:

1. Drop the image into `public/images/` as the next number (`25.jpg`, `26.jpg`, …)
2. Run `bash scripts/compress.sh 25.jpg` to resize and compress it before committing
3. Set `imageUrl: "/images/25.jpg"` and a descriptive `imageAlt` in the seed

### Existing blog thumbnails

| Image | Post |
|---|---|
| `/images/25.jpg` | Building trust through consistent support |
| `/images/26.jpg` | Understanding CQC standards in supported living |
| `/images/9.jpg` | Independence matters more than you might think |
| `/images/14.jpg` | Summer gathering brings families together |
| `/images/15.jpg` | Nutrition tips for staying well at home |
| `/images/16.jpg` | Choosing a supported living provider: a family guide |
| `/images/17.jpg` | Medication safety: a guide for families |
| `/images/18.jpg` | How we prepare for a CQC inspection |
| `/images/19.jpg` | Volunteers needed for our autumn coffee mornings |
| `/images/20.jpg` | Funding your care: a plain-English guide |
| `/images/21.jpg` | Reducing fall risks around the home |
| `/images/22.jpg` | Celebrating our carers on Care Workers' Day |
| `/images/23.jpg` | What 'person-centred' really means |

For descriptions of what each image should look like, see [IMAGES.md](IMAGES.md).

### Embedding an image inside post content

Use this HTML pattern inside the `content` field:

```html
<figure>
  <div class="img-frame ratio-2-1">
    <img src="/images/your-image.jpg" alt="Descriptive alt text" />
  </div>
  <figcaption>Caption text here.</figcaption>
</figure>
```

### Compressing images

Run the local compression script before committing any new images:

```bash
bash scripts/compress.sh 25.jpg       # compress one file
bash scripts/compress.sh               # compress all JPGs in public/images/
```

This script is gitignored (local use only). It uses macOS `sips`. On Linux, swap `sips` for ImageMagick (`convert`).

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

---

## Updating an existing post

Edit the matching object in `prisma/seed.js` and re-run the seed. The `upsert` by slug will overwrite the existing record with your updated content, including any new `imageUrl`.

---

## Deleting a post

The seed does not delete posts that no longer appear in its array. To remove one:

```bash
node --env-file=.env.production -e "
const { PrismaClient } = require('./node_modules/@prisma/client')
const p = new PrismaClient()
p.post.delete({ where: { slug: 'the-post-slug' } })
  .then(() => { console.log('Deleted'); return p.\$disconnect() })
"
```

Then remove it from `prisma/seed.js`.

---

## Featured posts

Set `featured: true` on one post to place it in the hero slot on the blog list page. Only one featured post is used at a time — if multiple are marked, the most recently published wins.

---

## Authors

Author fields (`authorName`, `authorInitials`, `authorRole`) are per-post and independent of the team config in `src/lib/config.js`. Keep `authorInitials` to two characters.

---

## Environments

| Environment | How to seed |
|---|---|
| Local (with DB) | `node --env-file=.env.local prisma/seed.js` |
| Production | `node --env-file=.env.production prisma/seed.js` |

Pull fresh Vercel env vars locally:
```bash
vercel env pull --environment=production .env.production
```

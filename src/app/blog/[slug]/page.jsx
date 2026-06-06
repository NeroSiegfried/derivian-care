import Link from "next/link"
import { notFound } from "next/navigation"
import { prisma } from "@/lib/db"

async function getPost(slug) {
  try {
    return await prisma.post.findUnique({ where: { slug } })
  } catch {
    return null
  }
}

async function getRelated(post) {
  try {
    return await prisma.post.findMany({
      where: { categoryKey: post.categoryKey, slug: { not: post.slug } },
      orderBy: { publishedAt: "desc" },
      take: 3,
      select: { slug: true, title: true, category: true, readTime: true, imageUrl: true, imageAlt: true },
    })
  } catch {
    return []
  }
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

export default async function BlogPostPage({ params }) {
  const post = await getPost(params.slug)
  if (!post) notFound()

  const related = await getRelated(post)

  const publishedDate = new Date(post.publishedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })

  return (
    <main id="main">
      {/* Header */}
      <section className="section scheme-2">
        <div className="container">
          <div className="measure reveal" style={{ marginInline: "auto", marginBottom: "var(--section-y)" }}>
            <nav className="crumbs" aria-label="Breadcrumb" style={{ marginBottom: "1.5rem" }}>
              <Link href="/blog">Blog</Link>
              <span className="sep">/</span>
              <span>{post.category}</span>
            </nav>
            <h1 style={{ marginBottom: "1.5rem" }}>{post.title}</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", alignItems: "center", justifyContent: "space-between" }}>
              <div className="byline">
                <div className="byline__avatar">{post.authorInitials}</div>
                <div>
                  <p style={{ fontWeight: 600 }}>{post.authorName}</p>
                  <p className="member__role" style={{ margin: 0, fontSize: "var(--text-small)" }}>
                    {post.authorRole} &middot; {publishedDate} &middot; {post.readTime} min read
                  </p>
                </div>
              </div>
              <div className="iconlinks">
                <a href="#" aria-label="Copy link"><svg className="icon" aria-hidden="true"><use href="#i-link" /></svg></a>
                <a href="#" aria-label="Share on LinkedIn"><svg className="icon" aria-hidden="true"><use href="#i-linkedin" /></svg></a>
                <a href="#" aria-label="Share on X"><svg className="icon" aria-hidden="true"><use href="#i-x" /></svg></a>
                <a href="#" aria-label="Share on Facebook"><svg className="icon" aria-hidden="true"><use href="#i-facebook" /></svg></a>
              </div>
            </div>
          </div>
          <div className="img-frame ratio-2-1 reveal">
            <img src={post.imageUrl} alt={post.imageAlt} />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section scheme-1">
        <div className="prose reveal" dangerouslySetInnerHTML={{ __html: post.content }} />
      </section>

      {/* Share + Tags */}
      <section className="section scheme-1" style={{ paddingTop: 0 }}>
        <div className="prose">
          <hr className="hr" />
          <div style={{ textAlign: "center" }}>
            <p style={{ fontWeight: 600, marginBottom: "1rem" }}>Share this article</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="iconlinks">
                <a href="#" aria-label="Copy link"><svg className="icon" aria-hidden="true"><use href="#i-link" /></svg></a>
                <a href="#" aria-label="Share on LinkedIn"><svg className="icon" aria-hidden="true"><use href="#i-linkedin" /></svg></a>
                <a href="#" aria-label="Share on X"><svg className="icon" aria-hidden="true"><use href="#i-x" /></svg></a>
                <a href="#" aria-label="Share on Facebook"><svg className="icon" aria-hidden="true"><use href="#i-facebook" /></svg></a>
              </div>
            </div>
          </div>
          {post.tags.length > 0 && (
            <div className="tagrow" style={{ marginTop: "2rem" }}>
              {post.tags.map((tag) => (
                <span key={tag} className="badge">{tag}</span>
              ))}
            </div>
          )}
          <hr className="hr" />
          <div className="byline" style={{ justifyContent: "center", textAlign: "left" }}>
            <div className="byline__avatar">{post.authorInitials}</div>
            <div>
              <p style={{ fontWeight: 600 }}>Written by {post.authorName}</p>
              <p className="muted">{post.authorRole} at DeRivian Care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section scheme-3">
          <div className="container">
            <div className="heading reveal"><h2>Related articles</h2></div>
            <div className="grid grid--3">
              {related.map((r) => (
                <article key={r.slug} className="post reveal">
                  <Link className="post__media" href={`/blog/${r.slug}`}>
                    <div className="img-frame ratio-3-2">
                      <img src={r.imageUrl} alt={r.imageAlt} />
                    </div>
                  </Link>
                  <div className="post__meta">
                    <span className="badge">{r.category}</span>
                    <span className="min">{r.readTime} min read</span>
                  </div>
                  <h3><Link href={`/blog/${r.slug}`}>{r.title}</Link></h3>
                </article>
              ))}
            </div>
            <div className="actions reveal" style={{ justifyContent: "center", marginTop: "var(--section-y)" }}>
              <Link className="btn btn--secondary" href="/blog">View all articles</Link>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

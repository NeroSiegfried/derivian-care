import Link from "next/link"
import BlogGrid from "@/components/BlogGrid"
import { prisma } from "@/lib/db"

export const metadata = {
  title: "Blog",
  description:
    "Stories, CQC updates, community news and supported living advice from DeRivian Care — supported living services across London.",
}

async function getPosts() {
  try {
    return (await prisma?.post.findMany({
      orderBy: { publishedAt: "desc" },
      select: {
        id: true,
        slug: true,
        title: true,
        excerpt: true,
        category: true,
        categoryKey: true,
        featured: true,
        readTime: true,
        imageUrl: true,
        imageAlt: true,
      },
    })) ?? []
  } catch {
    return []
  }
}

export default async function BlogPage() {
  const all = await getPosts()
  const featured = all.find((p) => p.featured) ?? all[0]
  const gridPosts = all.filter((p) => !p.featured)

  return (
    <main id="main">
      {/* Hero */}
      <section className="section scheme-1">
        <div className="container">
          <div className="hero__head reveal" style={{ maxWidth: "42rem" }}>
            <p className="eyebrow">The DeRivian blog</p>
            <h1>Stories that matter</h1>
            <p className="lead">
              Insights on care, community and the lives we support — plus practical guidance for families and the latest on CQC standards.
            </p>
          </div>
        </div>
      </section>

      {/* Featured + Grid */}
      <section className="section scheme-3">
        <div className="container">
          {featured && (
            <article className="featured reveal">
              <Link className="post__media" href={`/blog/${featured.slug}`} style={{ margin: 0 }}>
                <div className="img-frame ratio-3-2">
                  <img src={featured.imageUrl} alt={featured.imageAlt} />
                </div>
              </Link>
              <div className="featured__body">
                <div className="post__meta" style={{ marginBottom: ".25rem" }}>
                  <span className="badge">Featured</span>
                  <span className="min">{featured.readTime} min read</span>
                </div>
                <h2>{featured.title}</h2>
                <p className="lead">{featured.excerpt}</p>
                <Link className="btn btn--primary" href={`/blog/${featured.slug}`} style={{ marginTop: "1.5rem" }}>
                  Read the story
                </Link>
              </div>
            </article>
          )}

          <BlogGrid posts={gridPosts} />
        </div>
      </section>
    </main>
  )
}

"use client"
import { useState } from "react"
import Link from "next/link"

const INITIAL = 6
const BATCH = 3
const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "cqc", label: "CQC Updates" },
  { key: "community", label: "Community Events" },
  { key: "advice", label: "Supported Living Advice" },
  { key: "tips", label: "Care Tips" },
]

export default function BlogGrid({ posts }) {
  const [activeCat, setActiveCat] = useState("all")
  const [shown, setShown] = useState(INITIAL)

  const filtered =
    activeCat === "all" ? posts : posts.filter((p) => p.categoryKey === activeCat)
  const visible = filtered.slice(0, shown)
  const hasMore = shown < filtered.length

  function selectCat(key) {
    setActiveCat(key)
    setShown(INITIAL)
  }

  return (
    <>
      <div className="chips reveal" role="group" aria-label="Filter articles by category">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            className="chip"
            type="button"
            data-cat={cat.key}
            aria-pressed={activeCat === cat.key ? "true" : "false"}
            onClick={() => selectCat(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid--3">
        {visible.map((post) => (
          <article key={post.id} className="post" data-category={post.categoryKey}>
            <Link className="post__media" href={`/blog/${post.slug}`} tabIndex={-1} aria-hidden="true">
              <div className="img-frame ratio-3-2">
                <img src={post.imageUrl} alt={post.imageAlt} loading="lazy" />
              </div>
            </Link>
            <div className="post__meta">
              <span className="badge">{post.category}</span>
              <span className="min">{post.readTime} min read</span>
            </div>
            <h3>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <p>{post.excerpt}</p>
            <Link
              className="btn btn--link"
              href={`/blog/${post.slug}`}
              aria-label={`Read more: ${post.title}`}
            >
              Read more{" "}
              <svg className="ico icon" aria-hidden="true">
                <use href="#i-chev-right" />
              </svg>
            </Link>
          </article>
        ))}
      </div>

      {hasMore && (
        <div className="actions reveal" style={{ justifyContent: "center", marginTop: "var(--section-y)" }}>
          <button
            className="btn btn--secondary"
            type="button"
            onClick={() => setShown((s) => s + BATCH)}
          >
            Load more articles
          </button>
        </div>
      )}
    </>
  )
}

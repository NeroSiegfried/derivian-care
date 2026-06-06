import Link from "next/link"
import Accordion from "@/components/Accordion"
import { siteConfig } from "@/lib/config"
import { prisma } from "@/lib/db"
import { STATIC_POSTS } from "@/lib/staticPosts"

async function getRecentPosts() {
  try {
    const rows = (await prisma?.post.findMany({
      where: { featured: false },
      orderBy: { publishedAt: "desc" },
      take: 3,
      select: { slug: true, title: true, excerpt: true, category: true, readTime: true, imageUrl: true, imageAlt: true },
    })) ?? []
    if (rows.length > 0) return rows
  } catch {
    // fall through to static
  }
  return STATIC_POSTS.filter((p) => !p.featured).slice(0, 3)
}

export default async function HomePage() {
  const posts = await getRecentPosts()

  return (
    <main id="main">
      {/* Hero */}
      <section className="section scheme-1">
        <div className="container">
          <div className="hero__head reveal">
            <h1>Your home, your life, your way</h1>
            <p className="lead">
              DeRivian Care provides supported living services for adults across London — helping people with learning disabilities, autism, mental health needs and physical disabilities to live independently, build life skills and be part of their community.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--primary btn--lg" href="/services">Our Services</Link>
              <Link className="btn btn--secondary btn--lg" href="/contact">Get in Touch</Link>
            </div>
          </div>
          <div className="hero__media reveal">
            <div className="img-frame ratio-2-1">
              <img src="/images/hero.jpg" alt="A supported living resident spending time in their own home, relaxed and comfortable" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section scheme-2">
        <div className="container">
          <div className="heading heading--center reveal">
            <p className="eyebrow">Why choose us</p>
            <h2>What sets our support apart</h2>
            <p className="lead">
              We listen first, then act. Every person we support has their own story, their own goals and their own vision for how they want to live — and we build our support around that vision, not the other way round.
            </p>
          </div>
          <div className="grid grid--3">
            <article className="feature reveal">
              <div className="img-frame ratio-16-9">
                <img src="/images/feature-0.jpg" alt="Three people relaxing and laughing together in a comfortable living room" />
              </div>
              <h4>Co-produced support plans</h4>
              <p>We work with you — not for you. Your goals, your routine and your definition of independence shape every support plan, reviewed regularly so it stays relevant as you grow.</p>
            </article>
            <article className="feature reveal">
              <div className="img-frame ratio-16-9">
                <img src="/images/feature-1.jpg" alt="Two colleagues reviewing support notes together at a desk" />
              </div>
              <h4>Experienced &amp; consistent team</h4>
              <p>A familiar team builds the relationships and trust that make real progress possible. We invest in our staff so they stay — and so you always have people around you who truly know you.</p>
            </article>
            <article className="feature reveal">
              <div className="img-frame ratio-16-9">
                <img src="/images/feature-2.jpg" alt="A support worker and resident reviewing a plan together on a sofa" />
              </div>
              <h4>Empowering independence</h4>
              <p>We step back where we can, encourage where we should, and support where it counts — so you build confidence, develop skills and live life on your own terms.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section scheme-1">
        <div className="container">
          <div className="heading heading--center reveal">
            <p className="eyebrow">Services</p>
            <h2>Support shaped around your life</h2>
            <p className="lead">
              From the practical to the personal, our support is designed to build your independence — not create dependency. Every service is delivered by people who understand that living well means something different to everyone.
            </p>
          </div>
          <div className="grid grid--4">
            <article className="feature reveal">
              <div className="img-frame ratio-16-9">
                <img src="/images/feature-0.jpg" alt="A resident going about their daily routine at home with light support" loading="lazy" />
              </div>
              <h5>Daily living support</h5>
              <p>Practical help with cooking, shopping, cleaning and managing your home — so you can focus on the life you want to live.</p>
              <Link className="btn btn--link" href="/services#daily-living">
                Read more <svg className="ico icon" aria-hidden="true"><use href="#i-chev-right" /></svg>
              </Link>
            </article>
            <article className="feature reveal">
              <div className="img-frame ratio-16-9">
                <img src="/images/feature-2.jpg" alt="A support worker encouraging a resident to develop a new skill" loading="lazy" />
              </div>
              <h5>Life skills development</h5>
              <p>Budgeting, cooking, using public transport and managing your tenancy — building the skills that unlock real independence.</p>
              <Link className="btn btn--link" href="/services#life-skills">
                Read more <svg className="ico icon" aria-hidden="true"><use href="#i-chev-right" /></svg>
              </Link>
            </article>
            <article className="feature reveal">
              <div className="img-frame ratio-16-9">
                <img src="/images/feature-3.jpg" alt="A resident and support worker heading out into the community together" loading="lazy" />
              </div>
              <h5>Community access</h5>
              <p>Support to access social activities, leisure, education and employment — because a good life happens inside and outside your home.</p>
              <Link className="btn btn--link" href="/services#community">
                Read more <svg className="ico icon" aria-hidden="true"><use href="#i-chev-right" /></svg>
              </Link>
            </article>
            <article className="feature reveal">
              <div className="img-frame ratio-16-9">
                <img src="/images/feature-4.jpg" alt="A support worker calmly reviewing health and wellbeing notes with a resident" loading="lazy" />
              </div>
              <h5>Health &amp; wellbeing</h5>
              <p>Medication management, GP access and mental health support — joined-up care that keeps you safe, healthy and thriving.</p>
              <Link className="btn btn--link" href="/services#health">
                Read more <svg className="ico icon" aria-hidden="true"><use href="#i-chev-right" /></svg>
              </Link>
            </article>
          </div>
          <div className="actions" style={{ justifyContent: "center", marginTop: "var(--section-y)" }}>
            <Link className="btn btn--secondary" href="/services">View all services</Link>
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="section scheme-3">
        <div className="container">
          <div className="heading heading--center reveal">
            <p className="eyebrow">Updates</p>
            <h2>From our community</h2>
            <p className="lead">Stories, guidance and insights on supported living, independence and the things that matter to the people we support.</p>
          </div>
          <div className="grid grid--3">
            {posts.map((post) => (
              <article key={post.slug} className="post reveal">
                <Link className="post__media" href={`/blog/${post.slug}`}>
                  <div className="img-frame ratio-3-2">
                    <img src={post.imageUrl} alt={post.imageAlt} />
                  </div>
                </Link>
                <div className="post__meta">
                  <span className="badge">{post.category}</span>
                  <span className="min">{post.readTime} min read</span>
                </div>
                <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                <p>{post.excerpt}</p>
                <Link className="btn btn--link" href={`/blog/${post.slug}`}>
                  Read more <svg className="ico icon" aria-hidden="true"><use href="#i-chev-right" /></svg>
                </Link>
              </article>
            ))}
          </div>
          <div className="actions" style={{ justifyContent: "center", marginTop: "var(--section-y)" }}>
            <Link className="btn btn--secondary" href="/blog">View blogs</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section scheme-1">
        <div className="container">
          <div className="heading reveal">
            <h2>Questions</h2>
            <p className="lead">
              Find answers to common questions about our supported living services. Can&apos;t see yours?{" "}
              <Link href="/contact" style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>Get in touch</Link>.
            </p>
          </div>
          <Accordion items={siteConfig.faq} />
          <div className="cta-block reveal" style={{ marginTop: "var(--section-y)" }}>
            <h4>Ready to talk?</h4>
            <p className="lead">Get in touch with our friendly team today — we&apos;re here to help.</p>
            <div className="actions">
              <Link className="btn btn--secondary" href="/contact">Contact us</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

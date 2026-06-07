import Link from "next/link"
import Accordion from "@/components/Accordion"
import { siteConfig } from "@/lib/config"
import { prisma } from "@/lib/db"

async function getRecentPosts() {
  try {
    return (await prisma?.post.findMany({
      where: { featured: false },
      orderBy: { publishedAt: "desc" },
      take: 3,
      select: { slug: true, title: true, excerpt: true, category: true, readTime: true, imageUrl: true, imageAlt: true },
    })) ?? []
  } catch {
    return []
  }
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
              <Link className="btn btn--secondary btn--lg" href="/contact?t=general#form">Get in Touch</Link>
            </div>
          </div>
          <div className="hero__media reveal">
            <div className="img-frame ratio-2-1">
              <img src="/images/1.jpg" alt="A supported living resident spending time in their own home, relaxed and comfortable" />
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
          <div className="grid grid--4">
            <article className="feature reveal">
              <div className="img-frame ratio-16-9">
                <img src="/images/4.jpg" alt="A support worker and resident building a support plan together at a table" />
              </div>
              <h4>Co-produced support plans</h4>
              <p>We develop every support plan with you — not for you. Your goals, your routines and your vision for independence shape every decision we make.</p>
            </article>
            <article className="feature reveal">
              <div className="img-frame ratio-16-9">
                <img src="/images/3.jpg" alt="Two support workers reviewing notes together — a small, consistent team" />
              </div>
              <h4>Consistent, familiar team</h4>
              <p>A small, consistent team builds the real relationships that make progress possible. We invest in our staff so they stay — and so you always have people who truly know you.</p>
            </article>
            <article className="feature reveal">
              <div className="img-frame ratio-16-9">
                <img src="/images/2.jpg" alt="A resident confidently going about their daily routine independently" />
              </div>
              <h4>Empowering independence</h4>
              <p>We step back where we can, encourage where we should, and support where it counts — so you grow in confidence and live life on your own terms.</p>
            </article>
            <article className="feature reveal">
              <div className="img-frame ratio-16-9">
                <img src="/images/5.jpg" alt="A support worker and resident from diverse backgrounds sharing a warm moment in the community" />
              </div>
              <h4>Inclusive &amp; culturally aware</h4>
              <p>We respect your culture, your language and your faith. London&apos;s diversity shapes how we work — every support plan honours the whole person, not just their assessed needs.</p>
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
                <img src="/images/12-2.jpg" alt="A resident going about their daily routine at home with light support" loading="lazy" />
              </div>
              <h5>Daily living support</h5>
              <p>Practical help with cooking, shopping, cleaning and managing your home — so you can focus on the life you want to live.</p>
              <Link className="btn btn--link" href="/services#daily-living">
                Read more <svg className="ico icon" aria-hidden="true"><use href="#i-chev-right" /></svg>
              </Link>
            </article>
            <article className="feature reveal">
              <div className="img-frame ratio-16-9">
                <img src="/images/14-2.jpg" alt="A support worker encouraging a resident to develop a new skill" loading="lazy" />
              </div>
              <h5>Life skills development</h5>
              <p>Budgeting, cooking, using public transport and managing your tenancy — building the skills that unlock real independence.</p>
              <Link className="btn btn--link" href="/services#life-skills">
                Read more <svg className="ico icon" aria-hidden="true"><use href="#i-chev-right" /></svg>
              </Link>
            </article>
            <article className="feature reveal">
              <div className="img-frame ratio-16-9">
                <img src="/images/24.jpg" alt="A resident and support worker heading out into the community together" loading="lazy" />
              </div>
              <h5>Community access</h5>
              <p>Support to access social activities, leisure, education and employment — because a good life happens inside and outside your home.</p>
              <Link className="btn btn--link" href="/services#community">
                Read more <svg className="ico icon" aria-hidden="true"><use href="#i-chev-right" /></svg>
              </Link>
            </article>
            <article className="feature reveal">
              <div className="img-frame ratio-16-9">
                <img src="/images/6.jpg" alt="A support worker calmly reviewing health and wellbeing notes with a resident" loading="lazy" />
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

      {/* Referrers band */}
      <section className="section scheme-2">
        <div className="container">
          <div className="band reveal">
            <div className="band__text">
              <h3>Referring someone to us?</h3>
              <p className="lead">We work with local authority commissioners, social workers, NHS continuing healthcare teams and self-funders. Our referral process is straightforward and we work to your timeline.</p>
            </div>
            <Link className="btn btn--primary" href="/contact?t=referral#form">Make a referral</Link>
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
              <Link href="/contact?t=general#form" style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>Get in touch</Link>.
            </p>
          </div>
          <Accordion items={siteConfig.faq} />
          <div className="cta-block reveal" style={{ marginTop: "var(--section-y)" }}>
            <h4>Ready to talk?</h4>
            <p className="lead">Get in touch with our friendly team today — we&apos;re here to help.</p>
            <div className="actions">
              <Link className="btn btn--secondary" href="/contact?t=general#form">Contact us</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

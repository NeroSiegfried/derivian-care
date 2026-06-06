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
            <h1>Empowering independent living with compassion</h1>
            <p className="lead">
              DeRivian Care provides domiciliary care for adults across London — supporting those aged 18 to 65 and over 65 to live meaningful, independent lives in the comfort of their own homes.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--primary btn--lg" href="/services">Browse Services</Link>
              <Link className="btn btn--secondary btn--lg" href="/contact">Contact Us</Link>
            </div>
          </div>
          <div className="hero__media reveal">
            <div className="img-frame ratio-2-1">
              <img src="/images/hero.jpg" alt="A DeRivian carer sharing a warm moment with a client at home, both looking at a laptop together" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section scheme-2">
        <div className="container">
          <div className="heading heading--center reveal">
            <p className="eyebrow">Why choose us</p>
            <h2>What sets our care apart</h2>
            <p className="lead">
              We listen first, then act. Every person we support has their own story, their own pace, their own vision for how they want to live — and we build our care around that vision, not the other way around.
            </p>
          </div>
          <div className="grid grid--3">
            <article className="feature reveal">
              <div className="img-frame ratio-16-9">
                <img src="/images/feature-0.jpg" alt="Three people relaxing and laughing together in a comfortable living room" />
              </div>
              <h4>Person-centred care</h4>
              <p>We work with you to understand what matters most, then shape every visit and care plan around your personal goals — not a fixed list of tasks.</p>
            </article>
            <article className="feature reveal">
              <div className="img-frame ratio-16-9">
                <img src="/images/feature-1.jpg" alt="Two colleagues reviewing care notes together at a desk" />
              </div>
              <h4>Experienced &amp; compassionate team</h4>
              <p>A consistent, familiar team shows up day after day, building the real relationships and trust that make all the difference to your wellbeing.</p>
            </article>
            <article className="feature reveal">
              <div className="img-frame ratio-16-9">
                <img src="/images/feature-2.jpg" alt="A carer and client reading paperwork together on a sofa at home" />
              </div>
              <h4>Promoting independence</h4>
              <p>We step back where we can, encourage where we should, and support where it counts — so you grow in confidence and autonomy over time.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section scheme-1">
        <div className="container">
          <div className="heading heading--center reveal">
            <p className="eyebrow">Services</p>
            <h2>The care you need, shaped your way</h2>
            <p className="lead">
              We handle the practical side so you can focus on living. Each service is delivered by people who understand that independence means something different to everyone.
            </p>
          </div>
          <div className="grid grid--4">
            <article className="feature reveal">
              <div className="img-frame ratio-16-9">
                <img src="/images/feature-2.jpg" alt="A carer assisting a client with personal care at home, with dignity" loading="lazy" />
              </div>
              <h5>Personal care</h5>
              <p>Assistance with bathing, grooming and dressing — handled with dignity and respect, always.</p>
              <Link className="btn btn--link" href="/services#personal-care">
                Read more <svg className="ico icon" aria-hidden="true"><use href="#i-chev-right" /></svg>
              </Link>
            </article>
            <article className="feature reveal">
              <div className="img-frame ratio-16-9">
                <img src="/images/feature-4.jpg" alt="A care professional preparing medication safely" loading="lazy" />
              </div>
              <h5>Medication management</h5>
              <p>Reliable support ensuring medications are taken safely, correctly and on schedule.</p>
              <Link className="btn btn--link" href="/services#medication">
                Read more <svg className="ico icon" aria-hidden="true"><use href="#i-chev-right" /></svg>
              </Link>
            </article>
            <article className="feature reveal">
              <div className="img-frame ratio-16-9">
                <img src="/images/feature-3.jpg" alt="A nourishing home-cooked meal being prepared in a kitchen" loading="lazy" />
              </div>
              <h5>Nutrition &amp; hydration</h5>
              <p>Meal preparation and gentle encouragement to keep you nourished and well every day.</p>
              <Link className="btn btn--link" href="/services#nutrition">
                Read more <svg className="ico icon" aria-hidden="true"><use href="#i-chev-right" /></svg>
              </Link>
            </article>
            <article className="feature reveal">
              <div className="img-frame ratio-16-9">
                <img src="/images/blog-2.jpg" alt="A carer supporting a client to move safely and confidently at home" loading="lazy" />
              </div>
              <h5>Mobility support</h5>
              <p>Safe transfers and help moving around your home — or out into the world with confidence.</p>
              <Link className="btn btn--link" href="/services#mobility">
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
            <h2>What&apos;s happening in care</h2>
            <p className="lead">Stories, guidance and insights from across our community.</p>
          </div>
          <div className="grid grid--3">
            {posts.length > 0
              ? posts.map((post) => (
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
                ))
              : (
                <>
                  <article className="post reveal">
                    <Link className="post__media" href="/blog"><div className="img-frame ratio-3-2"><img src="/images/blog-0.jpg" alt="Two people chatting warmly on a sofa at home" /></div></Link>
                    <div className="post__meta"><span className="badge">Care</span><span className="min">4 min read</span></div>
                    <h3><Link href="/blog">Building trust through consistent care</Link></h3>
                    <p>How familiar faces and steady routines create the foundation for real independence.</p>
                    <Link className="btn btn--link" href="/blog">Read more <svg className="ico icon" aria-hidden="true"><use href="#i-chev-right" /></svg></Link>
                  </article>
                  <article className="post reveal">
                    <Link className="post__media" href="/blog"><div className="img-frame ratio-3-2"><img src="/images/blog-1.jpg" alt="A person using a tablet at a cosy table" /></div></Link>
                    <div className="post__meta"><span className="badge">Guidelines</span><span className="min">5 min read</span></div>
                    <h3><Link href="/blog">Understanding CQC standards in domiciliary care</Link></h3>
                    <p>What quality care looks like and how we meet those standards every single day.</p>
                    <Link className="btn btn--link" href="/blog">Read more <svg className="ico icon" aria-hidden="true"><use href="#i-chev-right" /></svg></Link>
                  </article>
                  <article className="post reveal">
                    <Link className="post__media" href="/blog"><div className="img-frame ratio-3-2"><img src="/images/blog-2.jpg" alt="Two people relaxing together" /></div></Link>
                    <div className="post__meta"><span className="badge">Tips</span><span className="min">3 min read</span></div>
                    <h3><Link href="/blog">Staying hydrated through the seasons</Link></h3>
                    <p>Simple, practical ways to maintain good hydration and support overall wellbeing.</p>
                    <Link className="btn btn--link" href="/blog">Read more <svg className="ico icon" aria-hidden="true"><use href="#i-chev-right" /></svg></Link>
                  </article>
                </>
              )}
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
              Find answers to common questions about our domiciliary care services. Can&apos;t see yours?{" "}
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

import Link from "next/link"
import { siteConfig } from "@/lib/config"

export const metadata = {
  title: "About Us",
  description:
    "Learn about DeRivian Care Ltd — our mission, our values of Care, Comfort and Compassion, the DeRivian way, and the leadership team behind our supported living services across London.",
  openGraph: {
    title: "About DeRivian Care",
    description: "Learn about DeRivian Care Ltd — our mission, our values of Care, Comfort and Compassion, and the leadership team behind our supported living services across London.",
    url: "https://derivian.co.uk/about",
    images: [{ url: "/images/13.jpg", width: 1200, height: 600, alt: "DeRivian Care team and leadership" }],
  },
  twitter: {
    title: "About DeRivian Care",
    description: "Learn about DeRivian Care Ltd — our mission, our values of Care, Comfort and Compassion, and the leadership team behind our supported living services across London.",
    images: ["/images/13.jpg"],
  },
}

export default function AboutPage() {
  return (
    <main id="main">
      {/* Hero */}
      <section className="section scheme-1">
        <div className="container">
          <div className="hero__head reveal" style={{ marginBottom: "var(--section-y)" }}>
            <p className="eyebrow">About DeRivian</p>
            <h1>Our journey to exceptional supported living</h1>
            <p className="lead">
              DeRivian Care Ltd is a London-based supported living provider specialising in high-quality, person-centred support for adults with learning disabilities, autism, mental health conditions and physical disabilities. We exist to help people live in their own homes, build real independence and be fully part of their communities.
            </p>
            <p className="lead" style={{ marginTop: "1.25rem" }}>
              Built on the values of Care, Comfort and Compassion, we combine extensive experience in support planning, safeguarding and regulatory compliance with a genuinely human approach. The result is support that is safe, responsive and outcome-focused — co-produced with the people we support, every step of the way.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--primary btn--lg" href="/services">Our services</Link>
              <Link className="btn btn--secondary btn--lg" href="/contact?t=general#form">Talk to us</Link>
            </div>
          </div>
          <div className="img-frame ratio-2-1 reveal">
            <img src="/images/13.jpg" alt="A supported living resident confidently going about their day at home" />
          </div>
          <div className="facts reveal">
            <div className="fact"><strong>18+</strong><span>Adults supported from the start of their independent living journey</span></div>
            <div className="fact"><strong>CQC</strong><span>Aligned to the five fundamental standards of care</span></div>
            <div className="fact"><strong>London</strong><span>Serving Sydenham, South London and surrounding boroughs</span></div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section scheme-2">
        <div className="container">
          <div className="heading heading--center reveal">
            <p className="eyebrow">Our foundation</p>
            <h2>The values that guide our work each day</h2>
            <p className="lead">
              We built DeRivian on three pillars. These aren&apos;t words on a wall — they&apos;re the reason we show up, the way we listen, and the standard we hold ourselves to with every person we support.
            </p>
          </div>
          <div className="grid grid--3">
            <article className="feature reveal">
              <div className="feature__icon">
                <svg className="icon icon--lg" aria-hidden="true"><use href="#i-heart" /></svg>
              </div>
              <h4>Care</h4>
              <p>We learn from every interaction and never stop improving. Support that adapts to meet each person exactly where they are — today, and as their goals and circumstances change.</p>
            </article>
            <article className="feature reveal">
              <div className="feature__icon">
                <svg className="icon icon--lg" aria-hidden="true"><use href="#i-shield" /></svg>
              </div>
              <h4>Comfort</h4>
              <p>Independence is the real goal. Our support exists to help people do what matters most to them — safely, confidently and in a home they are proud of.</p>
            </article>
            <article className="feature reveal">
              <div className="feature__icon">
                <svg className="icon icon--lg" aria-hidden="true"><use href="#i-users" /></svg>
              </div>
              <h4>Compassion</h4>
              <p>We honour the choices, culture and identity of every person we support — with respect in every moment, and the courage to advocate for them when it matters most.</p>
            </article>
          </div>
        </div>
      </section>

      {/* The DeRivian Way */}
      <section className="deriway scheme-1" aria-label="The DeRivian way">
        <div className="deriway__grid">
          <div>
            <div className="deriway__intro-wrap">
              <div className="deriway__intro reveal">
                <p className="eyebrow">Excellence</p>
                <h2>Four principles that define the DeRivian way</h2>
                <p className="lead">
                  These aren&apos;t operational policies — they&apos;re the commitments that set us apart. Together they explain why the people we support, their families and commissioning bodies trust us to deliver.
                </p>
                <div className="actions">
                  <Link className="btn btn--secondary" href="#team">Meet the team</Link>
                  <Link className="btn btn--link" href="/contact?t=work-with-us#form">
                    Work with us <svg className="ico icon" aria-hidden="true"><use href="#i-chev-right" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <article className="deriway__panel">
              <div className="deriway__panel-inner">
                <p className="deriway__step"><span>01</span> / 04</p>
                <div className="img-frame ratio-3-2"><img src="/images/28.jpg" alt="A support worker and resident building a support plan together at a table" loading="lazy" /></div>
                <h3>Co-produced support plans</h3>
                <p>We develop every support plan with the person — not for them. Your goals, your routines and your definition of independence shape every decision, with regular reviews as your ambitions grow.</p>
              </div>
            </article>
            <article className="deriway__panel">
              <div className="deriway__panel-inner">
                <p className="deriway__step"><span>02</span> / 04</p>
                <div className="img-frame ratio-3-2"><img src="/images/29.jpg" alt="A familiar support worker greeting a resident warmly at their front door" loading="lazy" /></div>
                <h3>Consistent, familiar teams</h3>
                <p>We assign a small, consistent team wherever possible. Continuity isn&apos;t just reassuring — it&apos;s what enables genuine relationships and the kind of trust that makes real progress possible for the people we support.</p>
              </div>
            </article>
            <article className="deriway__panel">
              <div className="deriway__panel-inner">
                <p className="deriway__step"><span>03</span> / 04</p>
                <div className="img-frame ratio-3-2"><img src="/images/30.jpg" alt="A support worker and resident sharing a moment together in the community" loading="lazy" /></div>
                <h3>Inclusive &amp; culturally aware</h3>
                <p>London&apos;s diversity is reflected in the people we support. We tailor every aspect of our approach to respect culture, language, faith and identity — because truly person-centred support honours the whole person.</p>
              </div>
            </article>
            <article className="deriway__panel">
              <div className="deriway__panel-inner">
                <p className="deriway__step"><span>04</span> / 04</p>
                <div className="img-frame ratio-3-2"><img src="/images/31.jpg" alt="A support worker reviewing digital support records on a tablet" loading="lazy" /></div>
                <h3>Digital systems &amp; governance</h3>
                <p>Our electronic support records, scheduling tools and quality audit frameworks deliver real-time transparency and consistent CQC alignment — so every stakeholder always has an accurate, up-to-date picture.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section scheme-2" id="team">
        <div className="container">
          <div className="heading heading--center reveal">
            <p className="eyebrow">Leadership</p>
            <h2>Meet our team</h2>
            <p className="lead">
              Three leaders guide DeRivian with unwavering commitment to care, comfort and compassion. Their experience in supported living, safeguarding and support planning ensures every decision serves the people we support — and stands up to the highest CQC standards.
            </p>
          </div>
          <div className="team">
            {siteConfig.team.map((member) => (
              <article key={member.initials} className="member reveal">
                {member.image ? (
                  <div className="member__avatar member__avatar--photo">
                    <img src={member.image} alt={member.name} />
                  </div>
                ) : (
                  <div className="member__avatar">{member.initials}</div>
                )}
                <h5>{member.name}</h5>
                <p className="member__role">{member.role}</p>
                <p>{member.bio}</p>
                <div className="member__socials">
                  <a href="#" aria-label={`${member.name} on LinkedIn`}>
                    <svg className="icon" aria-hidden="true"><use href="#i-linkedin" /></svg>
                  </a>
                  <a href="#" aria-label={`${member.name} on X`}>
                    <svg className="icon" aria-hidden="true"><use href="#i-x" /></svg>
                  </a>
                  <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}>
                    <svg className="icon" aria-hidden="true"><use href="#i-mail" /></svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="band reveal" style={{ marginTop: "var(--section-y)" }}>
            <div className="band__text">
              <h3>Looking to join our team?</h3>
              <p className="lead">We&apos;re always looking for compassionate, skilled people who share our values. Competitive pay, genuine development and a team that supports you as much as you support others.</p>
            </div>
            <Link className="btn btn--primary" href="/contact?t=general#form">Get in touch</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

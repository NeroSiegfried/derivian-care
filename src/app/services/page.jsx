import Link from "next/link"

export const metadata = {
  title: "Services",
  description:
    "Supported living services across London: daily living support, life skills development, community access, personal care, medication management and mental health support.",
}

export default function ServicesPage() {
  return (
    <main id="main">
      {/* Hero */}
      <section className="section scheme-1">
        <div className="container">
          <div className="hero__head reveal">
            <p className="eyebrow">Our services</p>
            <h1>Support built around your life</h1>
            <p className="lead">
              We provide tailored, person-centred supported living packages for adults with learning disabilities, autism, mental health conditions and physical disabilities. Each support plan is co-produced with you — built around your goals and your vision for independent living.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--primary btn--lg" href="/contact">Request a referral</Link>
              <Link className="btn btn--secondary btn--lg" href="#core">Explore services</Link>
            </div>
          </div>
          <div className="hero__media reveal">
            <div className="img-frame ratio-2-1">
              <img src="/images/12.jpg" alt="A welcoming supported living property in south London" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Stack */}
      <section className="svc-stack scheme-1" id="core" aria-label="Our areas of support">
        <article className="svc-panel" id="daily-living">
          <div className="svc-panel__head"><span className="svc-panel__num">01</span><h2>Daily living support</h2></div>
          <div className="svc-panel__grid">
            <div className="svc-panel__body reveal">
              <p className="eyebrow">Everyday help</p>
              <h3>Practical support for a well-run home</h3>
              <p className="lead">We support you with cooking, cleaning, shopping and managing your household — working alongside you at your pace, so your home stays a place where you can truly thrive. The goal is always to build your confidence, not your dependency.</p>
              <div className="actions"><Link className="btn btn--secondary" href="/contact">Arrange this support</Link></div>
            </div>
            <div className="svc-panel__media reveal">
              <img src="/images/2.jpg" alt="A resident going about their daily routine at home with light support" loading="lazy" />
            </div>
          </div>
        </article>

        <article className="svc-panel svc-panel--flip" id="life-skills">
          <div className="svc-panel__head"><span className="svc-panel__num">02</span><h2>Life skills development</h2></div>
          <div className="svc-panel__grid">
            <div className="svc-panel__body reveal">
              <p className="eyebrow">Building independence</p>
              <h3>Skills that unlock the life you want</h3>
              <p className="lead">Managing money, cooking meals, using public transport, handling a tenancy — these are the building blocks of independent living. We work with you at your own pace to develop these skills in a way that feels empowering, not patronising.</p>
              <div className="actions"><Link className="btn btn--secondary" href="/contact">Arrange this support</Link></div>
            </div>
            <div className="svc-panel__media reveal">
              <img src="/images/4.jpg" alt="A support worker and resident working together on a practical life skill" loading="lazy" />
            </div>
          </div>
        </article>

        <article className="svc-panel" id="community">
          <div className="svc-panel__head"><span className="svc-panel__num">03</span><h2>Community access &amp; inclusion</h2></div>
          <div className="svc-panel__grid">
            <div className="svc-panel__body reveal">
              <p className="eyebrow">Out in the world</p>
              <h3>Connected, active and part of your community</h3>
              <p className="lead">A good life doesn&apos;t stop at your front door. We support you to access social activities, leisure, education, volunteering and employment — building friendships and connections that are yours, not ours.</p>
              <div className="actions"><Link className="btn btn--secondary" href="/contact">Arrange this support</Link></div>
            </div>
            <div className="svc-panel__media reveal">
              <img src="/images/5.jpg" alt="A resident and support worker heading into the community together" loading="lazy" />
            </div>
          </div>
        </article>

        <article className="svc-panel svc-panel--flip" id="personal-care">
          <div className="svc-panel__head"><span className="svc-panel__num">04</span><h2>Personal care</h2></div>
          <div className="svc-panel__grid">
            <div className="svc-panel__body reveal">
              <p className="eyebrow">Dignity first</p>
              <h3>Sensitive support, always with respect</h3>
              <p className="lead">Where personal care is part of your support, it is delivered gently and discreetly — always at your pace, always on your terms. We protect your dignity and your choices in every moment.</p>
              <div className="actions"><Link className="btn btn--secondary" href="/contact">Arrange this support</Link></div>
            </div>
            <div className="svc-panel__media reveal">
              <img src="/images/10.jpg" alt="A support worker sitting attentively with a resident in their home" loading="lazy" />
            </div>
          </div>
        </article>

        <article className="svc-panel" id="health">
          <div className="svc-panel__head"><span className="svc-panel__num">05</span><h2>Health &amp; wellbeing</h2></div>
          <div className="svc-panel__grid">
            <div className="svc-panel__body reveal">
              <p className="eyebrow">Safe &amp; healthy</p>
              <h3>Joined-up support for your whole health</h3>
              <p className="lead">From medication management and GP access to mental health monitoring and health appointments — we coordinate closely with your wider healthcare team, keeping clear records and responding quickly when anything changes.</p>
              <div className="actions"><Link className="btn btn--secondary" href="/contact">Arrange this support</Link></div>
            </div>
            <div className="svc-panel__media reveal">
              <img src="/images/6.jpg" alt="A support worker carefully reviewing medication and health records" loading="lazy" />
            </div>
          </div>
        </article>

        <article className="svc-panel svc-panel--flip" id="complex-needs">
          <div className="svc-panel__head"><span className="svc-panel__num">06</span><h2>Complex &amp; specialist needs</h2></div>
          <div className="svc-panel__grid">
            <div className="svc-panel__body reveal">
              <p className="eyebrow">Specialist support</p>
              <h3>Consistent, informed support over time</h3>
              <p className="lead">For people with more complex needs — including autism, mental health conditions, acquired brain injuries and behaviours that challenge — we build structured, consistent support with clear risk management and regular review. We adapt as you do.</p>
              <div className="actions"><Link className="btn btn--secondary" href="/contact">Arrange this support</Link></div>
            </div>
            <div className="svc-panel__media reveal">
              <img src="/images/11.jpg" alt="A support worker reviewing a care plan with a resident on a tablet" loading="lazy" />
            </div>
          </div>
        </article>
      </section>

      {/* Who We Support */}
      <section className="section scheme-2" id="who-we-support">
        <div className="container">
          <div className="split reveal">
            <div>
              <p className="eyebrow">Who we support</p>
              <h2>Supported living for diverse needs and backgrounds</h2>
              <p className="lead" style={{ marginBottom: "1.5rem" }}>
                We work with adults whose needs span learning disabilities, autism, mental health conditions, physical disabilities and acquired brain injuries. We respect your culture, your language, your faith and your identity — London&apos;s diversity is our strength.
              </p>
              <div className="split__grid2">
                <div>
                  <div style={{ marginBottom: ".85rem" }}><svg className="icon icon--lg" aria-hidden="true"><use href="#i-support" /></svg></div>
                  <h6 style={{ fontWeight: 700, marginBottom: ".4rem" }}>Flexible support intensity</h6>
                  <p>From a few hours a week to 24/7 on-site support — matched to your assessed needs and goals.</p>
                </div>
                <div>
                  <div style={{ marginBottom: ".85rem" }}><svg className="icon icon--lg" aria-hidden="true"><use href="#i-heart" /></svg></div>
                  <h6 style={{ fontWeight: 700, marginBottom: ".4rem" }}>Co-produced from the start</h6>
                  <p>Your support plan is built with you, reviewed with you and updated as your ambitions evolve.</p>
                </div>
              </div>
              <div className="actions">
                <Link className="btn btn--secondary" href="/contact">Discuss your needs</Link>
                <Link className="btn btn--link" href="#transparency">
                  How we stay transparent <svg className="ico icon" aria-hidden="true"><use href="#i-chev-right" /></svg>
                </Link>
              </div>
            </div>
            <div className="split__media">
              <div className="img-frame ratio-4-3">
                <img src="/images/7.jpg" alt="A resident in their own home, relaxed and comfortable" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="section scheme-3" id="transparency">
        <div className="container">
          <div className="split split--reverse reveal">
            <div className="split__media">
              <div className="img-frame ratio-4-3">
                <img src="/images/8.jpg" alt="A person reviewing information on a tablet at home" />
              </div>
            </div>
            <div>
              <p className="eyebrow">Oversight</p>
              <h2>Transparent care you can see in real time</h2>
              <p className="lead" style={{ marginBottom: "1.25rem" }}>
                You see what we see. Our digital systems keep support records current and schedules clear — so the people we support, their families and healthcare professionals always have what they need.
              </p>
              <div className="split__points">
                <div className="split__point"><svg className="icon" aria-hidden="true"><use href="#i-clock" /></svg><p>Electronic support records updated at every visit</p></div>
                <div className="split__point"><svg className="icon" aria-hidden="true"><use href="#i-eye" /></svg><p>Scheduling visibility for residents, families and commissioners</p></div>
                <div className="split__point"><svg className="icon" aria-hidden="true"><use href="#i-chat" /></svg><p>Direct, secure communication with your support team</p></div>
              </div>
              <div className="actions">
                <Link className="btn btn--secondary" href="/contact">See it in action</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For commissioners & referrers */}
      <section className="section scheme-2" id="referrers">
        <div className="container">
          <div className="split reveal">
            <div>
              <p className="eyebrow">For professionals</p>
              <h2>Commissioners and referrers</h2>
              <p className="lead" style={{ marginBottom: "1.5rem" }}>
                We work with local authority commissioners, social workers, NHS continuing healthcare teams, care coordinators and court-appointed deputies. Our referral process is straightforward, our documentation is thorough, and we work to your placement timelines.
              </p>
              <div className="split__grid2">
                <div>
                  <div style={{ marginBottom: ".85rem" }}><svg className="icon icon--lg" aria-hidden="true"><use href="#i-shield" /></svg></div>
                  <h6 style={{ fontWeight: 700, marginBottom: ".4rem" }}>CQC aligned</h6>
                  <p>All services meet the five fundamental CQC standards. Our governance and audit frameworks are available on request.</p>
                </div>
                <div>
                  <div style={{ marginBottom: ".85rem" }}><svg className="icon icon--lg" aria-hidden="true"><use href="#i-clock" /></svg></div>
                  <h6 style={{ fontWeight: 700, marginBottom: ".4rem" }}>Responsive placements</h6>
                  <p>We understand urgency. Our assessment and onboarding process is designed to move at the pace the situation requires.</p>
                </div>
              </div>
              <div className="actions">
                <Link className="btn btn--primary" href="/contact">Make a referral</Link>
                <Link className="btn btn--link" href="/contact">
                  Request a service specification <svg className="ico icon" aria-hidden="true"><use href="#i-chev-right" /></svg>
                </Link>
              </div>
            </div>
            <div className="split__media">
              <div className="img-frame ratio-4-3">
                <img src="/images/3.jpg" alt="A support coordinator reviewing a referral with a colleague" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="section scheme-3">
        <div className="container">
          <div className="band reveal">
            <div className="band__text">
              <h3>Not sure what support you need?</h3>
              <p className="lead">Start with a no-obligation conversation. Whether you&apos;re an individual, a family member or a professional referrer — we&apos;ll listen, understand your situation and explain how we can help.</p>
            </div>
            <Link className="btn btn--primary" href="/contact">Get in touch</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

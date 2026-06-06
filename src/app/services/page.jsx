import Link from "next/link"

export const metadata = {
  title: "Services",
  description:
    "Specialist domiciliary care services across London: personal care, medication management, nutrition, mobility support, daily living and long-term condition care.",
}

export default function ServicesPage() {
  return (
    <main id="main">
      {/* Hero */}
      <section className="section scheme-1">
        <div className="container">
          <div className="hero__head reveal">
            <p className="eyebrow">Our services</p>
            <h1>Support services built around everyone</h1>
            <p className="lead">
              We provide tailored, specialist care packages designed for older adults, individuals with physical disabilities, and those managing long-term health conditions. Each plan is built around your needs and goals — not ours.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--primary btn--lg" href="/contact">Request a care assessment</Link>
              <Link className="btn btn--secondary btn--lg" href="#core">Explore services</Link>
            </div>
          </div>
          <div className="hero__media reveal">
            <div className="img-frame ratio-2-1">
              <img src="/images/feature-0.jpg" alt="People relaxing and talking together at home" />
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
              <h3>Help with everyday tasks at home</h3>
              <p className="lead">We support you with cooking, cleaning, shopping and managing your household. Our team works around your schedule, so your home stays a place where you can truly thrive.</p>
              <div className="actions"><Link className="btn btn--secondary" href="/contact">Arrange this support</Link></div>
            </div>
            <div className="svc-panel__media reveal">
              <img src="/images/feature-0.jpg" alt="A carer helping a client with everyday tasks in a bright, comfortable home" loading="lazy" />
            </div>
          </div>
        </article>

        <article className="svc-panel svc-panel--flip" id="personal-care">
          <div className="svc-panel__head"><span className="svc-panel__num">02</span><h2>Personal care</h2></div>
          <div className="svc-panel__grid">
            <div className="svc-panel__body reveal">
              <p className="eyebrow">Dignity first</p>
              <h3>Sensitive support, always with respect</h3>
              <p className="lead">Assistance with bathing, grooming, dressing and continence — delivered gently and discreetly. We protect your dignity and your choices in every moment of care.</p>
              <div className="actions"><Link className="btn btn--secondary" href="/contact">Arrange this support</Link></div>
            </div>
            <div className="svc-panel__media reveal">
              <img src="/images/feature-2.jpg" alt="A carer sitting attentively with a client on a sofa at home" loading="lazy" />
            </div>
          </div>
        </article>

        <article className="svc-panel" id="medication">
          <div className="svc-panel__head"><span className="svc-panel__num">03</span><h2>Medication management</h2></div>
          <div className="svc-panel__grid">
            <div className="svc-panel__body reveal">
              <p className="eyebrow">Safe &amp; reliable</p>
              <h3>The right medication, safely and on time</h3>
              <p className="lead">We prompt, administer and monitor medication safely and on schedule, with clear records and regular reviews — coordinated closely with your GP and pharmacy.</p>
              <div className="actions"><Link className="btn btn--secondary" href="/contact">Arrange this support</Link></div>
            </div>
            <div className="svc-panel__media reveal">
              <img src="/images/feature-4.jpg" alt="A care professional carefully checking medication records" loading="lazy" />
            </div>
          </div>
        </article>

        <article className="svc-panel svc-panel--flip" id="nutrition">
          <div className="svc-panel__head"><span className="svc-panel__num">04</span><h2>Nutrition &amp; hydration</h2></div>
          <div className="svc-panel__grid">
            <div className="svc-panel__body reveal">
              <p className="eyebrow">Well nourished</p>
              <h3>Good food, gentle encouragement</h3>
              <p className="lead">Meal preparation and warm encouragement to eat and drink well — tailored to your dietary, cultural and religious needs, and the foods you genuinely enjoy.</p>
              <div className="actions"><Link className="btn btn--secondary" href="/contact">Arrange this support</Link></div>
            </div>
            <div className="svc-panel__media reveal">
              <img src="/images/feature-3.jpg" alt="A nutritious home-cooked meal being prepared in a warm kitchen" loading="lazy" />
            </div>
          </div>
        </article>

        <article className="svc-panel" id="mobility">
          <div className="svc-panel__head"><span className="svc-panel__num">05</span><h2>Mobility &amp; physical support</h2></div>
          <div className="svc-panel__grid">
            <div className="svc-panel__body reveal">
              <p className="eyebrow">Stay active</p>
              <h3>Move through your day with confidence</h3>
              <p className="lead">Safe transfers and mobility assistance help you move around your home and stay active in your community — supported by people who respect your pace and your independence.</p>
              <div className="actions"><Link className="btn btn--secondary" href="/contact">Arrange this support</Link></div>
            </div>
            <div className="svc-panel__media reveal">
              <img src="/images/blog-2.jpg" alt="A carer supporting a client to move comfortably and confidently at home" loading="lazy" />
            </div>
          </div>
        </article>

        <article className="svc-panel svc-panel--flip" id="long-term">
          <div className="svc-panel__head"><span className="svc-panel__num">06</span><h2>Long-term condition support</h2></div>
          <div className="svc-panel__grid">
            <div className="svc-panel__body reveal">
              <p className="eyebrow">Specialist care</p>
              <h3>Informed, consistent care over time</h3>
              <p className="lead">Reliable, knowledgeable support for people living with long-term health conditions — coordinated with your wider healthcare team and adapting as your needs change.</p>
              <div className="actions"><Link className="btn btn--secondary" href="/contact">Arrange this support</Link></div>
            </div>
            <div className="svc-panel__media reveal">
              <img src="/images/blog-1.jpg" alt="A carer reviewing health information with a client on a tablet" loading="lazy" />
            </div>
          </div>
        </article>
      </section>

      {/* Mobility Detail */}
      <section className="section scheme-2" id="mobility-detail">
        <div className="container">
          <div className="split reveal">
            <div>
              <p className="eyebrow">Support</p>
              <h2>Mobility and daily living, made simple</h2>
              <p className="lead" style={{ marginBottom: "1.5rem" }}>
                We understand that moving through the world takes effort. Our team helps with mobility, transfers and the tasks that fill your day — and we respect your culture, your language and your faith. London&apos;s diversity is our strength.
              </p>
              <div className="split__grid2">
                <div>
                  <div style={{ marginBottom: ".85rem" }}><svg className="icon icon--lg" aria-hidden="true"><use href="#i-support" /></svg></div>
                  <h6 style={{ fontWeight: 700, marginBottom: ".4rem" }}>Movement support</h6>
                  <p>Safe transfers and mobility assistance tailored to your needs and your home.</p>
                </div>
                <div>
                  <div style={{ marginBottom: ".85rem" }}><svg className="icon icon--lg" aria-hidden="true"><use href="#i-heart" /></svg></div>
                  <h6 style={{ fontWeight: 700, marginBottom: ".4rem" }}>Daily assistance</h6>
                  <p>Help with dressing, washing and household tasks — always on your terms.</p>
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
                <img src="/images/blog-0.jpg" alt="A carer supporting a client with everyday tasks at home" loading="lazy" />
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
                <img src="/images/blog-1.jpg" alt="A person reviewing information on a tablet at home" />
              </div>
            </div>
            <div>
              <p className="eyebrow">Oversight</p>
              <h2>Transparent care you can see in real time</h2>
              <p className="lead" style={{ marginBottom: "1.25rem" }}>
                You see what we see. Our digital care systems keep records current and schedules clear, so your family stays informed and healthcare professionals always have what they need.
              </p>
              <div className="split__points">
                <div className="split__point"><svg className="icon" aria-hidden="true"><use href="#i-clock" /></svg><p>Electronic care records updated at every visit</p></div>
                <div className="split__point"><svg className="icon" aria-hidden="true"><use href="#i-eye" /></svg><p>Instant scheduling visibility for clients and families</p></div>
                <div className="split__point"><svg className="icon" aria-hidden="true"><use href="#i-chat" /></svg><p>Direct, secure communication with your care team</p></div>
              </div>
              <div className="actions">
                <Link className="btn btn--secondary" href="/contact">See it in action</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="section scheme-2">
        <div className="container">
          <div className="band reveal">
            <div className="band__text">
              <h3>Not sure which support you need?</h3>
              <p className="lead">Start with a free, no-obligation care assessment. We&apos;ll listen, understand your situation and recommend a plan built entirely around you.</p>
            </div>
            <Link className="btn btn--primary" href="/contact">Book an assessment</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

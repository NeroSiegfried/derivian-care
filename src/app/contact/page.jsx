import { siteConfig } from "@/lib/config"
import ContactForm from "@/components/ContactForm"

export const metadata = {
  title: "Contact Us",
  description:
    "Contact DeRivian Care Ltd — phone, email, 24/7 safeguarding line, and our secure referral and inquiry form. 61 Ann Street, Plumstead, London SE18 7LS.",
}

export default function ContactPage() {
  return (
    <main id="main">
      {/* Hero */}
      <section className="section scheme-1">
        <div className="container">
          <div className="hero__head reveal" style={{ maxWidth: "42rem" }}>
            <p className="eyebrow">Contact us</p>
            <h1>Get in touch</h1>
            <p className="lead">
              We&apos;re here to support you and answer any questions about our domiciliary care services. Reach out by phone, email, or by completing our secure referral and inquiry form below.
            </p>
          </div>
        </div>
      </section>

      {/* Reach Us */}
      <section className="section scheme-2">
        <div className="container">
          <div className="reach-grid reveal">
            <div className="measure">
              <p className="eyebrow">Direct</p>
              <h2>Reach us</h2>
              <p className="lead">
                Multiple ways to connect with our team — during business hours and beyond. For anything urgent, our safeguarding line is open around the clock, every day of the year.
              </p>
            </div>
            <div className="contact-info">
              <div className="contact-info__row">
                <svg className="icon" aria-hidden="true"><use href="#i-mail" /></svg>
                <div>
                  <h3>Email</h3>
                  <a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a>
                </div>
              </div>
              <div className="contact-info__row">
                <svg className="icon" aria-hidden="true"><use href="#i-phone" /></svg>
                <div>
                  <h3>Phone</h3>
                  <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>
                </div>
              </div>
              <div className="contact-info__row">
                <svg className="icon" aria-hidden="true"><use href="#i-shield" /></svg>
                <div>
                  <h3>24/7 Safeguarding</h3>
                  <a href={siteConfig.contact.safeguardingHref}>{siteConfig.contact.safeguarding}</a>
                  {" · "}
                  <a href={siteConfig.contact.supportEmailHref}>{siteConfig.contact.supportEmail}</a>
                </div>
              </div>
              <div className="contact-info__row">
                <svg className="icon" aria-hidden="true"><use href="#i-pin" /></svg>
                <div>
                  <h3>Office</h3>
                  <p>{siteConfig.contact.address}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="map-frame reveal">
            <iframe
              title="Map showing DeRivian Care at 61 Ann Street, Plumstead, London SE18 7LS"
              src={siteConfig.contact.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="map-caption">
            <p className="muted">DeRivian Care Ltd · {siteConfig.contact.address}</p>
            <a href={siteConfig.contact.googleMapsUrl} target="_blank" rel="noopener">
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section scheme-1">
        <div className="container">
          <div className="split split--top">
            <div className="reveal">
              <p className="eyebrow">Inquiry</p>
              <h2>Send us a message</h2>
              <p className="lead">
                Whether you&apos;re arranging care for yourself or a loved one, making a professional referral, or simply have a question — tell us what brings you here and we&apos;ll respond within one working day.
              </p>
              <div className="contact-info" style={{ marginTop: "2rem" }}>
                <div className="contact-info__row">
                  <svg className="icon" aria-hidden="true"><use href="#i-mail" /></svg>
                  <p>{siteConfig.contact.email}</p>
                </div>
                <div className="contact-info__row">
                  <svg className="icon" aria-hidden="true"><use href="#i-phone" /></svg>
                  <p>{siteConfig.contact.phone}</p>
                </div>
                <div className="contact-info__row">
                  <svg className="icon" aria-hidden="true"><use href="#i-pin" /></svg>
                  <p>{siteConfig.contact.address}</p>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}

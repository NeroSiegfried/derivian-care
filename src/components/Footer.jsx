"use client"
import { useState } from "react"
import Link from "next/link"
import { siteConfig } from "@/lib/config"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [note, setNote] = useState(null)
  const [sending, setSending] = useState(false)

  async function handleNewsletter(e) {
    e.preventDefault()
    setSending(true)
    setNote(null)
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const body = await res.json()
      if (res.ok) {
        setNote({ text: "Thanks for subscribing — welcome to the DeRivian community.", error: false })
        setEmail("")
      } else {
        throw new Error(body.error || "Server error")
      }
    } catch {
      setNote({
        text: `Something went wrong — please try again or email us directly at ${siteConfig.contact.email}.`,
        error: true,
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link className="logo" href="/" aria-label="DeRivian Care home">
              <span className="logo__mark" aria-hidden="true">D</span>
              <span className="logo__word">DeRivian<small>Care</small></span>
            </Link>
            <ul className="footer__contact footer__col">
              <li>
                <a href={siteConfig.contact.googleMapsEmbed} target="_blank" rel="noopener">
                  {siteConfig.contact.address}
                </a>
              </li>
              <li><a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a></li>
              <li><a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a></li>
              <li>
                <strong style={{ color: "var(--white)" }}>24/7 Safeguarding:</strong>{" "}
                <a href={siteConfig.contact.safeguardingHref}>{siteConfig.contact.safeguarding}</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer__cols">
              <div className="footer__col">
                <h4>Explore</h4>
                <ul>
                  <li><Link href="/about">About us</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/contact">Contact us</Link></li>
                </ul>
              </div>
              <div className="footer__col">
                <h4>Support</h4>
                <ul>
                  <li><Link href="/contact">Make a referral</Link></li>
                  <li><Link href="/contact">Safeguarding</Link></li>
                  <li><Link href="/about#team">Our team</Link></li>
                  <li><Link href="/services#transparency">Family portal</Link></li>
                </ul>
              </div>
            </div>
            <div className="footer__sub" style={{ marginTop: "2.5rem" }}>
              <p>Subscribe to our newsletter</p>
              <form className="footer__form" onSubmit={handleNewsletter}>
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn btn--primary btn--sm" type="submit" disabled={sending}>
                  {sending ? "Sending…" : "Join"}
                </button>
              </form>
              {note && (
                <p
                  className="footer__fine"
                  style={{ color: note.error ? "var(--burnt-sienna)" : undefined }}
                >
                  {note.text}
                </p>
              )}
              <p className="footer__fine">By subscribing you agree to our Privacy Policy.</p>
            </div>
          </div>
        </div>
        <div className="footer__bar">
          <ul className="footer__legal">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookies Settings</a></li>
          </ul>
          <p>© {siteConfig.year} DeRivian Care Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

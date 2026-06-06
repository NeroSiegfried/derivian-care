import Link from "next/link"
import CookiePrefsPanel from "@/components/CookiePrefsPanel"

export const metadata = {
  title: "Cookie Settings",
  description:
    "How DeRivian Care Ltd uses cookies and browser storage — and how to review and clear what's saved on your device.",
}

export default function CookieSettingsPage() {
  return (
    <main id="main">
      <section className="section scheme-2">
        <div className="container">
          <div className="hero__head reveal" style={{ maxWidth: "42rem" }}>
            <h1>Cookie settings</h1>
            <p className="lead">
              We use only essential storage to remember your Easy Read preference — no analytics, advertising or tracking cookies. Here&apos;s exactly what that means, and how to clear it.
            </p>
          </div>
        </div>
      </section>

      <section className="section scheme-3">
        <div className="container">
          <div className="prose reveal">
            <p className="muted legal-meta">Last updated 6 June 2026</p>
            <h2>How we handle cookies</h2>
            <p className="lede">
              This website is deliberately light-touch. We don&apos;t track you, profile you, or share your browsing with advertisers. The only thing we store on your device is a single setting that makes the site easier to use.
            </p>

            <h3>What we store</h3>
            <p>
              When you turn on <strong>Easy Read</strong> mode — larger text and more spacing — we save that choice in your browser&apos;s local storage so the site remembers it on your next visit. It stays on your device, is never sent to us, and is used for nothing else.
            </p>

            <h3>What we don&apos;t use</h3>
            <p>
              We do not use analytics cookies, advertising or marketing cookies, social-media trackers, or any third-party profiling tools. Because nothing on this site requires your consent under the UK&apos;s privacy rules (PECR), you won&apos;t see a cookie consent banner — there is simply nothing to consent to.
            </p>

            <h3>Third-party content</h3>
            <p>
              Our <Link href="/contact">Contact</Link> page shows an embedded map from OpenStreetMap. When that map loads, your IP address may be visible to OpenStreetMap, as with any external map. We don&apos;t place any tracking cookies through it.
            </p>

            <h3>Clearing what&apos;s stored</h3>
            <p>
              You&apos;re always in control. Use the panel below to clear your saved Easy Read preference at any time. You can also clear site data through your browser&apos;s privacy settings.
            </p>
          </div>

          <CookiePrefsPanel />
        </div>
      </section>
    </main>
  )
}

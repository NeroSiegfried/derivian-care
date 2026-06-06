import Link from "next/link"

export const metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of the DeRivian Care Ltd website and online services.",
}

export default function TermsOfServicePage() {
  return (
    <main id="main">
      <section className="section scheme-2">
        <div className="container">
          <div className="hero__head reveal" style={{ maxWidth: "42rem" }}>
            <h1>Terms of service</h1>
            <p className="lead">
              Please read these terms carefully before using our website or services. By accessing or using our site, you agree to be bound by these terms.
            </p>
          </div>
        </div>
      </section>

      <section className="section scheme-3">
        <div className="container">
          <div className="prose reveal">
            <p className="muted legal-meta">Last updated 6 June 2026</p>
            <p className="lede">
              These Terms of Service (&quot;Terms&quot;) govern your use of the website operated by DeRivian Care Ltd (&quot;DeRivian&quot;, &quot;we&quot;, &quot;us&quot;). They apply to your use of this website only; the care we provide is governed by a separate, signed care agreement.
            </p>

            <h2>1. Acceptance of terms</h2>
            <p>By accessing or using this website, you confirm that you accept these Terms and agree to comply with them. If you do not agree, please do not use the site.</p>

            <h2>2. Changes to terms</h2>
            <p>We may revise these Terms from time to time. The version published on this page is the one that applies to your use of the site. We will update the &quot;last updated&quot; date when changes are made; continued use of the site means you accept the revised Terms.</p>

            <h2>3. Description of services</h2>
            <p>This website provides information about DeRivian&apos;s supported living services and lets you contact us, make enquiries and referrals, and subscribe to updates. The website itself is informational and does not constitute the delivery of support, a formal assessment, or a binding offer of services.</p>

            <h2>4. User responsibilities</h2>
            <p>You agree to use the site lawfully and not to misuse it, attempt to gain unauthorised access, or submit false, misleading or harmful information. When you complete a form, you are responsible for ensuring the details you provide are accurate and that you have the right to share any information about another person.</p>

            <h2>5. Privacy and data</h2>
            <p>Your use of the site is also governed by our <Link href="/privacy-policy">Privacy Policy</Link>, which explains how we handle personal information, and our <Link href="/cookies-settings">Cookie settings</Link>, which explain the limited storage we use. Please review both.</p>

            <h2>6. Intellectual property</h2>
            <p>All content on this site — including text, logos, graphics and layout — is owned by or licensed to DeRivian Care Ltd and is protected by intellectual property laws. You may view and print pages for your own personal, non-commercial use, but you may not reproduce, distribute or adapt our content without our written permission.</p>

            <h2>7. Limitation of liability</h2>
            <p>The site is provided &quot;as is&quot; and &quot;as available&quot;. While we work to keep the information accurate and up to date, we make no warranties that it is complete or error-free. To the fullest extent permitted by law, we are not liable for any loss arising from your reliance on the site. Nothing in these Terms limits our liability for death or personal injury caused by negligence, or for fraud.</p>

            <h2>8. Indemnification</h2>
            <p>You agree to indemnify DeRivian Care Ltd against any claims, losses or costs arising from your misuse of the site or your breach of these Terms.</p>

            <h2>9. Governing law</h2>
            <p>These Terms are governed by the laws of England and Wales, and any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.</p>

            <h2>10. Contact information</h2>
            <p>For any questions about these Terms, contact us at <a href="mailto:info@derivian.co.uk">info@derivian.co.uk</a>, by phone on +44 (0)20 8305 0000, or by writing to DeRivian Care Ltd, 24a Sydenham Road, London, United Kingdom, SE26 5QW.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

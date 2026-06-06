import Link from "next/link"

export const metadata = {
  title: "Privacy Policy",
  description:
    "How DeRivian Care Ltd collects, uses, stores and protects your personal information, and your rights under UK GDPR.",
}

export default function PrivacyPolicyPage() {
  return (
    <main id="main">
      <section className="section scheme-2">
        <div className="container">
          <div className="hero__head reveal" style={{ maxWidth: "42rem" }}>
            <h1>Privacy policy</h1>
            <p className="lead">
              We protect your data with clarity and respect for your privacy rights. This policy explains what we collect, why, how we keep it safe, and the choices you have.
            </p>
          </div>
        </div>
      </section>

      <section className="section scheme-3">
        <div className="container">
          <div className="prose reveal">
            <p className="muted legal-meta">Last updated 6 June 2026</p>
            <p className="lede">
              DeRivian Care Ltd (&quot;DeRivian&quot;, &quot;we&quot;, &quot;us&quot;) is committed to handling your personal information with the same care and respect we bring to the people we support. This policy describes how we collect and use information when you visit our website or get in touch with us.
            </p>

            <h2>1. Who we are</h2>
            <p>DeRivian Care Ltd is a supported living provider registered in England. Our registered office is 24a Sydenham Road, London, United Kingdom, SE26 5QW. For any question about this policy or your information, contact us at <a href="mailto:info@derivian.co.uk">info@derivian.co.uk</a> or +44 (0)20 8305 0000. We are the &quot;data controller&quot; responsible for the personal information described here.</p>

            <h2>2. Information we collect</h2>
            <p>We only collect information you choose to give us. Through this website that is limited to:</p>
            <ul>
              <li><strong>Enquiry and referral form</strong> — your name, email address, phone number, the nature of your enquiry and any details you include in your message.</li>
              <li><strong>Newsletter sign-up</strong> — your email address, if you choose to subscribe.</li>
            </ul>
            <p>We do not run advertising or analytics trackers on this site, so we do not build profiles of your browsing or collect data about you in the background.</p>

            <h2>3. How we use your information</h2>
            <p>We use the information you provide to respond to your enquiry, arrange or discuss care, process a referral, answer questions about our services, and — only if you have asked us to — send you our newsletter. We will not use your details for any unrelated purpose without telling you first.</p>

            <h2>4. Lawful bases for processing</h2>
            <p>Under UK GDPR we rely on your <strong>consent</strong> when you submit a form or subscribe, and on our <strong>legitimate interests</strong> in responding to and managing enquiries about our care services. Where we go on to provide care, that processing is governed by a separate care agreement and the lawful bases set out in it.</p>

            <h2>5. Cookies and local storage</h2>
            <p>This website does not use advertising, marketing or analytics cookies. We use a small amount of essential storage in your browser only to remember your Easy Read setting. You can review exactly what is stored and clear it at any time on our <Link href="/cookies-settings">Cookie settings</Link> page.</p>

            <h2>6. How we store and protect your data</h2>
            <p>Messages sent through this site are delivered to our monitored DeRivian inboxes and care-management systems, which are access-controlled and restricted to staff who need them. We apply appropriate technical and organisational measures to guard against loss, misuse or unauthorised access.</p>

            <h2>7. Sharing your information</h2>
            <p>We do not sell your personal information. We share it only where necessary to provide our services — for example with members of your care team — or where we are required to by law or for safeguarding reasons. Our contact page displays an embedded map from OpenStreetMap; loading it may expose your IP address to that provider, as with any third-party map.</p>

            <h2>8. How long we keep your information</h2>
            <p>We keep enquiry details only for as long as needed to deal with your request and for a reasonable period afterwards in case you contact us again. Where you become a service user, support records are retained in line with the statutory retention periods that apply to adult social care.</p>

            <h2>9. Your rights</h2>
            <p>You have the right to access the personal information we hold about you, to ask us to correct or delete it, to object to or restrict its use, and to withdraw consent at any time. To exercise any of these rights, email <a href="mailto:info@derivian.co.uk">info@derivian.co.uk</a> and we will respond within one month.</p>

            <h2>10. Complaints</h2>
            <p>If you are unhappy with how we have handled your information, please tell us first so we can put it right. You also have the right to complain to the Information Commissioner&apos;s Office (ICO), the UK supervisory authority, at ico.org.uk.</p>

            <h2>11. Changes to this policy</h2>
            <p>We may update this policy from time to time. When we do, we will revise the &quot;last updated&quot; date above and, where changes are significant, make this clear on the website.</p>

            <h2>12. Contact us</h2>
            <p>Questions about your privacy are always welcome. Reach us at <a href="mailto:info@derivian.co.uk">info@derivian.co.uk</a>, by phone on +44 (0)20 8305 0000, or by writing to DeRivian Care Ltd, 24a Sydenham Road, London, United Kingdom, SE26 5QW.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

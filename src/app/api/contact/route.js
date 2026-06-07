export const dynamic = "force-dynamic"

function esc(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
}

export async function POST(req) {
  const body = await req.json().catch(() => ({}))
  const { firstName, lastName, email, phone, help, situation, message } = body

  if (!firstName || !lastName || !email) {
    return Response.json({ error: "Missing required fields" }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return Response.json({ error: "Email service not configured" }, { status: 500 })
  }

  const toAddress = process.env.CONTACT_EMAIL || "info@derivian.co.uk"
  const fromAddress = process.env.FROM_EMAIL || "DeRivian Website <noreply@derivian.co.uk>"

  const html = `
    <h2>New inquiry from ${esc(firstName)} ${esc(lastName)}</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px">
      <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Name</td><td style="padding:8px;border-bottom:1px solid #eee">${esc(firstName)} ${esc(lastName)}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Email</td><td style="padding:8px;border-bottom:1px solid #eee"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
      <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Phone</td><td style="padding:8px;border-bottom:1px solid #eee">${esc(phone) || "—"}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">How can we help?</td><td style="padding:8px;border-bottom:1px solid #eee">${esc(help) || "—"}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Situation</td><td style="padding:8px;border-bottom:1px solid #eee">${esc(situation) || "—"}</td></tr>
      <tr><td style="padding:8px;font-weight:bold">Message</td><td style="padding:8px;white-space:pre-wrap">${esc(message) || "—"}</td></tr>
    </table>
  `

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: fromAddress,
        to: [toAddress],
        reply_to: email,
        subject: `New inquiry — ${firstName} ${lastName}`,
        html,
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      console.error("Resend error:", err)
      return Response.json({ error: "Failed to send email" }, { status: 500 })
    }

    return Response.json({ success: true })
  } catch (err) {
    console.error("Contact form error:", err)
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}

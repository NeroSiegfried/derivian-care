export async function POST(req) {
  const body = await req.json().catch(() => ({}))
  const { email } = body

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Valid email required" }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return Response.json({ error: "Email service not configured" }, { status: 500 })
  }

  const toAddress = process.env.CONTACT_EMAIL || "info@derivian.com"
  const fromAddress = process.env.FROM_EMAIL || "DeRivian Website <noreply@derivian.com>"

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: fromAddress,
        to: [toAddress],
        subject: "New newsletter subscriber",
        html: `<p>New subscriber: <a href="mailto:${email.replace(/"/g, "&quot;")}">${email.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</a></p>`,
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      console.error("Resend error:", err)
      return Response.json({ error: "Failed to send email" }, { status: 500 })
    }

    return Response.json({ success: true })
  } catch (err) {
    console.error("Newsletter error:", err)
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}

import { prisma } from "@/lib/db"
import { randomBytes } from "crypto"

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

  const fromAddress = process.env.FROM_EMAIL || "DeRivian Care <noreply@derivian.co.uk>"
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://derivian.co.uk"

  const token = randomBytes(32).toString("hex")
  const unsubscribeUrl = `${siteUrl}/api/unsubscribe?token=${token}`

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: fromAddress,
        to: [email],
        subject: "Welcome to the DeRivian Care newsletter",
        html: `
          <p>Thank you for subscribing to the DeRivian Care newsletter.</p>
          <p>You'll receive updates on supported living, independent living tips and news from our community in south London.</p>
          <p style="margin-top:2rem;font-size:0.85em;color:#666;">
            If you didn't sign up for this, you can safely ignore this email.<br/>
            To unsubscribe at any time, <a href="${unsubscribeUrl}">click here</a>.
          </p>
        `,
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      console.error("Resend error:", err)
      return Response.json({ error: "Failed to send confirmation email" }, { status: 500 })
    }

    await prisma.subscriber.upsert({
      where: { email },
      update: {},
      create: { email, unsubscribeToken: token },
    })

    return Response.json({ success: true })
  } catch (err) {
    console.error("Newsletter error:", err)
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}

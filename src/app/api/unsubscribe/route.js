import { prisma } from "@/lib/db"

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const token = searchParams.get("token")

  if (!token) {
    return new Response("Missing unsubscribe token.", { status: 400, headers: { "Content-Type": "text/plain" } })
  }

  try {
    await prisma.subscriber.delete({ where: { unsubscribeToken: token } })
    return new Response(
      `<!doctype html><html><head><meta charset="utf-8"><title>Unsubscribed</title></head><body style="font-family:sans-serif;max-width:480px;margin:4rem auto;padding:1rem;"><h1>You've been unsubscribed</h1><p>You've been successfully removed from the DeRivian Care newsletter. You won't receive any further emails from us.</p><p><a href="https://derivian.co.uk">Return to our website</a></p></body></html>`,
      { status: 200, headers: { "Content-Type": "text/html" } },
    )
  } catch (err) {
    if (err.code === "P2025") {
      return new Response(
        `<!doctype html><html><head><meta charset="utf-8"><title>Already unsubscribed</title></head><body style="font-family:sans-serif;max-width:480px;margin:4rem auto;padding:1rem;"><h1>Already unsubscribed</h1><p>This unsubscribe link has already been used or is no longer valid.</p><p><a href="https://derivian.co.uk">Return to our website</a></p></body></html>`,
        { status: 200, headers: { "Content-Type": "text/html" } },
      )
    }
    console.error("Unsubscribe error:", err)
    return new Response("Something went wrong. Please try again.", { status: 500, headers: { "Content-Type": "text/plain" } })
  }
}

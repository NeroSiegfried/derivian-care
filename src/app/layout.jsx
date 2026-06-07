import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import SvgSprite from "@/components/SvgSprite"
import RevealObserver from "@/components/RevealObserver"
import "./globals.css"

const title = "DeRivian Care — Supported living across London"
const description =
  "DeRivian Care Ltd provides personalised supported living services for adults across London — empowering people to live independently, build life skills and thrive in their own homes."
const siteUrl = "https://derivian.co.uk"
const ogImage = "/images/1.jpg"

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — DeRivian Care",
  },
  description,
  openGraph: {
    type: "website",
    siteName: "DeRivian Care",
    title,
    description,
    url: siteUrl,
    images: [{ url: ogImage, width: 1200, height: 600, alt: "DeRivian Care — Supported living across London" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body>
        <SvgSprite />
        <Nav />
        {children}
        <Footer />
        <RevealObserver />
      </body>
    </html>
  )
}

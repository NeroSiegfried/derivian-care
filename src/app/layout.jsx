import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import SvgSprite from "@/components/SvgSprite"
import RevealObserver from "@/components/RevealObserver"
import "./globals.css"

export const metadata = {
  title: {
    default: "DeRivian Care — Supported living across London",
    template: "%s — DeRivian Care",
  },
  description:
    "DeRivian Care Ltd provides personalised supported living services for adults across London — empowering people to live independently, build life skills and thrive in their own homes.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
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

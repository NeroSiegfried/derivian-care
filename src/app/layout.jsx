import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import SvgSprite from "@/components/SvgSprite"
import RevealObserver from "@/components/RevealObserver"
import "./globals.css"

export const metadata = {
  title: {
    default: "DeRivian Care — Domiciliary care across London",
    template: "%s — DeRivian Care",
  },
  description:
    "DeRivian Care Ltd provides personalised, compassionate domiciliary care for adults across London — helping people live safely and independently at home.",
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

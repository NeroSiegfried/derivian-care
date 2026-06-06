"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact us" },
]

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [easyRead, setEasyRead] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem("derivian-easyread") === "1"
      setEasyRead(saved)
      document.documentElement.classList.toggle("easyread-on", saved)
    } catch {}
  }, [])

  function toggleEasyRead() {
    const next = !easyRead
    setEasyRead(next)
    document.documentElement.classList.toggle("easyread-on", next)
    try {
      localStorage.setItem("derivian-easyread", next ? "1" : "0")
    } catch {}
  }

  function isActive(href) {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <header className="nav">
        <div className="nav__inner">
          <div className="nav__primary">
            {/* Swap logo-dark.svg for your final logo file when ready */}
            <Link className="logo" href="/" aria-label="DeRivian Care — home">
              <img src="/images/logo-dark.svg" alt="DeRivian Care" width="136" height="32" style={{ display: "block" }} />
            </Link>
            <button
              className="nav__toggle"
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen ? "true" : "false"}
              aria-controls="navMenu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span /><span /><span />
            </button>
            <div className="nav__menu" id="navMenu" data-open={menuOpen ? "true" : "false"}>
              <nav className="nav__links" aria-label="Primary">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    className="nav__link"
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Link className="btn btn--appointment btn--sm" href="/contact" onClick={() => setMenuOpen(false)}>
                Make an Appointment
              </Link>
              <button
                className="easyread easyread--drawer"
                type="button"
                aria-pressed={easyRead ? "true" : "false"}
                aria-label="Easy Read mode — larger text and spacing"
                title="Easy Read — larger text and spacing"
                onClick={toggleEasyRead}
              >
                Easy Read
              </button>
            </div>
          </div>
          <div className="nav__util">
            <button
              className="easyread easyread--bar"
              type="button"
              aria-pressed={easyRead ? "true" : "false"}
              aria-label="Easy Read mode — larger text and spacing"
              title="Easy Read — larger text and spacing"
              onClick={toggleEasyRead}
            >
              Easy Read
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

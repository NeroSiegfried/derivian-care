"use client"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((r) => r.classList.add("is-in"))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-in")
            io.unobserve(en.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    )

    // Small delay so React has finished committing the new page's DOM
    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal:not(.is-in)").forEach((r) => io.observe(r))
    }, 50)

    return () => {
      clearTimeout(timer)
      io.disconnect()
    }
  }, [pathname])

  return null
}

"use client"
import { useEffect } from "react"

export default function RevealObserver() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal")
    if (!reveals.length) return

    if (!("IntersectionObserver" in window)) {
      reveals.forEach((r) => r.classList.add("is-in"))
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

    reveals.forEach((r) => io.observe(r))
    return () => io.disconnect()
  }, [])

  return null
}

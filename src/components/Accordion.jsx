"use client"
import { useState } from "react"

function AccItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="acc" data-open={open ? "true" : "false"}>
      <button
        className="acc__trigger"
        aria-expanded={open ? "true" : "false"}
        onClick={() => setOpen((o) => !o)}
      >
        {question}{" "}
        <svg className="chev icon" aria-hidden="true">
          <use href="#i-chev-down" />
        </svg>
      </button>
      <div className="acc__panel">
        <div>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function Accordion({ items }) {
  return (
    <div className="accordion reveal">
      {items.map((item, i) => (
        <AccItem key={i} question={item.q} answer={item.a} defaultOpen={item.open} />
      ))}
    </div>
  )
}

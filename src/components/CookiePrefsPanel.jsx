"use client"
import { useState, useEffect } from "react"

const ER_KEY = "derivian-easyread"

export default function CookiePrefsPanel() {
  const [erStatus, setErStatus] = useState("Checking…")
  const [cleared, setCleared] = useState(false)

  useEffect(() => {
    setErStatus(localStorage.getItem(ER_KEY) ? "Saved" : "Not set")
  }, [])

  function handleClear() {
    localStorage.removeItem(ER_KEY)
    document.documentElement.removeAttribute("data-easy-read")
    document.querySelectorAll(".easyread").forEach((btn) => {
      btn.setAttribute("aria-pressed", "false")
    })
    setErStatus("Not set")
    setCleared(true)
  }

  return (
    <div className="prefs reveal" aria-live="polite">
      <div className="prefs__head">
        <h3 className="prefs__title">Your saved preferences</h3>
        <p className="muted prefs__sub">Stored only in this browser, on this device.</p>
      </div>
      <div className="prefs__item">
        <div className="prefs__item-text">
          <p className="prefs__item-name">Easy Read mode</p>
          <p className="muted prefs__item-desc">Remembers your choice of larger text and spacing.</p>
        </div>
        <span className="prefs__badge">{erStatus}</span>
      </div>
      <div className="prefs__foot">
        <button className="btn btn--primary" type="button" onClick={handleClear}>
          Clear saved preferences
        </button>
        {cleared && (
          <p className="prefs__note" role="status">
            Your saved preferences have been cleared.
          </p>
        )}
      </div>
    </div>
  )
}

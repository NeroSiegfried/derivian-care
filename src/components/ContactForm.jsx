"use client"
import { useState } from "react"
import { siteConfig } from "@/lib/config"

export default function ContactForm({ defaultValues = null }) {
  const [sending, setSending] = useState(false)
  const [note, setNote] = useState(null)
  const dv = defaultValues ?? {}

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    setNote(null)

    const data = {}
    new FormData(e.target).forEach((val, key) => {
      data[key] = val
    })

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const body = await res.json()
      if (res.ok) {
        setNote({
          text: "Thank you — your inquiry has been received. A member of our team will be in touch within one working day.",
          error: false,
        })
        e.target.reset()
      } else {
        throw new Error(body.error || "Server error")
      }
    } catch {
      setNote({
        text: `Something went wrong — please try again or email us directly at ${siteConfig.contact.email}.`,
        error: true,
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <form className="reveal contact-form" onSubmit={handleSubmit}>
      <div className="form-pair">
        <div className="field">
          <label className="label" htmlFor="firstName">First name</label>
          <input className="input" type="text" id="firstName" name="firstName" required />
        </div>
        <div className="field">
          <label className="label" htmlFor="lastName">Last name</label>
          <input className="input" type="text" id="lastName" name="lastName" required />
        </div>
      </div>
      <div className="form-pair form-pair--stack">
        <div className="field">
          <label className="label" htmlFor="email">Email</label>
          <input className="input" type="email" id="email" name="email" required />
        </div>
        <div className="field">
          <label className="label" htmlFor="phone">Phone number</label>
          <input className="input" type="tel" id="phone" name="phone" />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="help">How can we help?</label>
        <select className="select" id="help" name="help" defaultValue={dv.help ?? ""}>
          <option value="" disabled>Select one</option>
          <option>Arranging care for myself</option>
          <option>Arranging care for a loved one</option>
          <option>Professional / local authority referral</option>
          <option>Careers and recruitment</option>
          <option>Something else</option>
        </select>
      </div>
      <fieldset className="field" style={{ border: 0, padding: 0 }}>
        <legend className="label" style={{ marginBottom: ".85rem" }}>What is your situation?</legend>
        <div className="form-radios">
          <label className="radio"><input type="radio" name="situation" value="service" defaultChecked={dv.situation === "service"} /> Service inquiry</label>
          <label className="radio"><input type="radio" name="situation" value="referral" defaultChecked={dv.situation === "referral"} /> Care referral</label>
          <label className="radio"><input type="radio" name="situation" value="general" defaultChecked={dv.situation === "general"} /> General question</label>
          <label className="radio"><input type="radio" name="situation" value="safeguarding" defaultChecked={dv.situation === "safeguarding"} /> Safeguarding concern</label>
          <label className="radio"><input type="radio" name="situation" value="professional" defaultChecked={dv.situation === "professional"} /> Professional inquiry</label>
          <label className="radio"><input type="radio" name="situation" value="other" defaultChecked={dv.situation === "other"} /> Other</label>
        </div>
      </fieldset>
      <div className="field">
        <label className="label" htmlFor="message">Message</label>
        <textarea
          className="textarea"
          id="message"
          name="message"
          placeholder="Share a few details about your situation and how we can help"
          defaultValue={dv.message ?? ""}
        />
      </div>
      <label className="checkbox">
        <input type="checkbox" required />{" "}
        <span>
          I agree to the{" "}
          <a href="#" style={{ textDecoration: "underline" }}>Privacy Policy</a> and consent to being contacted.
        </span>
      </label>
      <div>
        <button className="btn btn--primary btn--lg" type="submit" disabled={sending}>
          {sending ? "Sending…" : "Send inquiry"}
        </button>
      </div>
      {note && (
        <p className="muted" style={{ margin: 0, color: note.error ? "var(--burnt-sienna)" : undefined }}>
          {note.text}
        </p>
      )}
    </form>
  )
}

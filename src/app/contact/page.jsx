"use client"

import { useState } from 'react'
import './contact.scss'
import { FiSend, FiUser, FiMail, FiMessageSquare, FiTag, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import { SiGithub, SiLinkedin } from 'react-icons/si'

const INITIAL = { name: '', email: '', subject: '', message: '' }

export default function ContactPage() {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'
  const [serverError, setServerError] = useState('')

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required.'
    if (!form.email.trim()) {
      e.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Enter a valid email address.'
    }
    if (!form.subject.trim()) e.subject = 'Subject is required.'
    if (!form.message.trim()) e.message = 'Message is required.'
    else if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters.'
    return e
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: undefined }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }

    setStatus('loading')
    setServerError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setStatus('success')
      setForm(INITIAL)
    } catch (err) {
      setStatus('error')
      setServerError(err.message)
    }
  }

  return (
    <main className="contactPage">
      <div className="contactContainer">

        {/* Left — info */}
        <div className="contactInfo">
          <span className="contactEyebrow">Get in touch</span>
          <h1>Let&apos;s work <span className="accent">together</span></h1>
          <p className="contactSubtitle">
            Have a project in mind, a question, or just want to say hello?
            Fill in the form and I&apos;ll get back to you as soon as possible.
          </p>

          <div className="contactDetails">
            <a href="mailto:hadidiab33@gmail.com" className="contactDetailItem">
              <span className="detailIcon"><FiMail /></span>
              <span>hadidiab33@gmail.com</span>
            </a>
            <a href="https://github.com/hadi-diab" target="_blank" rel="noopener noreferrer" className="contactDetailItem">
              <span className="detailIcon"><SiGithub /></span>
              <span>github.com/hadi-diab</span>
            </a>
            <a href="https://www.linkedin.com/in/hadi-diab" target="_blank" rel="noopener noreferrer" className="contactDetailItem">
              <span className="detailIcon"><SiLinkedin /></span>
              <span>linkedin.com/in/hadi-diab</span>
            </a>
          </div>
        </div>

        {/* Right — form */}
        <div className="contactFormWrap">
          {status === 'success' ? (
            <div className="successState">
              <FiCheckCircle className="successIcon" />
              <h2>Message sent!</h2>
              <p>Thank you for reaching out. I&apos;ll reply to you shortly.</p>
              <button className="resetBtn" onClick={() => setStatus(null)}>Send another message</button>
            </div>
          ) : (
            <form className="contactForm" onSubmit={handleSubmit} noValidate>

              <div className="formRow">
                <div className={`formField${errors.name ? ' hasError' : ''}`}>
                  <label htmlFor="name"><FiUser /> Full Name</label>
                  <input
                    id="name" name="name" type="text" autoComplete="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                  />
                  {errors.name && <span className="fieldError">{errors.name}</span>}
                </div>

                <div className={`formField${errors.email ? ' hasError' : ''}`}>
                  <label htmlFor="email"><FiMail /> Email</label>
                  <input
                    id="email" name="email" type="email" autoComplete="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                  />
                  {errors.email && <span className="fieldError">{errors.email}</span>}
                </div>
              </div>

              <div className={`formField${errors.subject ? ' hasError' : ''}`}>
                <label htmlFor="subject"><FiTag /> Subject</label>
                <input
                  id="subject" name="subject" type="text"
                  placeholder="Project inquiry, collaboration, etc."
                  value={form.subject}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                />
                {errors.subject && <span className="fieldError">{errors.subject}</span>}
              </div>

              <div className={`formField${errors.message ? ' hasError' : ''}`}>
                <label htmlFor="message"><FiMessageSquare /> Message</label>
                <textarea
                  id="message" name="message" rows={6}
                  placeholder="Tell me about your project or idea..."
                  value={form.message}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                />
                {errors.message && <span className="fieldError">{errors.message}</span>}
              </div>

              {status === 'error' && (
                <div className="serverError">
                  <FiAlertCircle /> {serverError}
                </div>
              )}

              <button
                type="submit"
                className="submitBtn"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <span className="btnSpinner" />
                ) : (
                  <><FiSend /> Send Message</>
                )}
              </button>

            </form>
          )}
        </div>

      </div>
    </main>
  )
}

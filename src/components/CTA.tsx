import { useState } from 'react'
import './CTA.css'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => {
        setEmail('')
        setSubmitted(false)
      }, 3000)
    }
  }

  return (
    <section className="cta" id="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Be an Early User</h2>
          <p className="cta-subtitle">
            Join our waitlist and be among the first to experience the future of project management.
            Early users get exclusive lifetime benefits and priority access.
          </p>
          <form className="cta-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="cta-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">
              {submitted ? 'Thank You!' : 'Join Waitlist'}
            </button>
          </form>
          {submitted && (
            <p className="success-message">
              Thanks for joining! We'll be in touch soon.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

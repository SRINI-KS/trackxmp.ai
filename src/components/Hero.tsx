import './Hero.css'

export default function Hero() {
  const handleWaitlist = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleDemo = () => {
    window.location.href = 'mailto:hello@trackly.ai?subject=Request Demo'
  }

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Trackly AI – Smarter Project Management with AI
          </h1>
          <p className="hero-subtitle">
            Plan, track, and deliver projects effortlessly using AI-powered insights.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={handleWaitlist}>
              Join the Waitlist
            </button>
            <button className="btn btn-secondary" onClick={handleDemo}>
              Request Demo
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">🎯</div>
            <div className="card-text">AI Task Prioritization</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">📊</div>
            <div className="card-text">Real-time Insights</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">⚡</div>
            <div className="card-text">Lightning Fast</div>
          </div>
        </div>
      </div>
    </section>
  )
}

import './HowItWorks.css'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Create Your Project',
      description: 'Set up your project in minutes with our intuitive project creation flow',
      icon: '🚀'
    },
    {
      number: '02',
      title: 'Add Tasks & Team',
      description: 'Invite team members and let AI help you break down work into manageable tasks',
      icon: '👥'
    },
    {
      number: '03',
      title: 'Track Progress with AI Insights',
      description: 'Watch as AI automatically tracks progress and surfaces important insights',
      icon: '📊'
    },
    {
      number: '04',
      title: 'Deliver Projects Faster',
      description: 'Ship projects on time with better visibility and smarter decision-making',
      icon: '✅'
    }
  ]

  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          Get started in four simple steps
        </p>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

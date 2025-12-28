import './Features.css'

export default function Features() {
  const features = [
    {
      icon: '📊',
      title: 'AI Project Insights',
      description: 'Get intelligent recommendations and predictions powered by advanced AI algorithms'
    },
    {
      icon: '🎯',
      title: 'Smart Task Prioritization',
      description: 'AI automatically prioritizes tasks based on deadlines, dependencies, and team capacity'
    },
    {
      icon: '💬',
      title: 'Real-time Team Collaboration',
      description: 'Seamless communication and file sharing integrated directly into your workflow'
    },
    {
      icon: '📈',
      title: 'Automated Reports',
      description: 'Beautiful reports generated automatically, saving hours of manual work'
    },
    {
      icon: '⚙️',
      title: 'Custom Workflows',
      description: "Flexible workflows that adapt to your team's unique processes and needs"
    },
    {
      icon: '🔔',
      title: 'Intelligent Notifications',
      description: 'Stay informed with smart notifications that know when and what to alert you about'
    }
  ]

  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">Powerful Features for Modern Teams</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

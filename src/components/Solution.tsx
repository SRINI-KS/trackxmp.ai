import './Solution.css'

export default function Solution() {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Task Tracking',
      description: 'Let AI handle the heavy lifting of tracking and updating tasks automatically'
    },
    {
      icon: '📅',
      title: 'Smart Project Timelines',
      description: 'AI predicts delays and suggests optimizations for your project schedule'
    },
    {
      icon: '💡',
      title: 'Automatic Progress Insights',
      description: 'Get instant insights into project health without manual reporting'
    },
    {
      icon: '👥',
      title: 'Team Collaboration in One Place',
      description: 'Everything your team needs to collaborate effectively, unified in one platform'
    },
    {
      icon: '✨',
      title: 'Simple and Intuitive UI',
      description: 'Beautiful, clean interface that your team will actually love using'
    }
  ]

  return (
    <section className="solution">
      <div className="container">
        <h2 className="section-title">How Trackly AI Solves This</h2>
        <p className="section-subtitle">
          We've reimagined project management from the ground up, powered by AI
        </p>
        <div className="solution-grid">
          {features.map((feature, index) => (
            <div key={index} className="solution-card">
              <div className="solution-icon">{feature.icon}</div>
              <h3 className="solution-title">{feature.title}</h3>
              <p className="solution-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

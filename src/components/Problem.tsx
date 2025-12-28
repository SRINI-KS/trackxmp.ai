import './Problem.css'

export default function Problem() {
  const problems = [
    {
      icon: '⏱️',
      title: 'Too Complex and Time-Consuming',
      description: 'Current tools are overloaded with features that slow teams down'
    },
    {
      icon: '👁️',
      title: 'Poor Visibility into Real Progress',
      description: "Hard to see what's actually happening across projects"
    },
    {
      icon: '📝',
      title: 'Manual Tracking and Reporting',
      description: 'Teams waste hours updating status and creating reports'
    },
    {
      icon: '🚫',
      title: 'Not Built for Modern Agile Teams',
      description: "Legacy tools don't match how modern teams work"
    }
  ]

  return (
    <section className="problem">
      <div className="container">
        <h2 className="section-title">Why Current Project Management Tools Fail</h2>
        <div className="problem-grid">
          {problems.map((problem, index) => (
            <div key={index} className="problem-card">
              <div className="problem-icon">{problem.icon}</div>
              <h3 className="problem-title">{problem.title}</h3>
              <p className="problem-description">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import Header from './components/Header'
import LeaderCarousel from './components/LeaderCarousel'
import RoleCard from './components/RoleCard'

export default function App() {
  return (
    <div className="app">
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />

      <main id="main">
        <LeaderCarousel />

        <section className="hero container" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <h2 id="hero-heading">Student Governance Hub</h2>
            <p className="lede">Streamline representative activities, raise student concerns, and manage campus governance in one accessible place.</p>
            <div className="cta-group">
              <button className="btn btn-primary">Login</button>
              <a href="#how" className="btn btn-ghost">Learn how it works</a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden>
            <div className="illustration">🎓</div>
          </div>
        </section>

        <section className="roles container" aria-labelledby="roles-heading">
          <h2 id="roles-heading">Who this is for</h2>
          <p className="muted">Whether you're a student, representative, or administrator — this system helps everyone participate in campus governance.</p>

          <div className="roles-grid">
            <RoleCard title="Students" desc="Report concerns, vote in polls, and follow case updates." cta="Login as Student" hoverInfo="Submit concerns, join polls, and track outcomes for your cases." />
            <RoleCard title="SRC Members" desc="Organise meetings, respond to requests, and publish updates." cta="Login as SRC" hoverInfo="Create agendas, assign tasks, and keep students informed." />
            <RoleCard title="Representatives" desc="Review constituency reports and coordinate solutions." cta="Login as Representative" hoverInfo="See reports from your area and schedule consultations." />
            <RoleCard title="Administrators" desc="Access reports, approve policies, and manage roles." cta="Login as Admin" hoverInfo="Review system-wide reports and manage user roles securely." />
          </div>
        </section>

        <section className="benefits container" aria-labelledby="benefits-heading">
          <h2 id="benefits-heading">What it solves</h2>
          <ul className="benefit-list">
            <li><strong>Transparent:</strong> Track requests from submission to outcome.</li>
            <li><strong>Efficient:</strong> Route issues quickly to the right people.</li>
            <li><strong>Inclusive:</strong> Easy access for all campus community members.</li>
          </ul>
        </section>

        <section id="how" className="how container" aria-labelledby="how-heading">
          <h2 id="how-heading">How it works</h2>
          <ol>
            <li>Sign in to your account.</li>
            <li>Submit or manage a concern, meeting, or poll.</li>
            <li>Track progress and see outcomes.</li>
          </ol>
        </section>

      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-inner">
          <div className="footer-brand">
            <strong>Student Governance & Leadership Development</strong>
            <div className="muted">Connecting students and leaders across campus</div>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="footer-nav">
              <li><a href="#contact">Contact</a></li>
              <li><a href="#accessibility">Accessibility</a></li>
              <li><a href="#privacy">Privacy</a></li>
            </ul>
          </nav>
        </div>
      </div>
      </footer>
    </div>
  )
}

import React, { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  const handleAboutClick = (e) => {
    e.preventDefault()
    const link = document.createElement('a')
    link.href = '/pdfs/Sip%20Mahl%20CV%20%281%29.pdf'
    link.download = 'Sip Mahl CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    closeMenu()
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <h1>Student Governance & Leadership Development</h1>
          <p className="muted">A central, welcoming place for student leadership and campus governance.</p>
        </div>
        <button 
          className="menu-toggle" 
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav 
          aria-label="Main navigation"
          className={`nav-menu ${menuOpen ? 'open' : ''}`}
        >
          <button 
            className="menu-close" 
            aria-label="Close menu"
            onClick={toggleMenu}
          >
            ←
          </button>
          <ul className="nav">
            <li><button className="link-btn" onClick={handleAboutClick}>About</button></li>
            <li><a href="#how" onClick={closeMenu}>How it works</a></li>
            <li><a href="/pdf-library.html" onClick={closeMenu}>Documents</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            <li><button className="btn" onClick={closeMenu}>Login</button></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

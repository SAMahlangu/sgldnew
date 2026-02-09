import React, { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [docDropdownOpen, setDocDropdownOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)
  const toggleDocDropdown = () => setDocDropdownOpen(!docDropdownOpen)

  const documents = [
    { id: 1, name: 'Document 1', path: '/pdfs/sample.pdf' },
    { id: 2, name: 'Document 2', path: '/pdfs/sample.pdf' },
    { id: 3, name: 'Document 3', path: '/pdfs/sample.pdf' }
  ]

  const handleDocumentDownload = (e, docPath, docName) => {
    e.preventDefault()
    const link = document.createElement('a')
    link.href = docPath
    link.download = `${docName}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleDocumentPreview = (e, docPath) => {
    e.preventDefault()
    // Open PDF in a new tab for preview
    window.open(docPath, '_blank')
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <img src="/logo.png" alt="SGLD Logo" className="logo" />
          <div className="brand-text">
            <h1>Student Governance & Leadership Development</h1>
            <p className="muted">Student Governance and Leadership Development we aim to Build, Empower and Create Leaders that make the right choices (through extracurricular activities).</p>
          </div>
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
            ✕
          </button>
          <ul className="nav">
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li className="nav-dropdown">
              <button 
                className="nav-link-btn"
                onClick={toggleDocDropdown}
                aria-expanded={docDropdownOpen}
              >
                Documents
              </button>
              {docDropdownOpen && (
                <div className="dropdown-menu">
                  {documents.map((doc) => (
                    <div key={doc.id} className="dropdown-item">
                      <span className="doc-name">{doc.name}</span>
                      <div className="doc-actions">
                        <button 
                          className="doc-btn preview"
                          onClick={(e) => handleDocumentPreview(e, doc.path)}
                          title="Preview PDF"
                        >
                          👁 Preview
                        </button>
                        <button 
                          className="doc-btn download"
                          onClick={(e) => handleDocumentDownload(e, doc.path, doc.name)}
                          title="Download PDF"
                        >
                          ⬇ Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

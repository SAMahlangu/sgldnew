import React, { useState } from 'react'
import ContactModal from './ContactModal'

export default function Header({ onNavigate, currentPage }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [docDropdownOpen, setDocDropdownOpen] = useState(false)
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)
  const toggleDocDropdown = () => setDocDropdownOpen(!docDropdownOpen)
  const toggleLoginModal = () => setLoginModalOpen(!loginModalOpen)
  const toggleContactModal = () => setContactModalOpen(!contactModalOpen)

  const documents = [
    { id: 1, name: 'Document 1', path: '/pdfs/sample.pdf' },
    { id: 2, name: 'Document 2', path: '/pdfs/Sip_Mahl_CV.pdf' },
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
        <button className="brand-button" onClick={() => onNavigate('home')} aria-label="Go to homepage">
          <img src="/logo.png" alt="SGLD Logo" className="logo" />
          <div className="brand-text">
            <h1>Student Governance & Leadership Development</h1>
            <p className="muted">Building Leaders. Empowering Choices. Shaping the Future </p>
          </div>
        </button>
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
            <li><a href="#home" onClick={() => { onNavigate('home'); closeMenu(); }}>Home</a></li>
            <li><a href="#about" onClick={() => { onNavigate('about'); closeMenu(); }}>About</a></li>
            <li className="nav-dropdown">
              <button 
                className="nav-link-btn"
                onClick={toggleDocDropdown}
                aria-expanded={docDropdownOpen}
              >
                Documents
              </button>
              {docDropdownOpen && (
                <>
                  <div className="dropdown-overlay" onClick={() => setDocDropdownOpen(false)}></div>
                  <div className="dropdown-menu">
                    <button className="dropdown-close" onClick={() => setDocDropdownOpen(false)}>✕</button>
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
                </>
              )}
            </li>
            <li><button className="nav-link-btn" onClick={() => { toggleContactModal(); closeMenu(); }}>Contact Us</button></li>
            <li><button className="btn btn-primary" onClick={toggleLoginModal}>Login</button></li>
          </ul>
        </nav>

        {/* Login Modal */}
        {loginModalOpen && (
          <div className="modal-overlay" onClick={toggleLoginModal}>
            <div className="modal-content login-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={toggleLoginModal}>✕</button>
              
              <div className="login-modal-content">
                <h2>Select Your Role</h2>
                <p className="login-subtitle">Choose how you'd like to access the platform</p>
                
                <div className="login-options">
                  <button className="login-option-btn">
                    <div className="login-option-icon">👨‍🎓</div>
                    <h3>Student</h3>
                    <p>Report concerns, vote in polls</p>
                  </button>
                  
                  <button className="login-option-btn">
                    <div className="login-option-icon">👥</div>
                    <h3>SRC Member</h3>
                    <p>Manage meetings & updates</p>
                  </button>
                  
                  <button className="login-option-btn">
                    <div className="login-option-icon">📋</div>
                    <h3>Representative</h3>
                    <p>Review reports & coordinate</p>
                  </button>
                  
                  <button className="login-option-btn">
                    <div className="login-option-icon">⚙️</div>
                    <h3>Administrator</h3>
                    <p>Access & manage system</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />
    </header>
  )
}

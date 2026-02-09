import React, { useRef } from 'react'

export default function AboutModal({ isOpen, onClose }) {
  const downloadPDF = () => {
    const link = document.createElement('a')
    link.href = '/pdfs/sample.pdf'
    link.download = 'Sip Mahl CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <div className="pdf-viewer">
          <embed
            src="/pdfs/sample.pdf"
            type="application/pdf"
            className="modal-pdf-embed"
          />
        </div>

        <div className="modal-actions">
          <button className="btn btn-primary" onClick={downloadPDF}>Download PDF</button>
          <button className="btn btn-outline" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

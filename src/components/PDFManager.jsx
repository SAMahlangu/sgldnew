import React, { useState, useEffect } from 'react'

export default function PDFManager() {
  const [pdfs, setPdfs] = useState([
    { id: 1, name: 'About SGLD', path: '/pdfs/SGLD-About.pdf' },
    { id: 2, name: 'sample', path: '/pdfs/sample.pdf' }
  ])
  const [selectedPdf, setSelectedPdf] = useState(null)
  const [showUploadForm, setShowUploadForm] = useState(false)

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file && file.type === 'application/pdf') {
      const newPdf = {
        id: pdfs.length + 1,
        name: file.name.replace('.pdf', ''),
        path: URL.createObjectURL(file)
      }
      setPdfs([...pdfs, newPdf])
      setShowUploadForm(false)
      e.target.value = ''
    } else {
      alert('Please select a valid PDF file')
    }
  }

  const deletePdf = (id) => {
    setPdfs(pdfs.filter(pdf => pdf.id !== id))
    if (selectedPdf?.id === id) setSelectedPdf(null)
  }

  return (
    <div className="pdf-manager">
      <div className="pdf-manager-header">
        <h2>PDF Library</h2>
        <button className="btn btn-primary" onClick={() => setShowUploadForm(!showUploadForm)}>
          {showUploadForm ? 'Cancel' : '+ Upload PDF'}
        </button>
      </div>

      {showUploadForm && (
        <div className="upload-form">
          <label htmlFor="pdf-input" className="upload-label">
            Choose a PDF file to upload:
            <input
              id="pdf-input"
              type="file"
              accept=".pdf"
              onChange={handleFileUpload}
              className="file-input"
            />
          </label>
        </div>
      )}

      <div className="pdf-manager-content">
        <div className="pdf-list">
          <h3>Available Documents</h3>
          {pdfs.length === 0 ? (
            <p className="empty-state">No PDFs uploaded yet. Upload one to get started.</p>
          ) : (
            <ul>
              {pdfs.map((pdf) => (
                <li key={pdf.id} className={selectedPdf?.id === pdf.id ? 'active' : ''}>
                  <button
                    className="pdf-item"
                    onClick={() => setSelectedPdf(pdf)}
                  >
                    📄 {pdf.name}
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => deletePdf(pdf.id)}
                    aria-label={`Delete ${pdf.name}`}
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="pdf-viewer-section">
          {selectedPdf ? (
            <>
              <div className="pdf-viewer-header">
                <h3>{selectedPdf.name}</h3>
                <a href={selectedPdf.path} download={`${selectedPdf.name}.pdf`} className="btn btn-outline">
                  Download
                </a>
              </div>
              <iframe
                src={selectedPdf.path}
                title={selectedPdf.name}
                className="pdf-iframe"
              />
            </>
          ) : (
            <div className="empty-state">
              <p>Select a PDF to view</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import PDFManager from './components/PDFManager'
import './styles.css'

function PDFApp() {
  return (
    <div className="app">
      <Header />
      <main id="main">
        <PDFManager />
      </main>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PDFApp />
  </React.StrictMode>
)

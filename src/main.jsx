import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



// Make jQuery available globally
window.jQuery = jQuery;
window.$ = jQuery;

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

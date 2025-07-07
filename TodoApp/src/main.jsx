import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// For Vite
import 'bootstrap/dist/css/bootstrap.min.css';

// (Optional) If you want Bootstrap JS (for modals, dropdowns)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

console.log(
  '%cI know what kind of man you are',
  'background:#000;color:#55FF55;font-size:20px;font-weight:bold;padding:10px 24px;border:2px solid #55FF55;letter-spacing:2px;text-shadow:0 0 8px #55FF55'
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

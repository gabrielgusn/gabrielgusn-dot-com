import { useNavigate } from 'react-router-dom'
import { useMemo } from 'react'
import { playClick } from '../utils/playClick'

const SPLASH_TEXTS = [
  'extreme go horse certified',
  'in my machine it works',
  'git commit --amend --no-verify && git push -f',
  'Senior IT rookie',
  'we will fix this CVE in next release',
  'DevSecSalesQASupportChaosFinMlOps',
  'CKA Certified (no cap)'
]

const MENU_ITEMS = [
  { label: 'About Me',       path: '/about' },
  { label: 'Experience',     path: '/experience' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Blog Posts',     path: '/blog' },
]

export default function MainMenu() {
  const navigate = useNavigate()
  const splash = useMemo(
    () => SPLASH_TEXTS[Math.floor(Math.random() * SPLASH_TEXTS.length)],
    []
  )

  return (
    <div className="mc-screen">
      <div className="mc-vignette" />

      <div className="mc-main-content">
        <div className="mc-title-container">
          <img src="/title.png" alt="Gabriel Gustavo Nicolodi" className="mc-title-img" />
          <span className="mc-title-splash">{splash}</span>
        </div>

        <div className="mc-button-group">
          {MENU_ITEMS.map((item) => (
            <button
              key={item.path}
              className="mc-button"
              onClick={() => { playClick(); navigate(item.path) }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mc-footer">
        <span>gabrielgusn.dev v1.0.0</span>
        <span>DevSecOps Edition</span>
      </div>
    </div>
  )
}

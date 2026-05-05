import { useNavigate } from 'react-router-dom'
import { useMemo } from 'react'

const SPLASH_TEXTS = [
  'chmod 700 career',
  'sudo apt-get hired',
  'git push --force dreams',
  '0 CVEs found!',
  'ShiftLeft enjoyer!',
  'OWASP Top 10? All known!',
  'Least privilege IRL!',
  'Immutable infra fan!',
  'No secrets in git!',
  'Shift security left!',
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
      <div className="mc-panorama-bg">
        <div className="mc-sun-glow" />
      </div>
      <div className="mc-vignette" />

      <div className="mc-main-content">
        <div className="mc-title-container">
          <div className="mc-title-main">
            <span className="mc-title-line1">GABRIEL GUSTAVO</span>
            <span className="mc-title-line2">NICOLODI</span>
          </div>
          <span className="mc-title-splash">{splash}</span>
        </div>

        <div className="mc-button-group">
          {MENU_ITEMS.map((item) => (
            <button
              key={item.path}
              className="mc-button"
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mc-footer">
        <span>gabriel.dev v1.0.0</span>
        <span>DevSecOps Edition</span>
      </div>
    </div>
  )
}

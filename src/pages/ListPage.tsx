import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export type BlockColor =
  | 'grass' | 'diamond' | 'gold' | 'stone'
  | 'redstone' | 'emerald' | 'bookshelf' | 'obsidian'

export interface ListEntry {
  id: number
  title: string
  url?: string
  subtitle: string
  description: string
  blockColor: BlockColor
  pingStrength: 0 | 1 | 2 | 3 | 4 | 5
  pingLabel?: string
  tags?: string[]
}

interface Props {
  title: string
  entries: ListEntry[]
}

function PingBars({ strength, label }: { strength: number; label?: string }) {
  const getColor = (i: number) => {
    if (i > strength) return '#444'
    if (strength >= 4) return '#55FF55'
    if (strength >= 3) return '#FFAA00'
    return '#FF5555'
  }
  const heights = [4, 7, 10, 14, 18]

  return (
    <div className="mc-ping">
      <div className="mc-ping-bars">
        {heights.map((h, i) => (
          <div
            key={i}
            className="mc-ping-bar"
            style={{ height: h, background: getColor(i + 1) }}
          />
        ))}
      </div>
      {label && <span className="mc-ping-label">{label}</span>}
    </div>
  )
}

export default function ListPage({ title, entries }: Props) {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <div className="mc-list-screen">
      <div className="mc-list-bg" />

      <div className="mc-list-content">
        <h1 className="mc-screen-title">{title}</h1>

        <div className="mc-server-list">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className={`mc-server-entry${selected === entry.id ? ' selected' : ''}`}
              onClick={() => setSelected(entry.id)}
            >
              <div className={`mc-block-icon mc-block-${entry.blockColor}`} />

              <div className="mc-server-info">
                {entry.url ? (
                  <a href={entry.url} target="_blank">
                    <div className="mc-server-name mc-server-name-url">
                      {entry.title}
                      <img 
                        className="mc-server-name-new-tab" 
                        src="new-tab.png"
                      />
                    </div>
                    
                  </a>
                ) : (
                  <div className="mc-server-name">{entry.title}</div>
                )}
                <div className="mc-server-sub">{entry.subtitle}</div>
                <div className="mc-server-desc">{entry.description}</div>
                {entry.tags && (
                  <div className="mc-server-tags">
                    {entry.tags.map((tag) => (
                      <span key={tag} className="mc-tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>

              <PingBars strength={entry.pingStrength} label={entry.pingLabel} />
            </div>
          ))}
        </div>

        <div className="mc-action-row">
          <button className="mc-button mc-button-sm" onClick={() => navigate('/')}>
            Back to Menu
          </button>
        </div>
      </div>
    </div>
  )
}

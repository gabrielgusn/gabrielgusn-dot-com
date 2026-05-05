import { useState, useRef, useLayoutEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { playClick } from '../utils/playClick'

interface Balloon {
  id: number
  y: number
  right: number
}

export type BlockColor =
  | 'grass' | 'diamond' | 'gold' | 'stone'
  | 'redstone' | 'emerald' | 'bookshelf' | 'obsidian'
  | 'slate'

const ALL_BLOCK_COLORS: BlockColor[] = [
  'grass', 'diamond', 'gold', 'stone',
  'redstone', 'emerald', 'bookshelf', 'obsidian',
  'slate',
]

export interface ListEntry {
  id: number
  title: string
  url?: string
  subtitle: string
  description: string
  blockColor?: BlockColor
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
  const [expanded, setExpanded] = useState<Set<number>>(new Set())
  const [balloon, setBalloon] = useState<Balloon | null>(null)
  const [overflows, setOverflows] = useState<Set<number>>(new Set())

  const colorMap = useMemo(() => {
    const map = new Map<number, BlockColor>()
    entries.forEach(e => {
      map.set(e.id, e.blockColor ?? ALL_BLOCK_COLORS[Math.floor(Math.random() * ALL_BLOCK_COLORS.length)])
    })
    return map
  }, [entries])
  const descRefs = useRef<Map<number, HTMLDivElement>>(new Map())

  const setDescRef = (id: number) => (el: HTMLDivElement | null) => {
    if (el) descRefs.current.set(id, el)
    else descRefs.current.delete(id)
  }

  // Measure which descriptions overflow their collapsed max-height.
  // Skips expanded entries so their "was overflowing" status is preserved.
  useLayoutEffect(() => {
    const measure = () =>
      setOverflows(prev => {
        const next = new Set(prev)
        descRefs.current.forEach((el, id) => {
          if (expanded.has(id)) return
          if (el.scrollHeight > el.clientHeight + 1) next.add(id)
          else next.delete(id)
        })
        return next
      })
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [entries, expanded])

  const toggle = (id: number) => {
    if (!overflows.has(id)) return
    setExpanded(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const showBalloon = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    if (!overflows.has(id)) return
    const rect = e.currentTarget.getBoundingClientRect()
    setBalloon({ id, y: rect.top + rect.height / 2, right: rect.right })
  }

  return (
    <div className="mc-list-screen">
      <div className="mc-list-bg" />

      {balloon && (
        <div
          className={`mc-expand-balloon${expanded.has(balloon.id) ? ' is-expanded' : ''}`}
          style={{
            top: balloon.y,
            left: Math.min(balloon.right + 16, window.innerWidth - 196),
          }}
        >
          {expanded.has(balloon.id) ? '▴ collapse' : '▾ expand'}
        </div>
      )}

      <div className="mc-list-content">
        <h1 className="mc-screen-title">{title}</h1>

        <div className="mc-server-list">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className={`mc-server-entry${expanded.has(entry.id) ? ' expanded selected' : ''}${overflows.has(entry.id) ? ' has-overflow' : ''}`}
              style={{ cursor: overflows.has(entry.id) ? 'pointer' : 'default' }}
              onClick={() => { playClick(); toggle(entry.id) }}
              onMouseEnter={e => showBalloon(e, entry.id)}
              onMouseLeave={() => setBalloon(null)}
            >
              <div className={`mc-block-icon mc-block-${colorMap.get(entry.id)}`} />

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
                <div
                  className="mc-server-desc"
                  ref={setDescRef(entry.id)}
                >{entry.description}</div>
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
          <button className="mc-button mc-button-sm" onClick={() => { playClick(); navigate('/') }}>
            Back to Menu
          </button>
        </div>
      </div>
    </div>
  )
}

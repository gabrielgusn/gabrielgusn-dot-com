import { useEffect, useRef, useState } from 'react'
import { playClick } from '../utils/playClick'

export default function AmbientMusic() {
  const ref = useRef<HTMLAudioElement>(null)
  const [volume, setVolume] = useState(70)
  const prevVolume = useRef(70)

  const isMuted = volume === 0

  const applyVolume = (val: number) => {
    setVolume(val)
    if (!ref.current) return
    ref.current.volume = val / 100
    if (val > 0 && ref.current.paused) ref.current.play().catch(() => {})
  }

  const handleSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value)
    if (val > 0) prevVolume.current = val
    applyVolume(val)
  }

  const toggleMute = () => {
    if (isMuted) {
      applyVolume(prevVolume.current || 70)
    } else {
      prevVolume.current = volume
      applyVolume(0)
    }
  }

  useEffect(() => {
    const audio = ref.current
    if (!audio) return

    let timer: ReturnType<typeof setTimeout>
    let playing = false

    const tryPlay = () => {
      if (playing) return
      audio.play()
        .then(() => {
          playing = true
        })
        .catch((err) => {
          console.warn('[audio] play() blocked:', err.name, err.message)
          document.addEventListener('click',   tryPlay, { once: true })
          document.addEventListener('keydown', tryPlay, { once: true })
        })
    }

    audio.addEventListener('error', () => {
      console.error('[audio] element error:', audio.error?.code, audio.error?.message)
    })

    audio.preload = 'auto'
    audio.volume = 0.7
    audio.load()
    timer = setTimeout(tryPlay, 3000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('click',   tryPlay)
      document.removeEventListener('keydown', tryPlay)
    }
  }, [])

  return (
    <>
      <audio ref={ref} preload="none" loop>
        <source src="/c418-sweden.opus" type="audio/ogg; codecs=opus" />
      </audio>
      <div className="mc-audio-ctrl">
        <div className="mc-volume-popup">
          <input
            type="range"
            className="mc-volume-slider"
            style={{ '--fill': `${volume}%` } as React.CSSProperties}
            min="0"
            max="100"
            value={volume}
            onChange={handleSlider}
          />
          <span className="mc-volume-pct">{volume}%</span>
        </div>
        <button className="mc-mute-btn" onClick={() => { playClick(); toggleMute() }}>
          <img src={isMuted ? '/muted2.png' : '/unmuted2.png'} alt={isMuted ? 'Unmute' : 'Mute'} />
        </button>
      </div>
    </>
  )
}
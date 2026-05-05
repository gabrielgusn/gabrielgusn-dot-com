import { useEffect, useRef } from 'react'

export default function VideoBackground() {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    // Defer loading until after the component tree has painted
    video.preload = 'auto'
    video.load()
    video.addEventListener(
      'canplay',
      () => video.classList.add('mc-video-bg--ready'),
      { once: true }
    )
    video.play().catch(() => {})
  }, [])

  return (
    <video
      ref={ref}
      className="mc-video-bg"
      preload="none"
      loop
      muted
      playsInline
    >
      <source src="/mine-background2.mp4" type="video/mp4" />
    </video>
  )
}

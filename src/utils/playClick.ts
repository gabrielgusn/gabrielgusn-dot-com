const _audio = new Audio('/click.mp3')
_audio.volume = 0.4

export function playClick() {
  _audio.currentTime = 0
  _audio.play().catch(() => {})
}

# Session Context — gabrielgusn-dot-com

## Project
Personal portfolio website for **Gabriel Gustavo Nicolodi**, DevSecOps Engineer.
Located at `/home/gabriel/projects/gabrielgusn-dot-com`.

## Stack
- **Vite 9** + **React 19** + **TypeScript** (scaffolded via `npm create vite@latest . -- --template react-ts`)
- **react-router-dom** (HashRouter, installed during session)
- Fonts: `Minecraft.ttf` (local, `public/Minecraft.ttf`) + `VT323` (Google Fonts)
- No other runtime dependencies

## Theme: Minecraft UI
The entire site mimics Minecraft's UI:
- **Main menu** (`/`) — panorama background (now a blurred video), pixel title image, 4 stone-gray buttons
- **Sub-pages** (`/about`, `/experience`, `/certifications`, `/blog`) — Minecraft server-selection list UI with CSS block icons, ping bars, tags

## File Structure
```
src/
  index.css              — reset, @font-face for Minecraft.ttf, dark html fallback
  minecraft.css          — all shared Minecraft UI styles (CSS vars, buttons, blocks, ping bars, etc.)
  App.tsx                — HashRouter + VideoBackground + Routes
  components/
    VideoBackground.tsx  — lazy-loaded blurred video background
  pages/
    MainMenu.tsx         — main menu screen
    ListPage.tsx         — reusable server-list template (shared by all sub-pages)
    AboutMe.tsx          — about me data
    Experience.tsx       — experience data
    Certifications.tsx   — certifications data
    BlogPosts.tsx        — blog posts data
public/
  title.png              — pixel-art title image used in main menu header
  Minecraft.ttf          — custom pixel font
  background.mp4         — blurred video background
```

## Key Implementation Details

### VideoBackground (`src/components/VideoBackground.tsx`)
- Renders with `preload="none"` so it doesn't block initial load
- `useEffect` fires after first paint: sets `preload="auto"`, calls `.load()` + `.play()`
- `canplay` event adds class `mc-video-bg--ready` → CSS `opacity: 0 → 1` transition (1.4s ease)
- CSS: `position: fixed; z-index: 0; filter: blur(10px); transform: scale(1.06)` (scale prevents blurred edge halos)

### Z-index layering
- `html`: `background: #0a0a14` (fallback before video loads)
- `video.mc-video-bg`: z-index 0
- `.mc-screen` / `.mc-list-screen`: z-index 1 (all page content above video)
- `.mc-main-content` / `.mc-list-content`: z-index 10

### Main menu title
- Uses `<img src="/title.png">` with class `mc-title-img`
- `image-rendering: pixelated`, responsive width `clamp(260px, 50vw, 600px)`
- Random splash text rotated 18° over the image (DevSecOps jokes)

### CSS font variable
```css
--font-pixel: 'Minecraft', monospace;
--font-vt:    'VT323', monospace;
```
All pixel UI text uses `--font-pixel`; descriptions use `--font-vt`.

### ListPage entries (all lorem ipsum — to be replaced)
Each entry: `{ id, title, subtitle, description, blockColor, pingStrength, pingLabel?, tags? }`

Block colors available: `grass | diamond | gold | stone | redstone | emerald | bookshelf | obsidian`

Ping bars colored dynamically in `PingBars` component:
- strength 4–5 → green `#55FF55`
- strength 3 → gold `#FFAA00`
- strength 1–2 → red `#FF5555`

### List page background
`.mc-list-bg` is `rgba(8, 8, 18, 0.80)` — semi-transparent so the blurred video shows through.

## What Still Uses Lorem Ipsum (to replace)
- `src/pages/AboutMe.tsx` — all 4 entry descriptions
- `src/pages/Experience.tsx` — all 4 entry descriptions
- `src/pages/Certifications.tsx` — all 4 entry descriptions
- `src/pages/BlogPosts.tsx` — all 4 entry descriptions

Titles, subtitles, tags, and ping labels are already realistic placeholders.

## Dev Server
```bash
npm run dev   # starts at http://localhost:5173
npm run build # production build to dist/
```

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project: Summerville Road

Private off-market listing page for 20475 Summerville Road in Cottagewood.

**Stack**: Next.js 16 (App Router, static output) · React 19 · Tailwind CSS v4 · TypeScript

### Components

| File | Purpose |
|---|---|
| `TopBar.tsx` | Fixed nav, frosted-glass on scroll. Accepts `topOffset` (px) to sit below the banner when active. |
| `Hero.tsx` | Full-viewport hero with house photo |
| `Gallery.tsx` | Fall exterior photo, full-width |
| `LocationHighlights.tsx` | Americana-framed neighborhood section; two-column layout with Cottagewood General Store photo |
| `Improvements.tsx` | Flat list of improvements by year (incl. electric service upgrade & EV charger, 2023) |
| `ContactSection.tsx` | Contact card with phone CTA |
| `SiteFooter.tsx` | Footer |
| `FloatingContact.tsx` | Sticky "Inquire" pill, scroll-activated |
| `OpenHouseModal.tsx` | Dismissible open house announcement modal |
| `OpenHouseBanner.tsx` | Fixed terracotta announcement strip pinned to top of viewport |

### Open house feature flag

Both `OpenHouseBanner` and `OpenHouseModal` are gated by a single env var:

```
NEXT_PUBLIC_SHOW_OPEN_HOUSE_MODAL=false   # hide both banner + modal
```

In `app/page.tsx`:
- `SHOW_OPEN_HOUSE` is `true` unless the env var is exactly `"false"`
- `BANNER_HEIGHT` is `38` (px) — passed as `topOffset` to `TopBar` so the nav sits below the banner
- Both components are conditionally rendered with `{SHOW_OPEN_HOUSE && <.../>}`

### Public assets

- `hero.jpg` — hero photo
- `house-fall.png` — fall exterior (Gallery)
- `house-winter.png` — winter night exterior (alongside Improvements)
- `cottagewood-store.png` — Cottagewood General Store (LocationHighlights)

### Design tokens

Tailwind v4 `@theme` tokens live in `app/globals.css`. Fraunces (headings) and DM Sans (body) are self-hosted via `next/font/google`.

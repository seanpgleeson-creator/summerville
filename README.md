# Summerville Road

A private off-market listing page for a home in Cottagewood.

Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and TypeScript.

## Stack

- **Framework**: Next.js 16 (App Router, fully static output)
- **Styling**: Tailwind CSS v4 with `@theme` design tokens
- **Fonts**: [Fraunces](https://fonts.google.com/specimen/Fraunces) (headings) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) (body), self-hosted via `next/font/google`
- **Language**: TypeScript

## Project structure

```
app/
  layout.tsx          Root layout — font loading, metadata
  page.tsx            Main page — composes all sections
  globals.css         Tailwind v4 @theme tokens + base styles

components/
  TopBar.tsx          Fixed nav, frosted-glass on scroll; accepts topOffset prop
  Hero.tsx            Full-viewport hero with house photo
  Gallery.tsx         Photo grid (fall exterior, full-width)
  LocationHighlights.tsx  Americana-framed neighborhood section with Cottagewood Store photo
  Improvements.tsx    Flat list of improvements with year, incl. electric upgrade & EV charger
  ContactSection.tsx  Contact card with phone CTA
  SiteFooter.tsx      Footer
  FloatingContact.tsx Sticky "Inquire" pill (scroll-activated)
  OpenHouseModal.tsx  Dismissible open house announcement modal
  OpenHouseBanner.tsx Fixed terracotta announcement strip at top of page
  hooks/
    useReveal.ts      IntersectionObserver scroll-reveal hook

public/
  hero.jpg            Hero photo of the home
  house-fall.png      Exterior fall photo (used in Gallery)
  house-winter.png    Winter night exterior (alongside Improvements)
  cottagewood-store.png  Cottagewood General Store exterior
  favicon.ico         Site favicon

docs/
  design_reference/   Original standalone HTML design reference
```

## Environment variables

| Variable | Default | Effect |
|---|---|---|
| `NEXT_PUBLIC_SHOW_OPEN_HOUSE_MODAL` | `"true"` (any value other than `"false"`) | Set to `"false"` to hide both the open house banner and modal (e.g. when testing) |

Create a `.env.local` for local overrides:

```
NEXT_PUBLIC_SHOW_OPEN_HOUSE_MODAL=false
```

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Deploy to [Vercel](https://vercel.com) — connect this repo and it deploys automatically on every push to `main`.

```bash
npm run build   # verify production build locally
```

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
  TopBar.tsx          Fixed nav, frosted-glass on scroll
  Hero.tsx            Full-viewport hero with house photo
  Gallery.tsx         Photo grid with lightbox
  Improvements.tsx    Improvement cards by year
  ContactSection.tsx  Contact card with phone CTA
  SiteFooter.tsx      Footer
  FloatingContact.tsx Sticky "Inquire" pill (scroll-activated)
  hooks/
    useReveal.ts      IntersectionObserver scroll-reveal hook

public/
  hero.jpg            Hero photo of the home
  favicon.ico         Site favicon

docs/
  design_reference/   Original standalone HTML design reference
```

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Deploy to [Vercel](https://vercel.com) — connect this repo and it deploys automatically on every push to `main`. No environment variables needed.

```bash
npm run build   # verify production build locally
```

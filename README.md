# 🚀 Portfolio — Next.js

A clean, modern portfolio inspired by Apple's design language. Built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## ✨ Features

- **Apple-inspired design** — glassmorphism, clean typography, generous whitespace
- **Fully responsive** — mobile-first, works on all screen sizes
- **Animated hero** — particle network canvas + staggered text reveals
- **Sections:** Hero, About, Experience, Projects, Skills, Contact
- **Project filter** — filter by category (Full-Stack, Frontend, Backend, etc.)
- **Skill bars** — animated on scroll with intersection observer
- **Single config file** — update `lib/config.ts` to personalize everything

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── api/contact/route.ts  # Contact form endpoint (Resend + Upstash)
│   ├── globals.css           # Design tokens & global styles
│   ├── layout.tsx            # Root layout, fonts, metadata, JSON-LD
│   ├── page.tsx               # Main page (assembles sections)
│   ├── opengraph-image.tsx   # Dynamic OG image
│   ├── icon.tsx               # Dynamic favicon
│   ├── sitemap.ts / robots.ts # SEO
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     # Sticky nav with active section highlight
│   │   └── Footer.tsx     # Footer with social links
│   ├── sections/
│   │   ├── HeroSection.tsx       # Landing hero with canvas particle network
│   │   ├── AboutSection.tsx      # About me + stats
│   │   ├── ExperienceSection.tsx # Work history timeline
│   │   ├── ProjectsSection.tsx   # Featured + filterable project cards
│   │   ├── SkillsSection.tsx     # Animated skill bars + tech cloud
│   │   └── ContactSection.tsx    # Working contact form
│   └── ui/
│       ├── SectionHeading.tsx    # Reusable section header
│       ├── Tag.tsx               # Pill/badge component
│       ├── Avatar.tsx            # Profile photo w/ graceful fallback
│       ├── TiltCard.tsx          # 3D tilt/glow hover wrapper
│       ├── ScrollProgress.tsx    # Top scroll-progress bar
│       └── ThemeToggle.tsx       # Dark/light toggle
└── lib/
    ├── config.ts          # ⭐ ALL YOUR CONTENT GOES HERE
    └── utils.ts           # cn() utility
```

## 🛠 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Personalize your content

Open `lib/config.ts` and update:

- `name`, `title`, `tagline`, `email`, `location`
- `social` links (GitHub, LinkedIn, Twitter, resume)
- `about.paragraphs` and `about.highlights`
- `skills` with your actual skills and levels
- `experience` with your work history
- `projects` with your real projects
- `education` and `certifications`

### 3. Run locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 4. Add your resume

Place your resume PDF at `public/resume.pdf`.

### 5. Set up the contact form

The Contact section submits to `/api/contact`, which sends an email via [Resend](https://resend.com) and rate-limits submissions with [Upstash Redis](https://upstash.com).

1. Copy `.env.example` to `.env.local`.
2. Create a free Resend account, generate an API key, and set `RESEND_API_KEY`.
3. Create a free Upstash Redis database, copy its REST URL and token, and set `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN`.
4. Restart `npm run dev`.

Without these env vars, the form will show a "not configured yet" error — the rest of the site works fine regardless.

### 6. Deploy

```bash
# Deploy to Vercel (recommended)
npx vercel

# Or build for production
npm run build
npm start
```

## 🎨 Customization

### Colors & Theme

The site is dark-mode-first — `:root` holds the dark palette, and `:root.light` overrides it for light mode (toggled by `ThemeToggle`). Edit `app/globals.css` to change the palette:

```css
:root {
  --accent: #22d3ee;    /* Primary cyan accent — change this */
  --accent-2: #8b5cf6;  /* Secondary violet accent, used in gradients */
  --background: #05070d;
  --foreground: #e7e9f2;
}

:root.light {
  --accent: #0284c7;
  --background: #f7f8fb;
  --foreground: #10131c;
}
```

### Fonts

Self-hosted via `next/font/google` in `app/layout.tsx`: **Space Grotesk** for headings (`--font-display`), **Plus Jakarta Sans** for body text (`--font-body`), and **JetBrains Mono** for the terminal-style labels/badges (`--font-mono`). Swap any of them by changing the font import and variable name.

### Dark Mode Toggle

Already wired up — `components/ui/ThemeToggle.tsx` toggles a `.light` class on `<html>` (dark is the default, no class needed), and `app/layout.tsx` runs a blocking script before paint to avoid a flash of the wrong theme.

## 📦 Tech Stack

- [Next.js 14](https://nextjs.org) — React framework with App Router
- [TypeScript](https://typescriptlang.org) — Type safety
- [Tailwind CSS](https://tailwindcss.com) — Utility-first styling
- [Framer Motion](https://framer.com/motion) — Animations (ready to use)
- [Lucide React](https://lucide.dev) — Icons

## 📄 License

MIT — use it however you like.

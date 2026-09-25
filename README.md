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
│   ├── globals.css        # Design tokens & global styles
│   ├── layout.tsx         # Root layout + metadata
│   └── page.tsx           # Main page (assembles sections)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     # Sticky nav with active section highlight
│   │   └── Footer.tsx     # Footer with social links
│   ├── sections/
│   │   ├── HeroSection.tsx       # Landing hero with canvas animation
│   │   ├── AboutSection.tsx      # About me + stats
│   │   ├── ExperienceSection.tsx # Work history timeline
│   │   ├── ProjectsSection.tsx   # Filterable project cards
│   │   ├── SkillsSection.tsx     # Animated skill bars + tech cloud
│   │   └── ContactSection.tsx    # Contact links + email CTA
│   └── ui/
│       ├── SectionHeading.tsx    # Reusable section header
│       └── Tag.tsx               # Pill/badge component
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

Edit `app/globals.css` to change the color palette:

```css
:root {
  --accent: #0071e3;   /* Primary blue — change this */
  --background: #ffffff;
  --foreground: #1d1d1f;
}

.dark {
  --accent: #2997ff;   /* Dark mode accent */
  --background: #000000;
}
```

### Fonts

The portfolio uses Apple's SF Pro Display via system font stack. To use a custom Google Font, update `app/layout.tsx` and add the import to `globals.css`.

### Adding a Dark Mode Toggle

The CSS variables are already set up for dark mode. Add a theme toggle component that toggles the `.dark` class on `<html>`.

## 📦 Tech Stack

- [Next.js 14](https://nextjs.org) — React framework with App Router
- [TypeScript](https://typescriptlang.org) — Type safety
- [Tailwind CSS](https://tailwindcss.com) — Utility-first styling
- [Framer Motion](https://framer.com/motion) — Animations (ready to use)
- [Lucide React](https://lucide.dev) — Icons

## 📄 License

MIT — use it however you like.

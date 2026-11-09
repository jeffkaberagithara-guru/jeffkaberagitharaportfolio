# jeffkaberagitharaportfolio

An editorial portfolio for **Jeff Kabera Githara**, a web developer and software engineer in Nairobi. Built with the **Next.js App Router**, **TypeScript**, **Tailwind CSS v4**, **Motion**, **Lucide** and **Zod**.

Live: [jeffkaberagitharaportfolio.vercel.app](https://jeffkaberagitharaportfolio.vercel.app)

## What is here

- **Home** — editorial hero, selected work, practice, principles, journey and contact.
- **Work** — searchable and filterable index of 52 project records across five disciplines.
- **Case studies** — static routes generated from typed content, with honest build states.
- **About / Journey / CV / Colophon** — practice, project record, printable profile and design notes.
- **Contact** — validated server endpoint using Resend when configured, with a clearly labelled mailto fallback when it is not.

## Stack

- Next.js 16 App Router · React 19 · strict TypeScript
- Tailwind CSS v4 with a custom token layer
- Motion for restrained reveals, with reduced-motion support
- Lucide icons · Zod validation · Resend REST API (optional)
- Fonts: Newsreader, Instrument Sans and Spline Sans Mono via `next/font`

## Getting started

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
npm run start
```

## Environment

Copy `.env.example` to `.env.local`.

```bash
NEXT_PUBLIC_SITE_URL=https://jeffkaberagitharaportfolio.vercel.app
RESEND_API_KEY=
CONTACT_TO_EMAIL=jeffkaberagithara@gmail.com
CONTACT_FROM_EMAIL=portfolio@your-verified-domain.com
```

Without the three contact variables, `POST /api/contact` returns `503 not_configured` and the form directs the visitor to email. It never reports a false success.

## Structure

```
src/
  app/           # routes, metadata, sitemap, robots, contact API
  components/    # header, footer, cards, covers, forms, motion primitives
  content/       # site identity, projects, journey, practice
public/          # portraits, CV, icons and social image
```

## Deployment

The current site is deployed on Vercel at [jeffkaberagitharaportfolio.vercel.app](https://jeffkaberagitharaportfolio.vercel.app). `render.yaml` remains available as an alternative Node web service (`npm ci && npm run build`, then `npm run start`). Set the contact environment variables in the hosting provider to enable email delivery.

## Contact

- Email: jeffkaberagithara@gmail.com
- GitHub: [jeffkaberagithara-guru](https://github.com/jeffkaberagithara-guru)
- LinkedIn: [kabera-githara-21067839b](https://linkedin.com/in/kabera-githara-21067839b)
- X: [@JeffKaberaDev](https://twitter.com/JeffKaberaDev)

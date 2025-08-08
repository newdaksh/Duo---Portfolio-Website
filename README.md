# Duo MERN Freelancers — Portfolio Website

A complete, responsive portfolio for a two-person MERN freelancing team. Built with React + Vite + Tailwind (client) and Express (server) with a contact email API.

Replace any text marked with ⟪REPLACE_ME⟫ and placeholder images/links with your real content.

## Features

- Hero landing with team logo, tagline, and CTA
- About + Meet the Team
- Services with icons
- Projects grid (hover effects, tags, links)
- Testimonials
- Contact form with validation and email sending via server API
- Smooth scrolling, mobile-first, light/dark mode
- SEO-friendly metadata

## Tech Stack

- Client: React 18, Vite, Tailwind CSS, React Icons
- Server: Node.js, Express, Nodemailer, CORS, dotenv, express-validator

## Monorepo Layout

- `client/` — React frontend
- `server/` — Express backend (email API)

## Quick Start

### Prerequisites

- Node.js 18+ and npm

### 1) Install dependencies

From the workspace root, run in two terminals or sequentially:

```powershell
cd "client"; npm install
cd ".."; cd "server"; npm install
```

### 2) Run in development

- Start the API (server):

```powershell
cd "server"; npm run dev
```

- Start the frontend (client):

```powershell
cd "client"; npm run dev
```

Client runs at http://localhost:5173 by default, server at http://localhost:5000.

### 3) Configure email sending

Copy `server/.env.example` to `server/.env` and fill values. For example with a Gmail App Password (recommended) or a provider like SendGrid/ZeptoMail:

```
NODE_ENV=development
PORT=5000
CORS_ORIGIN=http://localhost:5173
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=⟪REPLACE_ME_SMTP_USER⟫
SMTP_PASS=⟪REPLACE_ME_SMTP_PASS⟫
MAIL_TO=⟪REPLACE_ME_DESTINATION_EMAIL⟫
MAIL_FROM="⟪Team Duo⟫ <⟪REPLACE_ME_SMTP_USER⟫>"
```

### 4) Build for production

```powershell
cd "client"; npm run build
```

The production bundle is generated in `client/dist/`.

## Deploy Suggestions

- Client: Netlify, Vercel, GitHub Pages
- Server: Render, Railway, Fly.io; set environment variables from `.env` in the provider dashboard.

## Accessibility & SEO

- Semantic HTML, alt text on images
- Page metadata and Open Graph tags in `client/index.html`

## Customization Map

- Logos & images: `client/src/assets/`
- Colors & theme: `tailwind.config.js` and utility classes
- Content: `client/src/data/*.js` and section components under `client/src/components/`

## License

MIT. Replace with your own if needed.

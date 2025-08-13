# Comfort Limata — Portfolio (Next.js + Tailwind + Framer Motion)

A modern, responsive portfolio for Comfort Limata built with Next.js, Tailwind CSS, and Framer Motion. It showcases projects with animated cards and accessible modals, an About section, Skills, user-submitted Reviews (with counts and rating distribution), and a Contact form powered by EmailJS.


## ✨ Highlights

- Next.js app with fast routing and build tooling
- Tailwind CSS for utility-first, responsive styling
- Framer Motion animations for polished UI and micro-interactions
- Modular React components (Hero, About, Skills, Projects, Reviews, Contact, Footer)
- Accessible modals: focus trap, ESC to close, ARIA attributes
- Reviews: user-only submissions, count badge, rating distribution chart
- Contact form: EmailJS integration (no backend required)
- Dark/light theme via React Context


## 🧱 Tech Stack

- Framework: Next.js (React 18)
- Styling: Tailwind CSS 3
- Animation: Framer Motion
- Form Email Service: EmailJS (emailjs-com)
- Optional GSAP (installed, not required for baseline)


## ���� Project Structure (key files)

```
.
├─ pages/
│  └─ index.js                  # Page entry assembling components
├─ public/
│  └─ images/                   # Static assets (covers, profile, etc.)
├─ src/
│  ├─ components/
│  │  ├─ Header.js              # Top navigation (glassy style, theme toggle)
│  │  ├─ Hero.js                # Intro/landing section
│  │  ├─ About.js               # About section (framed text + skills + avatar)
│  │  ├─ Skills.js              # Skills section
│  │  ├─ AnimatedPortfolio.js   # Animated project cards + accessible modal
│  │  ├─ Portfolio.js           # Legacy portfolio (not rendered by default)
│  │  ├─ ReviewSection.js       # Reviews with submit form, count, distribution
│  │  ├─ Testimonials.js        # Optional testimonials
│  │  ├─ Contact.js             # EmailJS-powered form
│  │  └─ Footer.js              # Footer with social links (emojis)
│  ├─ context/
│  │  └─ ThemeContext.js        # Theme provider (dark/light)
│  └─ styles/                   # Tailwind and global styles
├─ tailwind.config.js
├─ postcss.config.js
├─ package.json
└─ README.md                    # This file
```


## 🚀 Getting Started

Prerequisites
- Node.js 18+ and npm

Install and run
```
npm install
npm run dev
```
Site runs at http://localhost:3000

Production build
```
npm run build
npm start
```


## 🔑 EmailJS API Key Journey (Contact Form)

The Contact form uses EmailJS so you can receive form submissions via email without a custom backend.

1) Create an EmailJS account
- Visit https://www.emailjs.com and sign up (free tier available)

2) Add an Email Service
- In Email Services, connect a provider (Gmail, Outlook, or custom SMTP)
- Copy the Service ID (e.g., service_xxxxx)

3) Create an Email Template
- In Email Templates, create a template with variables that match the Contact form:
  - from_name
  - from_email
  - message
- Copy the Template ID (e.g., template_xxxxx)

4) Get your Public Key
- In Account or Integration settings, copy your Public Key (sometimes called User ID)

5) Add environment variables (recommended)
- Create a .env.local file at the project root (this file is git-ignored by default in Next.js)

```
# .env.local
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=public_xxxxx
```

6) Update the code to read from env (optional but recommended)
- The current Contact.js contains hardcoded IDs. Replace them with env reads so you never commit secrets:

```js
// src/components/Contact.js (snippet)
emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  },
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
)
```

7) Restart the dev server
- After creating or changing .env.local, stop and restart `npm run dev` so Next.js picks up the new env vars.

8) Deploying with env
- If you deploy on Vercel/Netlify, add the three env variables in your project dashboard:
  - NEXT_PUBLIC_EMAILJS_SERVICE_ID
  - NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  - NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

Security note
- EmailJS “public” keys are intended for client-side, but don’t commit actual IDs if you prefer stricter hygiene. Use env variables.


## 🧩 Features in Detail

Animated Portfolio (src/components/AnimatedPortfolio.js)
- Grid of cards with cover image, title, tech chips, and actions
- Smooth in-view animations, hover lift, and focus styles
- Accessible modal:
  - Focus trap and ESC to close
  - Click outside to close
  - ARIA roles and labels
  - Responsive: header (cover) + scrollable content
- Example data embedded; replace with your own covers and links

Projects Media
- Place images under public/images (e.g., public/images/project/...).
- Note: Some demo assets use double extensions (e.g., project1.png.png). You can rename them to standard extensions and update references in code.

Reviews (src/components/ReviewSection.js)
- Only user-submitted reviews are shown (no AI-generated seed data)
- Shows total review count (hidden when 0)
- Rating distribution bars (1★–5★)
- Simple carousel with next/prev, auto-advance (paused when none)

Header and Footer
- Header has a glassy style, gradient brand text, and improved hover states
- Footer includes emoji-enhanced social links (GitHub 🐙, LinkedIn 💼, Twitter 🐦)

About Section
- Compact layout with animated avatar and framed text content
- Key Skills chips below the main text


## 🛠️ Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Run production build


## 🧪 Testing (suggested)

Add Jest and React Testing Library for component tests:
- Snapshot tests for visual regressions
- Unit tests for form behavior and modal accessibility
- Example test targets: About heading animation, Contact form submission handling, ReviewSection submission and counters


## ♿ Accessibility

- Modal uses focus trap and ESC to close
- Interactive elements have focus styles and ARIA attributes
- Review count updates live via `aria-live="polite"`


## 🚀 Deployment

Vercel (recommended)
- Push repo to GitHub
- Import into Vercel and configure env variables (NEXT_PUBLIC_EMAILJS_*)
- Deploy

Netlify
- Build command: `npm run build`
- Publish directory: `.next` (use the Next.js plugin) or configure via Netlify Next.js build plugin
- Add env variables in site settings


## ⚠️ Notes & TODOs

- Replace placeholder project titles/images and fix any double image extensions
- Consider moving all service/template/public IDs to env variables (as recommended above)
- Add tests (Jest + RTL) for critical components


## 📄 License

This project is for portfolio use. Adapt or extend as needed.

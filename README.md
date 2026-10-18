# Freelance Portfolio Website

A production-ready React website for a freelance developer: services, portfolio demos, pricing, and a Telegram bot showcase. Personal details, rates, and bot information live in configuration files so you can update the site without rewriting components.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React

## Install and run

```bash
npm install
npm run dev
```

The development server defaults to `http://localhost:5173`.

```bash
npm run build
npm run preview
```

`npm run build` type-checks the project and writes a production bundle to `dist/`.

## Where to edit your information

### Personal details, services, pricing, and the Telegram bot

Edit [`src/config/siteConfig.ts`](src/config/siteConfig.ts).

| What you want to change | Config path |
| --- | --- |
| Name, brand, initials, title, bio | `personal` |
| Email, phone, location, availability | `personal` |
| Telegram, GitHub, LinkedIn, other socials | `personal` |
| Resume / CV URL | `personal.resumeUrl` |
| Page title and meta description | `seo` |
| Production domain for canonical URLs | `seo.siteUrl` |
| Hero CTAs and stack chips | `hero` |
| Service cards, tags, and rate labels | `services` |
| Skill groups | `skillGroups` |
| Freelance packages | `pricing.plans` |
| Bot name, URL, features, and user count | `telegramBot` |
| Bot premium plans (kept empty on purpose) | `telegramBot.plans` |
| Contact form budget options | `contact.budgetRanges` |
| Hide the “edit the config” banner | `ui.showConfigHints` |

Placeholder values look like `[YOUR_FULL_NAME]`, `your.email@example.com`, or `@your_telegram`. Replace them before you publish. Do not leave invented prices, testimonials, or client counts in the file.

If a service or plan `price` is `null`, the UI shows **Contact for pricing** instead of a number.

### Portfolio projects

Edit [`src/config/projects.ts`](src/config/projects.ts).

Each project can include:

- `name`, `category`, `description`, `longDescription`
- `stack`, `features`, `status`, `featured`
- `demoLabel` (`Demo Project` or `Concept Project`)
- `demoPath` (optional legacy field; not used for navigation)
- `liveUrl` and `sourceUrl` (optional; shown in the details panel when set)
- `cover` (`atelier`, `lumen`, or `pulse`)

Add or remove objects in the `projects` array. The portfolio filters and cards update automatically.

The included projects are fictional demonstrations, not client work.

## Telegram bot section

The only live statistic currently configured is **5,000+ users**, stored as `telegramBot.userCountLabel`. Change that one field if the number changes.

Premium plan names and prices are not published on this website. `telegramBot.plans` is empty so those details stay inside the bot. The Open Telegram Bot button goes to `telegramBot.url`. This site does not process payments.

## Contact form

The form validates name, email, service, and description. A hidden honeypot field is included as a basic spam check.

There is no email backend. On a valid submit the form opens a `mailto:` draft using `personal.email`. Users can also copy the composed message.

To connect a backend later:

1. Add an API endpoint or form service.
2. Keep secrets off the frontend.
3. Change `contact.formMode` and the submit handler in [`src/components/ContactForm.tsx`](src/components/ContactForm.tsx).

## Portfolio projects

Portfolio items open a details panel on the home page. They are labeled demo or concept work — not commissioned client case studies.

## Theme

The site supports light and dark themes. The toggle stores the choice in `localStorage` under `theme`. A small inline script in `index.html` applies the saved theme before React loads to reduce flash.

## Deploy

1. Fill in `src/config/siteConfig.ts` and set `seo.siteUrl` to your production domain.
2. Set `ui.showConfigHints` to `false`.
3. Run `npm run build`.
4. Deploy the `dist/` folder to any static host (Cloudflare Pages, Netlify, Vercel, GitHub Pages, or a VPS with nginx).
5. If you use GitHub Pages or a subpath host, set Vite `base` in `vite.config.ts`.
6. Configure the host to serve `index.html` for unknown routes so React Router can handle `/demos/*` and the 404 page.

## Project structure

```text
src/
├── components/     Reusable UI, navigation, form, cards
├── sections/       Landing-page sections
├── pages/          Home, 404, and demo routes
├── config/         Editable site and project data
├── hooks/
└── utils/
```

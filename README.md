# newclearus

Marketing site for **newclearus** — "Technology Simplified." Built with
Next.js (App Router), TypeScript and Tailwind CSS v4.

## Pages

- `/` — Home
- `/services` — Services
- `/contact` — Contact

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Structure

- `src/app` — routes (`page.tsx` per route), root layout, global styles
- `src/components` — `Navbar`, `Footer`, `Logo`, `Backdrop` (animated grid/glow), `icons.tsx`

## Brand

- Colors: red `#ed1b2f`, white `#f4f7fb`, baby blue `#3ec6f0`, on near-black `#050608`
- Fonts: Orbitron (display/headings), Manrope (body)

## To update before launch

- Replace placeholder phone number and any placeholder email addresses in
  `src/components/Footer.tsx` and `src/app/contact/page.tsx` with real
  contact details.

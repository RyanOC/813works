# 813 Software

A modern, static marketing site for 813 Software built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Static Export (Optional)

To export as a fully static site, uncomment the `output: 'export'` line in `next.config.js`, then run:

```bash
npm run build
```

The static files will be in the `out/` directory.

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - React components organized by feature
- `components/ui/` - Reusable UI components (Button, Card, Section)
- `lib/` - Utilities and context providers (theme provider)

## Features

- Dark/light mode toggle with localStorage persistence
- Fully responsive design
- Smooth scroll navigation
- Contact form with validation (ready for backend integration)
- Placeholder sections for future interactive demos

## Customization

### Adding Backend to Contact Form

The contact form in `components/Contact.tsx` currently shows a demo success message. To integrate with a real backend:

1. Replace the `console.log` and demo logic in `handleSubmit` with an API call
2. Example: `await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })`
3. Handle loading states and real error responses

### Adding Interactive Demos

The Demos section (`components/Demos.tsx`) has placeholder cards. To add real demos:

1. Create new components in `components/demos/`
2. Import and render them in place of the placeholder cards
3. Or link to separate demo pages/routes

### Styling

All styling uses Tailwind CSS. Customize colors, fonts, and spacing in `tailwind.config.ts`.

## License

Private project for 813 Software.

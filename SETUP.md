# Quick Setup Guide

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Visit http://localhost:3000

## What You Get

A fully functional marketing site with:

- **Dark mode by default** with a theme toggle in the header
- **7 main sections**: Hero, Services, Process, Use Cases, About, Demos (coming soon), Contact
- **Responsive design** that works on mobile, tablet, and desktop
- **Smooth scroll navigation** via anchor links
- **Contact form** with validation (ready for backend integration)

## Next Steps

### 1. Customize Content

All copy is in the component files. Edit these to match your voice:
- `components/Hero.tsx` - Main tagline and intro
- `components/Services.tsx` - Service descriptions
- `components/About.tsx` - Your personal story

### 2. Add Real Contact Form Backend

In `components/Contact.tsx`, replace the demo logic with:

```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

Then create `app/api/contact/route.ts` for the API endpoint.

### 3. Add Interactive Demos

Replace placeholder cards in `components/Demos.tsx` with real components or links to live demos.

### 4. Deploy

For static hosting (Netlify, Vercel, etc.):
1. Uncomment `output: 'export'` in `next.config.js`
2. Run `npm run build`
3. Deploy the `out/` folder

For Vercel with SSR support:
1. Just push to GitHub and connect to Vercel
2. It will auto-detect Next.js and deploy

## File Structure

```
app/
  layout.tsx       # Root layout with theme provider
  page.tsx         # Home page (imports all sections)
  globals.css      # Tailwind + custom styles

components/
  Header.tsx       # Nav + theme toggle
  Footer.tsx       # Footer with brand
  Hero.tsx         # Hero section
  Services.tsx     # What I Do
  Process.tsx      # How I Work
  UseCases.tsx     # Example Use Cases
  About.tsx        # About section
  Demos.tsx        # Coming Soon demos
  Contact.tsx      # Contact form
  ui/
    Button.tsx     # Reusable button
    Card.tsx       # Reusable card
    Section.tsx    # Section wrapper

lib/
  theme-provider.tsx  # Dark/light mode context
```

## Assumptions Made

- **Dark mode first**: The site defaults to dark mode since it's a modern dev brand
- **Single page**: All sections on one page with anchor links (easier to maintain)
- **Generic use cases**: No industry-specific examples, keeping it flexible
- **Business-owner friendly**: Copy avoids jargon and explains things clearly
- **Minimal animations**: Subtle hover effects, no heavy parallax or motion
- **Form is demo-only**: Shows validation and success state, but doesn't send emails yet

## Questions?

Check the comments in the code—I've marked places where you can customize or extend functionality.

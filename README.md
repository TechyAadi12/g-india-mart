# G India Mart — Website

A lead-generation business website for G India Mart, a sand sourcing &
supply business in Ballia, Uttar Pradesh. Built with React, TypeScript,
Vite, and Tailwind CSS.

## Design

Grayscale-first UI (ink/charcoal/steel/fog/paper/white) with a single
deliberate accent color — kiln amber (#c9762c) — used only on CTAs,
links, active highlights, and key numbers/stats.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
```

## Update business details

All business information lives in one file:

```
src/data/business.ts
```

Edit values there — the rest of the site reads from this single source
of truth.

### WhatsApp number

Set as WHATSAPP_NUMBER in src/data/business.ts.

### Google Maps link

GOOGLE_MAPS_URL in src/data/business.ts is a placeholder
(GOOGLE_MAPS_URL_HERE). Replace it with the real Google Maps share
link once available.

## Connecting the enquiry forms to a backend

Form submission is abstracted in src/lib/submitForm.ts. By default, no
backend is configured — submissions log to the console and the user
still sees the success message.

To connect a real backend:

1. Create a `.env` file (see `.env.example`).
2. Set VITE_FORM_ENDPOINT to your endpoint URL (Formspree, Web3Forms,
   a Google Sheets webhook, Supabase Edge Function, or custom API).

## What this site intentionally does NOT include

- No user/customer/supplier accounts or login
- No dashboards
- No shopping cart or online checkout
- No payment gateway

## Tech stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- lucide-react icons

# PRD — Igreja Casa da Oração (Editorial Torn-Paper Landing Page)

## Original Problem Statement
Modern, fully responsive church landing page with an editorial "newspaper / handmade torn paper" concept. Main content must look like one long continuous sheet of paper laid over a dark textured external background that stays visible on all sides. All four edges of the sheet must be organically hand-torn (no straight edges, no rounded corners). Premium editorial typography, subtle grain, soft shadow, smooth scroll motion. Award-worthy (Awwwards-level) craft.

## User Choices
- Church: **Igreja Casa da Oração** (white line-art logo — house + tree/roots).
- Location: **Rua do Cortubo 36, Amora** (Seixal, Portugal) — map coords 38.6297667, -9.12516.
- Language: Portuguese (pt-PT).
- Award-worthy: kinetic hero on-load reveal, framer-motion reveals, Lenis smooth scroll, editorial marquee, scrapbook gallery, parallax hero.

## Architecture
- Frontend-only (React 19 CRA + Tailwind). No backend used.
- Palette via CSS vars: dark #171411, paper #F0E9DB, ink #25211D, ink2 #655D53, accent #A9653A, cream #FFFDF7.
- Fonts: Cormorant Garamond (serif headings) + Manrope (sans body).
- Torn edges: SVG feTurbulence + feDisplacementMap filters (#torn-edge desktop, #torn-edge-sm mobile) applied ONLY to a solid `.paper-bg` layer so text stays crisp; drop-shadow in same filter chain. Grain overlay + fixed dark textured backdrop with radial highlights + vignette.
- Responsive gutters via `--gutter` (12/32/50px) on `.sheet-w`, capped max-width 1280px.
- Motion: Lenis (window.__lenis) smooth scroll; framer-motion Reveal/RevealImage; hero line-by-line masked reveal; parallax in Hero & Gallery. Respects prefers-reduced-motion.

## Components
Header, Hero, Manifesto (Sobre), Services (Cultos), Events (marquee+list), Ministries, Sermon, Gallery, Location (address+map+static form w/ sonner toast), Footer, TornFilters, TornDivider, Reveal.

## What's Been Implemented (2026-08-03)
- Full editorial landing page, all 9 required sections + footer.
- Torn paper on all 4 sides with dark bg visible (desktop/tablet/mobile).
- Sticky translucent header + working mobile menu, smooth anchor nav.
- Live Google Maps embed pinned at Amora; static contact form with validation + toasts.
- Testing agent: frontend 100% pass, zero console errors, no overflow at 1920/768/390.

## Backlog / Next
- P1: Wire contact form to real email (Resend) + backend persistence.
- P2: CMS-driven events/service times; sermon audio/video player; multi-language.
- P2: Extract useSmoothScroll hook; add email format validation.

## Iteration 2 — Premium Redesign (2026-08-03)
- Refined palette (dark #151311, paper #F3ECDD, ink #22201C, ink2 #5A534B, accent #A86A3D, cream #FFFDF8) + Font Awesome brand icons.
- Hero now features a **tilted editorial video frame** + prominent "Ao vivo agora" live button (links to Instagram).
- New sections: PhotoStrip (editorial intro collage), Events redesigned as photo cards, masonry Gallery, **Videos mural** (main player + clickable thumbnails), Ministries with photos, **Prayer** (WhatsApp pedido), **Contribuição** (palette-matched QR + MB WAY + IBAN with copy buttons).
- **Floating WhatsApp widget** with mini-bot panel (5 options) deep-linking to wa.me/351967543844.
- Real data: WhatsApp +351 967 543 844, Instagram @casadeoracao.igreja, address Rua do Cortubo 36 Amora. QR encodes the WhatsApp/MB WAY number.
- MEDIA: photos (Unsplash/Pexels) + videos (media.w3.org / samplelib / mdn) are TEMPORARY placeholders — swap for real church media. IBAN is a random placeholder.
- Testing agent iteration 2: frontend 100% pass, 0 issues, no console errors, no overflow at 1920/768/390.

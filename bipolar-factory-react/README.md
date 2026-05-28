# Bipolar Factory — React Website

A modern, animated React + Vite website for Bipolar Factory.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

## 📦 Build for Production

```bash
npm run build
npm run preview
```

## 🗂 Project Structure

```
src/
├── components/
│   ├── Cursor.jsx          # Custom animated cursor
│   ├── Navbar.jsx          # Sticky nav with scroll effect
│   ├── Hero.jsx            # Full-screen hero with grid + glow
│   ├── Ticker.jsx          # Infinite scrolling marquee
│   ├── About.jsx           # About section with counter animation
│   ├── Products.jsx        # 3-column product cards with 3D tilt
│   ├── Services.jsx        # 2x2 services grid
│   ├── CaseStudies.jsx     # 2x2 case study cards
│   ├── Testimonials.jsx    # Auto-scroll testimonials
│   ├── Clients.jsx         # Client logos row
│   ├── CTA.jsx             # Call-to-action section
│   ├── Footer.jsx          # Footer + bottom bar
│   └── useReveal.js        # Scroll reveal hook
├── styles/
│   └── globals.css         # Global variables, keyframes, base styles
├── App.jsx                 # Root component
└── main.jsx                # Entry point
```

## ✨ Features

- Custom cursor with hover reaction
- Animated hero with moving grid background
- Scroll reveal animations on every section
- Counter animation for stats
- 3D tilt effect on product cards
- Auto-scrolling testimonials (pauses on hover)
- Infinite ticker marquee
- Floating geometric shapes in About
- CSS Module scoped styles per component
- Fully responsive (mobile breakpoints at 900px)

## 🛠 Tech Stack

- **React 18** + **Vite 5**
- **CSS Modules** for scoped component styles
- **Google Fonts**: Archivo Black, Syne, DM Mono
- Zero external UI library dependencies

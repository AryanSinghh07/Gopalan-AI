# Gopalan AI

AI-powered cattle and buffalo evaluation platform supporting the Rashtriya Gokul Mission. Gopalan AI uses image-based analysis with ArUco marker calibration to deliver standardized, objective animal type classification, body condition scoring, and disease guidance for Indian farmers.

## Features

- **Animal Type Classification** — breed identification for indigenous cattle and buffalo breeds (Gir, Sahiwal, Ongole, Hallikar, Murrah, Nili-Ravi, and more)
- **Body Condition Scoring** — image-based scoring calibrated with ArUco markers for accurate physical measurements
- **Breed Guide** — detailed profiles of Indian cattle and buffalo breeds with milk yield, weight, and climate data
- **Medical Support** — symptom, cause, treatment, and prevention reference for common cattle and buffalo conditions
- **Photography Guide** — step-by-step instructions for capturing analysis-ready animal photos with ArUco markers

## Tech Stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/) components
- [React Router](https://reactrouter.com/) with route-level code splitting

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Project Structure

```
src/
├── assets/          # Images and videos (breed photos, hero videos, logo)
├── components/      # Page sections (Navbar, Hero, Footer, ...)
│   └── ui/          # Reusable UI primitives (button, card, tabs, ...)
├── hooks/           # Shared React hooks
├── lib/             # Utilities
└── pages/           # Route pages (Home, Guide, Animal Guide, Medical Support, ...)
```

## Deployment

The site is configured for Netlify (`netlify.toml` includes the SPA redirect rule). Any static host that serves `dist/` with an SPA fallback will work.

## AI Backend

The `/analyze` page embeds a hosted body-condition-scoring model (a Hugging Face Gradio Space). To build your own Python + ArUco backend — measurement, scoring, breed classification, and disease prediction — see **[docs/BACKEND_GUIDE.md](docs/BACKEND_GUIDE.md)**, which covers the architecture, the OpenCV/ArUco pipeline, the models, recommended datasets, deployment, and how to connect it to this site.

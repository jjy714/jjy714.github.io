# Portfolio Project — Junyoung Jung (Jason)

## Overview
Personal portfolio site using the [devportfolio](https://github.com/RyanFitzgerald/devportfolio) template (Astro + Tailwind CSS), deployed to GitHub Pages at **https://jjy714.github.io**.

- Repo: `https://github.com/jjy714/jjy714.github.io`
- Main branch: `main`
- Local path: `~/Projects/Portfolio/devportfolio`

## Tech Stack
- **Astro**: Static site generator
- **Tailwind CSS v4**: Utility-first CSS framework using the new `@tailwindcss/vite` plugin
- **TypeScript**: For type-safe configuration
- **Tabler Icons**: Icon library
- Deployed via GitHub Actions (`.github/workflows/deploy.yml`)
- GitHub Pages Source: **GitHub Actions** (not branch deploy)

## Development Commands

```bash
npm run dev       # Start development server (localhost:4321)
npm run build     # Build for production → ./dist
npm run preview   # Preview production build
```

## Architecture

Component-based architecture with all customization centralized in `src/config.ts`:

- **Components** (`src/components/`): Individual Astro components for each section (Hero, About, Projects, Experience, Education, Header, Footer)
- **Main Layout** (`src/pages/index.astro`): Single-page layout that imports all components
- **Configuration** (`src/config.ts`): Single source of truth for all content and customization

### Key Architectural Decisions
1. **Single Configuration File**: All content is managed through `src/config.ts`
2. **Conditional Rendering**: Sections automatically hide if their data is removed from the config
3. **Component Independence**: Each section is a self-contained component that reads from the config
4. **Accent Color System**: Single `accentColor` in config propagates throughout the site via CSS custom properties

### Important Implementation Details
- Tailwind CSS v4 with the Vite plugin configuration
- No linting or testing framework currently configured
- All components are in `.astro` format (not React/Vue/etc)
- IBM Plex Mono font loaded from Google Fonts
- Social links in config are all optional and will conditionally render

### Working with Components
1. Components read directly from the imported `siteConfig` object
2. Use Tailwind utility classes for styling
3. Maintain the existing monospace font aesthetic
4. Use Tabler Icons for consistency with existing icons

## Primary Config File
All site content is controlled by **`src/config.ts`**. Edit this file to update anything on the site.

```
siteConfig fields:
- Basic info:  name, title, description, accentColor
- Social:      email, linkedin, twitter, github (all optional)
- aboutMe:     string
- skills:      string[]
- projects:    { name, description, link, skills[] }[]
- experience:  { company, title, dateRange, bullets[] }[]
- education:   { school, degree, dateRange, achievements[] }[]
```

### Current Owner Info
- Name: Junyoung Jung (Jason)
- Title: AI Engineer
- Email: jjy714@gmail.com
- GitHub: https://github.com/jjy714

### Skills
Python, PyTorch, Hugging Face Transformers, LangChain, LangGraph, FastAPI, Docker, Qdrant, MongoDB, scikit-learn, React / React Native, Git

### Experience
1. **Claion** — Machine Learning Engineer (Jan 2025 – Jan 2026)
   - SLM benchmarking standard + automated eval pipeline
   - Async RAG evaluation microservice (FastAPI, Docker, Qdrant, MongoDB)
   - SLM fine-tuning for tool-calling (LoRA/PEFT, Unsloth, Gemma/Exaone/HCX DASH)
   - PL in teams of 1–3

2. **Cortech** — Global Project Lead (Jan 2019 – Jul 2019)

### Projects (in order)
1. **Asynchronous RAG Evaluation System** (Claion, 2025)
2. **SLM Fine-Tuning for Tool-Calling** (Claion, 2025)
3. **LLM/SLM Evaluation Benchmark System** (Claion, 2025)
4. **Pet Mischief Detector** (PolyU COMP4423, 2026) — YOLOv11s + Depth Anything V2, 27,512 COCO images, 56.74% accuracy
5. **Movie Sentiment Analysis** (PolyU DSAI4205, 2026) — BERT ensemble, Macro F1 0.9208 (4.7× improvement)

### Education
1. PolyU — B.Eng. Computer Science (Honors), Expected Aug 2026
2. Hanyang University — Visiting Student, Sep 2023 – Jul 2024

## Pending Tasks
- [ ] Update `link` fields in `projects` array with actual GitHub repo URLs (currently all point to https://github.com/jjy714)
- [ ] Add LinkedIn URL to `social` if desired
- [ ] Verify site renders correctly after deploy

## Deploy
Push to `main` → GitHub Actions automatically builds and deploys.
Check status at: https://github.com/jjy714/jjy714.github.io/actions
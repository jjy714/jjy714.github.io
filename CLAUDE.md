# Portfolio Site — Junyoung Jung (정준영)

Personal portfolio for job applications (target: general AI/ML engineer), built on the [devportfolio](https://github.com/RyanFitzgerald/devportfolio) template (Astro + Tailwind CSS v4) and deployed to GitHub Pages at **https://jjy714.github.io**.

- Repo: `https://github.com/jjy714/jjy714.github.io` (branch `main`)
- Deploy: push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) builds and publishes.
- **Keep the repo public.** GitHub Pages on the free plan needs a public repo; making it private takes the site down. Pages Source must stay **GitHub Actions** (not branch deploy).

## Commands

```bash
npm run dev       # localhost:4321
npm run build     # production build → ./dist
npm run preview
```

## Architecture

- **All content lives in `src/config.ts`** (English + Korean). Sections hide automatically when their data is removed.
- `src/components/` — Hero, Highlights, About, Experience, Projects, Education, Header, Footer, plus `Lines.astro` (renders a `"\n"`-separated string as a lead line + bullets).
- `src/pages/index.astro` — single page; reads `?lang=ko|en` and sets `html[data-lang]`.
- `src/i18n/ui.ts` — UI strings (project group labels, hero greeting/intro/outro).
- `src/styles/global.css` — reveal animation and the `@media print` block (A4, header/footer hidden, `#projects` starts a new page, cards avoid page breaks).
- Bilingual text: every string is rendered twice as `<span data-en>` / `<span data-ko>`; CSS shows the one matching `html[data-lang]`.
- Projects carry `category` (`"work"` | `"academic"`), `tag`, `metric`, and a `description` split on `\n` into a lead line plus bullets. **Project cards have no repo links** (the Claion RAG-evaluation repo is private; the others were deliberately unlinked).
- Highlights: long values use a smaller font and `nowrap` (`Highlights.astro`).

## Exporting a PDF (companies that only accept uploads)

Open `https://jjy714.github.io/?lang=ko` (or `?lang=en`) → Ctrl+P → Save as PDF, A4, **headers/footers off, background graphics on**. Headless alternative: `msedge.exe --headless=new --print-to-pdf=<out.pdf> "<url>"`.

## Content rules (verified facts only)

Every claim on the site must be traceable to a source and honestly attributed. Frame work as **what I chose, combined and operated** — problem → why this tool → design → failure mitigation → metric. Never write "used an API" as the achievement.

Career facts (the Wanted resume PDF is the source of truth):
- **Headline**: MultiAgent-based AI/ML engineer.
- **Withmind** — contract, manager, ML engineer, 2026.06 – present (kiosk "홀로오더"; AI Lab).
- **Claion** (클라이온) — contract, AI engineer, 2025.01 – 2026.01. SLM work 2025.01–08; "R.E.X." RAG evaluation 2025.09–2026.01.
  - Eval pipeline scored qualitative, quantitative, LLM-as-a-Judge and performance axes.
  - Fine-tuning data was open-source Hugging Face data that I only **preprocessed**; I ran **experiments** modifying chat templates of models without tool-calling support — never say "built/designed".
  - The eval pipeline and the fine-tuning are **separate** projects; I did not benchmark the fine-tuned models.
  - R.E.X.: only the **planning and initial architecture** is mine; Claion productized it after I left.
- **PolyU** — Computer Science, **graduated Aug 2026**. Not honours-classified. **Never show GPA.**
- Languages: English fluent, Japanese conversational. No Cortech entry (removed on purpose).

Project facts (do not drift from these):
- **DMA-RAG** (complexity-based RAG routing; baseline = MA-RAG; gpt-oss-20b; 20 questions × 4 datasets): TriviaQA EM 0.35 → 0.70, HotpotQA 0.05 → 0.20, NQ 0.15 → 0.00; latency lower on 3 of 4. The MA-RAG baseline failed on 38 of 80 questions (output-length limit), so on questions both answered only TriviaQA improves (0.50 → 0.71) while NQ and FEVER do not. The router labelled every question easy/medium, so the Discussion Agent Layer never ran. **Never claim token/cost savings or that the DAL was evaluated.**
- **Pet Mischief Detector** (PolyU COMP4423, team of 3): pretrained YOLOv11s + Depth Anything V2 — fine-tuning failed, nothing was trained on the 27,512-image pool. My part: scoring logic, v1 → v4 3-class accuracy 0.25 → 0.54 on 141 clips. Still images at 8–12 fps — never say "real-time".
- **Movie Sentiment** (PolyU DSAI4205, team of 6): my part was comparing augmentation variants, the F1 visualisation and choosing the hybrid dataset. The BERT 3-fold ensemble was a teammate's. 0.8086 → 0.9208 (2-class) is the **team** result; the old "4.7×" is wrong (3.8×, and it mixed 5-class with 2-class).
- **Plant classification** (PolyU COMP4423, about 536 images, 8 classes, traditional ML only): stacking scored CV 0.76 but test 0.17 (leak) → redesigned with SelectKBest(100) → PCA(30), CV about 0.70. Strong sunlight, angle and clutter still fail. **Never claim robustness to environmental change.** (The 0.99 in `train_summary.json` is a random-fold artifact.)

## Open items

- Per-project detail pages with charts (plant first, then DMA-RAG); project cards currently point to `#projects`.
- Confirm plant-project team size, the "growth direction" essay wording, whether the Movie external augmentation overlaps the test set, and evidence for the self-join claim.
- The registered Wanted resume still carries older wording; replace it with the regenerated text.

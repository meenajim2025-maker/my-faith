# Handover — My Faith (my-faith)

**Downloadable summary for sharing:** [`HANDOVER-SUMMARY.md`](HANDOVER-SUMMARY.md) (full text) · [`HANDOVER-SUMMARY.html`](HANDOVER-SUMMARY.html) (open in browser → Ctrl+P → Save as PDF)

## Rolling summary (update this when you ship a chunk)

**Last updated:** 2026-05-17 (experience design checkpoint)

- **What it is:** Quiet reflection & wellbeing PWA for everyone (not NHS). Default **neutral** experience; optional **spiritual** / **quiet**. Story-led paths, prayer/reflection, journal; optional Docker API; Vercel frontend.
- **Product direction:** Move from “calm brochure” to **living guide** — stories, **tension** (e.g. truth vs comfort), choices, useful endings. **Story Paths** is the anchor; other areas connect to it.
- **Product state (shipped in code):**
  - **Home** — Opening: “Life gets noisy…” + seven feeling buttons (angry, lost, guilty, alone, overthinking, peace, begin) → Story Paths / Start Here / First Path. Tension labels on key blocks.
  - **Story Paths** (`src/features/storyPaths/`) — Tab + home intro. **One live story:** “The Message You Should Not Send” (`angry-message`). Six placeholders (`available: false`). Deep link via `goToStoryPaths({ storyId, tag })`.
  - **Start Here** (`src/features/startHere/`) — Longer onboarding-style flow on home (embedded) + tab. Carrying, body notice, support, readiness; voice API stub (`VITE_START_HERE_VOICE_API_URL`).
  - **Life Mirror 2.0** (`src/features/lifeMirror/`) — Story step before questions; guided flow; theme echo in summary; tensions on steps.
  - **The First Path** (`src/features/firstPath/`) — 10 moments; each lesson opens with a **scene** (`firstPathScenes.js`), not abstract one-liners.
  - **Reflection builder** (`src/components/ReflectionBuilder.jsx`, `src/services/reflectionBuilder.js`) — Outcome-first: apologise / forgive / courage / calm / grateful / unknown → then words. Replaces old mood/audience form on Prayer tab.
  - **Daily Gentle Step** (`src/data/gentleDailySteps.js`, `GentleDailyBanner.jsx`) — Date-rotating “today’s test” + tension + evening question.
  - **Tensions registry** (`src/language/tensions.js`) — Used across home, mirror, first path, daily, builder.
  - **Experience modes** (`CalmPreferencesContext`, `src/language/modeText.js`, `wisdomThemes.js`) — neutral | spiritual | quiet copy variants.
  - **Universal hope**, **Our story**, Path of Unparalleled Love, scenarios, meditation — prior phases; still present.
- **Content constitution:** **`CONTENT-CANON.md`** — welcoming names, no tradition/philosopher names in UI, inclusive tone.
- **Blueprints (not all implemented):** `LIVING-LIBRARY.md`, `GENTLE-LAUNCH.md` — vision for growth, launch, stewardship.
- **Data:** Topics, scenarios, meditations, chants, daily reflections from API when up; else bundled `src/data`. Story Paths / Start Here / First Path / Mirror flows are **local JS** (not DB yet).
- **Git:** Local `master`; many files modified/untracked — see **§ Save checkpoint** below. Push to GitHub only when remote is configured.
- **Live (HTTPS):** **https://my-faith.vercel.app** — redeploy after changes: `.\scripts\deploy-vercel.ps1` (never commit `.env.vercel`).
- **Open / next:**
  1. Write + enable remaining **Story Paths** (guilt, loneliness, overthinking, etc.).
  2. Trim duplicate home hero if home should be story-first only.
  3. Grow Path moments toward 12 (`LIVING-LIBRARY.md`).
  4. API seed + `VITE_API_BASE_URL` + `CORS_ORIGIN` for production sync.
  5. Safeguarding review before healthcare use.
  6. Optional: wire Start Here voice to real API.

*Agents: after a meaningful change, edit the bullets above (especially **Last updated**, **Product state**, **Open / next**).*

## Repo

- **Path:** `My Faith/my-faith`
- **Git:** Local repo on `master`; `.env` gitignored.
- **Author (local config):** `meenajim2025@gmail.com`

## Stack

- **Frontend:** Vite + React (`npm run dev`, `npm run build`). PWA via `vite-plugin-pwa`.
- **API client:** `src/services/apiClient.js` — `VITE_API_BASE_URL` (default `http://localhost:4000`).
- **Content loading:** `loadAppContent.js` + `App.jsx` — API with bundled fallback; prayers/journal sync when API up.
- **Feature folders:** `src/features/{storyPaths,startHere,lifeMirror,firstPath}/` + `src/components/` + `src/language/` + `src/data/`.
- **Backend:** Express + PostgreSQL — `docker-compose.yml` (ports **5433** / **4000**).

## Commands

```powershell
cd "C:\Users\reias\OneDrive\Desktop\My Faith\my-faith"
npm install
npm run dev
```

```powershell
docker compose up --build
```

- Health: `http://localhost:4000/health`

## Vercel (frontend only)

- **https://my-faith.vercel.app**
- Set **`VITE_API_BASE_URL`** in Vercel when API is public.
- Deploy: `.\scripts\deploy-vercel.ps1` or `vercel --prod` after `vercel login`.

## GitHub (first push)

```powershell
cd "C:\Users\reias\OneDrive\Desktop\My Faith\my-faith"
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin master
```

Never push `.env`, `.env.vercel`, tokens.

## Save checkpoint (May 2026)

This session saved **story-led UX** + handover docs. To see what changed:

```powershell
git log -1 --oneline
git status
```

## Next agent checklist

1. Run `npm run build` after JSX edits (tag mismatches have happened before).
2. Read **`HANDOVER-SUMMARY.md`** for clinician-friendly overview.
3. Continue **Story Paths** content — product priority per owner.
4. Production API + CORS when ready.
5. Keep disclaimers in UI; no clinical diagnosis claims.

# Handover — My Faith (my-faith)

## Rolling summary (update this when you ship a chunk)

**Last updated:** 2026-05-10

- **What it is:** Gentle Christian spirituality PWA — prayer builder, topics, life scenarios, meditations, chants, journal; optional Docker API + Postgres; Vite PWA deployable to Vercel.
- **Product state:** First-visit onboarding (no login). **Walking with Jesus** + **Life Mirror** are live (bundled data). **Contemplative** line-by-line prayer. **Quiet mode** + **Our promise** (trust + prefs + optional browser reminder). **Our story** (Phase 4 identity, manifesto, journeys, ethics, launch framing). **Palette:** Aegean blue / violet / sage / honey (`--mf-*` in `index.css`).
- **Content constitution (Phase 5):** **`CONTENT-CANON.md`** — golden rules, three pillars, Jesus/Mary/apostolic corpus, life scenarios & prayer canons, Quiet Mode rules, language blacklist, five review tests, unspoken promise. **Vision only** until copy/features are aligned in code.
- **Living library (Phase 6):** **`LIVING-LIBRARY.md`** — three content layers (Core / Breath / Response), **12 canonical Jesus moments** (target set; app currently has 7 bundled), timeless daily reflections, age-aware tone, Life Mirror expansion rules, prayer word limits, silence principle, AI boundaries, editorial council mindset, growth = depth. **Blueprint only.**
- **Gentle launch & stewardship (Phase 7):** **`GENTLE-LAUNCH.md`** — three-stage release (listening → quiet public → organic trust), praise/criticism responses, when to say no, stewardship model, sustainable funding ethics, **stop rule** (“if it stops feeling gentle, reassess”), future-you anchor. **Leadership blueprint only.**
- **Data:** Faith topics, scenarios, meditations, chants load from API when up; else bundled `src/data`. Jesus Path + Life Mirror + Phase 4 copy are **local JS** only (not in DB yet).
- **Git:** Full history on `master`. **GitHub:** if `git remote -v` is empty, create a new repository on GitHub and follow **§ GitHub (first push)** below — Cursor cannot push without a remote URL and your login.
- **Live (HTTPS):** **https://my-faith.vercel.app** — deploy with `.\scripts\deploy-vercel.ps1` (uses `.env.vercel`; never commit that file).
- **Open / next:** Align `src/data` and UI with **`CONTENT-CANON.md`** and **`LIVING-LIBRARY.md`** (e.g. grow Jesus Path to 12 moments, reflection categories, prayer caps); public API URL on Vercel (`VITE_API_BASE_URL`) + backend `CORS_ORIGIN`; optional CMS/API; content-team JSON editor; push notifications only if product wants a service beyond best-effort browser reminder.

*Agents: after a meaningful change, edit the bullets above (especially **Last updated**, **Product state**, **Open / next**) so the next session does not lose context.*

## Repo

- **Path:** `My Faith/my-faith`
- **Git:** Initialised locally; **`.env`** is gitignored (create from `backend/.env.example` / root `VITE_API_BASE_URL` as needed).
- **Author (local config):** `meenajim2025@gmail.com`

## Stack

- **Frontend:** Vite + React (`npm run dev`, `npm run build`). PWA via `vite-plugin-pwa` in `vite.config.js`.
- **API client:** `src/services/apiClient.js` — `VITE_API_BASE_URL` (default `http://localhost:4000`).
- **Content loading:** `src/services/loadAppContent.js` + `App.jsx` — on load, the app tries the API for faith topics, scenarios, meditations, chants, and daily reflections; if that fails, it keeps the bundled `src/data/*.js` copy. When content loads from the server, saved prayers and the journal sync via the API; otherwise they stay in the browser (localStorage).
- **Phase 3 UX (bundled):** First-visit onboarding (`FirstVisitOnboarding.jsx`, `onboarding.js`); **Walking with Jesus** (`jesusPathMoments.js`, `WalkingWithJesus.jsx`); **Life Mirror** (`lifeMirror.js`, `LifeMirror.jsx`); contemplative line-by-line prayer (`ContemplativePrayerView.jsx`, `splitPrayerLines.js`); **Quiet mode** (`quietMode.js`, `CalmPreferencesContext.jsx`); **Our promise** tab (`OurPromise.jsx`); gentle in-app banner (`GentleDailyBanner.jsx`); optional **browser daily reminder** (`useBrowserDailyReminder.js` — permission + local time, best-effort, no server).
- **Phase 4 identity & palette:** Global story copy in `phase4Content.js`; **Our story** tab (`OurStory.jsx` — manifesto, why now, three journeys, uniqueness, Quiet Mode narrative, ethics, soft launch, vision). UI colours: Aegean blue, violet, sage, honey (`index.css` `--mf-*` tokens). Header uses the one-line **positioning** string; home rotates **taglines** from the shortlist.
- **Backend:** Node (Express) + PostgreSQL in **`docker-compose.yml`** (`postgres` + `backend`, ports **5433** / **4000**).

## Commands

```powershell
cd "...\My Faith\my-faith"
npm install
npm run dev
```

```powershell
docker compose up --build
```

- Health: `http://localhost:4000/health`
- API: `/api/faith-topics`, `/api/life-scenarios`, etc.

## Vercel (frontend only)

- Example production site: **https://my-faith.vercel.app** (confirm current domain in the Vercel dashboard).
- Vercel hosts the **static Vite build**, not the Docker Postgres/API unless you add serverless or a separate host for the API.
- **CLI:** `vercel` is installed globally (`npm install -g vercel`).
- **Option A — browser login (interactive):** from `my-faith`, run `vercel login`, complete the browser/device flow, then `vercel --prod`.
- **Option B — token (no browser on deploy):** create a token at [vercel.com/account/tokens](https://vercel.com/account/tokens), then in PowerShell:
  - `$env:VERCEL_TOKEN = "paste_token_here"`
  - `.\scripts\deploy-vercel.ps1`
- In the Vercel project **Environment Variables**, set **`VITE_API_BASE_URL`** to your public API URL when the backend is deployed.
- **HTTPS URL:** Printed at the end of `vercel --prod` or shown in the Vercel dashboard under the project’s **Domains**.

## GitHub (first push)

Use this when the code should live on GitHub as well as on this machine.

1. On GitHub: **New repository** → name it (e.g. `my-faith`) → create **without** adding a README if you already have commits locally (avoids merge conflicts). Otherwise create with README and follow GitHub’s “push an existing repository” instructions.
2. In PowerShell from the `my-faith` folder:

```powershell
cd "C:\Users\reias\OneDrive\Desktop\My Faith\my-faith"
git remote add origin https://github.com/YOUR_GITHUB_USER/YOUR_REPO_NAME.git
git push -u origin master
```

This repo currently uses the branch name **`master`**. If GitHub shows **`main`** as the default, either rename locally (`git branch -M main`) or set the remote default branch on GitHub to **master** — then push the branch name that matches.

3. **Never push:** `.env`, `.env.vercel`, `.vercel`, or anything with tokens or database passwords (they should stay gitignored).

## Next agent checklist

1. Confirm `git log` and remote if pushing to GitHub/GitLab.
2. ~~Wire `App.jsx` to the API~~ — done (with bundled fallback and optional server sync for saved prayers / journal).
3. Production: point **`VITE_API_BASE_URL`** at a **public** API URL; set **`CORS_ORIGIN`** on the backend to match the Vercel domain(s). Secure DB passwords and avoid committing `.env`.
4. Safety copy is user-facing; keep disclaimers in UI.

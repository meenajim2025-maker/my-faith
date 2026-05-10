# Handover — My Faith (my-faith)

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

## Next agent checklist

1. Confirm `git log` and remote if pushing to GitHub/GitLab.
2. ~~Wire `App.jsx` to the API~~ — done (with bundled fallback and optional server sync for saved prayers / journal).
3. Production: point **`VITE_API_BASE_URL`** at a **public** API URL; set **`CORS_ORIGIN`** on the backend to match the Vercel domain(s). Secure DB passwords and avoid committing `.env`.
4. Safety copy is user-facing; keep disclaimers in UI.

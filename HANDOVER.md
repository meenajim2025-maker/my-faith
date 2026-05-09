# Handover — My Faith (my-faith)

## Repo

- **Path:** `My Faith/my-faith`
- **Git:** Initialised locally; **`.env`** is gitignored (create from `backend/.env.example` / root `VITE_API_BASE_URL` as needed).
- **Author (local config):** `meenajim2025@gmail.com`

## Stack

- **Frontend:** Vite + React (`npm run dev`, `npm run build`). PWA via `vite-plugin-pwa` in `vite.config.js`.
- **API client:** `src/services/apiClient.js` — `VITE_API_BASE_URL` (default `http://localhost:4000`).
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
2. Wire `App.jsx` to `apiClient` if the product should load content from the API instead of only `src/data/*.js`.
3. Production: secure DB passwords, CORS, and avoid committing `.env`.
4. Clinical/safety copy is user-facing; keep disclaimers in UI.

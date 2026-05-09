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
- Deploy: install [Vercel CLI](https://vercel.com/docs/cli), run `vercel login` (account linked to **meenajim2025@gmail.com**), then from `my-faith`: `vercel` / `vercel --prod`.
- In the Vercel project **Environment Variables**, set **`VITE_API_BASE_URL`** to your public API URL when the backend is deployed.
- **HTTPS URL:** Created in the Vercel dashboard or printed by `vercel --prod` after login — not available without completing that step in this environment.

## Next agent checklist

1. Confirm `git log` and remote if pushing to GitHub/GitLab.
2. Wire `App.jsx` to `apiClient` if the product should load content from the API instead of only `src/data/*.js`.
3. Production: secure DB passwords, CORS, and avoid committing `.env`.
4. Clinical/safety copy is user-facing; keep disclaimers in UI.

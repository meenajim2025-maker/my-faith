# My Faith — Handover Summary

**Document version:** 2.0  
**Last updated:** 17 May 2026  
**Project folder:** `C:\Users\reias\OneDrive\Desktop\My Faith\my-faith`  
**Live site (if deployed):** https://my-faith.vercel.app  

---

## How to download or save this document

| Method | Steps |
|--------|--------|
| **Keep as a file** | This file lives in your project: `my-faith\HANDOVER-SUMMARY.md`. Copy to USB, email, or OneDrive. |
| **Save as PDF** | Open `HANDOVER-SUMMARY.html` in Chrome or Edge → **Ctrl+P** → **Save as PDF**. |
| **Word** | Open this file in Word → **Save As** → PDF or DOCX. |

---

## 1. What My Faith is (plain English)

**My Faith** is a gentle spiritual wellbeing web app (phone and desktop). It helps people practise inner skills — pause before reaction, honest truth without self-hatred, forgiveness without pretending, strength without cruelty, hope without denial.

It is **not** a church replacement, a medical device, or emergency care. The app says it supports reflection and does not replace therapy, pastoral care, or emergency services.

**Who it is for:** Everyone, including people with **no spiritual background**. Language is welcoming; named traditions and philosophers are **not** used in the main UI.

**Design shift (2026):** The app is moving from static “calm brochure” pages to a **story-led guide** — short scenes, real tensions (e.g. truth vs comfort), choices, and skills you can use the same day.

---

## 2. What you will see in the app today

### Home (start here)

- Opening text: *“Life gets noisy. This is a quiet place to practise what matters…”*
- **Seven buttons** — tap how you feel:
  - I am angry → Story Paths (anger story)
  - I feel lost / I want to begin → Start Here
  - I feel guilty / I feel alone / I keep overthinking → Story Paths (tag filter; some stories still “coming soon”)
  - I need peace → The First Path
- **Story Paths** card — start “The Message You Should Not Send” or browse all.
- **Start Here** — longer gentle flow on the home page (what you are carrying, readiness, optional voice stub).
- Daily banner at top (when enabled in settings) — “Today’s test” with a tension and a short question.

### Main menu tabs (in order)

| Tab | Purpose |
|-----|---------|
| **Home** | Purpose, feeling buttons, Story Paths, Start Here |
| **Start Here** | Full guided entry flow |
| **Story Paths** | Interactive stories (1 live, more planned) |
| **Our story** | Manifesto and vision |
| **Universal hope** | Timeless hope themes (welcoming names) |
| **Path of Unparalleled Love** | Story moments on the path |
| **Gentle wisdom** | Topics by age/voice |
| **Life Mirror** | Story → feelings → insight → action |
| **The First Path** | 10-step beginner journey with scenes |
| **Life scenarios** | Practical steps for hard moments |
| **Prayer / Reflection builder** | “What do you need words for?” then built text |
| **Meditation** | Timers, library, chants, journal |
| **Love in Action** | Community kindness ideas |
| **Our promise** | Trust, quiet mode, daily reminder settings |

### Experience modes (in Start Here / settings)

| Mode | Tone |
|------|------|
| **Neutral** (default) | Plain, inclusive, not preachy |
| **Spiritual** | Warmer sacred language |
| **Quiet** | Shortest, softest labels |

### Quiet mode (header toggle)

Further softens religious words (e.g. “God” → gentler forms) for sensitive users.

---

## 3. Story Paths (centre of the product)

**Why it matters:** Stories make wisdom human. Each path should include **one tension** (e.g. peace vs revenge, desire vs freedom).

**Live now:**

- **The Message You Should Not Send** (~4 min) — late-night anger, thumb over Send, choices (send / delete / save draft), practice and takeaway.

**Planned (placeholders in app):** guilt, loneliness, overthinking, comparison, shame, meaning, and others — copy exists as stubs; `available: false` until written.

**Files:** `src/features/storyPaths/` — `storyPathsData.js`, `StoryPaths.jsx`, `HomeStoryPathsIntro.jsx`.

---

## 4. Other upgraded experiences

| Area | What changed |
|------|----------------|
| **Life Mirror** | Story before questions (“You have been carrying something all day…”). Guided steps with tension labels. |
| **The First Path** | Each of 10 lessons begins with a **scene** (e.g. reaching for comfort when silence feels hard), then teaching. |
| **Prayer builder** | Pick need first: apologise, forgive, courage, calm, grateful, or “I do not know what I feel” — then personalised words. |
| **Daily gentle step** | Rotating daily test (e.g. truth vs victory when proving yourself) + reflection question. |

**Tension examples used in the app:** truth vs comfort, peace vs revenge, desire vs freedom, shame vs return, loneliness vs connection, control vs trust, noise vs silence, image vs honesty.

---

## 5. Welcoming spiritual language

| Instead of… | The app often says… |
|-------------|---------------------|
| Jesus | **Unparalleled Love** |
| Christ | **Love Himself** |
| Gospels | **the sacred stories** |
| Gita | **the Dialogue of Courage** |
| Upanishads | **the Wisdom of Stillness** |
| Walking with Jesus (menu) | **Path of Unparalleled Love** |

**Source:** `src/data/spiritualLanguage.js`  
**Rule:** No tradition or philosopher **names** in the main UI (see `CONTENT-CANON.md`).

---

## 6. Technical stack

| Layer | Technology |
|-------|------------|
| Frontend | React + Vite (PWA) |
| Styling | `src/index.css` (Aegean, violet, sage, honey) |
| Backend (optional) | Node + PostgreSQL in Docker |
| Hosting | Vercel (static frontend) |
| Offline / no API | Bundled `src/data/*.js` + browser storage |

**Build check (developers):**

```powershell
cd "C:\Users\reias\OneDrive\Desktop\My Faith\my-faith"
npm run build
```

---

## 7. Key files and folders

```
my-faith/
├── HANDOVER.md                 ← Short rolling notes (agents update)
├── HANDOVER-SUMMARY.md         ← This document
├── HANDOVER-SUMMARY.html       ← Print to PDF
├── CONTENT-CANON.md            ← Content rules
├── LIVING-LIBRARY.md           ← Growth blueprint
├── GENTLE-LAUNCH.md            ← Launch / stewardship blueprint
├── src/
│   ├── App.jsx                 ← Tabs, home, wiring
│   ├── features/
│   │   ├── storyPaths/         ← Stories + home intro
│   │   ├── startHere/          ← Start Here flow
│   │   ├── lifeMirror/         ← Life Mirror 2.0
│   │   └── firstPath/          ← First Path + scenes
│   ├── components/
│   │   ├── ReflectionBuilder.jsx
│   │   ├── GentleDailyBanner.jsx
│   │   └── UniversalHope.jsx
│   ├── language/
│   │   ├── tensions.js
│   │   ├── modeText.js
│   │   └── wisdomThemes.js
│   ├── data/
│   │   ├── gentleDailySteps.js
│   │   ├── dailyReflections.js
│   │   └── spiritualLanguage.js
│   └── services/
│       └── reflectionBuilder.js
└── scripts/deploy-vercel.ps1
```

---

## 8. Run on your computer (Windows)

```powershell
cd "C:\Users\reias\OneDrive\Desktop\My Faith\my-faith"
npm install
npm run dev
```

Open: **http://localhost:5173/**

Optional API + database:

```powershell
docker compose up --build
```

Set `VITE_API_BASE_URL=http://localhost:4000` in `.env` if you want the API.

---

## 9. Deploy to the internet

| Step | Action |
|------|--------|
| Build | `npm run build` (must pass before deploy) |
| Deploy | `.\scripts\deploy-vercel.ps1` from `my-faith` |
| Env | `VITE_API_BASE_URL` on Vercel when API is public |
| Never commit | `.env`, `.env.vercel`, passwords, tokens |

**Example URL:** https://my-faith.vercel.app

---

## 10. Safety and disclaimers

- Supports reflection; not emergency care, diagnosis, or therapy replacement.  
- Oppression / safeguarding themes should point to **real help**, not “pray only.”  
- Do not put real patient names in journals or demos.  
- **Not trial- or NHS-ready** until ethics, data protection, and clinical safety review.

---

## 11. Priority “still to do”

1. **Finish Story Paths** — write and enable the placeholder stories.  
2. **Redeploy Vercel** after local testing so the live site matches this checkpoint.  
3. **GitHub backup** — add remote and push if not done (`git remote -v`).  
4. **Production API** — public URL + CORS for Vercel domain.  
5. **API/database seed** — update old “Jesus/Gita” strings if using Postgres.  
6. **Safeguarding review** if used near healthcare.  
7. Optional: Start Here **voice** API (`VITE_START_HERE_VOICE_API_URL`).

---

## 12. One-paragraph summary for sharing

*My Faith is a gentle story-led wellbeing app that helps people practise pause, honesty, forgiveness, and hope without religious argument. It offers interactive Story Paths, Life Mirror, a beginner First Path, and an outcome-based prayer/reflection builder — in neutral, spiritual, or quiet language. Built with React/Vite, optional Docker API, deployable on Vercel. Not for emergencies; safeguarding and governance review needed before clinical use.*

---

*End of handover summary v2.0. Update the version and date when the product changes significantly.*

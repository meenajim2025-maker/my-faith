import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { query } from './db.js'

const app = express()

const PORT = Number(process.env.PORT) || 4000
const CORS_ORIGIN = process.env.CORS_ORIGIN?.trim() || 'http://localhost:5173'

app.use(
  cors({
    origin: CORS_ORIGIN,
  }),
)

app.use(express.json({ limit: '256kb' }))

app.get('/', (_req, res) => {
  res.json({
    app: 'My Faith Backend',
    status: 'running',
  })
})

app.get('/health', async (_req, res) => {
  try {
    const result = await query('select now() as current_time')
    res.json({
      status: 'ok',
      database: 'connected',
      time: result.rows[0].current_time,
    })
  } catch {
    res.status(500).json({
      status: 'error',
      database: 'not connected',
    })
  }
})

app.get('/api/faith-topics', async (_req, res) => {
  try {
    const result = await query(
      `select *
       from faith_topics
       where is_published = true
       order by display_order, created_at`,
    )
    res.json(result.rows)
  } catch {
    res.status(500).json({ error: 'server_error' })
  }
})

app.get('/api/life-scenarios', async (_req, res) => {
  try {
    const result = await query(
      `select *
       from life_scenarios
       where is_published = true
       order by display_order, created_at`,
    )
    res.json(result.rows)
  } catch {
    res.status(500).json({ error: 'server_error' })
  }
})

app.get('/api/meditations', async (_req, res) => {
  try {
    const result = await query(
      `select *
       from meditations
       where is_published = true
       order by display_order, created_at`,
    )
    res.json(result.rows)
  } catch {
    res.status(500).json({ error: 'server_error' })
  }
})

app.get('/api/chants', async (_req, res) => {
  try {
    const result = await query(
      `select *
       from chants
       where is_published = true
       order by display_order, created_at`,
    )
    res.json(result.rows)
  } catch {
    res.status(500).json({ error: 'server_error' })
  }
})

app.get('/api/daily-reflections', async (_req, res) => {
  try {
    const result = await query(
      `select *
       from daily_reflections
       where is_published = true
       order by display_order, created_at`,
    )
    res.json(result.rows)
  } catch {
    res.status(500).json({ error: 'server_error' })
  }
})

app.post('/api/saved-prayers', async (req, res) => {
  const { userLabel, ageGroup, mood, situation, prayerText } = req.body

  if (!prayerText || typeof prayerText !== 'string' || !prayerText.trim()) {
    return res.status(400).json({
      error: 'prayerText is required',
    })
  }

  try {
    const result = await query(
      `insert into saved_prayers
       (user_label, age_group, mood, situation, prayer_text)
       values ($1, $2, $3, $4, $5)
       returning *`,
      [
        userLabel || 'local-user',
        ageGroup ?? null,
        mood ?? null,
        situation ?? null,
        prayerText.trim(),
      ],
    )
    res.status(201).json(result.rows[0])
  } catch {
    res.status(500).json({ error: 'server_error' })
  }
})

app.get('/api/saved-prayers', async (_req, res) => {
  try {
    const result = await query(
      `select *
       from saved_prayers
       order by created_at desc`,
    )
    res.json(result.rows)
  } catch {
    res.status(500).json({ error: 'server_error' })
  }
})

app.delete('/api/saved-prayers/:id', async (req, res) => {
  try {
    const { rowCount } = await query(
      `delete from saved_prayers where id = $1::uuid`,
      [req.params.id],
    )
    if (rowCount === 0) {
      return res.status(404).json({ error: 'not_found' })
    }
    res.json({ deleted: true })
  } catch {
    res.status(400).json({ error: 'invalid_id' })
  }
})

app.post('/api/journal-entries', async (req, res) => {
  const { userLabel, entryText } = req.body

  if (!entryText || typeof entryText !== 'string' || !entryText.trim()) {
    return res.status(400).json({
      error: 'entryText is required',
    })
  }

  try {
    const result = await query(
      `insert into journal_entries
       (user_label, entry_text)
       values ($1, $2)
       returning *`,
      [userLabel || 'local-user', entryText.trim()],
    )
    res.status(201).json(result.rows[0])
  } catch {
    res.status(500).json({ error: 'server_error' })
  }
})

app.get('/api/journal-entries', async (_req, res) => {
  try {
    const result = await query(
      `select *
       from journal_entries
       order by created_at desc`,
    )
    res.json(result.rows)
  } catch {
    res.status(500).json({ error: 'server_error' })
  }
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`My Faith backend running on http://localhost:${PORT}`)
})

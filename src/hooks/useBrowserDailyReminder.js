import { useEffect } from 'react'
import { loadJson, saveJson } from '../services/storage.js'

const LAST_FIRED_KEY = 'browser_reminder_last_fired_date'

const lines = [
  'A gentle moment for you — one quiet breath.',
  'You belong here — one breath at a time.',
  'Small kindness counts more than you think.',
  'Stillness is not failure; it is repair.',
]

function todayLocalKey() {
  const d = new Date()
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
}

function parseTime(hhmm) {
  const [h, m] = hhmm.split(':').map((n) => Number.parseInt(n, 10))
  if (!Number.isFinite(h) || !Number.isFinite(m)) return { h: 8, m: 0 }
  return { h, m }
}

/**
 * Fires at most one notification per local day when clock matches `timeHHmm` (24h).
 * Requires Notification permission "granted". Best effort: many browsers need the site
 * open or the app installed; this does not use a server.
 * @param {boolean} enabled
 * @param {string} timeHHmm e.g. "08:00"
 */
export function useBrowserDailyReminder(enabled, timeHHmm) {
  useEffect(() => {
    if (!enabled) return undefined
    if (typeof window === 'undefined' || !('Notification' in window)) return undefined
    if (Notification.permission !== 'granted') return undefined

    const { h: targetH, m: targetM } = parseTime(timeHHmm)

    function tryNotify() {
      const now = new Date()
      if (now.getHours() !== targetH || now.getMinutes() !== targetM) return

      const today = todayLocalKey()
      if (loadJson(LAST_FIRED_KEY, null) === today) return

      const body = lines[Math.floor(Math.random() * lines.length)]
      try {
        new Notification('My Faith', {
          body,
          tag: 'my-faith-gentle-reminder',
          silent: false,
        })
        saveJson(LAST_FIRED_KEY, today)
      } catch {
        /* some browsers block */
      }
    }

    tryNotify()
    const id = window.setInterval(tryNotify, 30_000)
    return () => window.clearInterval(id)
  }, [enabled, timeHHmm])
}

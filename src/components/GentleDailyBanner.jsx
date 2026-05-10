import { useEffect, useMemo, useState } from 'react'
import { X } from 'lucide-react'
import { loadJson, saveJson } from '../services/storage.js'
import { useCalmPreferences } from '../context/CalmPreferencesContext.jsx'

const LAST_KEY = 'gentle_daily_prompt_last_date'

const lines = [
  'You belong here — one breath at a time.',
  'Small kindness counts more than you think.',
  'Stillness is not failure; it is repair.',
  'You do not have to earn rest.',
  'When the day feels loud, you can begin again quietly.',
]

function todayLocalKey() {
  const d = new Date()
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
}

export default function GentleDailyBanner() {
  const { gentleDailyPrompt } = useCalmPreferences()
  const [visible, setVisible] = useState(false)
  const line = useMemo(() => lines[Math.floor(Math.random() * lines.length)], [])

  useEffect(() => {
    if (!gentleDailyPrompt) {
      setVisible(false)
      return
    }
    const today = todayLocalKey()
    const last = loadJson(LAST_KEY, null)
    if (last === today) {
      setVisible(false)
      return
    }
    setVisible(true)
  }, [gentleDailyPrompt])

  function dismiss() {
    saveJson(LAST_KEY, todayLocalKey())
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="gentle-daily-banner" role="status">
      <p className="gentle-daily-text">{line}</p>
      <button
        type="button"
        className="gentle-daily-close"
        onClick={dismiss}
        aria-label="Dismiss welcome for today"
      >
        <X size={18} aria-hidden />
      </button>
    </div>
  )
}

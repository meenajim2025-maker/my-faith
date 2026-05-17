import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { loadJson, saveJson } from '../services/storage.js'
import { useCalmPreferences } from '../context/CalmPreferencesContext.jsx'
import { getGentleDailyStepForDate } from '../data/gentleDailySteps.js'
import { tensionLabelById } from '../language/tensions.js'
import { getModeText, getSafeMode } from '../language/modeText.js'

const LAST_KEY = 'gentle_daily_prompt_last_date'

function todayLocalKey() {
  const d = new Date()
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
}

export default function GentleDailyBanner() {
  const { gentleDailyPrompt, experienceMode } = useCalmPreferences()
  const [visible, setVisible] = useState(false)
  const step = getGentleDailyStepForDate()
  const safeMode = getSafeMode(experienceMode)

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

  const title = getModeText(step.title, safeMode)
  const test = getModeText(step.test, safeMode)
  const question = getModeText(step.question, safeMode)
  const tension = tensionLabelById[step.tensionId] ?? ''

  return (
    <div className="gentle-daily-banner" role="status">
      <p className="gentle-daily-label">{title}</p>
      <p className="experience-tension gentle-daily-tension">{tension}</p>
      <p className="gentle-daily-text">{test}</p>
      <p className="gentle-daily-question muted">{question}</p>
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

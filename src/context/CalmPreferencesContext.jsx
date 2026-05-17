import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { loadJson, saveJson } from '../services/storage.js'
import { getSafeMode } from '../language/modeText.js'

const QUIET_KEY = 'quiet_mode_enabled'
const EXPERIENCE_MODE_KEY = 'experience_mode_v1'
const DAILY_KEY = 'gentle_daily_prompt_enabled'
const BROWSER_REMINDER_KEY = 'browser_daily_reminder_enabled'
const BROWSER_REMINDER_TIME_KEY = 'browser_daily_reminder_time'

const CalmPreferencesContext = createContext(null)

/**
 * Resolves experience mode: explicit mode wins; legacy quiet toggle maps to quiet/neutral.
 * @param {string} experienceMode
 * @param {boolean} quietModeLegacy
 */
function resolveExperienceMode(experienceMode, quietModeLegacy) {
  if (quietModeLegacy) return 'quiet'
  return getSafeMode(experienceMode)
}

export function CalmPreferencesProvider({ children }) {
  const [experienceMode, setExperienceModeState] = useState(() => {
    const saved = loadJson(EXPERIENCE_MODE_KEY, 'neutral')
    return getSafeMode(typeof saved === 'string' ? saved : 'neutral')
  })

  const [quietModeLegacy, setQuietModeLegacy] = useState(
    () => loadJson(QUIET_KEY, false) === true,
  )

  const [gentleDailyPrompt, setGentleDailyPrompt] = useState(
    () => loadJson(DAILY_KEY, false) === true,
  )
  const [browserDailyReminder, setBrowserDailyReminder] = useState(
    () => loadJson(BROWSER_REMINDER_KEY, false) === true,
  )
  const [browserReminderTime, setBrowserReminderTime] = useState(() => {
    const t = loadJson(BROWSER_REMINDER_TIME_KEY, '08:00')
    return typeof t === 'string' && /^\d{1,2}:\d{2}$/.test(t) ? t : '08:00'
  })

  const experienceModeResolved = resolveExperienceMode(
    experienceMode,
    quietModeLegacy,
  )

  useEffect(() => {
    saveJson(EXPERIENCE_MODE_KEY, experienceMode)
  }, [experienceMode])

  useEffect(() => {
    saveJson(QUIET_KEY, quietModeLegacy)
  }, [quietModeLegacy])

  useEffect(() => {
    saveJson(DAILY_KEY, gentleDailyPrompt)
  }, [gentleDailyPrompt])

  useEffect(() => {
    saveJson(BROWSER_REMINDER_KEY, browserDailyReminder)
  }, [browserDailyReminder])

  useEffect(() => {
    saveJson(BROWSER_REMINDER_TIME_KEY, browserReminderTime)
  }, [browserReminderTime])

  function setExperienceMode(mode) {
    const safe = getSafeMode(mode)
    setExperienceModeState(safe)
    if (safe === 'quiet') {
      setQuietModeLegacy(true)
    } else if (quietModeLegacy) {
      setQuietModeLegacy(false)
    }
  }

  function setQuietMode(enabled) {
    const on = enabled === true
    setQuietModeLegacy(on)
    if (on) {
      setExperienceModeState('quiet')
    } else if (experienceMode === 'quiet') {
      setExperienceModeState('neutral')
    }
  }

  const value = useMemo(
    () => ({
      /** @deprecated use experienceMode — kept for header pill */
      quietMode: experienceModeResolved === 'quiet',
      setQuietMode,
      experienceMode: experienceModeResolved,
      setExperienceMode,
      gentleDailyPrompt,
      setGentleDailyPrompt,
      browserDailyReminder,
      setBrowserDailyReminder,
      browserReminderTime,
      setBrowserReminderTime,
    }),
    [
      experienceModeResolved,
      gentleDailyPrompt,
      browserDailyReminder,
      browserReminderTime,
      experienceMode,
    ],
  )

  return (
    <CalmPreferencesContext.Provider value={value}>{children}</CalmPreferencesContext.Provider>
  )
}

export function useCalmPreferences() {
  const ctx = useContext(CalmPreferencesContext)
  if (!ctx) {
    throw new Error('useCalmPreferences must be used within CalmPreferencesProvider')
  }
  return ctx
}

/** @returns {{ mode: string; setMode: (m: string) => void }} */
export function useExperienceMode() {
  const { experienceMode, setExperienceMode } = useCalmPreferences()
  return { mode: experienceMode, setMode: setExperienceMode }
}

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { loadJson, saveJson } from '../services/storage.js'

const QUIET_KEY = 'quiet_mode_enabled'
const DAILY_KEY = 'gentle_daily_prompt_enabled'
const BROWSER_REMINDER_KEY = 'browser_daily_reminder_enabled'
const BROWSER_REMINDER_TIME_KEY = 'browser_daily_reminder_time'

const CalmPreferencesContext = createContext(null)

export function CalmPreferencesProvider({ children }) {
  const [quietMode, setQuietMode] = useState(() => loadJson(QUIET_KEY, false) === true)
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

  useEffect(() => {
    saveJson(QUIET_KEY, quietMode)
  }, [quietMode])

  useEffect(() => {
    saveJson(DAILY_KEY, gentleDailyPrompt)
  }, [gentleDailyPrompt])

  useEffect(() => {
    saveJson(BROWSER_REMINDER_KEY, browserDailyReminder)
  }, [browserDailyReminder])

  useEffect(() => {
    saveJson(BROWSER_REMINDER_TIME_KEY, browserReminderTime)
  }, [browserReminderTime])

  const value = useMemo(
    () => ({
      quietMode,
      setQuietMode,
      gentleDailyPrompt,
      setGentleDailyPrompt,
      browserDailyReminder,
      setBrowserDailyReminder,
      browserReminderTime,
      setBrowserReminderTime,
    }),
    [quietMode, gentleDailyPrompt, browserDailyReminder, browserReminderTime],
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

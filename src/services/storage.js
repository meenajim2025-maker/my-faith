const PREFIX = 'myFaith:'

function key(name) {
  return `${PREFIX}${name}`
}

export function saveJson(name, value) {
  try {
    localStorage.setItem(key(name), JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

export function loadJson(name, fallback = null) {
  try {
    const raw = localStorage.getItem(key(name))
    if (raw == null) return fallback
    return JSON.parse(raw)
  } catch {
    return fallback
  }
}

export function removeKey(name) {
  try {
    localStorage.removeItem(key(name))
    return true
  } catch {
    return false
  }
}

const SAVED_PRAYERS_KEY = 'myfaith_saved_prayers'
const JOURNAL_KEY = 'myfaith_journal'

export function getSavedPrayers() {
  try {
    return JSON.parse(localStorage.getItem(SAVED_PRAYERS_KEY)) || []
  } catch {
    return []
  }
}

export function savePrayer(prayer) {
  const prayers = getSavedPrayers()
  const newPrayer = {
    id: crypto.randomUUID(),
    text: prayer,
    createdAt: new Date().toISOString(),
  }

  localStorage.setItem(SAVED_PRAYERS_KEY, JSON.stringify([newPrayer, ...prayers]))

  return newPrayer
}

export function deletePrayer(id) {
  const prayers = getSavedPrayers().filter((p) => p.id !== id)
  localStorage.setItem(SAVED_PRAYERS_KEY, JSON.stringify(prayers))
}

export function getJournal() {
  try {
    return JSON.parse(localStorage.getItem(JOURNAL_KEY)) || []
  } catch {
    return []
  }
}

export function saveJournalEntry(entry) {
  const entries = getJournal()
  const newEntry = {
    id: crypto.randomUUID(),
    text: entry,
    createdAt: new Date().toISOString(),
  }

  localStorage.setItem(JOURNAL_KEY, JSON.stringify([newEntry, ...entries]))

  return newEntry
}

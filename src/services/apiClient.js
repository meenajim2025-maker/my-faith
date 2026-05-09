const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000'

async function request(path, options = {}) {
  const { headers: optionHeaders, ...rest } = options

  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(optionHeaders || {}),
    },
    ...rest,
  })

  if (!response.ok) {
    const message = await response.text()
    throw new Error(message || 'API request failed')
  }

  return response.json()
}

export const apiClient = {
  getFaithTopics: () => request('/api/faith-topics'),
  getLifeScenarios: () => request('/api/life-scenarios'),
  getMeditations: () => request('/api/meditations'),
  getChants: () => request('/api/chants'),
  getDailyReflections: () => request('/api/daily-reflections'),

  getSavedPrayers: () => request('/api/saved-prayers'),

  savePrayer: ({ ageGroup, mood, situation, prayerText }) =>
    request('/api/saved-prayers', {
      method: 'POST',
      body: JSON.stringify({
        userLabel: 'local-user',
        ageGroup,
        mood,
        situation,
        prayerText,
      }),
    }),

  deletePrayer: (id) =>
    request(`/api/saved-prayers/${id}`, {
      method: 'DELETE',
    }),

  getJournalEntries: () => request('/api/journal-entries'),

  saveJournalEntry: (entryText) =>
    request('/api/journal-entries', {
      method: 'POST',
      body: JSON.stringify({
        userLabel: 'local-user',
        entryText,
      }),
    }),
}

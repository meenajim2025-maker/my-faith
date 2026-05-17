/**
 * Wisdom theme registry — inspiration for writers and features.
 * NEVER show tradition names, thinkers, or labels from `inspirationNote` in the UI.
 * User-facing text must stay universal and human.
 *
 * @typedef {'neutral' | 'spiritual' | 'quiet'} ThemeMode
 */

/** @typedef {{
 *   id: string
 *   label: string
 *   inspirationNote: string
 *   keywords: string[]
 *   phrases: Record<ThemeMode, string>
 * }} WisdomTheme
 */

/** @type {WisdomTheme[]} */
export const wisdomThemes = [
  {
    id: 'release',
    label: 'Release',
    inspirationNote: 'Nirvana-inspired: release, freedom from craving, stillness, letting go',
    keywords: ['release', 'letting go', 'stillness', 'freedom', 'loosening'],
    phrases: {
      neutral: 'You may loosen what grips too tightly — without running from life.',
      spiritual: 'Release can be a quiet grace, not an escape from love.',
      quiet: 'Loosen.',
    },
  },
  {
    id: 'renewal',
    label: 'Renewal',
    inspirationNote: 'Redemption-inspired: return, mercy, renewal, forgiveness, being made new',
    keywords: ['return', 'mercy', 'renewal', 'forgiveness', 'new beginning'],
    phrases: {
      neutral: 'A return is possible — not perfection first, but an honest next step.',
      spiritual: 'Mercy can meet you before you have every answer.',
      quiet: 'Begin again.',
    },
  },
  {
    id: 'awareness',
    label: 'Awareness',
    inspirationNote: 'Buddhist-inspired: suffering, compassion, awareness, non-attachment',
    keywords: ['awareness', 'compassion', 'suffering', 'seeing clearly', 'non-attachment'],
    phrases: {
      neutral: 'Awareness is not blame. It is seeing what is here with compassion.',
      spiritual: 'Compassion begins when the heart stops fighting what is true.',
      quiet: 'See gently.',
    },
  },
  {
    id: 'non-harm',
    label: 'Non-harm',
    inspirationNote: 'Jain-inspired: non-harm, restraint, reverence for life, truthfulness',
    keywords: ['non-harm', 'restraint', 'reverence', 'truthfulness', 'gentleness'],
    phrases: {
      neutral: 'Restraint can protect life — yours and others’. Truthfulness can be kind.',
      spiritual: 'Reverence for life includes how we speak and how we choose.',
      quiet: 'Do no harm.',
    },
  },
  {
    id: 'good-order',
    label: 'Good order',
    inspirationNote: 'Confucian-inspired: duty, respect, family, social harmony, disciplined character',
    keywords: ['duty', 'respect', 'harmony', 'character', 'family', 'steadiness'],
    phrases: {
      neutral: 'Duty is not coldness. It can be care expressed through steady living.',
      spiritual: 'Harmony grows when respect and truth meet in daily life.',
      quiet: 'Steady steps.',
    },
  },
  {
    id: 'conscience',
    label: 'Conscience',
    inspirationNote: 'Martyr/witness-inspired: conscience, courage, truth under pressure, refusing betrayal',
    keywords: ['conscience', 'courage', 'integrity', 'pressure', 'faithfulness'],
    phrases: {
      neutral: 'Conscience whispers before the crowd shouts. Courage can be very quiet.',
      spiritual: 'To refuse betrayal of what is right is already a form of devotion.',
      quiet: 'Stand inside.',
    },
  },
  {
    id: 'dignity',
    label: 'Human dignity',
    inspirationNote: 'Modern thinker-inspired: human dignity, moral responsibility, meaning, service, justice',
    keywords: ['dignity', 'responsibility', 'meaning', 'justice', 'service'],
    phrases: {
      neutral: 'Every person carries dignity — including you. Meaning grows in responsible love.',
      spiritual: 'Justice and service are ways love becomes visible.',
      quiet: 'Dignity matters.',
    },
  },
  {
    id: 'public-duty',
    label: 'Humble duty',
    inspirationNote: 'Respected public servant-inspired: duty, humility, peace, protection of the vulnerable',
    keywords: ['humility', 'peace', 'protection', 'service', 'vulnerable'],
    phrases: {
      neutral: 'Humility protects the vulnerable better than display. Peace is a form of strength.',
      spiritual: 'To guard the weak is sacred work in plain clothes.',
      quiet: 'Protect gently.',
    },
  },
]

/** @type {Record<string, string>} */
export const wisdomThemeById = Object.fromEntries(wisdomThemes.map((t) => [t.id, t.label]))

/**
 * Which universal themes shape each First Path moment (for content alignment — not shown in UI).
 * @type {Record<string, string[]>}
 */
/** Life Mirror choice → theme ids (alignment only — not shown as labels in UI). */
export const lifeMirrorThemeMap = {
  feeling: {
    heavy: ['awareness', 'release'],
    anxious: ['awareness', 'release'],
    sad: ['awareness', 'renewal'],
    angry: ['awareness', 'non-harm'],
    numb: ['awareness', 'renewal'],
    lost: ['awareness', 'renewal'],
    grateful: ['awareness', 'release'],
    peaceful: ['release', 'awareness'],
  },
  need: {
    rest: ['release', 'awareness'],
    safety: ['awareness', 'public-duty'],
    connection: ['dignity', 'good-order'],
    clarity: ['awareness', 'good-order'],
    forgiveness: ['renewal', 'non-harm'],
    courage: ['conscience', 'dignity'],
    space: ['release', 'awareness'],
    hope: ['renewal', 'dignity'],
  },
}

export const firstPathThemeMap = {
  'quiet-beginning': ['release', 'awareness'],
  'inner-mirror': ['awareness', 'non-harm'],
  'fire-of-desire': ['release', 'awareness', 'non-harm'],
  'gentle-release': ['release', 'renewal'],
  'wound-and-return': ['renewal', 'awareness'],
  'way-of-harmlessness': ['non-harm', 'awareness'],
  'good-order': ['good-order', 'non-harm'],
  'courage-conscience': ['conscience', 'dignity'],
  'life-of-service': ['dignity', 'public-duty'],
  'open-door': ['renewal', 'release', 'dignity'],
}

/**
 * @param {string} themeId
 * @param {ThemeMode} [mode]
 */
export function getThemePhrase(themeId, mode = 'neutral') {
  const theme = wisdomThemes.find((t) => t.id === themeId)
  if (!theme) return ''
  const safe = ['neutral', 'spiritual', 'quiet'].includes(mode) ? mode : 'neutral'
  return theme.phrases[safe]
}

/**
 * @param {string} momentId
 * @param {ThemeMode} [mode]
 * @returns {string[]}
 */
export function getFirstPathThemePhrases(momentId, mode = 'neutral') {
  const ids = firstPathThemeMap[momentId] ?? []
  return ids.map((id) => getThemePhrase(id, mode)).filter(Boolean)
}

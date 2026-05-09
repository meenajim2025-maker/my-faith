/** @typedef {'short' | 'long'} PrayerLength */

export const PRAYER_AGE_GROUPS = [
  'Teenager',
  'Adult',
  'Older person',
  'Explorer',
]

export const PRAYER_MOODS = [
  'Grateful',
  'Worried',
  'Lonely',
  'Seeking peace',
  'Need courage',
  'Forgiving someone',
]

export const PRAYER_LENGTHS = /** @type {const} */ (['short', 'long'])

/**
 * @param {{
 *   ageGroup?: string
 *   mood?: string
 *   situation?: string
 *   addressTo?: string
 *   length?: string
 * }} [options]
 */
export function buildPrayer({
  ageGroup = 'Explorer',
  mood = 'Seeking peace',
  situation = '',
  addressTo = 'God',
  length = 'short',
} = {}) {
  const person = addressTo?.trim() ? addressTo.trim() : 'God'

  const ageLine = {
    Teenager:
      'Help me make good choices today, especially when pressure is high.',
    Adult:
      'Guide my work, relationships and responsibilities with patience and wisdom.',
    'Older person':
      'Give me peace, gratitude and the grace to share wisdom gently.',
    Explorer:
      'If You are there, help me recognise love, truth and goodness more clearly.',
  }

  const moodLine = {
    Grateful: 'Thank you for the quiet gifts I often forget to notice.',
    Worried: 'Calm my mind and help me take the next right step.',
    Lonely: 'Remind me that I am seen, valued and never without hope.',
    'Seeking peace': 'Bring peace to my thoughts, words and actions.',
    'Need courage': 'Give me courage to do what is right with humility.',
    'Forgiving someone':
      'Help me release bitterness and choose healing without pretending hurt did not happen.',
  }

  const situationLine = situation?.trim()
    ? `In this situation — ${situation.trim()} — help me respond with love, truth and patience.`
    : 'In whatever I face today, help me respond with love, truth and patience.'

  if (length === 'long') {
    return `${person}, source of love and light,

${moodLine[mood] || ''}

${ageLine[ageGroup] || ''}

${situationLine}

Teach me to love You with sincerity and to love others with kindness. Help me avoid pride, anger, fear and selfishness. Let my words bring peace. Let my choices bring hope. Let my life become a quiet sign of Your love.

Amen.`
  }

  return `${person}, source of love and light, ${moodLine[mood] || ''} ${
    ageLine[ageGroup] || ''
  } ${situationLine} Teach me to love You sincerely and to love others with kindness. Amen.`
}

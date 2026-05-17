/** @typedef {'short' | 'long'} ReflectionLength */

/** @type {{ id: string; label: string; moodKey: string }[]} */
export const REFLECTION_OUTCOMES = [
  { id: 'apologise', label: 'I need to apologise', moodKey: 'Forgiving someone' },
  { id: 'forgive', label: 'I need to forgive', moodKey: 'Forgiving someone' },
  { id: 'courage', label: 'I need courage', moodKey: 'Need courage' },
  { id: 'calm', label: 'I need calm', moodKey: 'Seeking peace' },
  { id: 'grateful', label: 'I feel grateful', moodKey: 'Grateful' },
  { id: 'unknown', label: 'I do not know what I feel', moodKey: 'Seeking peace' },
]

/**
 * @param {{
 *   outcomeId: string
 *   addressTo?: string
 *   situation?: string
 *   ageGroup?: string
 *   length?: string
 * }} options
 */
export function buildReflectionFromOutcome({
  outcomeId,
  addressTo = 'Love',
  situation = '',
  ageGroup = 'Explorer',
  length = 'short',
}) {
  const person = addressTo?.trim() || 'Love'
  const outcome = REFLECTION_OUTCOMES.find((o) => o.id === outcomeId) || REFLECTION_OUTCOMES[5]

  const opening = {
    apologise: {
      short: `${person}, I need to make something right.`,
      long: `${person}, I need to make something right — and I want to do it without cruelty toward myself or them.`,
    },
    forgive: {
      short: `${person}, help me forgive without pretending the hurt did not matter.`,
      long: `${person}, help me forgive without pretending the hurt did not matter. Loosen what bitterness has been gripping.`,
    },
    courage: {
      short: `${person}, give me courage for the next honest step.`,
      long: `${person}, give me courage for the next honest step — without hatred, without performance, without abandoning tenderness.`,
    },
    calm: {
      short: `${person}, calm the storm in my thoughts.`,
      long: `${person}, calm the storm in my thoughts. Teach my body to breathe before my mouth speaks.`,
    },
    grateful: {
      short: `${person}, thank you for what still holds me today.`,
      long: `${person}, thank you for what still holds me today — especially the small gifts I forget to name.`,
    },
    unknown: {
      short: `${person}, I do not know what I feel. Meet me in the not-knowing.`,
      long: `${person}, I do not know what I feel. Meet me in the not-knowing without rushing me to fake clarity.`,
    },
  }

  const body = {
    apologise:
      'Give me humility to own my part. Help me speak truth without self-hatred. Let my apology repair what can be repaired and release what cannot.',
    forgive:
      'I do not want bitterness to own my days. Help me set down what I am ready to set down — slowly, honestly, without forcing peace.',
    courage:
      'Fear is loud. Help me act with integrity anyway — one small brave choice at a time.',
    calm:
      'When I want to react, slow me down. Let pause be strength, not weakness.',
    grateful:
      'Turn my eyes toward goodness without denying what is hard. Let gratitude widen my heart.',
    unknown:
      'Sit with me before I fix myself. Help me name what is true without shame.',
  }

  const situationLine = situation?.trim()
    ? `\n\nIn this situation — ${situation.trim()} — walk with me.`
    : '\n\nIn whatever I face today, walk with me.'

  const key = outcome.id in opening ? outcome.id : 'unknown'
  const openLine = opening[key][length === 'long' ? 'long' : 'short']

  if (length === 'long') {
    return `${openLine}

${body[key]}${situationLine}

Help me love what is true more than what is comfortable. Amen.`
  }

  return `${openLine} ${body[key]}${situationLine} Amen.`
}

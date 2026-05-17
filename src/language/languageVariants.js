/**
 * Global mode-aware language variants.
 * neutral = default, no religious assumptions
 * spiritual = gentle sacred language, still non-denominational
 * quiet = minimal words
 */

/** @typedef {'neutral' | 'spiritual' | 'quiet'} ExperienceMode */

/** @type {Record<ExperienceMode, { love: string; journey: string; reflection: string; prayerOptional: string }>} */
export const languageVariants = {
  neutral: {
    love: 'deep care',
    journey: 'meaningful path',
    reflection: 'reflection',
    prayerOptional: 'If it helps, you may sit quietly with these words.',
  },
  spiritual: {
    love: 'Unparalleled Love',
    journey: 'Path of Unparalleled Love',
    reflection: 'gentle reflection',
    prayerOptional: 'If you wish, you may offer this as a quiet prayer.',
  },
  quiet: {
    love: 'care',
    journey: 'path',
    reflection: 'pause',
    prayerOptional: 'Breathe.',
  },
}

/**
 * @param {ExperienceMode} mode
 */
export function getLanguageVariant(mode) {
  const safe = ['neutral', 'spiritual', 'quiet'].includes(mode) ? mode : 'neutral'
  return languageVariants[safe]
}

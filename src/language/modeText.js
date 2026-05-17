/**
 * @typedef {'neutral' | 'spiritual' | 'quiet'} ExperienceMode
 */

/**
 * @param {Record<string, string> | string | null | undefined} textObject
 * @param {ExperienceMode} [mode]
 */
export function getModeText(textObject, mode = 'neutral') {
  if (textObject == null) return ''
  if (typeof textObject === 'string') return textObject
  const safe = ['neutral', 'spiritual', 'quiet'].includes(mode) ? mode : 'neutral'
  return textObject[safe] || textObject.neutral || ''
}

/**
 * @param {string} [mode]
 * @returns {ExperienceMode}
 */
export function getSafeMode(mode) {
  return ['neutral', 'spiritual', 'quiet'].includes(mode) ? mode : 'neutral'
}

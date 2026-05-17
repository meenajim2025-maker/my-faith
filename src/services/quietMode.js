import { applySpiritualDisplayText } from '../data/spiritualLanguage.js'

/**
 * Quiet Mode: even softer wording for seekers while keeping the same heart.
 * Display-only transforms — not clinical or diagnostic.
 * @param {string} text
 * @returns {string}
 */
export function applyQuietText(text) {
  if (text == null || typeof text !== 'string') return text
  let s = applySpiritualDisplayText(text)

  s = s.replace(/\bUnparalleled Love\b/g, 'the gift of love')
  s = s.replace(/\bLove Himself\b/gi, 'love made visible')
  s = s.replace(/\bGod\b/g, 'the sacred')
  s = s.replace(/\bSacred Love\b/g, 'love')
  s = s.replace(/\bAmen\b\.?/gi, 'So may it be.')

  s = s.replace(/\s{2,}/g, ' ')
  return s.trim()
}

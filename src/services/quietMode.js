/**
 * Quiet Mode: soften explicit religious wording for seekers while keeping the same heart.
 * Display-only transforms — not clinical or diagnostic.
 * @param {string} text
 * @returns {string}
 */
export function applyQuietText(text) {
  if (text == null || typeof text !== 'string') return text
  let s = text

  s = s.replace(/\bthe Gospels\b/gi, 'these stories')
  s = s.replace(/\bGospels\b/g, 'stories')
  s = s.replace(/\bGospel\b/gi, 'story')
  s = s.replace(/\bChristian\b/gi, 'human')
  s = s.replace(/\bJesus Christ\b/gi, 'a life of mercy')
  s = s.replace(/\bJesus\b/g, 'a teacher of mercy')
  s = s.replace(/\bChrist\b/g, 'mercy')
  s = s.replace(/\bLord\b/g, 'Love')
  s = s.replace(/\bGod\b/g, 'the sacred')
  s = s.replace(/\bAmen\b\.?/gi, 'So may it be.')

  s = s.replace(/\s{2,}/g, ' ')
  return s.trim()
}

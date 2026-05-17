import { getModeText } from './modeText.js'

/**
 * @param {string | Record<string, string> | null | undefined} value
 * @param {string} [mode]
 */
export function resolveModeCopy(value, mode = 'neutral') {
  if (value == null) return ''
  if (typeof value === 'string') return value
  return getModeText(value, mode)
}

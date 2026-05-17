import { getModeText, getSafeMode } from '../../language/modeText.js'

export { getModeText, getSafeMode }

/**
 * @param {string} mode
 * @param {Record<string, string>} block
 */
export function pickModeCopy(mode, block) {
  return getModeText(block, getSafeMode(mode))
}

/**
 * @param {{ title: string }} story
 * @param {string} takeaway
 */
export function buildTakeawayCopyText(story, takeaway) {
  return [`Story Path: ${story.title}`, '', takeaway].join('\n')
}

/**
 * @param {number} current
 * @param {number} total
 */
export function progressPercent(current, total) {
  if (total <= 0) return 0
  return Math.round(((current + 1) / total) * 100)
}

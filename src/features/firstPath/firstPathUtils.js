export { getModeText, getSafeMode } from '../../language/modeText.js'
import { getFirstPathMoment, getFirstPathSummary } from './firstPathCopy.js'
import { firstPathMoments } from './firstPathFlow.js'

/**
 * @param {{ title: string; body: string; invite: string; visitedCount?: number }} summary
 * @param {string[]} [visitedMomentIds]
 * @param {string} [mode]
 */
export function buildFirstPathCopyText(summary, visitedMomentIds = [], mode = 'neutral') {
  const lines = ['The First Path — reflection', '', summary.title, '', summary.body, '', summary.invite]

  if (visitedMomentIds.length > 0) {
    lines.push('', 'Moments visited:')
    for (const id of visitedMomentIds) {
      const moment = getFirstPathMoment(id, mode)
      const meta = firstPathMoments.find((m) => m.id === id)
      if (moment && meta) {
        lines.push(`${meta.number}. ${moment.title}`)
        lines.push(`  ${moment.humanInsight}`)
      }
    }
  }

  return lines.join('\n')
}

/**
 * @param {string} [mode]
 * @param {string[]} [visitedMomentIds]
 */
export function buildFirstPathSummaryForMode(mode, visitedMomentIds) {
  return getFirstPathSummary(mode, visitedMomentIds)
}

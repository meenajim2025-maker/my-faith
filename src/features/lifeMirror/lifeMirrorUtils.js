export { getModeText, getSafeMode } from '../../language/modeText.js'

/**
 * @param {{ feelingText: string; needText: string; supportText: string; stepText: string; themeEcho?: string }} summary
 */
export function buildCopyText(summary) {
  const lines = [
    'Life Mirror reflection',
    '',
    summary.feelingText,
    summary.needText,
    summary.supportText,
    summary.stepText,
  ]
  if (summary.themeEcho) lines.push('', summary.themeEcho)
  return lines.join('\n')
}

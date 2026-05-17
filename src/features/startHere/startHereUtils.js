export { getModeText, getSafeMode } from '../../language/modeText.js'

/**
 * @param {{
 *   gentleThought: string
 *   whyThisHelps?: string
 *   affirmation?: string
 *   quietPractice: string
 *   oneSmallStep: string
 *   shareableLine: string
 *   inYourWords?: string
 * }} summary
 */
export function buildCopyText(summary) {
  const lines = [
    'Start Here',
    '',
    'Gentle thought:',
    summary.gentleThought,
  ]

  if (summary.inYourWords) {
    lines.push('', 'In your words:', summary.inYourWords)
  }
  if (summary.affirmation) {
    lines.push('', 'Encouragement:', summary.affirmation)
  }
  if (summary.whyThisHelps) {
    lines.push('', 'Why we asked:', summary.whyThisHelps)
  }

  lines.push(
    '',
    'Quiet practice:',
    summary.quietPractice,
    '',
    'One small step:',
    summary.oneSmallStep,
    '',
    'Shareable line:',
    summary.shareableLine,
  )

  return lines.join('\n')
}

/**
 * @param {{ shareableLine: string; gentleThought: string; affirmation?: string }} summary
 */
export function buildSharePayload(summary) {
  const parts = [summary.shareableLine, summary.gentleThought]
  if (summary.affirmation) parts.push(summary.affirmation)
  return {
    title: 'Start Here — a gentle moment',
    text: parts.join('\n\n'),
  }
}

/** @returns {Record<string, string>} */
export function createEmptyAnswers() {
  return {
    carrying: '',
    carryingText: '',
    carryingDetail: '',
    bodyNotice: '',
    bodyNoticeText: '',
    help: '',
    helpText: '',
    support: '',
    supportText: '',
    readiness: '',
    readinessText: '',
  }
}

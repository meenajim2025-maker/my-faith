/** @typedef {'neutral' | 'spiritual' | 'quiet'} FirstPathMode */

export const firstPathOpening = {
  id: 'opening',
  type: 'intro',
  title: {
    neutral: 'The First Path',
    spiritual: 'The First Path',
    quiet: 'Begin',
  },
  body: {
    neutral:
      'A gentle beginning for anyone curious about the inner life. You do not need to belong to a group first. No test. No hurry.',
    spiritual:
      'A gentle beginning for the inner life. You do not need to prove anything. Walk at your own pace.',
    quiet: 'A quiet beginning. Your pace.',
  },
  actionLabel: {
    neutral: 'Start journey',
    spiritual: 'Start journey',
    quiet: 'Start',
  },
}

/** @type {{ id: string; number: number; themes: string[] }[]} */
export const firstPathMoments = [
  { id: 'quiet-beginning', number: 1, themes: ['release', 'awareness'] },
  { id: 'inner-mirror', number: 2, themes: ['awareness', 'non-harm'] },
  { id: 'fire-of-desire', number: 3, themes: ['release', 'awareness', 'non-harm'] },
  { id: 'gentle-release', number: 4, themes: ['release', 'renewal'] },
  { id: 'wound-and-return', number: 5, themes: ['renewal', 'awareness'] },
  { id: 'way-of-harmlessness', number: 6, themes: ['non-harm', 'awareness'] },
  { id: 'good-order', number: 7, themes: ['good-order', 'non-harm'] },
  { id: 'courage-conscience', number: 8, themes: ['conscience', 'dignity'] },
  { id: 'life-of-service', number: 9, themes: ['dignity', 'public-duty'] },
  { id: 'open-door', number: 10, themes: ['renewal', 'release', 'dignity'] },
]

export const firstPathStepOrder = [
  'opening',
  ...firstPathMoments.map((m) => m.id),
  'summary',
]

export const firstPathSummary = {
  title: {
    neutral: 'You have begun',
    spiritual: 'You have begun',
    quiet: 'Enough for now',
  },
  body: {
    neutral:
      'You have begun by noticing, loosening, returning, choosing kindness, honouring conscience, and taking one small step toward meaning.',
    spiritual:
      'You have begun by noticing, releasing, returning in mercy, opening the heart, choosing compassion, and taking one gentle step.',
    quiet: 'Noticed. Loosened. Returned. Kind. One step.',
  },
  invite: {
    neutral: 'You may return to any moment. The path continues with ordinary days.',
    spiritual: 'You may return gently. The sacred often grows in small, faithful days.',
    quiet: 'Return when ready.',
  },
}

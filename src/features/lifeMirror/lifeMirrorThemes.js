import { getThemePhrase } from '../../language/wisdomThemes.js'

/** @type {Record<string, string[]>} */
export const lifeMirrorFeelingThemes = {
  heavy: ['awareness', 'release'],
  anxious: ['awareness', 'release'],
  sad: ['awareness', 'renewal'],
  angry: ['awareness', 'non-harm'],
  numb: ['awareness', 'renewal'],
  lost: ['awareness', 'renewal'],
  grateful: ['awareness', 'release'],
  peaceful: ['release', 'awareness'],
}

/** @type {Record<string, string[]>} */
export const lifeMirrorNeedThemes = {
  rest: ['release', 'awareness'],
  safety: ['awareness', 'public-duty'],
  connection: ['dignity', 'good-order'],
  clarity: ['awareness', 'good-order'],
  forgiveness: ['renewal', 'non-harm'],
  courage: ['conscience', 'dignity'],
  space: ['release', 'awareness'],
  hope: ['renewal', 'dignity'],
}

/** @type {Record<string, string[]>} */
export const lifeMirrorSupportThemes = {
  'short-reflection': ['awareness'],
  breathing: ['release'],
  write: ['awareness', 'renewal'],
  'small-step': ['dignity', 'good-order'],
}

/** @type {Record<string, string[]>} */
export const lifeMirrorStepThemes = {
  'drink-water': ['non-harm', 'public-duty'],
  'step-away': ['release'],
  'message-someone': ['dignity', 'good-order'],
  'write-one-line': ['awareness', 'renewal'],
  'sit-quietly': ['release', 'awareness'],
  'come-back-later': ['release', 'renewal'],
}

/**
 * One gentle theme line for the summary card (not shown in UI as a label).
 * @param {{ feeling: string; need: string; support?: string; step?: string }} answers
 * @param {string} [mode]
 */
export function getLifeMirrorThemeEcho(answers, mode = 'neutral') {
  const ids = new Set([
    ...(lifeMirrorFeelingThemes[answers.feeling] ?? []),
    ...(lifeMirrorNeedThemes[answers.need] ?? []),
    ...(answers.support ? lifeMirrorSupportThemes[answers.support] ?? [] : []),
    ...(answers.step ? lifeMirrorStepThemes[answers.step] ?? [] : []),
  ])
  const first = [...ids][0]
  return first ? getThemePhrase(first, mode) : ''
}

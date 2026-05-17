/**
 * Universal tension pairs — shown in UI, never tied to a tradition.
 * @typedef {{ id: string; label: string }} TensionPair
 */

/** @type {TensionPair[]} */
export const tensionPairs = [
  { id: 'truth-comfort', label: 'Truth vs comfort' },
  { id: 'peace-revenge', label: 'Peace vs revenge' },
  { id: 'desire-freedom', label: 'Desire vs freedom' },
  { id: 'shame-return', label: 'Shame vs return' },
  { id: 'loneliness-connection', label: 'Loneliness vs connection' },
  { id: 'control-trust', label: 'Control vs trust' },
  { id: 'noise-silence', label: 'Noise vs silence' },
  { id: 'image-honesty', label: 'Image vs honesty' },
]

/** @type {Record<string, string>} */
export const tensionLabelById = Object.fromEntries(tensionPairs.map((t) => [t.id, t.label]))

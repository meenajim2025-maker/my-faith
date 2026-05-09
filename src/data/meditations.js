/**
 * @typedef {{
 *   id: string
 *   title: string
 *   duration: number
 *   theme: string
 *   script: string
 * }} Meditation
 */

/** @type {Meditation[]} */
export const meditations = [
  {
    id: 'morning',
    title: 'Morning offering',
    duration: 3,
    theme: 'Beginning the day',
    script:
      'Sit quietly. Breathe in peace. Breathe out hurry. Offer this day to God. Ask for a heart that is patient, truthful and kind. Think of one person you may meet today. Ask for grace to treat them with love.',
  },
  {
    id: 'evening-examen',
    title: 'Evening reflection',
    duration: 5,
    theme: 'Reviewing the day',
    script:
      'Become still. Remember one good thing from today. Give thanks. Notice one moment where you were not your best. Ask for mercy. Look towards tomorrow with hope. Choose one small act of love for the next day.',
  },
  {
    id: 'peace',
    title: 'Prayer for peace',
    duration: 3,
    theme: 'Calm',
    script:
      'Place your hand over your heart. Breathe slowly. Say quietly: Lord, bring peace to my thoughts. Bring peace to my words. Bring peace to my actions. Let me become a small sign of peace today.',
  },
  {
    id: 'mary',
    title: 'With Mary',
    duration: 4,
    theme: 'Trust',
    script:
      "Imagine Mary listening with trust. Ask for a heart that listens before reacting. Ask for courage to say yes to goodness. End with: May I carry Christ's love quietly into the world.",
  },
]

/** @param {string} id */
export function getMeditationById(id) {
  return meditations.find((m) => m.id === id) ?? null
}

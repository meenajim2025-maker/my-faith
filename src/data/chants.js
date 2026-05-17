/**
 * @typedef {{
 *   id: string
 *   title: string
 *   meaning: string
 *   line: string
 * }} Chant
 */

/** @type {Chant[]} */
export const chants = [
  {
    id: 'kyrie',
    title: 'Kyrie eleison',
    meaning: 'Sacred Love, have mercy',
    line: 'Kyrie eleison',
  },
  {
    id: 'dona',
    title: 'Dona nobis pacem',
    meaning: 'Give us peace',
    line: 'Dona nobis pacem',
  },
  {
    id: 'ubi',
    title: 'Ubi caritas',
    meaning: 'Where charity and love are, God is there',
    line: 'Ubi caritas et amor',
  },
  {
    id: 'magnificat',
    title: 'Magnificat refrain',
    meaning: 'My soul gives thanks',
    line: 'My soul gives thanks to Sacred Love',
  },
]

/** @param {string} id */
export function getChantById(id) {
  return chants.find((c) => c.id === id) ?? null
}

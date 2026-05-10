/**
 * Split built prayer text into short lines for contemplative, line-by-line reading.
 * @param {string} prayer
 * @returns {string[]}
 */
export function splitPrayerIntoLines(prayer) {
  const t = prayer.trim()
  if (!t) return []

  const paragraphs = t.split(/\n+/).map((p) => p.trim()).filter(Boolean)
  if (paragraphs.length > 1) return paragraphs

  const block = paragraphs[0] || t

  const sentences = block
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean)
  if (sentences.length > 1) return sentences

  const clauses = block.split(/,\s+/).map((c) => c.trim()).filter(Boolean)
  if (clauses.length > 1) {
    return clauses.map((c, i) => (i < clauses.length - 1 ? `${c},` : c))
  }

  return [block]
}

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { splitPrayerIntoLines } from '../services/splitPrayerLines.js'

const PAUSE_MS = 3200

/**
 * @param {{
 *   prayerText: string
 *   autoAdvance: boolean
 * }} props
 */
export default function ContemplativePrayerView({ prayerText, autoAdvance }) {
  const lines = splitPrayerIntoLines(prayerText)
  const [index, setIndex] = useState(0)
  const [breathIn, setBreathIn] = useState(true)

  useEffect(() => {
    setIndex(0)
  }, [prayerText])

  useEffect(() => {
    if (!autoAdvance || lines.length <= 1) return undefined
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1 >= lines.length ? i : i + 1))
    }, PAUSE_MS)
    return () => window.clearInterval(id)
  }, [autoAdvance, lines.length])

  useEffect(() => {
    const id = window.setInterval(() => {
      setBreathIn((v) => !v)
    }, 4000)
    return () => window.clearInterval(id)
  }, [])

  const line = lines[index] || ''
  const atEnd = index >= lines.length - 1

  return (
    <div className="contemplative-prayer">
      <p className="contemplative-breath" aria-live="polite">
        {breathIn ? 'Breathe in gently…' : 'Breathe out slowly…'}
      </p>

      <div className="contemplative-window" role="status" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.p
            key={`${index}-${line.slice(0, 24)}`}
            className="contemplative-line"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {line}
          </motion.p>
        </AnimatePresence>
      </div>

      <p className="contemplative-meta muted">
        Line {index + 1} of {lines.length}
      </p>

      <div className="contemplative-controls">
        <button
          type="button"
          className="secondary-btn"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
        >
          Previous line
        </button>
        <button
          type="button"
          className="primary-btn"
          onClick={() => setIndex((i) => (i + 1 >= lines.length ? i : i + 1))}
          disabled={atEnd}
        >
          {atEnd ? 'End' : 'Next line'}
        </button>
      </div>
    </div>
  )
}

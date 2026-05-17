import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { lovePathQuietTitles } from '../data/jesusPathMoments.js'
import { UI_LABELS } from '../data/spiritualLanguage.js'
import { useCalmPreferences } from '../context/CalmPreferencesContext.jsx'
import { applySpiritualDisplayText } from '../data/spiritualLanguage.js'
import { applyQuietText } from '../services/quietMode.js'

function displayText(text, quietMode) {
  const base = applySpiritualDisplayText(text)
  return quietMode ? applyQuietText(base) : base
}
import { loadJson, saveJson } from '../services/storage.js'

const STORAGE_KEY = 'jesus_path_moment_index'

/**
 * @param {{ moments: Array<{ id: string, title: string, story: string, question: string, reflection: string, smallAct: string }> }} props
 */
export default function WalkingWithJesus({ moments }) {
  const { quietMode } = useCalmPreferences()
  const total = moments.length
  const [index, setIndex] = useState(() => {
    const max = Math.max(0, moments.length - 1)
    const saved = loadJson(STORAGE_KEY, null)
    if (typeof saved !== 'number' || !Number.isFinite(saved)) return 0
    return Math.min(Math.max(0, Math.floor(saved)), max)
  })

  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(0, total - 1)))
  }, [total])

  useEffect(() => {
    saveJson(STORAGE_KEY, index)
  }, [index])

  const moment = moments[index]
  const isFirst = index === 0
  const isLast = index === total - 1

  if (!moment || total === 0) {
    return (
      <p className="muted" role="status">
        Moments will appear here when available.
      </p>
    )
  }

  const momentTitle = displayText(
    quietMode ? lovePathQuietTitles[moment.id] || moment.title : moment.title,
    quietMode,
  )
  const storyText = displayText(moment.story, quietMode)
  const reflectionText = displayText(moment.reflection, quietMode)
  const actText = displayText(moment.smallAct, quietMode)
  const pathTitle = quietMode ? UI_LABELS.pathSectionQuiet : UI_LABELS.pathSection

  return (
    <div className="jesus-path">
      <header className="jesus-path-header card">
        <h2 className="section-title" style={{ marginBottom: 6 }}>
          {pathTitle}
        </h2>
        <p className="muted" style={{ margin: 0 }}>
          Not a lesson. A journey.
        </p>
        <p className="jesus-path-progress" aria-live="polite">
          Moment {index + 1} of {total}
        </p>
        <div
          className="jesus-path-progress-bar"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={total}
          aria-valuenow={index + 1}
          aria-label="Progress through moments"
        >
          <div
            className="jesus-path-progress-fill"
            style={{ width: `${((index + 1) / total) * 100}%` }}
          />
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.article
          key={moment.id}
          className="jesus-path-moment card"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="jesus-path-moment-title">{momentTitle}</h3>

          <section className="jesus-path-block" aria-label="Story">
            <span className="jesus-path-label">A short story</span>
            <p className="jesus-path-story">{storyText}</p>
          </section>

          <section className="jesus-path-block" aria-label="Question">
            <span className="jesus-path-label">A human question</span>
            <p className="jesus-path-question">{displayText(moment.question, quietMode)}</p>
          </section>

          <section className="reflection" aria-label="Reflection">
            <span className="jesus-path-label">A reflection</span>
            <p className="jesus-path-reflection-text" style={{ margin: '8px 0 0' }}>
              {reflectionText}
            </p>
          </section>

          <section className="jesus-path-act" aria-label="Small act">
            <span className="jesus-path-label">One small act</span>
            <p className="jesus-path-act-text">{actText}</p>
          </section>
        </motion.article>
      </AnimatePresence>

      <div className="jesus-path-nav">
        <button
          type="button"
          className="secondary-btn"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={isFirst}
        >
          Previous
        </button>

        {!isLast ? (
          <button
            type="button"
            className="primary-btn"
            onClick={() => setIndex((i) => Math.min(total - 1, i + 1))}
          >
            Next moment
          </button>
        ) : (
          <button
            type="button"
            className="primary-btn"
            onClick={() => {
              setIndex(0)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            Walk it again
          </button>
        )}
      </div>

      <p className="footer-note jesus-path-footnote">
        {quietMode
          ? applyQuietText(
              'Take your time. There is no quiz. Return whenever you need stillness. This is for reflection and prayer — not crisis care; if you or someone else is unsafe, seek urgent help locally.',
            )
          : 'Take your time. There is no quiz. Return whenever you need stillness. This is for reflection and prayer — not crisis care; if you or someone else is unsafe, seek urgent help locally.'}
      </p>
    </div>
  )
}

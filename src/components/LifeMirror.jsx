import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useCalmPreferences } from '../context/CalmPreferencesContext.jsx'
import {
  getLifeMirrorResponse,
  lifeMirrorPlaces,
  lifeMirrorWeights,
} from '../data/lifeMirror.js'
import { applySpiritualDisplayText, UI_LABELS } from '../data/spiritualLanguage.js'
import { applyQuietText } from '../services/quietMode.js'

function displayText(text, quietMode) {
  const base = applySpiritualDisplayText(text)
  return quietMode ? applyQuietText(base) : base
}

const fade = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
}

export default function LifeMirror() {
  const { quietMode } = useCalmPreferences()
  const [step, setStep] = useState(1)
  const [weightId, setWeightId] = useState(/** @type {string | null} */ (null))
  const [placeId, setPlaceId] = useState(/** @type {string | null} */ (null))

  const mirror =
    weightId && placeId ? getLifeMirrorResponse(weightId, placeId) : null

  const intro =
    'A quiet reflection — not a verdict. Choose what feels true; the app mirrors back gentleness, a love-centred insight, and one grounding step.'

  return (
    <div className="life-mirror">
      <header className="card life-mirror-header">
        <h2 className="section-title" style={{ marginBottom: 6 }}>
          Life Mirror
        </h2>
        <p className="muted" style={{ margin: 0 }}>
          {displayText(intro, quietMode)}
        </p>
      </header>

      <AnimatePresence mode="wait">
        {step === 1 ? (
          <motion.section
            key="w"
            className="life-mirror-panel card"
            {...fade}
            aria-labelledby="life-mirror-weight-heading"
          >
            <h3 id="life-mirror-weight-heading" className="life-mirror-step-title">
              What’s weighing on you?
            </h3>
            <p className="life-mirror-hint">No wrong answers. Pick what fits today.</p>
            <div className="life-mirror-tiles">
              {lifeMirrorWeights.map((w) => (
                <button
                  key={w.id}
                  type="button"
                  className={`life-mirror-tile${weightId === w.id ? ' selected' : ''}`}
                  onClick={() => {
                    setWeightId(w.id)
                    setStep(2)
                  }}
                >
                  {w.label}
                </button>
              ))}
            </div>
          </motion.section>
        ) : null}

        {step === 2 ? (
          <motion.section
            key="p"
            className="life-mirror-panel card"
            {...fade}
            aria-labelledby="life-mirror-place-heading"
          >
            <h3 id="life-mirror-place-heading" className="life-mirror-step-title">
              Where does it show up?
            </h3>
            <p className="life-mirror-hint">This helps tailor one small, human step.</p>
            <div className="life-mirror-tiles">
              {lifeMirrorPlaces.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className={`life-mirror-tile${placeId === p.id ? ' selected' : ''}`}
                  onClick={() => {
                    setPlaceId(p.id)
                    setStep(3)
                  }}
                >
                  {p.label}
                </button>
              ))}
            </div>
            <div className="life-mirror-nav-row">
              <button
                type="button"
                className="secondary-btn"
                onClick={() => {
                  setStep(1)
                  setPlaceId(null)
                }}
              >
                Back
              </button>
            </div>
          </motion.section>
        ) : null}

        {step === 3 && mirror ? (
          <motion.div
            key="r"
            className="life-mirror-result-wrap"
            {...fade}
            role="region"
            aria-live="polite"
            aria-label="Your reflection"
          >
            <article className="card life-mirror-result">
              <p className="life-mirror-chips" aria-label="Your choices">
                <span className="life-mirror-chip">{mirror.weightLabel}</span>
                <span className="life-mirror-chip-muted">·</span>
                <span className="life-mirror-chip">{mirror.placeLabel}</span>
              </p>

              <section className="life-mirror-block" aria-label="A truth">
                <span className="life-mirror-label">A truth</span>
                <p className="life-mirror-truth">
                  {displayText(mirror.truth, quietMode)}
                </p>
              </section>

              <section
                className="life-mirror-block"
                aria-label={quietMode ? UI_LABELS.insightLabelQuiet : UI_LABELS.insightLabel}
              >
                <span className="life-mirror-label">
                  {quietMode ? UI_LABELS.insightLabelQuiet : UI_LABELS.insightLabel}
                </span>
                <p className="life-mirror-insight">
                  {displayText(mirror.jesusInsight, quietMode)}
                </p>
              </section>

              <section className="life-mirror-act" aria-label="Try today">
                <span className="life-mirror-label">Try today</span>
                <p className="life-mirror-act-text">
                  {displayText(mirror.act, quietMode)}
                </p>
              </section>

              <details className="life-mirror-prayer-details">
                <summary>{quietMode ? 'If you want a short phrase' : 'If you want to pray'}</summary>
                <p className="life-mirror-prayer">
                  {displayText(mirror.prayer, quietMode)}
                </p>
              </details>
            </article>

            <div className="life-mirror-nav-row">
              <button
                type="button"
                className="secondary-btn"
                onClick={() => {
                  setStep(2)
                }}
              >
                Change where
              </button>
              <button
                type="button"
                className="secondary-btn"
                onClick={() => {
                  setStep(1)
                  setWeightId(null)
                  setPlaceId(null)
                }}
              >
                Start over
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <p className="footer-note life-mirror-footnote">
        {quietMode
          ? applyQuietText(
              'Life Mirror supports reflection and does not replace pastoral care, therapy, or emergency help. If you or someone else is unsafe, seek urgent local support.',
            )
          : 'Life Mirror supports reflection and does not replace pastoral care, therapy, or emergency help. If you or someone else is unsafe, seek urgent local support.'}
      </p>
    </div>
  )
}

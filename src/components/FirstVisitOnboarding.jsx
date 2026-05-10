import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function pathOptionsFor(quietMode) {
  return [
    { id: 'peace', label: 'I’m looking for peace' },
    {
      id: 'curious',
      label: quietMode ? 'I’m curious about meaning and faith' : 'I’m curious about Christian faith',
    },
    { id: 'tired', label: 'I believe, but I feel tired' },
  ]
}

const stepMotion = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
}

/**
 * @param {{ onComplete: (pathChoice: 'peace' | 'curious' | 'tired' | null) => void, quietMode?: boolean }} props
 */
export default function FirstVisitOnboarding({ onComplete, quietMode = false }) {
  const pathOptions = pathOptionsFor(quietMode)
  const [step, setStep] = useState(1)
  const [pathChoice, setPathChoice] = useState(
    /** @type {'peace' | 'curious' | 'tired' | null} */ (null),
  )

  return (
    <div
      className="first-visit-onboarding"
      role="dialog"
      aria-modal="true"
      aria-labelledby="first-visit-heading"
    >
      <div className="first-visit-backdrop" aria-hidden />
      <div className="first-visit-inner">
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.section
              key="stillness"
              className="first-visit-screen"
              {...stepMotion}
              aria-label="Welcome"
            >
              <p id="first-visit-heading" className="first-visit-line">
                You are welcome here.
              </p>
              <button
                type="button"
                className="first-visit-primary first-visit-primary-button"
                onClick={() => setStep(2)}
              >
                Begin quietly
              </button>
            </motion.section>
          ) : null}

          {step === 2 ? (
            <motion.section
              key="choice"
              className="first-visit-screen first-visit-screen-choice"
              {...stepMotion}
              aria-label="What brings you here"
            >
              <p className="first-visit-hint">No right answer — just what feels true today.</p>
              <div className="first-visit-tiles">
                {pathOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    className="first-visit-tile"
                    onClick={() => {
                      setPathChoice(opt.id)
                      setStep(3)
                    }}
                  >
                    <span className="first-visit-tile-text">{opt.label}</span>
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="first-visit-back"
                onClick={() => setStep(1)}
              >
                Back
              </button>
            </motion.section>
          ) : null}

          {step === 3 ? (
            <motion.section
              key="promise"
              className="first-visit-screen first-visit-screen-promise"
              {...stepMotion}
              aria-label="A gentle promise"
            >
              <p className="first-visit-promise-lead">
                This is not about arguments or pressure.
                <br />
                <span className="first-visit-promise-sub">
                  It is about love, meaning, and learning how to live well.
                </span>
              </p>
              <button
                type="button"
                className="first-visit-primary first-visit-primary-button"
                onClick={() => onComplete(pathChoice)}
              >
                Show me
              </button>
              <button
                type="button"
                className="first-visit-back"
                onClick={() => setStep(2)}
              >
                Back
              </button>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  )
}

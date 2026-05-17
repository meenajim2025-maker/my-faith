import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SoftCard from '../../components/shared/SoftCard.jsx'
import ModeAwareText from '../../components/shared/ModeAwareText.jsx'
import {
  firstPathOpening,
  firstPathMoments,
  firstPathStepOrder,
  firstPathSummary,
} from './firstPathFlow.js'
import { getFirstPathMoment, getFirstPathSummary } from './firstPathCopy.js'
import {
  buildFirstPathCopyText,
  getModeText,
  getSafeMode,
} from './firstPathUtils.js'

const momentStepMotion = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: { duration: 0.32 },
}

/**
 * @param {{
 *   mode?: string
 *   onSave?: (payload: {
 *     type: string
 *     createdAt: string
 *     mode: string
 *     visitedMomentIds: string[]
 *     summary: ReturnType<typeof getFirstPathSummary>
 *   }) => void
 *   showModeToggle?: boolean
 *   onModeChange?: (mode: string) => void
 * }} props
 */
export default function FirstPath({
  mode = 'neutral',
  onSave,
  showModeToggle = false,
  onModeChange,
}) {
  const safeMode = getSafeMode(mode)
  const steps = firstPathStepOrder
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [visitedMomentIds, setVisitedMomentIds] = useState(/** @type {string[]} */ ([]))
  const [copyNotice, setCopyNotice] = useState('')
  const [saveNotice, setSaveNotice] = useState('')

  const currentStep = steps[currentStepIndex]
  const isOpening = currentStep === 'opening'
  const isSummary = currentStep === 'summary'
  const momentMeta = firstPathMoments.find((m) => m.id === currentStep)
  const momentContent = momentMeta ? getFirstPathMoment(momentMeta.id, safeMode) : null

  const summary = useMemo(
    () => getFirstPathSummary(safeMode, visitedMomentIds),
    [safeMode, visitedMomentIds],
  )

  const progressPct = ((currentStepIndex + 1) / steps.length) * 100

  function goNext() {
    if (momentMeta && !visitedMomentIds.includes(momentMeta.id)) {
      setVisitedMomentIds((prev) => [...prev, momentMeta.id])
    }
    setCurrentStepIndex((i) => Math.min(i + 1, steps.length - 1))
    setCopyNotice('')
    setSaveNotice('')
  }

  function goBack() {
    setCurrentStepIndex((i) => Math.max(i - 1, 0))
    setCopyNotice('')
    setSaveNotice('')
  }

  function restart() {
    setCurrentStepIndex(0)
    setVisitedMomentIds([])
    setCopyNotice('')
    setSaveNotice('')
  }

  async function copyReflection() {
    const text = buildFirstPathCopyText(summary, visitedMomentIds, safeMode)
    try {
      await navigator.clipboard.writeText(text)
      setCopyNotice('Reflection copied.')
    } catch {
      setCopyNotice('Copy was not available in this browser.')
    }
  }

  function saveReflection() {
    if (typeof onSave !== 'function') return
    onSave({
      type: 'first-path',
      createdAt: new Date().toISOString(),
      mode: safeMode,
      visitedMomentIds,
      summary,
    })
    setSaveNotice('Saved to your journal.')
  }

  const labels = {
    insight:
      safeMode === 'quiet'
        ? 'Insight'
        : safeMode === 'spiritual'
          ? 'A human insight'
          : 'A human insight',
    practice:
      safeMode === 'quiet' ? 'Practice' : 'A simple practice',
    question:
      safeMode === 'quiet' ? 'Question' : 'A reflection question',
  }

  return (
    <motion.div
      className="fp lm2"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {showModeToggle && onModeChange ? (
        <motion.div className="lm2-mode-bar card">
          <label htmlFor="fp-mode-select" className="lm2-mode-label">
            Experience mode
          </label>
          <p className="muted lm2-mode-hint">
            Neutral welcomes everyone. Spiritual adds gentle sacred language. Quiet uses fewer
            words.
          </p>
          <select
            id="fp-mode-select"
            value={safeMode}
            onChange={(e) => onModeChange(e.target.value)}
            className="lm2-mode-select"
          >
            <option value="neutral">Neutral</option>
            <option value="spiritual">Spiritual</option>
            <option value="quiet">Quiet</option>
          </select>
        </motion.div>
      ) : null}

      <div className="lm2-progress-wrap">
        <p className="lm2-progress-label" aria-live="polite">
          {isSummary
            ? 'Complete'
            : `Step ${currentStepIndex + 1} of ${steps.length}`}
          {momentMeta ? ` · Moment ${momentMeta.number} of ${firstPathMoments.length}` : ''}
        </p>
        <div
          className="lm2-progress-track"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={steps.length}
          aria-valuenow={currentStepIndex + 1}
          aria-label="Progress through The First Path"
        >
          <div className="lm2-progress-fill" style={{ width: `${progressPct}%` }} />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isOpening ? (
          <motion.div key="opening" {...momentStepMotion}>
            <SoftCard className="lm2-panel fp-panel">
              <ModeAwareText
                text={firstPathOpening.title}
                mode={safeMode}
                as="h2"
                className="lm2-title"
              />
              <ModeAwareText
                text={firstPathOpening.body}
                mode={safeMode}
                className="lm2-body muted"
              />
              <p className="fp-tagline muted">
                You can begin spirituality without needing to belong to a group first.
              </p>
              <button type="button" className="primary-btn lm2-primary" onClick={goNext}>
                {getModeText(firstPathOpening.actionLabel, safeMode)}
              </button>
            </SoftCard>
          </motion.div>
        ) : null}

        {momentContent && momentMeta ? (
          <motion.div key={currentStep} {...momentStepMotion}>
            <SoftCard className="lm2-panel fp-panel">
              <p className="fp-moment-badge muted">
                Moment {momentMeta.number} of {firstPathMoments.length}
              </p>
              <h2 className="lm2-title">{momentContent.title}</h2>
              {momentContent.scene ? (
                <p className="fp-scene">{momentContent.scene}</p>
              ) : null}
              {momentContent.tension ? (
                <p className="experience-tension">{momentContent.tension}</p>
              ) : null}
              <p className="fp-intro muted">{momentContent.introduction}</p>

              <section className="fp-block">
                <span className="fp-label">{labels.insight}</span>
                <p className="fp-text">{momentContent.humanInsight}</p>
              </section>

              <section className="fp-block">
                <span className="fp-label">{labels.practice}</span>
                <p className="fp-text">{momentContent.simplePractice}</p>
              </section>

              <section className="fp-block fp-block--question">
                <span className="fp-label">{labels.question}</span>
                <p className="fp-question">{momentContent.reflectionQuestion}</p>
              </section>

              {momentContent.closingLine ? (
                <p className="fp-closing">{momentContent.closingLine}</p>
              ) : null}

              <div className="lm2-nav">
                <button type="button" className="secondary-btn" onClick={goBack}>
                  Back
                </button>
                <button type="button" className="primary-btn" onClick={goNext}>
                  {momentMeta.number === firstPathMoments.length ? 'Finish' : 'Next'}
                </button>
              </div>
            </SoftCard>
          </motion.div>
        ) : null}

        {isSummary ? (
          <motion.div key="summary" {...momentStepMotion}>
            <SoftCard className="lm2-panel lm2-summary fp-summary">
              <ModeAwareText
                text={firstPathSummary.title}
                mode={safeMode}
                as="h2"
                className="lm2-title"
              />
              <ModeAwareText
                text={firstPathSummary.body}
                mode={safeMode}
                className="fp-summary-body-text"
              />
              <ModeAwareText
                text={firstPathSummary.invite}
                mode={safeMode}
                className="muted fp-summary-invite"
              />

              {copyNotice ? (
                <p className="lm2-notice" role="status">
                  {copyNotice}
                </p>
              ) : null}
              {saveNotice ? (
                <p className="lm2-notice lm2-notice--save" role="status">
                  {saveNotice}
                </p>
              ) : null}

              <motion.div className="lm2-nav lm2-nav--summary" layout={false}>
                <button type="button" className="secondary-btn" onClick={goBack}>
                  Back
                </button>
                <button type="button" className="secondary-btn" onClick={restart}>
                  Restart
                </button>
                <button type="button" className="primary-btn" onClick={copyReflection}>
                  Copy reflection
                </button>
                {typeof onSave === 'function' ? (
                  <button
                    type="button"
                    className="primary-btn lm2-save-btn"
                    onClick={saveReflection}
                  >
                    Save to journal
                  </button>
                ) : null}
              </motion.div>

              <p className="footer-note lm2-safety">
                This is for reflection only. If you feel unsafe or unable to cope, please seek
                urgent help from someone nearby or local support services.
              </p>
            </SoftCard>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  )
}

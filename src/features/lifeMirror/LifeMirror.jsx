import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SoftCard from '../../components/shared/SoftCard.jsx'
import ChoiceButton from '../../components/shared/ChoiceButton.jsx'
import ModeAwareText from '../../components/shared/ModeAwareText.jsx'
import { lifeMirrorFlow, lifeMirrorStepOrder, lifeMirrorIntroSteps } from './lifeMirrorFlow.js'
import { tensionLabelById } from '../../language/tensions.js'
import { getLifeMirrorSummary } from './lifeMirrorCopy.js'
import { buildCopyText, getModeText, getSafeMode } from './lifeMirrorUtils.js'

const choiceSteps = ['feeling', 'need', 'support', 'step']

/**
 * @param {{
 *   mode?: string
 *   onSave?: (payload: {
 *     type: string
 *     createdAt: string
 *     mode: string
 *     answers: Record<string, string>
 *     summary: ReturnType<typeof getLifeMirrorSummary>
 *   }) => void
 *   showModeToggle?: boolean
 *   onModeChange?: (mode: string) => void
 * }} props
 */
export default function LifeMirror({
  mode = 'neutral',
  onSave,
  showModeToggle = false,
  onModeChange,
}) {
  const safeMode = getSafeMode(mode)
  const steps = lifeMirrorStepOrder
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [answers, setAnswers] = useState({
    feeling: '',
    need: '',
    support: '',
    step: '',
  })
  const [copyNotice, setCopyNotice] = useState('')
  const [saveNotice, setSaveNotice] = useState('')

  const currentStep = steps[currentStepIndex]

  const summary = useMemo(
    () =>
      getLifeMirrorSummary({
        feeling: answers.feeling,
        need: answers.need,
        support: answers.support,
        step: answers.step,
        mode: safeMode,
      }),
    [answers, safeMode],
  )

  function goNext() {
    setCurrentStepIndex((index) => Math.min(index + 1, steps.length - 1))
  }

  function goBack() {
    setCurrentStepIndex((index) => Math.max(index - 1, 0))
    setCopyNotice('')
    setSaveNotice('')
  }

  function restart() {
    setAnswers({ feeling: '', need: '', support: '', step: '' })
    setCurrentStepIndex(0)
    setCopyNotice('')
    setSaveNotice('')
  }

  function chooseAnswer(stepId, optionId) {
    setAnswers((previous) => ({
      ...previous,
      [stepId]: optionId,
    }))

    window.setTimeout(() => {
      setCurrentStepIndex((index) => Math.min(index + 1, steps.length - 1))
    }, 140)
  }

  async function copyReflection() {
    const text = buildCopyText(summary)
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
      type: 'life-mirror',
      createdAt: new Date().toISOString(),
      mode: safeMode,
      answers,
      summary,
    })
    setSaveNotice('Saved to your journal.')
  }

  const progressPct = ((currentStepIndex + 1) / steps.length) * 100

  return (
    <motion.div
      className="lm2"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {showModeToggle && onModeChange ? (
        <div className="lm2-mode-bar card">
          <label htmlFor="lm2-mode-select" className="lm2-mode-label">
            Experience mode
          </label>
          <p className="muted lm2-mode-hint">
            Neutral is for everyone. Spiritual adds gentle sacred language. Quiet uses fewer words.
          </p>
          <select
            id="lm2-mode-select"
            value={safeMode}
            onChange={(e) => onModeChange(e.target.value)}
            className="lm2-mode-select"
          >
            <option value="neutral">Neutral</option>
            <option value="spiritual">Spiritual</option>
            <option value="quiet">Quiet</option>
          </select>
        </div>
      ) : null}

      <motion.div className="lm2-progress-wrap" aria-hidden={currentStep === 'opening'}>
        <p className="lm2-progress-label" aria-live="polite">
          Step {Math.min(currentStepIndex + 1, steps.length)} of {steps.length}
        </p>
        <div
          className="lm2-progress-track"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={steps.length}
          aria-valuenow={Math.min(currentStepIndex + 1, steps.length)}
          aria-label="Progress through Life Mirror"
        >
          <div className="lm2-progress-fill" style={{ width: `${progressPct}%` }} />
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {lifeMirrorIntroSteps.includes(currentStep) ? (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.32 }}
          >
            <SoftCard className="lm2-panel">
              <ModeAwareText
                text={lifeMirrorFlow[currentStep].title}
                mode={safeMode}
                as="h2"
                className="lm2-title"
              />
              {lifeMirrorFlow[currentStep].tensionId ? (
                <p className="experience-tension">
                  {tensionLabelById[lifeMirrorFlow[currentStep].tensionId]}
                </p>
              ) : null}
              <ModeAwareText
                text={lifeMirrorFlow[currentStep].body}
                mode={safeMode}
                className="lm2-body sh-opening-body muted"
              />
              <button type="button" className="primary-btn lm2-primary" onClick={goNext}>
                {getModeText(lifeMirrorFlow[currentStep].actionLabel, safeMode)}
              </button>
            </SoftCard>
          </motion.div>
        ) : null}

        {choiceSteps.includes(currentStep) ? (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.32 }}
          >
            <ChoiceStep
              step={lifeMirrorFlow[currentStep]}
              mode={safeMode}
              selected={answers[currentStep]}
              onChoose={(optionId) => chooseAnswer(currentStep, optionId)}
              onBack={goBack}
            />
          </motion.div>
        ) : null}

        {currentStep === 'summary' ? (
          <motion.div
            key="summary"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.32 }}
          >
            <SummaryStep
              mode={safeMode}
              summary={summary}
              copyNotice={copyNotice}
              saveNotice={saveNotice}
              onBack={goBack}
              onRestart={restart}
              onCopy={copyReflection}
              onSave={typeof onSave === 'function' ? saveReflection : null}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  )
}

/**
 * @param {{
 *   step: { title: Record<string, string>; options: { id: string; label: string }[] }
 *   mode: string
 *   selected: string
 *   onChoose: (id: string) => void
 *   onBack: () => void
 * }} props
 */
function ChoiceStep({ step, mode, selected, onChoose, onBack }) {
  return (
    <SoftCard className="lm2-panel">
      <ModeAwareText text={step.title} mode={mode} as="h2" className="lm2-title" />
      {step.tensionId ? (
        <p className="experience-tension">{tensionLabelById[step.tensionId]}</p>
      ) : null}
      <p className="lm2-hint muted">Tap one option. You can go back anytime.</p>

      <motion.div className="lm2-choices">
        {step.options.map((option) => (
          <ChoiceButton
            key={option.id}
            selected={selected === option.id}
            onClick={() => onChoose(option.id)}
          >
            {option.label}
          </ChoiceButton>
        ))}
      </motion.div>

      <div className="lm2-nav">
        <button type="button" className="secondary-btn" onClick={onBack}>
          Back
        </button>
      </div>
    </SoftCard>
  )
}

/**
 * @param {{
 *   mode: string
 *   summary: ReturnType<typeof getLifeMirrorSummary>
 *   copyNotice: string
 *   saveNotice: string
 *   onBack: () => void
 *   onRestart: () => void
 *   onCopy: () => void
 *   onSave: (() => void) | null
 * }} props
 */
function SummaryStep({
  mode,
  summary,
  copyNotice,
  saveNotice,
  onBack,
  onRestart,
  onCopy,
  onSave,
}) {
  const title =
    mode === 'quiet'
      ? 'Summary'
      : mode === 'spiritual'
        ? 'A gentle reflection'
        : 'Your reflection'

  const intro =
    mode === 'quiet'
      ? 'This is enough for now.'
      : mode === 'spiritual'
        ? 'You may take this gently, one breath at a time.'
        : 'You may take this gently. One small step is enough.'

  return (
    <SoftCard className="lm2-panel lm2-summary">
      <h2 className="lm2-title">{title}</h2>
      <p className="lm2-body muted">{intro}</p>

      <div className="lm2-summary-body">
        <p>{summary.feelingText}</p>
        <p>{summary.needText}</p>
        <p>{summary.supportText}</p>
        <p>{summary.stepText}</p>
        {summary.themeEcho ? (
          <p className="lm2-theme-echo muted">{summary.themeEcho}</p>
        ) : null}
      </div>

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

      <div className="lm2-nav lm2-nav--summary">
        <button type="button" className="secondary-btn" onClick={onBack}>
          Back
        </button>
        <button type="button" className="secondary-btn" onClick={onRestart}>
          Start again
        </button>
        <button type="button" className="primary-btn" onClick={onCopy}>
          Copy reflection
        </button>
        {onSave ? (
          <button type="button" className="primary-btn lm2-save-btn" onClick={onSave}>
            Save to journal
          </button>
        ) : null}
      </div>

      <p className="footer-note lm2-safety">
        This is for reflection only. If you feel unsafe or unable to cope, please seek urgent
        help from someone nearby or local support services.
      </p>
    </SoftCard>
  )
}

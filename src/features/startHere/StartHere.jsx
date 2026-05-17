import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SoftCard from '../../components/shared/SoftCard.jsx'
import ModeAwareText from '../../components/shared/ModeAwareText.jsx'
import ReflectChoiceStep from './ReflectChoiceStep.jsx'
import VoiceConversationPanel from './VoiceConversationPanel.jsx'
import {
  startHereFlow,
  startHereStepOrder,
  reflectStepIds,
  answerTextKeys,
} from './startHereFlow.js'
import { getStartHereSummary, summaryLabels } from './startHereCopy.js'
import {
  buildCopyText,
  buildSharePayload,
  createEmptyAnswers,
  getModeText,
  getSafeMode,
} from './startHereUtils.js'

const introSteps = ['opening', 'about']

/**
 * @param {{
 *   mode?: string
 *   showModeToggle?: boolean
 *   onModeChange?: (mode: string) => void
 *   embedded?: boolean
 * }} props
 */
export default function StartHere({
  mode = 'neutral',
  showModeToggle = false,
  onModeChange,
  embedded = false,
}) {
  const safeMode = getSafeMode(mode)
  const steps = startHereStepOrder
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [answers, setAnswers] = useState(createEmptyAnswers)
  const [copyNotice, setCopyNotice] = useState('')
  const [shareNotice, setShareNotice] = useState('')

  const currentStep = steps[currentStepIndex]

  const summary = useMemo(
    () => getStartHereSummary(answers, safeMode),
    [answers, safeMode],
  )

  function clearNotices() {
    setCopyNotice('')
    setShareNotice('')
  }

  function goNext() {
    setCurrentStepIndex((index) => Math.min(index + 1, steps.length - 1))
    clearNotices()
  }

  function goBack() {
    setCurrentStepIndex((index) => Math.max(index - 1, 0))
    clearNotices()
  }

  function restart() {
    setAnswers(createEmptyAnswers())
    setCurrentStepIndex(0)
    clearNotices()
  }

  function patchAnswers(patch) {
    setAnswers((previous) => ({ ...previous, ...patch }))
  }

  function getTextFieldKey(stepId) {
    return answerTextKeys[stepId] || stepId
  }

  function handleReflectContinue(stepId) {
    const textKey = getTextFieldKey(stepId)
    const text = answers[textKey]?.trim() || ''
    const option = answers[stepId]

    if (!option && text.length >= 3) {
      patchAnswers({ [stepId]: 'custom' })
    }
    goNext()
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

  async function shareLine() {
    const payload = buildSharePayload(summary)
    if (typeof navigator.share === 'function') {
      try {
        await navigator.share({
          title: payload.title,
          text: payload.text,
        })
        setShareNotice('Shared.')
        return
      } catch (err) {
        if (err?.name === 'AbortError') return
      }
    }
    try {
      await navigator.clipboard.writeText(summary.shareableLine)
      setShareNotice('Line copied — sharing not available here.')
    } catch {
      setShareNotice('Share was not available in this browser.')
    }
  }

  const progressPct = ((currentStepIndex + 1) / steps.length) * 100
  const rootClass = embedded ? 'lm2 lm2--embedded sh' : 'lm2 sh'

  return (
    <motion.div
      className={rootClass}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {showModeToggle && onModeChange ? (
        <div className="lm2-mode-bar card">
          <label htmlFor="sh-mode-select" className="lm2-mode-label">
            Experience mode
          </label>
          <p className="muted lm2-mode-hint">
            Neutral is for everyone. Spiritual adds gentle sacred language. Quiet uses fewer words.
          </p>
          <select
            id="sh-mode-select"
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

      <div className="lm2-progress-wrap" aria-hidden={currentStep === 'opening'}>
        <p className="lm2-progress-label" aria-live="polite">
          Step {Math.min(currentStepIndex + 1, steps.length)} of {steps.length}
        </p>
        <div
          className="lm2-progress-track"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={steps.length}
          aria-valuenow={Math.min(currentStepIndex + 1, steps.length)}
          aria-label="Progress through Start Here"
        >
          <div className="lm2-progress-fill" style={{ width: `${progressPct}%` }} />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {introSteps.includes(currentStep) ? (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.32 }}
          >
            <SoftCard className="lm2-panel sh-opening">
              <ModeAwareText
                text={startHereFlow[currentStep].title}
                mode={safeMode}
                as="h2"
                className="lm2-title"
              />
              <ModeAwareText
                text={startHereFlow[currentStep].body}
                mode={safeMode}
                className="lm2-body sh-opening-body muted"
              />
              <button type="button" className="primary-btn lm2-primary" onClick={goNext}>
                {getModeText(startHereFlow[currentStep].actionLabel, safeMode)}
              </button>
            </SoftCard>
          </motion.div>
        ) : null}

        {reflectStepIds.includes(currentStep) ? (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.32 }}
          >
            <ReflectChoiceStep
              step={startHereFlow[currentStep]}
              mode={safeMode}
              optionValue={
                currentStep === 'carryingDetail' ? '' : answers[currentStep] || ''
              }
              textValue={answers[getTextFieldKey(currentStep)] || ''}
              onOptionChange={(id) => patchAnswers({ [currentStep]: id })}
              onTextChange={(text) => patchAnswers({ [getTextFieldKey(currentStep)]: text })}
              onContinue={() => handleReflectContinue(currentStep)}
              onBack={goBack}
              onSkip={startHereFlow[currentStep].optional ? goNext : undefined}
            />
          </motion.div>
        ) : null}

        {currentStep === 'voice' ? (
          <motion.div
            key="voice"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.32 }}
          >
            <SoftCard className="lm2-panel">
              <ModeAwareText
                text={startHereFlow.voice.title}
                mode={safeMode}
                as="h2"
                className="lm2-title"
              />
              <ModeAwareText
                text={startHereFlow.voice.guidance}
                mode={safeMode}
                className="sh-guidance muted"
              />
            </SoftCard>
            <VoiceConversationPanel
              mode={safeMode}
              answers={answers}
              onBack={goBack}
              onContinue={goNext}
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
              shareNotice={shareNotice}
              onBack={goBack}
              onRestart={restart}
              onCopy={copyReflection}
              onShare={shareLine}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  )
}

/**
 * @param {{
 *   mode: string
 *   summary: ReturnType<typeof getStartHereSummary>
 *   copyNotice: string
 *   shareNotice: string
 *   onBack: () => void
 *   onRestart: () => void
 *   onCopy: () => void
 *   onShare: () => void
 * }} props
 */
function SummaryStep({
  mode,
  summary,
  copyNotice,
  shareNotice,
  onBack,
  onRestart,
  onCopy,
  onShare,
}) {
  const title =
    mode === 'quiet'
      ? 'For you'
      : mode === 'spiritual'
        ? 'A gentle blessing for your path'
        : 'Your reflection — made for you'

  const intro =
    mode === 'quiet'
      ? 'You did enough. Receive what helps.'
      : mode === 'spiritual'
        ? 'You were honest — that is already a sacred act. Receive this slowly. You do not have to believe more than you can today.'
        : 'You took time to notice yourself — that is brave. Read slowly. Keep what helps. Let the rest go. There is no test to pass.'

  const sections = [
    { key: 'gentleThought', value: summary.gentleThought },
    summary.inYourWords ? { key: 'inYourWords', value: summary.inYourWords } : null,
    { key: 'affirmation', value: summary.affirmation },
    { key: 'whyThisHelps', value: summary.whyThisHelps },
    { key: 'quietPractice', value: summary.quietPractice },
    { key: 'oneSmallStep', value: summary.oneSmallStep },
    { key: 'shareableLine', value: summary.shareableLine },
  ].filter(Boolean)

  return (
    <SoftCard className="lm2-panel lm2-summary sh-summary">
      <h2 className="lm2-title">{title}</h2>
      <p className="lm2-body muted">{intro}</p>

      <div className="lm2-summary-body sh-summary-blocks">
        {sections.map((section) =>
          section ? (
            <div key={section.key} className="sh-summary-block">
              <p className="sh-summary-label muted">
                {getModeText(summaryLabels[section.key], mode)}
              </p>
              <p className="sh-summary-value">{section.value}</p>
            </div>
          ) : null,
        )}
      </div>

      {copyNotice ? (
        <p className="lm2-notice" role="status">
          {copyNotice}
        </p>
      ) : null}
      {shareNotice ? (
        <p className="lm2-notice" role="status">
          {shareNotice}
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
        <button type="button" className="secondary-btn sh-share-btn" onClick={onShare}>
          Share line
        </button>
      </div>

      <p className="footer-note lm2-safety">
        This supports reflection and wellbeing. It does not replace clinical care, therapy, or
        urgent help. If you feel unsafe or unable to cope, please contact someone nearby or local
        support services.
      </p>
    </SoftCard>
  )
}



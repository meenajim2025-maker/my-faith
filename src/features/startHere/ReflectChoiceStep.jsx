import { useState } from 'react'
import { motion } from 'framer-motion'
import SoftCard from '../../components/shared/SoftCard.jsx'
import ChoiceButton from '../../components/shared/ChoiceButton.jsx'
import ModeAwareText from '../../components/shared/ModeAwareText.jsx'
import { getModeText } from './startHereUtils.js'

/**
 * @param {{
 *   step: {
 *     title: Record<string, string>
 *     guidance?: Record<string, string>
 *     hint?: Record<string, string>
 *     textLabel?: Record<string, string>
 *     textPlaceholder?: Record<string, string>
 *     options?: { id: string; label: string }[]
 *     optional?: boolean
 *   }
 *   mode: string
 *   optionValue: string
 *   textValue: string
 *   onOptionChange: (id: string) => void
 *   onTextChange: (text: string) => void
 *   onContinue: () => void
 *   onBack: () => void
 *   onSkip?: () => void
 * }} props
 */
export default function ReflectChoiceStep({
  step,
  mode,
  optionValue,
  textValue,
  onOptionChange,
  onTextChange,
  onContinue,
  onBack,
  onSkip,
}) {
  const [showText, setShowText] = useState(Boolean(textValue?.trim()))
  const hasOptions = Array.isArray(step.options) && step.options.length > 0
  const textEnough = textValue.trim().length >= 3
  const canContinue =
    step.optional || ((optionValue && optionValue !== 'custom') || textEnough)

  function handleOption(id) {
    onOptionChange(id)
  }

  return (
    <SoftCard className="lm2-panel sh-reflect-step">
      <ModeAwareText text={step.title} mode={mode} as="h2" className="lm2-title" />
      {step.guidance ? (
        <ModeAwareText text={step.guidance} mode={mode} className="sh-guidance muted" />
      ) : null}
      {step.hint ? (
        <ModeAwareText text={step.hint} mode={mode} className="lm2-hint muted" />
      ) : null}

      {hasOptions ? (
        <motion.div className="lm2-choices">
          {step.options.map((option) => (
            <ChoiceButton
              key={option.id}
              selected={optionValue === option.id}
              onClick={() => handleOption(option.id)}
            >
              {option.label}
            </ChoiceButton>
          ))}
        </motion.div>
      ) : null}

      {hasOptions ? (
        <button
          type="button"
          className="sh-text-toggle secondary-btn"
          onClick={() => setShowText((v) => !v)}
        >
          {showText
            ? getModeText(
                { neutral: 'Hide my own words', spiritual: 'Hide writing', quiet: 'Hide' },
                mode,
              )
            : getModeText(
                {
                  neutral: 'Or write in my own words instead',
                  spiritual: 'Or write from the heart',
                  quiet: 'Type instead',
                },
                mode,
              )}
        </button>
      ) : null}

      {showText || !hasOptions ? (
        <div className="sh-text-field">
          <label className="sh-text-label" htmlFor={`sh-text-${step.title?.neutral}`}>
            {getModeText(
              step.textLabel || { neutral: 'Your words', spiritual: 'Your words', quiet: 'Words' },
              mode,
            )}
          </label>
          <textarea
            id={`sh-text-${step.title?.neutral}`}
            className="sh-textarea"
            rows={hasOptions ? 3 : 4}
            value={textValue}
            onChange={(e) => onTextChange(e.target.value)}
            placeholder={getModeText(
              step.textPlaceholder || { neutral: 'A few honest words…', quiet: '…' },
              mode,
            )}
          />
        </div>
      ) : null}

      <motion.div className="lm2-nav sh-reflect-nav">
        <button type="button" className="secondary-btn" onClick={onBack}>
          Back
        </button>
        {step.optional && onSkip ? (
          <button type="button" className="secondary-btn" onClick={onSkip}>
            {getModeText({ neutral: 'Skip', spiritual: 'Skip', quiet: 'Skip' }, mode)}
          </button>
        ) : null}
        <button
          type="button"
          className="primary-btn"
          disabled={!canContinue}
          onClick={onContinue}
        >
          {getModeText({ neutral: 'Continue', spiritual: 'Continue', quiet: 'Next' }, mode)}
        </button>
      </motion.div>
    </SoftCard>
  )
}

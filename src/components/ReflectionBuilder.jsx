import { useEffect, useMemo, useState } from 'react'
import ChoiceButton from './shared/ChoiceButton.jsx'
import {
  REFLECTION_OUTCOMES,
  buildReflectionFromOutcome,
} from '../services/reflectionBuilder.js'
import { tensionLabelById } from '../language/tensions.js'
import { getModeText, getSafeMode } from '../language/modeText.js'

/**
 * @param {{
 *   quietMode?: boolean
 *   mode?: string
 *   addressTo: string
 *   onAddressToChange: (v: string) => void
 *   situation: string
 *   onSituationChange: (v: string) => void
 *   length: string
 *   onLengthChange: (v: string) => void
 *   onBuiltTextChange?: (text: string) => void
 *   showBuiltOutput?: boolean
 *   children?: import('react').ReactNode
 * }} props
 */
export default function ReflectionBuilder({
  quietMode = false,
  mode = 'neutral',
  addressTo,
  onAddressToChange,
  situation,
  onSituationChange,
  length,
  onLengthChange,
  onBuiltTextChange,
  showBuiltOutput = true,
  children,
}) {
  const safeMode = getSafeMode(mode)
  const [outcomeId, setOutcomeId] = useState('')
  const [step, setStep] = useState('outcome')

  const reflectionText = useMemo(() => {
    if (!outcomeId) return ''
    return buildReflectionFromOutcome({
      outcomeId,
      addressTo,
      situation,
      length,
    })
  }, [outcomeId, addressTo, situation, length])

  useEffect(() => {
    onBuiltTextChange?.(reflectionText)
  }, [reflectionText, onBuiltTextChange])

  function selectOutcome(id) {
    setOutcomeId(id)
    setStep('customize')
  }

  return (
    <div className="reflection-builder">
      <h2 className="section-title" style={{ marginBottom: 8 }}>
        {quietMode ? 'Reflection builder' : 'Prayer & reflection builder'}
      </h2>
      <p className="experience-tension">{tensionLabelById['truth-comfort']}</p>
      <p className="muted" style={{ marginBottom: 16 }}>
        {getModeText(
          {
            neutral: 'Choose what you need first. Then we shape words that fit — not a template.',
            spiritual: 'Choose what your heart needs. Then receive words you can use honestly.',
            quiet: 'Choose need. Get words.',
          },
          safeMode,
        )}
      </p>

      {step === 'outcome' ? (
        <div className="lm2-choices rb-outcomes">
          {REFLECTION_OUTCOMES.map((item) => (
            <ChoiceButton
              key={item.id}
              selected={outcomeId === item.id}
              onClick={() => selectOutcome(item.id)}
            >
              {item.label}
            </ChoiceButton>
          ))}
        </div>
      ) : (
        <>
          <p className="rb-selected muted">
            {REFLECTION_OUTCOMES.find((o) => o.id === outcomeId)?.label}
            <button type="button" className="rb-change" onClick={() => setStep('outcome')}>
              Change
            </button>
          </p>

          <div className="form-grid" style={{ marginTop: 12 }}>
            <label>
              {quietMode ? 'Address your words to' : 'Address to'}
              <input
                value={addressTo}
                onChange={(e) => onAddressToChange(e.target.value)}
                placeholder={quietMode ? 'Love, kindness…' : 'Love, Sacred Love…'}
                autoComplete="off"
              />
            </label>
          </div>

          <label style={{ display: 'block', marginTop: 12 }}>
            {getModeText(
              { neutral: 'Add context (optional)', spiritual: 'Context (optional)', quiet: 'Context' },
              safeMode,
            )}
            <textarea
              value={situation}
              onChange={(e) => onSituationChange(e.target.value)}
              placeholder="A few words about what is happening…"
              rows={3}
            />
          </label>

          <div className="timer-buttons" style={{ marginTop: 12 }}>
            <button
              type="button"
              className={length === 'short' ? 'primary-btn' : 'secondary-btn'}
              onClick={() => onLengthChange('short')}
            >
              Short
            </button>
            <button
              type="button"
              className={length === 'long' ? 'primary-btn' : 'secondary-btn'}
              onClick={() => onLengthChange('long')}
            >
              Longer
            </button>
          </div>

          {showBuiltOutput ? (
            <div className="prayer-output" role="status" style={{ marginTop: 18 }}>
              {reflectionText}
            </div>
          ) : null}

          {children}
        </>
      )}
    </div>
  )
}

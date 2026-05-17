import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Copy } from 'lucide-react'
import SoftCard from '../../components/shared/SoftCard.jsx'
import ChoiceButton from '../../components/shared/ChoiceButton.jsx'
import ModeAwareText from '../../components/shared/ModeAwareText.jsx'
import {
  storyPaths,
  storyFlowSteps,
  getStoryById,
  getSuggestedStoryForTag,
} from './storyPathsData.js'
import { pageCopy, outcomeLabels } from './storyPathsCopy.js'
import {
  pickModeCopy,
  buildTakeawayCopyText,
  getModeText,
  getSafeMode,
  progressPercent,
} from './storyPathsUtils.js'

/**
 * @param {{
 *   mode?: string
 *   showModeToggle?: boolean
 *   onModeChange?: (mode: string) => void
 *   initialStoryId?: string | null
 *   initialTag?: string | null
 *   onIntentHandled?: () => void
 * }} props
 */
export default function StoryPaths({
  mode = 'neutral',
  showModeToggle = false,
  onModeChange,
  initialStoryId = null,
  initialTag = null,
  onIntentHandled,
}) {
  const safeMode = getSafeMode(mode)
  const [view, setView] = useState('list')
  const [activeStoryId, setActiveStoryId] = useState(null)
  const [flowIndex, setFlowIndex] = useState(0)
  const [selectedChoiceId, setSelectedChoiceId] = useState('')
  const [copyNotice, setCopyNotice] = useState('')

  const activeStory = useMemo(
    () => (activeStoryId ? getStoryById(activeStoryId) : null),
    [activeStoryId],
  )

  const selectedChoice = useMemo(() => {
    if (!activeStory?.choices || !selectedChoiceId) return null
    return activeStory.choices.find((c) => c.id === selectedChoiceId) || null
  }, [activeStory, selectedChoiceId])

  function openStory(storyId) {
    setActiveStoryId(storyId)
    setFlowIndex(0)
    setSelectedChoiceId('')
    setCopyNotice('')
    setView('story')
  }

  useEffect(() => {
    if (initialStoryId) {
      openStory(initialStoryId)
      onIntentHandled?.()
      return
    }
    if (initialTag) {
      const suggested = getSuggestedStoryForTag(initialTag)
      if (suggested) openStory(suggested.id)
      onIntentHandled?.()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run when home sends intent
  }, [initialStoryId, initialTag])

  function backToList() {
    setView('list')
    setActiveStoryId(null)
    setFlowIndex(0)
    setSelectedChoiceId('')
    setCopyNotice('')
  }

  function restartStory() {
    setFlowIndex(0)
    setSelectedChoiceId('')
    setCopyNotice('')
  }

  function chooseOption(choiceId) {
    setSelectedChoiceId(choiceId)
    window.setTimeout(() => setFlowIndex(2), 160)
  }

  async function copyTakeaway() {
    if (!activeStory?.takeaway) return
    const line = pickModeCopy(safeMode, activeStory.takeaway)
    try {
      await navigator.clipboard.writeText(buildTakeawayCopyText(activeStory, line))
      setCopyNotice('Takeaway copied.')
    } catch {
      setCopyNotice('Copy was not available.')
    }
  }

  const flowStep = storyFlowSteps[flowIndex]
  const progress = progressPercent(flowIndex, storyFlowSteps.length)

  return (
    <motion.div className="sp" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
      {showModeToggle && onModeChange ? (
        <div className="lm2-mode-bar card">
          <label htmlFor="sp-mode-select" className="lm2-mode-label">
            Experience mode
          </label>
          <select
            id="sp-mode-select"
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

      <AnimatePresence mode="wait">
        {view === 'list' ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
          >
            <StoryList mode={safeMode} onOpen={openStory} />
          </motion.div>
        ) : null}

        {view === 'story' && activeStory ? (
          <motion.div
            key={activeStory.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
          >
            {!activeStory.available ? (
              <ComingSoonStory
                story={activeStory}
                mode={safeMode}
                onBack={backToList}
                onTryFeatured={() => openStory('angry-message')}
              />
            ) : (
              <>
                <motion.div className="sp-story-header">
                  <button type="button" className="secondary-btn sp-back-link" onClick={backToList}>
                    {pickModeCopy(safeMode, pageCopy.backToList)}
                  </button>
                  <motion.div className="lm2-progress-wrap">
                    <p className="lm2-progress-label">
                      Step {flowIndex + 1} of {storyFlowSteps.length}
                    </p>
                    <motion.div
                      className="lm2-progress-track"
                      role="progressbar"
                      aria-valuenow={flowIndex + 1}
                      aria-valuemin={1}
                      aria-valuemax={storyFlowSteps.length}
                    >
                      <motion.div className="lm2-progress-fill" style={{ width: `${progress}%` }} />
                    </motion.div>
                  </motion.div>
                </motion.div>

                <AnimatePresence mode="wait">
                  {flowStep === 'scene' ? (
                    <motion.div
                      key="scene"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                    >
                      <SoftCard className="lm2-panel sp-scene">
                        <h2 className="lm2-title">{activeStory.title}</h2>
                        <p className="sp-meta muted">
                          {activeStory.theme} · {pickModeCopy(safeMode, pageCopy.durationLabel)}{' '}
                          {activeStory.durationMinutes} min
                        </p>
                        <ModeAwareText
                          text={activeStory.scene}
                          mode={safeMode}
                          className="sp-scene-body muted"
                        />
                        <ModeAwareText
                          text={activeStory.conflict}
                          mode={safeMode}
                          className="sp-conflict"
                        />
                        <button
                          type="button"
                          className="primary-btn lm2-primary"
                          onClick={() => setFlowIndex(1)}
                        >
                          {getModeText(
                            { neutral: 'What happens next?', spiritual: 'Continue', quiet: 'Next' },
                            safeMode,
                          )}
                        </button>
                      </SoftCard>
                    </motion.div>
                  ) : null}

                  {flowStep === 'choice' && activeStory.choices ? (
                    <motion.div
                      key="choice"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                    >
                      <SoftCard className="lm2-panel">
                        <h2 className="lm2-title">
                          {getModeText(
                            {
                              neutral: 'What do you do?',
                              spiritual: 'What does your heart choose?',
                              quiet: 'Choose',
                            },
                            safeMode,
                          )}
                        </h2>
                        <p className="lm2-hint muted">Tap one. There is no perfect answer.</p>
                        <motion.div className="lm2-choices">
                          {activeStory.choices.map((choice) => (
                            <ChoiceButton
                              key={choice.id}
                              selected={selectedChoiceId === choice.id}
                              onClick={() => chooseOption(choice.id)}
                            >
                              {choice.label}
                            </ChoiceButton>
                          ))}
                        </motion.div>
                        <motion.div className="lm2-nav">
                          <button
                            type="button"
                            className="secondary-btn"
                            onClick={() => setFlowIndex(0)}
                          >
                            Back
                          </button>
                        </motion.div>
                      </SoftCard>
                    </motion.div>
                  ) : null}

                  {flowStep === 'outcome' && selectedChoice ? (
                    <motion.div
                      key="outcome"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                    >
                      <SoftCard className="lm2-panel sp-outcome">
                        <p className="sp-choice-echo muted">
                          You chose: <strong>{selectedChoice.label}</strong>
                        </p>
                        <OutcomeBlock
                          label={pickModeCopy(safeMode, outcomeLabels.wisdom)}
                          text={pickModeCopy(safeMode, selectedChoice.response)}
                        />
                        {activeStory.practice ? (
                          <OutcomeBlock
                            label={pickModeCopy(safeMode, outcomeLabels.practice)}
                            text={pickModeCopy(safeMode, activeStory.practice)}
                          />
                        ) : null}
                        {activeStory.challenge ? (
                          <OutcomeBlock
                            label={pickModeCopy(safeMode, outcomeLabels.challenge)}
                            text={pickModeCopy(safeMode, activeStory.challenge)}
                          />
                        ) : null}
                        {activeStory.takeaway ? (
                          <OutcomeBlock
                            label={pickModeCopy(safeMode, outcomeLabels.takeaway)}
                            text={pickModeCopy(safeMode, activeStory.takeaway)}
                            highlight
                          />
                        ) : null}
                        {copyNotice ? (
                          <p className="lm2-notice" role="status">
                            {copyNotice}
                          </p>
                        ) : null}
                        <motion.div className="lm2-nav lm2-nav--summary">
                          <button
                            type="button"
                            className="secondary-btn"
                            onClick={() => setFlowIndex(1)}
                          >
                            Back
                          </button>
                          <button type="button" className="secondary-btn" onClick={restartStory}>
                            {pickModeCopy(safeMode, pageCopy.restart)}
                          </button>
                          <button type="button" className="primary-btn" onClick={copyTakeaway}>
                            <Copy size={16} aria-hidden />
                            {pickModeCopy(safeMode, pageCopy.copyTakeaway)}
                          </button>
                          <button type="button" className="secondary-btn" onClick={backToList}>
                            {pickModeCopy(safeMode, pageCopy.backToList)}
                          </button>
                        </motion.div>
                      </SoftCard>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </>
            )}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  )
}

/** @param {{ label: string; text: string; highlight?: boolean }} props */
function OutcomeBlock({ label, text, highlight = false }) {
  return (
    <motion.div className={`sp-outcome-block${highlight ? ' sp-outcome-block--highlight' : ''}`}>
      <p className="sh-summary-label muted">{label}</p>
      <p className="sp-outcome-text">{text}</p>
    </motion.div>
  )
}

/** @param {{ mode: string; onOpen: (id: string) => void }} props */
function StoryList({ mode, onOpen }) {
  return (
    <>
      <SoftCard className="lm2-panel sp-list-intro">
        <ModeAwareText text={pageCopy.listTitle} mode={mode} as="h2" className="lm2-title" />
        <ModeAwareText text={pageCopy.listIntro} mode={mode} className="muted" />
      </SoftCard>
      <motion.div className="sp-story-grid">
        {storyPaths.map((story) => (
          <article key={story.id} className="card sp-story-card">
            <h3 className="sp-story-card-title">{story.title}</h3>
            <p className="sp-meta muted">{story.theme}</p>
            <ModeAwareText text={story.description} mode={mode} className="muted sp-card-desc" />
            <p className="sp-duration">
              <Clock size={14} aria-hidden />
              <span>
                {pickModeCopy(mode, pageCopy.durationLabel)} {story.durationMinutes} min
              </span>
              {story.available ? (
                <span className="sp-badge-live">Ready</span>
              ) : (
                <span className="sp-badge-soon">Coming soon</span>
              )}
            </p>
            <button type="button" className="primary-btn" onClick={() => onOpen(story.id)}>
              {story.available
                ? pickModeCopy(mode, pageCopy.startStory)
                : pickModeCopy(mode, { neutral: 'Preview', spiritual: 'Preview', quiet: 'See' })}
            </button>
          </article>
        ))}
      </motion.div>
    </>
  )
}

/**
 * @param {{
 *   story: import('./storyPathsData.js').StoryPath
 *   mode: string
 *   onBack: () => void
 *   onTryFeatured: () => void
 * }} props
 */
function ComingSoonStory({ story, mode, onBack, onTryFeatured }) {
  return (
    <SoftCard className="lm2-panel">
      <h2 className="lm2-title">{story.title}</h2>
      <p className="sp-meta muted">{story.theme}</p>
      <ModeAwareText text={story.description} mode={mode} className="muted" />
      <ModeAwareText text={pageCopy.comingSoonTitle} mode={mode} as="h3" className="sp-soon-heading" />
      <ModeAwareText text={pageCopy.comingSoonBody} mode={mode} className="muted" />
      <motion.div className="lm2-nav">
        <button type="button" className="secondary-btn" onClick={onBack}>
          {pickModeCopy(mode, pageCopy.backToList)}
        </button>
        <button type="button" className="primary-btn" onClick={onTryFeatured}>
          {getModeText(
            {
              neutral: 'Try “The Message You Should Not Send”',
              spiritual: 'Try the message story',
              quiet: 'Try message story',
            },
            mode,
          )}
        </button>
      </motion.div>
    </SoftCard>
  )
}

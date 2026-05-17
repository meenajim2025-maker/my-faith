import { BookOpen } from 'lucide-react'
import { homeFeelingButtons } from './storyPathsData.js'
import { pageCopy } from './storyPathsCopy.js'
import { pickModeCopy } from './storyPathsUtils.js'
import { tensionLabelById } from '../../language/tensions.js'

/**
 * @param {{
 *   mode?: string
 *   onOpenStoryPaths: () => void
 *   onOpenFeaturedStory: () => void
 *   onHomeFeeling: (item: typeof homeFeelingButtons[number]) => void
 * }} props
 */
export default function HomeStoryPathsIntro({
  mode = 'neutral',
  onOpenStoryPaths,
  onOpenFeaturedStory,
  onHomeFeeling,
}) {
  return (
    <>
      <div className="card sp-home-purpose">
        <p className="experience-tension">{tensionLabelById['noise-silence']}</p>
        <p className="sp-purpose-lead">{pickModeCopy(mode, pageCopy.purposeStatement)}</p>
      </div>

      <div className="card sp-home-feelings">
        <h2 className="section-title sp-home-heading">
          {pickModeCopy(mode, pageCopy.homeFeelingTitle)}
        </h2>
        <div className="sp-feeling-grid">
          {homeFeelingButtons.map((item) => (
            <button
              key={item.id}
              type="button"
              className="sp-feeling-btn"
              onClick={() => onHomeFeeling(item)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="card sp-home-cta">
        <div className="sp-home-cta-inner">
          <div className="brand-icon cta-icon cta-icon--storypaths" aria-hidden>
            <BookOpen size={24} strokeWidth={2} />
          </div>
          <div>
            <h2 className="section-title" style={{ fontSize: 22, marginBottom: 8 }}>
              Story Paths
            </h2>
            <p className="experience-tension" style={{ marginBottom: 10 }}>
              {tensionLabelById['peace-revenge']}
            </p>
            <p className="muted" style={{ margin: '0 0 14px' }}>
              Short interactive stories for real moments. You choose what happens next — and
              learn a skill you can use today.
            </p>
            <div className="sp-home-cta-actions">
              <button type="button" className="primary-btn" onClick={onOpenFeaturedStory}>
                Start “The Message You Should Not Send”
              </button>
              <button type="button" className="secondary-btn" onClick={onOpenStoryPaths}>
                Browse all stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

import { motion } from 'framer-motion'
import { Heart, Leaf, Sparkles, Sun, Waves } from 'lucide-react'
import {
  globalEthics,
  launchSoft,
  manifestoParagraphs,
  myFaithResponse,
  positioningLine,
  quietModePublic,
  threeJourneys,
  uniqueSeven,
  visionFiveYears,
  whatMyFaithIs,
  whatMyFaithIsNot,
  worldProblems,
} from '../data/phase4Content.js'
import { useCalmPreferences } from '../context/CalmPreferencesContext.jsx'
import { applyQuietText } from '../services/quietMode.js'

/**
 * @param {{ onNavigate: (tab: string) => void, onOpenPromise: () => void }} props
 */
export default function OurStory({ onNavigate, onOpenPromise }) {
  const { quietMode } = useCalmPreferences()
  const s = (text) => (quietMode ? applyQuietText(text) : text)

  return (
    <div className="our-story">
      <motion.header
        className="card our-story-hero"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="our-story-hero-badge" aria-hidden>
          <Sparkles size={22} />
        </div>
        <h2 className="our-story-hero-title">My Faith — a digital chapel for the world</h2>
        <p className="our-story-positioning">{s(positioningLine)}</p>
      </motion.header>

      <section className="card our-story-block our-story-identity">
        <h3 className="our-story-h3">
          <Heart size={20} aria-hidden className="our-story-h3-icon" />
          What My Faith is
        </h3>
        <p className="our-story-lead">{s(whatMyFaithIs)}</p>
        <h4 className="our-story-h4">What My Faith is not</h4>
        <ul className="our-story-list">
          {whatMyFaithIsNot.map((line) => (
            <li key={line}>{s(line)}</li>
          ))}
        </ul>
        <p className="muted our-story-closing">
          {s('This clarity protects the project — and everyone who steps inside.')}
        </p>
      </section>

      <section className="card our-story-block our-story-manifesto">
        <h3 className="our-story-h3">
          <Waves size={20} aria-hidden className="our-story-h3-icon" />
          Opening words
        </h3>
        {manifestoParagraphs.map((p) => (
          <p key={p} className="our-story-p">
            {s(p)}
          </p>
        ))}
      </section>

      <section className="card our-story-block our-story-whynow">
        <h3 className="our-story-h3">
          <Sun size={20} aria-hidden className="our-story-h3-icon" />
          Why now?
        </h3>
        <p className="muted our-story-sub">The world problem (plain language)</p>
        <ul className="our-story-list our-story-list-compact">
          {worldProblems.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className="muted our-story-sub" style={{ marginTop: 16 }}>
          My Faith’s response
        </p>
        <ul className="our-story-list our-story-highlight">
          {myFaithResponse.map((line) => (
            <li key={line}>{s(line)}</li>
          ))}
        </ul>
      </section>

      <section className="our-story-journeys" aria-label="Three core journeys">
        <h3 className="our-story-section-title">Three core journeys</h3>
        <p className="muted our-story-intro">
          {s('Named so you always know where to begin — no theology debates, only lived wisdom.')}
        </p>
        <div className="our-story-journey-grid">
          {threeJourneys.map((j, i) => (
            <motion.article
              key={j.id}
              className={`card our-story-journey our-story-journey-${i}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <h4 className="our-story-journey-title">{s(j.title)}</h4>
              <p className="muted small-label">For</p>
              <p className="our-story-tags">{j.for.join(' · ')}</p>
              <p className="muted small-label">Focus</p>
              <ul className="our-story-list our-story-list-tight">
                {j.focus.map((f) => (
                  <li key={f}>{s(f)}</li>
                ))}
              </ul>
              <button
                type="button"
                className="primary-btn our-story-journey-btn"
                onClick={() => onNavigate(j.tab)}
              >
                {j.cta}
              </button>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="card our-story-block our-story-unique">
        <h3 className="our-story-h3">
          <Leaf size={20} aria-hidden className="our-story-h3-icon" />
          What makes My Faith unusual
        </h3>
        <ul className="our-story-list our-story-list-numbered">
          {uniqueSeven.map((line) => (
            <li key={line}>{s(line)}</li>
          ))}
        </ul>
      </section>

      <section className="card our-story-block our-story-quiet">
        <h3 className="our-story-h3">The Quiet Mode story</h3>
        <p className="our-story-p">{s(quietModePublic.lead)}</p>
        <p className="our-story-p">{s(quietModePublic.invites)}</p>
        <button type="button" className="secondary-btn" onClick={onOpenPromise}>
          Turn Quiet Mode on or off in Our promise
        </button>
      </section>

      <section className="card our-story-block our-story-ethics">
        <h3 className="our-story-h3">Global ethics &amp; trust</h3>
        <ul className="our-story-list our-story-list-highlight">
          {globalEthics.map((line) => (
            <li key={line}>{s(line)}</li>
          ))}
        </ul>
      </section>

      <section className="card our-story-block our-story-launch">
        <h3 className="our-story-h3">Launch — soft, not loud</h3>
        {launchSoft.map((block) => (
          <div key={block.title} className="our-story-launch-phase">
            <h4 className="our-story-h4">{block.title}</h4>
            <ul className="our-story-list our-story-list-tight">
              {block.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            {block.tone ? <p className="our-story-tone">{block.tone}</p> : null}
          </div>
        ))}
      </section>

      <section className="card our-story-block our-story-vision">
        <h3 className="our-story-h3">Five-year horizon</h3>
        <p className="muted">My Faith could become:</p>
        <ul className="our-story-list">
          {visionFiveYears.map((line) => (
            <li key={line}>{s(line)}</li>
          ))}
        </ul>
      </section>

      <p className="footer-note our-story-footnote">
        {s(
          'My Faith supports reflection and does not replace pastoral care, therapy, medical care, or emergency help. This tool supports decision-making and does not replace clinical judgement.',
        )}
      </p>
    </div>
  )
}

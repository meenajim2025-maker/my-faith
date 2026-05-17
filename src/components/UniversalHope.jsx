import { motion } from 'framer-motion'
import { Heart, HelpCircle, Sparkles, Sun, Users } from 'lucide-react'
import {
  sacredWisdomChapters,
  honouredInTheStories,
  hopeClosing,
  universalHopeLead,
  universalLoveThreads,
  whenWordsAreNotPossible,
  whyLoveWaits,
} from '../data/universalHope.js'
import { useCalmPreferences } from '../context/CalmPreferencesContext.jsx'
import { displaySpiritualText } from '../data/spiritualLanguage.js'

/**
 * @param {{ onOpenPrayer?: () => void }} props
 */
export default function UniversalHope({ onOpenPrayer }) {
  const { quietMode } = useCalmPreferences()
  const s = (text) => displaySpiritualText(text, quietMode)

  return (
    <motion.div
      className="our-story universal-hope"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <header className="card our-story-hero">
        <motion.div
          className="our-story-hero-badge"
          aria-hidden
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <Heart size={22} />
        </motion.div>
        <h2 className="our-story-hero-title">Universal hope</h2>
        <p className="our-story-positioning">{s(universalHopeLead)}</p>
      </header>

      <section className="card our-story-block" aria-label="Threads of universal love">
        <h3 className="our-story-h3">
          <Sparkles size={20} aria-hidden className="our-story-h3-icon" />
          Threads of universal love
        </h3>
        <p className="muted our-story-intro">
          {s(
            'From the Dialogue of Courage and the Wisdom of Stillness — explained simply, beside the way of Unparalleled Love.',
          )}
        </p>
        <motion.div className="universal-hope-threads">
          {universalLoveThreads.map((thread, i) => (
            <article
              key={thread.id}
              className="card universal-hope-thread"
              style={{ marginTop: i === 0 ? 0 : 12 }}
            >
              <h4 className="our-story-h4">{thread.title}</h4>
              <p className="our-story-p">
                {s(quietMode ? thread.quietBody : thread.body)}
              </p>
            </article>
          ))}
        </motion.div>
      </section>

      <section className="card our-story-block our-story-manifesto">
        <h3 className="our-story-h3">
          <HelpCircle size={20} aria-hidden className="our-story-h3-icon" />
          {whyLoveWaits.title}
        </h3>
        {whyLoveWaits.paragraphs.map((p) => (
          <p key={p.slice(0, 40)} className="our-story-p">
            {s(p)}
          </p>
        ))}
        <div className="reflection" style={{ marginTop: 16 }}>
          <strong>{quietMode ? 'A quiet phrase' : 'A short prayer'}</strong>
          <p style={{ marginBottom: 0 }}>
            {s(quietMode ? whyLoveWaits.quietPrayer : whyLoveWaits.prayer)}
          </p>
        </div>
        {onOpenPrayer ? (
          <button
            type="button"
            className="secondary-btn"
            style={{ marginTop: 14 }}
            onClick={onOpenPrayer}
          >
            {quietMode ? 'Build a reflection' : 'Create a prayer from here'}
          </button>
        ) : null}
      </section>

      <section className="card our-story-block">
        <h3 className="our-story-h3">
          <Users size={20} aria-hidden className="our-story-h3-icon" />
          {honouredInTheStories.title}
        </h3>
        <p className="our-story-p">{s(honouredInTheStories.intro)}</p>
        {honouredInTheStories.groups.map((g) => (
          <motion.div key={g.title} className="universal-hope-honoured" style={{ marginTop: 16 }}>
            <h4 className="our-story-h4">{g.title}</h4>
            <p className="our-story-p">{s(g.text)}</p>
          </motion.div>
        ))}
      </section>

      <section className="our-story-journeys" aria-label="When someone cannot ask">
        <h3 className="our-story-section-title">When words are not possible</h3>
        <p className="muted our-story-intro">
          {s(
            'Children, severe illness, mental struggle, oppression, and deep grief — held without blame, with hope.',
          )}
        </p>
        <motion.div className="our-story-journey-grid">
          {whenWordsAreNotPossible.map((item, i) => (
            <motion.article
              key={item.title}
              className={`card our-story-journey our-story-journey-${i % 3}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <h4 className="our-story-journey-title">{item.title}</h4>
              <p className="muted small-label">The weight</p>
              <p className="our-story-p">{s(item.situation)}</p>
              <p className="muted small-label">A gentle truth</p>
              <p className="our-story-p">{s(item.insight)}</p>
              <p className="muted small-label">What love can do</p>
              <p className="our-story-p">{s(item.forOthers)}</p>
              <motion.div className="reflection">
                <strong>{quietMode ? 'Quiet phrase' : 'Prayer'}</strong>
                <p style={{ marginBottom: 0 }}>{s(item.prayer)}</p>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="card our-story-block">
        <h3 className="our-story-h3">
          <Sun size={20} aria-hidden className="our-story-h3-icon" />
          Four chapters of wisdom
        </h3>
        <ul className="our-story-list">
          {sacredWisdomChapters.map((ch) => (
            <li key={ch.id}>
              <strong>{ch.title}</strong>
              <p className="our-story-p" style={{ margin: '8px 0 0' }}>
                {s(ch.summary)}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <p className="footer-note our-story-footnote">{hopeClosing}</p>
    </motion.div>
  )
}

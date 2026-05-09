import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  BookOpen,
  Church,
  Compass,
  Feather,
  Heart,
  Home,
  Music,
  Search,
  ShieldCheck,
  Sparkles,
  Sun,
  Users,
} from 'lucide-react'

import { faithTopics } from './data/faithTopics.js'
import { lifeScenarios } from './data/lifeScenarios.js'
import { meditations } from './data/meditations.js'
import { chants } from './data/chants.js'
import {
  buildPrayer,
  PRAYER_AGE_GROUPS,
  PRAYER_MOODS,
} from './services/prayerBuilder.js'
import {
  deletePrayer,
  getJournal,
  getSavedPrayers,
  saveJournalEntry,
  savePrayer,
} from './services/storage.js'

const sections = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'learn', label: 'Simple Faith', icon: BookOpen },
  { id: 'life', label: 'Life Scenarios', icon: Compass },
  { id: 'prayer', label: 'Prayer Builder', icon: Feather },
  { id: 'meditate', label: 'Meditation', icon: Sun },
  { id: 'community', label: 'Love in Action', icon: Users },
]

function App() {
  const [tab, setTab] = useState('home')
  const [ageGroup, setAgeGroup] = useState('Explorer')
  const [mood, setMood] = useState('Seeking peace')
  const [addressTo, setAddressTo] = useState('God')
  const [situation, setSituation] = useState('')
  const [length, setLength] = useState('short')
  const [query, setQuery] = useState('')
  const [timer, setTimer] = useState(3)
  const [savedPrayers, setSavedPrayers] = useState(() => getSavedPrayers())
  const [journalText, setJournalText] = useState('')
  const [journal, setJournal] = useState(() => getJournal())

  const prayer = useMemo(
    () =>
      buildPrayer({
        ageGroup,
        mood,
        situation,
        addressTo,
        length,
      }),
    [ageGroup, mood, situation, addressTo, length],
  )

  const filteredScenarios = lifeScenarios.filter((scenario) =>
    `${scenario.title} ${scenario.trigger} ${scenario.principle}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  )

  function handleSavePrayer() {
    try {
      savePrayer(prayer)
      setSavedPrayers(getSavedPrayers())
    } catch {
      /* quota or private mode */
    }
  }

  function handleDeletePrayer(id) {
    if (!window.confirm('Remove this saved prayer from this device?')) return
    deletePrayer(id)
    setSavedPrayers(getSavedPrayers())
  }

  function handleSaveJournal() {
    if (!journalText.trim()) return
    try {
      saveJournalEntry(journalText.trim())
      setJournalText('')
      setJournal(getJournal())
    } catch {
      /* quota or private mode */
    }
  }

  async function handleCopyPrayer() {
    try {
      await navigator.clipboard.writeText(prayer)
    } catch {
      /* clipboard denied */
    }
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div className="brand">
            <div className="brand-icon" aria-hidden>
              <Church size={25} strokeWidth={2} />
            </div>

            <div>
              <h1>My Faith</h1>
              <p>A gentle Christian journey of love, prayer and daily peace</p>
            </div>
          </div>

          <button
            type="button"
            className="primary-btn"
            onClick={() => setTab('prayer')}
          >
            Create a prayer
          </button>
        </div>
      </header>

      <main className="container">
        <nav className="nav" aria-label="Main sections">
          {sections.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={`nav-button${tab === id ? ' active' : ''}`}
            >
              <Icon size={18} aria-hidden />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <section>
          {tab === 'home' ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="card hero">
                <Sparkles size={30} aria-hidden />
                <h2>Faith explained gently</h2>
                <p>
                  A non-argumentative, Jesus-centred app for teenagers, adults, older people
                  and curious explorers. The heart is simple: love God, love one another, live
                  with mercy, truth and peace.
                </p>
              </div>

              <div className="grid-2" style={{ marginTop: 16 }}>
                <FeatureCard
                  title="Jesus-centred"
                  text="Know God through the life, compassion and teaching of Jesus Christ."
                />
                <FeatureCard
                  title="Mary as model"
                  text="Learn trust, humility and courage through Mary’s faithful example."
                />
                <FeatureCard
                  title="Apostolic faith"
                  text="Explore faith through witness, friendship, service and hope."
                />
                <FeatureCard
                  title="Daily wisdom"
                  text="Apply Christian love to ordinary life situations."
                />
              </div>

              <div className="card" style={{ marginTop: 16 }}>
                <h2 className="section-title">Mission</h2>
                <p className="muted">
                  To help people discover Jesus Christ through love, prayer, reflection and
                  everyday kindness, in a way that is simple, peaceful and welcoming to all.
                </p>
                <span className="badge">Built on love of God and love of neighbour</span>
              </div>
            </motion.div>
          ) : null}

          {tab === 'learn' ? (
            <motion.div
              className="grid-2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {faithTopics.map((topic) => (
                <div className="card" key={topic.id}>
                  <h2 className="section-title" style={{ fontSize: 22, marginBottom: 8 }}>
                    {topic.title}
                  </h2>
                  <p className="muted">{topic.plain}</p>

                  <div className="reflection">
                    <strong>For teenagers:</strong>
                    <p>{topic.teenager}</p>
                    <strong>For adults:</strong>
                    <p>{topic.adult}</p>
                    <strong>For older people:</strong>
                    <p>{topic.older}</p>
                    <strong>For explorers:</strong>
                    <p>{topic.explorer}</p>
                  </div>

                  <p className="badge">{topic.reflection}</p>
                </div>
              ))}
            </motion.div>
          ) : null}

          {tab === 'life' ? (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <div className="search-box">
                <Search size={18} color="#64748b" aria-hidden />
                <input
                  placeholder="Search scenarios, e.g. anger, worry, kindness"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  aria-label="Search life scenarios"
                />
              </div>

              <div style={{ display: 'grid', gap: 14 }}>
                {filteredScenarios.map((scenario) => (
                  <div className="card" key={scenario.id}>
                    <h2
                      className="section-title"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        fontSize: 22,
                      }}
                    >
                      <ShieldCheck size={21} aria-hidden />
                      {scenario.title}
                    </h2>
                    <p className="muted">{scenario.trigger}</p>

                    <div className="grid-4">
                      {scenario.steps.map((step, index) => (
                        <div className="step" key={step}>
                          <strong>{index + 1}.</strong> {step}
                        </div>
                      ))}
                    </div>

                    <p className="badge">Practice: {scenario.principle}</p>

                    <div className="reflection">
                      <strong>Short prayer:</strong>
                      <p style={{ marginBottom: 0 }}>{scenario.prayer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : null}

          {tab === 'prayer' ? (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <div className="card">
                <h2 className="section-title">Personalised prayer builder</h2>

                <div className="form-grid">
                  <label>
                    Address prayer to
                    <input
                      value={addressTo}
                      onChange={(event) => setAddressTo(event.target.value)}
                      placeholder="God, Lord, Jesus..."
                      autoComplete="off"
                    />
                  </label>

                  <label>
                    Audience
                    <select
                      value={ageGroup}
                      onChange={(event) => setAgeGroup(event.target.value)}
                    >
                      {PRAYER_AGE_GROUPS.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label>
                    Feeling
                    <select value={mood} onChange={(event) => setMood(event.target.value)}>
                      {PRAYER_MOODS.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label style={{ display: 'block', marginTop: 15 }}>
                  Situation
                  <textarea
                    value={situation}
                    onChange={(event) => setSituation(event.target.value)}
                    placeholder="Example: I am worried about my family, work, exams, health, forgiveness..."
                  />
                </label>

                <div className="timer-buttons">
                  <button
                    type="button"
                    className={length === 'short' ? 'primary-btn' : 'secondary-btn'}
                    onClick={() => setLength('short')}
                  >
                    Short prayer
                  </button>
                  <button
                    type="button"
                    className={length === 'long' ? 'primary-btn' : 'secondary-btn'}
                    onClick={() => setLength('long')}
                  >
                    Longer prayer
                  </button>
                </div>

                <div className="prayer-output" role="status">
                  {prayer}
                </div>

                <div className="timer-buttons">
                  <button type="button" className="primary-btn" onClick={handleSavePrayer}>
                    Save prayer
                  </button>
                  <button type="button" className="secondary-btn" onClick={handleCopyPrayer}>
                    Copy prayer
                  </button>
                </div>

                <p className="footer-note" style={{ marginTop: 16 }}>
                  This supports personal prayer and does not replace pastoral care, counselling,
                  or emergency help.
                </p>
              </div>

              <div className="card" style={{ marginTop: 16 }}>
                <h2 className="section-title">Saved prayers</h2>

                {savedPrayers.length === 0 ? (
                  <p className="muted">No saved prayers yet.</p>
                ) : null}

                <div className="saved-list">
                  {savedPrayers.map((item) => (
                    <div className="small-card" key={item.id}>
                      <p className="muted" style={{ fontSize: 13, margin: '0 0 8px' }}>
                        {item.createdAt
                          ? new Date(item.createdAt).toLocaleString()
                          : ''}
                      </p>
                      <p style={{ margin: '0 0 12px', whiteSpace: 'pre-wrap' }}>{item.text}</p>
                      <button
                        type="button"
                        className="secondary-btn"
                        onClick={() => handleDeletePrayer(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : null}

          {tab === 'meditate' ? (
            <motion.div
              className="grid-2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="card">
                <h2 className="section-title">Guided stillness</h2>
                <p className="muted">
                  Choose a short pause. Breathe slowly. Let the words settle.
                </p>

                <div className="timer-buttons">
                  {[1, 3, 5, 10].map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={timer === item ? 'primary-btn' : 'secondary-btn'}
                      onClick={() => setTimer(item)}
                    >
                      {item} min
                    </button>
                  ))}
                </div>

                <div className="reflection">
                  Breathe in peace. Breathe out hurry. Repeat gently for {timer}{' '}
                  minute{timer > 1 ? 's' : ''}.
                </div>
              </div>

              <div className="card">
                <h2 className="section-title">Meditation library</h2>

                {meditations.map((meditation) => (
                  <div className="small-card" key={meditation.id}>
                    <h3 style={{ margin: '0 0 6px' }}>{meditation.title}</h3>
                    <p className="muted">
                      {meditation.duration} minutes · {meditation.theme}
                    </p>
                    <p style={{ margin: '8px 0 0', color: '#334155' }}>{meditation.script}</p>
                  </div>
                ))}
              </div>

              <div className="card">
                <h2 className="section-title">Simple chants</h2>

                {chants.map((chant) => (
                  <div className="chant" key={chant.id}>
                    <strong>{chant.title}</strong>
                    <p style={{ margin: '6px 0 0' }}>{chant.line}</p>
                    <small className="muted">{chant.meaning}</small>
                  </div>
                ))}
              </div>

              <div className="card">
                <h2 className="section-title">Prayer journal</h2>

                <textarea
                  value={journalText}
                  onChange={(event) => setJournalText(event.target.value)}
                  placeholder="Write a short reflection, gratitude, worry or prayer..."
                />

                <div className="timer-buttons">
                  <button type="button" className="primary-btn" onClick={handleSaveJournal}>
                    Save reflection
                  </button>
                </div>

                <div className="saved-list">
                  {journal.map((entry) => (
                    <div className="small-card" key={entry.id}>
                      <p className="muted" style={{ fontSize: 13, margin: '0 0 8px' }}>
                        {entry.createdAt
                          ? new Date(entry.createdAt).toLocaleString()
                          : ''}
                      </p>
                      <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{entry.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : null}

          {tab === 'community' ? (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <div className="card">
                <h2 className="section-title">Love in action</h2>
                <p className="muted">
                  A weekly challenge to build harmony without argument: one kindness, one
                  apology, one act of listening, one prayer for someone else.
                </p>

                <div className="grid-4" style={{ marginTop: 16 }}>
                  <ActionCard title="Listen first" />
                  <ActionCard title="Speak kindly" />
                  <ActionCard title="Serve quietly" />
                  <ActionCard title="Forgive wisely" />
                </div>
              </div>

              <div className="card" style={{ marginTop: 16 }}>
                <h2 className="section-title">This week’s gentle challenge</h2>
                <p className="muted">
                  Choose one person to bless quietly. Send a kind message, offer practical help,
                  or pray for them without needing recognition.
                </p>
              </div>

              <p className="footer-note">
                My Faith is a spiritual reflection app. It is not a replacement for pastoral
                care, medical care, counselling or emergency help. If someone is at risk of
                harm, seek urgent support.
              </p>
            </motion.div>
          ) : null}
        </section>
      </main>

      <p className="footer-note" style={{ maxWidth: 1180, margin: '0 auto', padding: '0 18px 28px' }}>
        This tool supports decision-making and does not replace clinical judgement.
      </p>
    </div>
  )
}

function FeatureCard({ title, text }) {
  return (
    <div className="card">
      <Heart size={22} aria-hidden />
      <h3 style={{ margin: '10px 0 8px' }}>{title}</h3>
      <p className="muted" style={{ margin: 0 }}>
        {text}
      </p>
    </div>
  )
}

function ActionCard({ title }) {
  return (
    <div className="small-card">
      <Music size={20} aria-hidden />
      <h3 style={{ margin: '8px 0 0' }}>{title}</h3>
    </div>
  )
}

export default App

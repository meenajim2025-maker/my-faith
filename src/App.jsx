import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  BadgeCheck,
  BookOpen,
  Church,
  Compass,
  Feather,
  Footprints,
  Globe,
  Heart,
  HeartHandshake,
  Home,
  Music,
  Search,
  ShieldCheck,
  Sparkles,
  Sun,
  Users,
} from 'lucide-react'

import { positioningLine, taglines } from './data/phase4Content.js'
import { jesusPathMoments } from './data/jesusPathMoments.js'
import { faithTopics as bundledFaithTopics } from './data/faithTopics.js'
import { lifeScenarios as bundledLifeScenarios } from './data/lifeScenarios.js'
import { meditations as bundledMeditations } from './data/meditations.js'
import { chants as bundledChants } from './data/chants.js'
import { useCalmPreferences } from './context/CalmPreferencesContext.jsx'
import {
  buildPrayer,
  PRAYER_AGE_GROUPS,
  PRAYER_MOODS,
} from './services/prayerBuilder.js'
import { applyQuietText } from './services/quietMode.js'
import { apiClient } from './services/apiClient.js'
import {
  loadPublishedContentFromApi,
  mapJournalRow,
  mapSavedPrayerRow,
} from './services/loadAppContent.js'
import {
  completeFirstVisitOnboarding,
  hasCompletedFirstVisitOnboarding,
} from './services/onboarding.js'
import {
  deletePrayer,
  getJournal,
  getSavedPrayers,
  saveJournalEntry,
  savePrayer,
} from './services/storage.js'
import ContemplativePrayerView from './components/ContemplativePrayerView.jsx'
import FirstVisitOnboarding from './components/FirstVisitOnboarding.jsx'
import GentleDailyBanner from './components/GentleDailyBanner.jsx'
import LifeMirror from './components/LifeMirror.jsx'
import OurPromise from './components/OurPromise.jsx'
import OurStory from './components/OurStory.jsx'
import WalkingWithJesus from './components/WalkingWithJesus.jsx'
import { useBrowserDailyReminder } from './hooks/useBrowserDailyReminder.js'

function getSectionLabel(id, quiet) {
  switch (id) {
    case 'home':
      return 'Home'
    case 'story':
      return 'Our story'
    case 'jesus':
      return quiet ? 'Walking with kindness' : 'Walking with Jesus'
    case 'learn':
      return quiet ? 'Simple reflection' : 'Simple Faith'
    case 'mirror':
      return 'Life Mirror'
    case 'life':
      return 'Life Scenarios'
    case 'prayer':
      return quiet ? 'Reflection builder' : 'Prayer Builder'
    case 'meditate':
      return 'Meditation'
    case 'community':
      return 'Love in Action'
    case 'promise':
      return 'Our promise'
    default:
      return id
  }
}

const sectionSpecs = [
  { id: 'home', icon: Home },
  { id: 'story', icon: Globe },
  { id: 'jesus', icon: Footprints },
  { id: 'learn', icon: BookOpen },
  { id: 'mirror', icon: HeartHandshake },
  { id: 'life', icon: Compass },
  { id: 'prayer', icon: Feather },
  { id: 'meditate', icon: Sun },
  { id: 'community', icon: Users },
  { id: 'promise', icon: BadgeCheck },
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
  const [faithTopics, setFaithTopics] = useState(bundledFaithTopics)
  const [lifeScenarios, setLifeScenarios] = useState(bundledLifeScenarios)
  const [meditations, setMeditations] = useState(bundledMeditations)
  const [chants, setChants] = useState(bundledChants)
  const [dailyReflections, setDailyReflections] = useState([])
  const [contentSource, setContentSource] = useState('bundled')
  const [savedPrayers, setSavedPrayers] = useState(() => getSavedPrayers())
  const [journalText, setJournalText] = useState('')
  const [journal, setJournal] = useState(() => getJournal())
  const [useServerPersistence, setUseServerPersistence] = useState(false)
  const [showFirstVisitOnboarding, setShowFirstVisitOnboarding] = useState(
    () => !hasCompletedFirstVisitOnboarding(),
  )
  const {
    quietMode,
    setQuietMode,
    browserDailyReminder,
    browserReminderTime,
  } = useCalmPreferences()
  const [contemplativePrayer, setContemplativePrayer] = useState(false)
  const [contemplativeAuto, setContemplativeAuto] = useState(false)
  const [taglineIndex, setTaglineIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setTaglineIndex((i) => (i + 1) % taglines.length)
    }, 7000)
    return () => window.clearInterval(id)
  }, [taglines.length])

  useBrowserDailyReminder(
    !showFirstVisitOnboarding && browserDailyReminder,
    browserReminderTime,
  )

  function handleFirstVisitComplete(pathChoice) {
    completeFirstVisitOnboarding(pathChoice)
    setShowFirstVisitOnboarding(false)
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    let cancelled = false

    async function hydrateFromApi() {
      try {
        const content = await loadPublishedContentFromApi()
        if (cancelled) return

        setFaithTopics(content.faithTopics)
        setLifeScenarios(content.lifeScenarios)
        setMeditations(content.meditations)
        setChants(content.chants)
        setDailyReflections(content.dailyReflections)
        setContentSource('server')

        try {
          const [prayerRows, journalRows] = await Promise.all([
            apiClient.getSavedPrayers(),
            apiClient.getJournalEntries(),
          ])
          if (cancelled) return
          setSavedPrayers(prayerRows.map(mapSavedPrayerRow))
          setJournal(journalRows.map(mapJournalRow))
          setUseServerPersistence(true)
        } catch {
          if (cancelled) return
          setUseServerPersistence(false)
        }
      } catch {
        if (cancelled) return
        setContentSource('bundled')
        setUseServerPersistence(false)
      }
    }

    hydrateFromApi()
    return () => {
      cancelled = true
    }
  }, [])

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

  const displayPrayer = useMemo(
    () => (quietMode ? applyQuietText(prayer) : prayer),
    [quietMode, prayer],
  )

  const soften = (text) => (quietMode ? applyQuietText(text) : text)

  const filteredScenarios = lifeScenarios.filter((scenario) =>
    `${scenario.title} ${scenario.trigger} ${scenario.principle}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  )

  async function handleSavePrayer() {
    if (useServerPersistence) {
      try {
        await apiClient.savePrayer({
          ageGroup,
          mood,
          situation,
          prayerText: prayer,
        })
        const rows = await apiClient.getSavedPrayers()
        setSavedPrayers(rows.map(mapSavedPrayerRow))
      } catch {
        /* network or server */
      }
      return
    }

    try {
      savePrayer(prayer)
      setSavedPrayers(getSavedPrayers())
    } catch {
      /* quota or private mode */
    }
  }

  async function handleDeletePrayer(id) {
    if (
      !window.confirm(
        useServerPersistence
          ? 'Remove this saved prayer from the server?'
          : 'Remove this saved prayer from this device?',
      )
    ) {
      return
    }

    if (useServerPersistence) {
      try {
        await apiClient.deletePrayer(id)
        const rows = await apiClient.getSavedPrayers()
        setSavedPrayers(rows.map(mapSavedPrayerRow))
      } catch {
        /* network or server */
      }
      return
    }

    deletePrayer(id)
    setSavedPrayers(getSavedPrayers())
  }

  async function handleSaveJournal() {
    if (!journalText.trim()) return

    if (useServerPersistence) {
      try {
        await apiClient.saveJournalEntry(journalText.trim())
        setJournalText('')
        const rows = await apiClient.getJournalEntries()
        setJournal(rows.map(mapJournalRow))
      } catch {
        /* network or server */
      }
      return
    }

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
      await navigator.clipboard.writeText(displayPrayer)
    } catch {
      /* clipboard denied */
    }
  }

  if (showFirstVisitOnboarding) {
    return (
      <FirstVisitOnboarding onComplete={handleFirstVisitComplete} quietMode={quietMode} />
    )
  }

  return (
    <div className="app">
      <GentleDailyBanner />

      <header className="header">
        <div className="header-inner">
          <div className="brand">
            <div className="brand-icon" aria-hidden>
              <Church size={25} strokeWidth={2} />
            </div>

            <div>
              <h1>My Faith</h1>
              <p className="brand-positioning">{soften(positioningLine)}</p>
              <p className="muted" style={{ margin: '6px 0 0', fontSize: 13 }}>
                {contentSource === 'server'
                  ? 'Library loaded from your My Faith server.'
                  : 'Using the built-in library. Start the API to sync the latest content.'}
              </p>
            </div>
          </div>

          <div className="header-actions">
            <button
              type="button"
              className="quiet-pill"
              aria-pressed={quietMode}
              onClick={() => setQuietMode((v) => !v)}
            >
              Quiet mode
            </button>
            <button
              type="button"
              className="primary-btn"
              onClick={() => setTab('prayer')}
            >
              {quietMode ? 'Build a reflection' : 'Create a prayer'}
            </button>
          </div>
        </div>
      </header>

      <main className="container">
        <nav className="nav" aria-label="Main sections">
          {sectionSpecs.map(({ id, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={`nav-button${tab === id ? ' active' : ''}`}
            >
              <Icon size={18} aria-hidden />
              <span>{getSectionLabel(id, quietMode)}</span>
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
                <p className="hero-tagline-rotator" aria-live="polite">
                  {soften(taglines[taglineIndex])}
                </p>
                <p>
                  {soften(
                    'A non-argumentative, Jesus-centred app for teenagers, adults, older people and curious explorers. The heart is simple: love God, love one another, live with mercy, truth and peace.',
                  )}
                </p>
              </div>

              <div className="card our-story-home-cta">
                <h2 className="section-title" style={{ fontSize: 22, marginBottom: 8 }}>
                  Our story &amp; global welcome
                </h2>
                <p className="muted" style={{ margin: '0 0 14px' }}>
                  {soften(
                    'Identity, manifesto, three journeys, Quiet Mode, ethics, and a soft path to launch — written for the whole world.',
                  )}
                </p>
                <button
                  type="button"
                  className="primary-btn"
                  onClick={() => setTab('story')}
                >
                  Read our story
                </button>
              </div>

              <div className="card jesus-path-home-cta" style={{ marginTop: 16 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div className="brand-icon cta-icon cta-icon--jesus" aria-hidden>
                    <Footprints size={24} strokeWidth={2} />
                  </div>
                  <div>
                    <h2 className="section-title" style={{ fontSize: 22, marginBottom: 8 }}>
                      {quietMode ? 'Walking with kindness' : 'Walking With Jesus'}
                    </h2>
                    <p className="muted" style={{ margin: '0 0 14px' }}>
                      {soften(
                        'Not a lesson. A journey of short moments — story, question, reflection, and one small act of love.',
                      )}
                    </p>
                    <button
                      type="button"
                      className="primary-btn"
                      onClick={() => setTab('jesus')}
                    >
                      Begin the journey
                    </button>
                  </div>
                </div>
              </div>

              <div className="card life-mirror-home-cta" style={{ marginTop: 16 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div className="brand-icon cta-icon cta-icon--mirror" aria-hidden>
                    <HeartHandshake size={24} strokeWidth={2} />
                  </div>
                  <div>
                    <h2 className="section-title" style={{ fontSize: 22, marginBottom: 8 }}>
                      Life Mirror
                    </h2>
                    <p className="muted" style={{ margin: '0 0 14px' }}>
                      {soften(
                        'Name what feels heavy and where it shows up — get a calm truth, a Jesus-centred insight, one grounding action, and an optional short prayer.',
                      )}
                    </p>
                    <button
                      type="button"
                      className="primary-btn"
                      onClick={() => setTab('mirror')}
                    >
                      Open Life Mirror
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid-2" style={{ marginTop: 16 }}>
                <FeatureCard
                  title={soften('Jesus-centred')}
                  text={soften(
                    'Know God through the life, compassion and teaching of Jesus Christ.',
                  )}
                />
                <FeatureCard
                  title={quietMode ? 'Quiet courage' : 'Mary as model'}
                  text={
                    quietMode
                      ? 'Learn trust, humility and courage through a mother’s faithful example.'
                      : 'Learn trust, humility and courage through Mary’s faithful example.'
                  }
                />
                <FeatureCard
                  title={quietMode ? 'Community faith' : 'Apostolic faith'}
                  text={soften(
                    'Explore faith through witness, friendship, service and hope.',
                  )}
                />
                <FeatureCard
                  title="Daily wisdom"
                  text={soften('Apply Christian love to ordinary life situations.')}
                />
              </div>

              <div className="card" style={{ marginTop: 16 }}>
                <h2 className="section-title">Mission</h2>
                <p className="muted">
                  {soften(
                    'To help people discover Jesus Christ through love, prayer, reflection and everyday kindness, in a way that is simple, peaceful and welcoming to all.',
                  )}
                </p>
                <span className="badge">
                  {soften('Built on love of God and love of neighbour')}
                </span>
              </div>

              {dailyReflections.length > 0 ? (
                <div style={{ marginTop: 16 }}>
                  <h2 className="section-title" style={{ marginBottom: 12 }}>
                    Daily reflections
                  </h2>
                  <div className="grid-2">
                    {dailyReflections.map((item) => (
                      <div className="card" key={item.id}>
                        <h3 style={{ margin: '0 0 8px', fontSize: 18 }}>{item.title}</h3>
                        {item.theme ? (
                          <p className="muted" style={{ margin: '0 0 8px', fontSize: 13 }}>
                            {soften(item.theme)}
                          </p>
                        ) : null}
                        <p className="muted" style={{ margin: '0 0 12px' }}>
                          {soften(item.text)}
                        </p>
                        {item.action ? (
                          <p className="badge" style={{ marginBottom: 8 }}>
                            Try: {soften(item.action)}
                          </p>
                        ) : null}
                        {item.prayer ? (
                          <div className="reflection">
                            <strong>Short prayer:</strong>
                            <p style={{ marginBottom: 0 }}>{soften(item.prayer)}</p>
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </motion.div>
          ) : null}

          {tab === 'story' ? (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <OurStory onNavigate={setTab} onOpenPromise={() => setTab('promise')} />
            </motion.div>
          ) : null}

          {tab === 'jesus' ? (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <WalkingWithJesus moments={jesusPathMoments} />
            </motion.div>
          ) : null}

          {tab === 'mirror' ? (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <LifeMirror />
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
                  <p className="muted">{soften(topic.plain)}</p>

                  <div className="reflection">
                    <strong>For teenagers:</strong>
                    <p>{soften(topic.teenager)}</p>
                    <strong>For adults:</strong>
                    <p>{soften(topic.adult)}</p>
                    <strong>For older people:</strong>
                    <p>{soften(topic.older)}</p>
                    <strong>For explorers:</strong>
                    <p>{soften(topic.explorer)}</p>
                  </div>

                  <p className="badge">{soften(topic.reflection)}</p>
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
                    <p className="muted">{soften(scenario.trigger)}</p>

                    <div className="grid-4">
                      {scenario.steps.map((step, index) => (
                        <div className="step" key={`${scenario.id}-step-${index}`}>
                          <strong>{index + 1}.</strong> {soften(step)}
                        </div>
                      ))}
                    </div>

                    <p className="badge">Practice: {soften(scenario.principle)}</p>

                    <div className="reflection">
                      <strong>Short prayer:</strong>
                      <p style={{ marginBottom: 0 }}>{soften(scenario.prayer)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : null}

          {tab === 'prayer' ? (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <div className="card">
                <h2 className="section-title">
                  {quietMode ? 'Personalised reflection builder' : 'Personalised prayer builder'}
                </h2>

                <div className="form-grid">
                  <label>
                    {quietMode ? 'Address your words to' : 'Address prayer to'}
                    <input
                      value={addressTo}
                      onChange={(event) => setAddressTo(event.target.value)}
                      placeholder={
                        quietMode ? 'Love, kindness, the sacred…' : 'God, Lord, Jesus...'
                      }
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

                <div className="timer-buttons" style={{ marginTop: 18 }}>
                  <button
                    type="button"
                    className={contemplativePrayer ? 'primary-btn' : 'secondary-btn'}
                    onClick={() => setContemplativePrayer((v) => !v)}
                  >
                    Contemplative view
                  </button>
                  <label
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      fontSize: 14,
                      color: '#475569',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={contemplativeAuto}
                      onChange={(e) => setContemplativeAuto(e.target.checked)}
                      disabled={!contemplativePrayer}
                    />
                    Gentle auto-advance
                  </label>
                </div>

                {contemplativePrayer ? (
                  <ContemplativePrayerView
                    prayerText={displayPrayer}
                    autoAdvance={contemplativeAuto}
                  />
                ) : (
                  <div className="prayer-output" role="status">
                    {displayPrayer}
                  </div>
                )}

                <div className="timer-buttons">
                  <button type="button" className="primary-btn" onClick={handleSavePrayer}>
                    {quietMode ? 'Save reflection' : 'Save prayer'}
                  </button>
                  <button type="button" className="secondary-btn" onClick={handleCopyPrayer}>
                    {quietMode ? 'Copy text' : 'Copy prayer'}
                  </button>
                </div>

                <p className="footer-note" style={{ marginTop: 16 }}>
                  {soften(
                    'This supports personal prayer and does not replace pastoral care, counselling, or emergency help.',
                  )}
                </p>
              </div>

              <div className="card" style={{ marginTop: 16 }}>
                <h2 className="section-title">
                  {quietMode ? 'Saved reflections' : 'Saved prayers'}
                </h2>

                {savedPrayers.length === 0 ? (
                  <p className="muted">
                    {quietMode ? 'No saved reflections yet.' : 'No saved prayers yet.'}
                  </p>
                ) : null}

                <div className="saved-list">
                  {savedPrayers.map((item) => (
                    <div className="small-card" key={item.id}>
                      <p className="muted" style={{ fontSize: 13, margin: '0 0 8px' }}>
                        {item.createdAt
                          ? new Date(item.createdAt).toLocaleString()
                          : ''}
                      </p>
                      <p style={{ margin: '0 0 12px', whiteSpace: 'pre-wrap' }}>
                        {soften(item.text)}
                      </p>
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
                      {meditation.duration} minutes · {soften(meditation.theme)}
                    </p>
                    <p style={{ margin: '8px 0 0', color: '#334155' }}>
                      {soften(meditation.script)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="card">
                <h2 className="section-title">Simple chants</h2>

                {chants.map((chant) => (
                  <div className="chant" key={chant.id}>
                    <strong>{chant.title}</strong>
                    <p style={{ margin: '6px 0 0' }}>{soften(chant.line)}</p>
                    <small className="muted">{soften(chant.meaning)}</small>
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
                      <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{soften(entry.text)}</p>
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
                  {soften(
                    'A weekly challenge to build harmony without argument: one kindness, one apology, one act of listening, one prayer for someone else.',
                  )}
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
                  {soften(
                    'Choose one person to bless quietly. Send a kind message, offer practical help, or pray for them without needing recognition.',
                  )}
                </p>
              </div>

              <p className="footer-note">
                {soften(
                  'My Faith is a spiritual reflection app. It is not a replacement for pastoral care, medical care, counselling or emergency help. If someone is at risk of harm, seek urgent support.',
                )}
              </p>
            </motion.div>
          ) : null}

          {tab === 'promise' ? (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <OurPromise />
            </motion.div>
          ) : null}
        </section>
      </main>

      <p className="footer-note" style={{ maxWidth: 1180, margin: '0 auto', padding: '0 18px 28px' }}>
        {soften(
          'This tool supports decision-making and does not replace clinical judgement.',
        )}
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

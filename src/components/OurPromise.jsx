import { BadgeCheck, Leaf } from 'lucide-react'
import { globalEthics } from '../data/phase4Content.js'
import { useCalmPreferences } from '../context/CalmPreferencesContext.jsx'
import { applyQuietText } from '../services/quietMode.js'

const commitments = [
  'It will never shame you.',
  'It will never argue with your beliefs.',
  'It will never track you across the web.',
  'It will never sell your data.',
  'It will never pressure major life decisions.',
  'It will never replace human help when you need a person.',
]

const gentlePrompts = [
  'You belong here — one breath at a time.',
  'Small kindness counts more than you think.',
  'Stillness is not failure; it is repair.',
  'You do not have to earn rest.',
]

export default function OurPromise() {
  const {
    gentleDailyPrompt,
    setGentleDailyPrompt,
    quietMode,
    setQuietMode,
    experienceMode,
    setExperienceMode,
    browserDailyReminder,
    setBrowserDailyReminder,
    browserReminderTime,
    setBrowserReminderTime,
  } = useCalmPreferences()

  const apply = (t) => (quietMode ? applyQuietText(t) : t)

  async function handleBrowserReminderToggle(next) {
    if (!next) {
      setBrowserDailyReminder(false)
      return
    }
    if (typeof window === 'undefined' || !('Notification' in window)) {
      window.alert(
        'This browser does not support gentle reminders. The in-app welcome banner still works.',
      )
      return
    }
    if (Notification.permission === 'denied') {
      window.alert(
        'Notifications are blocked for this site. You can allow them in your browser settings for My Faith.',
      )
      return
    }
    if (Notification.permission === 'default') {
      const result = await Notification.requestPermission()
      if (result !== 'granted') {
        window.alert('Reminder not enabled — permission was not granted.')
        return
      }
    }
    setBrowserDailyReminder(true)
  }

  return (
    <div className="our-promise">
      <div className="card our-promise-hero">
        <BadgeCheck size={32} aria-hidden style={{ color: '#047857' }} />
        <h2 className="section-title" style={{ marginTop: 12 }}>
          What My Faith will never do
        </h2>
        <p className="muted" style={{ marginBottom: 0 }}>
          Trust grows when an app is honest about its limits. This page is our public promise.
        </p>
      </div>

      <ul className="our-promise-list card" aria-label="Commitments">
        {commitments.map((line) => (
          <li key={line} className="our-promise-item">
            <Leaf size={18} aria-hidden className="our-promise-icon" />
            <span>{line}</span>
          </li>
        ))}
      </ul>

      <div className="card our-promise-ethics-global">
        <h3 className="our-promise-prefs-title" style={{ marginTop: 0 }}>
          Global ethics &amp; trust
        </h3>
        <p className="muted" style={{ marginTop: 0 }}>
          Plain language for people far beyond any one country or tradition.
        </p>
        <ul className="our-story-list our-story-list-highlight">
          {globalEthics.map((line) => (
            <li key={line}>{apply(line)}</li>
          ))}
        </ul>
      </div>

      <div className="card our-promise-prefs">
        <h3 className="our-promise-prefs-title">Calm preferences</h3>
        <p className="muted our-promise-prefs-lead">
          Tune the app to your season — no account required. Everything stays on this device.
        </p>

        <div className="our-promise-mode-field">
          <label htmlFor="experience-mode-select" className="our-promise-prefs-title">
            Experience mode
          </label>
          <p className="muted small" style={{ margin: '6px 0 10px' }}>
            Neutral is the default — for everyone. Spiritual adds gentle sacred language. Quiet
            uses fewer words.
          </p>
          <select
            id="experience-mode-select"
            value={experienceMode}
            onChange={(e) => setExperienceMode(e.target.value)}
            className="lm2-mode-select"
          >
            <option value="neutral">Neutral</option>
            <option value="spiritual">Spiritual</option>
            <option value="quiet">Quiet</option>
          </select>
        </div>

        <label className="our-promise-toggle">
          <input
            type="checkbox"
            checked={quietMode}
            onChange={(e) => setQuietMode(e.target.checked)}
          />
          <span>
            <strong>Quick quiet</strong>
            <span className="muted block small">
              Same as choosing Quiet mode above — minimal words when you feel overwhelmed.
            </span>
          </span>
        </label>

        <label className="our-promise-toggle">
          <input
            type="checkbox"
            checked={gentleDailyPrompt}
            onChange={(e) => setGentleDailyPrompt(e.target.checked)}
          />
          <span>
            <strong>Gentle daily welcome</strong>
            <span className="muted block small">
              When you open the app once a day, a short calming line may appear at the top. No
              notifications, no noise — only if you choose.
            </span>
          </span>
        </label>

        <div className="our-promise-toggle our-promise-toggle-block">
          <label style={{ display: 'flex', gap: 12, alignItems: 'flex-start', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={browserDailyReminder}
              onChange={(e) => handleBrowserReminderToggle(e.target.checked)}
              style={{ marginTop: 4 }}
            />
            <span>
              <strong>Optional browser reminder</strong>
              <span className="muted block small">
                One soft notification per day at the time you pick — only if your browser allows
                it. This is best-effort (many devices need the app open or installed); there is
                no server and no tracking.
              </span>
            </span>
          </label>
          {browserDailyReminder ? (
            <label className="our-promise-time-row">
              <span className="muted small">Time (your device)</span>
              <input
                type="time"
                value={browserReminderTime}
                onChange={(e) => setBrowserReminderTime(e.target.value)}
              />
            </label>
          ) : null}
        </div>

        <p className="footer-note" style={{ marginTop: 16, marginBottom: 0 }}>
          My Faith supports reflection and does not replace pastoral care, therapy, medical
          care, or emergency services. This tool supports decision-making and does not replace
          clinical judgement.
        </p>
      </div>

      <div className="card" style={{ background: '#f8fafc' }}>
        <h3 className="section-title" style={{ fontSize: 20 }}>
          Examples of gentle welcomes
        </h3>
        <p className="muted" style={{ marginTop: 0 }}>
          If you enable the daily welcome, you might see lines like these (they rotate):
        </p>
        <ul className="our-promise-examples muted">
          {gentlePrompts.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

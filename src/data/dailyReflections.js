import { resolveModeCopy } from '../language/resolveModeCopy.js'
import { wisdomThemeById } from '../language/wisdomThemes.js'

/**
 * Bundled daily reflections — wisdom themes in universal language.
 * @typedef {{
 *   id: string
 *   themeId: string
 *   themeLabel: string
 *   title: Record<string, string>
 *   text: Record<string, string>
 *   action: Record<string, string>
 *   prayer?: Record<string, string>
 * }} DailyReflectionSource
 */

/** @type {DailyReflectionSource[]} */
const dailyReflectionsSource = [
  {
    id: 'dr-release',
    themeId: 'release',
    themeLabel: 'Stillness & release',
    title: {
      neutral: 'Loosen one grip',
      spiritual: 'A gentle release',
      quiet: 'Loosen',
    },
    text: {
      neutral:
        'You may carry more than one thought. If it helps, choose one worry to set down for the next hour — not forever, just for now.',
      spiritual:
        'Stillness is not emptiness. Ask what the heart may loosen without losing love.',
      quiet: 'Set down one thing.',
    },
    action: {
      neutral: 'Write one sentence: I release…',
      spiritual: 'Breathe out slowly once, as a small offering of release.',
      quiet: 'Breathe out.',
    },
    prayer: {
      neutral: 'If it helps: may I find room to breathe.',
      spiritual: 'If it helps: meet me in stillness.',
      quiet: 'Room to breathe.',
    },
  },
  {
    id: 'dr-renewal',
    themeId: 'renewal',
    themeLabel: 'Return & renewal',
    title: {
      neutral: 'Begin again',
      spiritual: 'Mercy & return',
      quiet: 'Again',
    },
    text: {
      neutral:
        'A return is possible after a hard day. You do not need to be perfect to take the next honest step.',
      spiritual:
        'Renewal often begins small — a whispered sorry, a repaired moment, a heart that tries again.',
      quiet: 'One step back toward peace.',
    },
    action: {
      neutral: 'Repair one small thing you can repair today.',
      spiritual: 'Ask for mercy for one failure — then act with kindness.',
      quiet: 'Repair one thing.',
    },
  },
  {
    id: 'dr-awareness',
    themeId: 'awareness',
    themeLabel: 'Awareness & compassion',
    title: {
      neutral: 'See gently',
      spiritual: 'Compassionate seeing',
      quiet: 'See',
    },
    text: {
      neutral:
        'Suffering is human. Awareness is not blame — it is noticing what is here with kindness.',
      spiritual:
        'Compassion begins when the heart stops fighting what is already true.',
      quiet: 'Notice without blame.',
    },
    action: {
      neutral: 'Name what you feel in one word — no fixing.',
      spiritual: 'Sit for one minute with what is true.',
      quiet: 'One word.',
    },
  },
  {
    id: 'dr-non-harm',
    themeId: 'non-harm',
    themeLabel: 'Non-harm & truth',
    title: {
      neutral: 'Choose less harm',
      spiritual: 'The way of gentleness',
      quiet: 'Gentle',
    },
    text: {
      neutral:
        'Restraint protects life. Before you speak or send, you may ask: will this heal or harm?',
      spiritual:
        'Reverence for life includes truthfulness without cruelty — toward others and yourself.',
      quiet: 'Heal, not harm.',
    },
    action: {
      neutral: 'Delay one message until you are calmer.',
      spiritual: 'Choose one gentle word where harshness was easy.',
      quiet: 'Pause before sending.',
    },
  },
  {
    id: 'dr-order',
    themeId: 'good-order',
    themeLabel: 'Duty & harmony',
    title: {
      neutral: 'Steady living',
      spiritual: 'Ordered love',
      quiet: 'Steady',
    },
    text: {
      neutral:
        'Duty is not coldness. Respect and small routines can protect what you love — at home, at work, in friendship.',
      spiritual:
        'Harmony grows when daily life reflects what you say you value.',
      quiet: 'One steady choice.',
    },
    action: {
      neutral: 'Keep one promise you made today — however small.',
      spiritual: 'Align one action with your deepest yes.',
      quiet: 'Keep one promise.',
    },
  },
  {
    id: 'dr-conscience',
    themeId: 'conscience',
    themeLabel: 'Conscience & courage',
    title: {
      neutral: 'Quiet courage',
      spiritual: 'Conscience speaks',
      quiet: 'Courage',
    },
    text: {
      neutral:
        'Under pressure, conscience still whispers. Courage can be refusing betrayal of your own values.',
      spiritual:
        'To stand for dignity when it costs something is a faithful act — without hatred.',
      quiet: 'Stand inside.',
    },
    action: {
      neutral: 'Do one thing your conscience has been asking for.',
      spiritual: 'Pray or reflect: give me courage without cruelty.',
      quiet: 'One brave step.',
    },
  },
  {
    id: 'dr-dignity',
    themeId: 'dignity',
    themeLabel: 'Dignity & meaning',
    title: {
      neutral: 'Human dignity',
      spiritual: 'Dignity & love',
      quiet: 'Dignity',
    },
    text: {
      neutral:
        'Every person carries dignity — including you. Meaning grows through responsible love and small just acts.',
      spiritual:
        'Justice and service are ways love becomes visible in ordinary hours.',
      quiet: 'You matter.',
    },
    action: {
      neutral: 'Treat one person with extra respect today.',
      spiritual: 'Offer fairness where it would be easy to look away.',
      quiet: 'Respect one person.',
    },
  },
  {
    id: 'dr-service',
    themeId: 'public-duty',
    themeLabel: 'Service & protection',
    title: {
      neutral: 'Humble service',
      spiritual: 'Quiet duty',
      quiet: 'Serve',
    },
    text: {
      neutral:
        'Humility protects the vulnerable better than display. Peace is often built in hidden kindness.',
      spiritual:
        'To guard the weak is sacred work in plain clothes — a cup of water, a listening ear.',
      quiet: 'Help quietly.',
    },
    action: {
      neutral: 'Help someone overlooked — without posting about it.',
      spiritual: 'Serve one person as a quiet gift.',
      quiet: 'One hidden help.',
    },
  },
  {
    id: 'dr-forgiveness',
    themeId: 'renewal',
    themeLabel: 'Forgiveness',
    title: {
      neutral: 'Soft forgiveness',
      spiritual: 'Mercy',
      quiet: 'Mercy',
    },
    text: {
      neutral:
        'Forgiveness is not pretending harm did not matter. It can be a slow loosening so bitterness does not own you.',
      spiritual:
        'Mercy frees the one who carries the wound — often slowly, often with tears.',
      quiet: 'Loosen bitterness.',
    },
    action: {
      neutral: 'Write one line you are ready to release — or one apology to offer.',
      spiritual: 'Whisper: I choose mercy over score-keeping.',
      quiet: 'Release one line.',
    },
  },
  {
    id: 'dr-hope',
    themeId: 'dignity',
    themeLabel: 'Hope',
    title: {
      neutral: 'A little hope',
      spiritual: 'Small flame',
      quiet: 'Hope',
    },
    text: {
      neutral:
        'Hope does not need to be loud. One honest step still counts when the day feels grey.',
      spiritual:
        'A small flame is still light. The path continues in ordinary faithfulness.',
      quiet: 'One step.',
    },
    action: {
      neutral: 'Do one thing that makes tomorrow slightly kinder.',
      spiritual: 'Offer tomorrow one gentle yes.',
      quiet: 'One kind act.',
    },
  },
  {
    id: 'dr-stillness',
    themeId: 'release',
    themeLabel: 'Stillness',
    title: {
      neutral: 'Pause',
      spiritual: 'Holy pause',
      quiet: 'Pause',
    },
    text: {
      neutral:
        'Freedom from craving begins with a pause. You do not have to want less today — only notice the want.',
      spiritual:
        'Non-attachment is not coldness. It is choosing what truly nourishes.',
      quiet: 'Notice want.',
    },
    action: {
      neutral: 'Take three slow breaths before the next demand.',
      spiritual: 'Sit in silence for two minutes — no goal.',
      quiet: 'Three breaths.',
    },
  },
  {
    id: 'dr-family',
    themeId: 'good-order',
    themeLabel: 'Respect & care',
    title: {
      neutral: 'Care in relationships',
      spiritual: 'Love at home',
      quiet: 'Care',
    },
    text: {
      neutral:
        'Social harmony often begins with one respectful sentence — especially where love is complicated.',
      spiritual:
        'Family and neighbour are places where duty becomes tenderness — or where we learn again.',
      quiet: 'One kind sentence.',
    },
    action: {
      neutral: 'Send one message of appreciation — not debate.',
      spiritual: 'Bless one relationship with patience today.',
      quiet: 'One thanks.',
    },
  },
]

/**
 * @param {string} [mode]
 * @returns {{ id: string; title: string; theme: string; text: string; action: string; prayer: string }[]}
 */
export function getBundledDailyReflections(mode = 'neutral') {
  return dailyReflectionsSource.map((r) => ({
    id: r.id,
    title: resolveModeCopy(r.title, mode),
    theme: r.themeLabel || wisdomThemeById[r.themeId] || '',
    text: resolveModeCopy(r.text, mode),
    action: resolveModeCopy(r.action, mode),
    prayer: r.prayer ? resolveModeCopy(r.prayer, mode) : '',
  }))
}

export { dailyReflectionsSource }

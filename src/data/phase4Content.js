/** Phase 4 — global story, identity & positioning (source for UI + press tone). */

import { SPIRITUAL_NAMES, UI_LABELS } from './spiritualLanguage.js'

const { teacher } = SPIRITUAL_NAMES

export const positioningLine =
  'My Faith is a gentle path into spirituality for all human beings — including those with no spiritual experience yet.'

export const taglines = [
  'Faith, explained gently.',
  'Universal love — hope stronger than despair.',
  'A quiet place for a loud world.',
  'Walk gently. Live deeply.',
  'Where love comes before arguments.',
  'Explore faith. Keep your freedom.',
]

export const whatMyFaithIs =
  `A quiet, human space to explore love, meaning, faith, and life through ${teacher} and timeless wisdom.`

export const whatMyFaithIsNot = [
  'Not a church replacement',
  'Not an argument',
  'Not a doctrine platform',
  'Not culture-war religion',
  'Not a rulebook',
]

export const manifestoParagraphs = [
  'Welcome to My Faith.',
  'This is not a place for arguments or pressure.',
  `It is a place to pause, reflect, and explore love of God, love of neighbour, the way of ${teacher}, and the universal thread in the Dialogue of Courage and the Wisdom of Stillness — one love, many voices.`,
  'We lift up women, the poor, the tired, and the overlooked — not the rich, famous, or powerful.',
  'We hold a hard truth gently: God made us to carry something of his own image, so love often waits for us to ask before acting — yet those who cannot ask are not forgotten.',
  'Hope is the last word — stronger than bereavement and despair when we let universal love lead.',
  'You do not need to believe everything to begin.',
  'You do not need to belong to ask questions.',
  'If you are tired, searching, curious, faithful, unsure, or simply human — you are welcome here.',
  'Take what brings peace. Leave what does not.',
]

export const worldProblems = [
  'People are exhausted',
  'Society is polarised',
  'Faith spaces feel aggressive or outdated',
  'Mental health is strained',
  'Young people distrust institutions',
  'Silence is rare',
  'Wisdom feels missing',
]

export const myFaithResponse = [
  'Instead of speaking louder, it whispers.',
  'Instead of arguing, it invites.',
  'Instead of demanding belief, it offers presence.',
]

/** @type {{ id: string, title: string, for: string[], focus: string[], cta: string, tab: string }[]} */
export const threeJourneys = [
  {
    id: 'peace',
    title: 'The Peace Journey',
    for: ['anxiety', 'burnout', 'grief', 'overstimulation'],
    focus: ['stillness', 'breath', 'kindness', 'short prayers', 'grounding thoughts'],
    cta: 'Open stillness & peace tools',
    tab: 'meditate',
  },
  {
    id: 'jesus',
    title: UI_LABELS.loveJourney,
    for: ['seekers', 'doubters', 'wounded believers', 'the curious'],
    focus: [
      `how ${teacher} loved`,
      `how ${teacher} spoke`,
      `how ${teacher} treated people`,
      `how ${teacher} faced suffering`,
      `how ${teacher} forgave`,
    ],
    cta: 'Walk the moments',
    tab: 'jesus',
  },
  {
    id: 'hope',
    title: 'The Universal Hope Journey',
    for: ['grief', 'despair', 'deep questions', 'interfaith seekers', 'those who care for the helpless'],
    focus: [
      'universal love',
      'asking and receiving',
      'those who cannot speak',
      'women and the poor in sacred story',
      'hope beyond bereavement',
    ],
    cta: 'Open universal hope',
    tab: 'hope',
  },
  {
    id: 'daily',
    title: 'The Daily Life Journey',
    for: ['work', 'family', 'study', 'relationships', 'conflict', 'self-worth'],
    focus: ['micro-actions', 'conscience', 'love in practice', 'discernment', 'integrity'],
    cta: 'Explore life scenarios',
    tab: 'life',
  },
]

export const uniqueSeven = [
  'It never shames',
  'It never argues',
  'It never rushes belief',
  'It respects atheists',
  `It centres ${teacher} without weaponising love`,
  'It teaches through life, not rules',
  'It values silence as much as text',
]

export const quietModePublic = {
  lead:
    'Quiet Mode means: even softer labels, no insider terms, and no pressure — while love, meaning, and wisdom remain.',
  invites:
    'This invites people hurt by religion, schools, counsellors, and interfaith use — and helps make My Faith welcome in many countries.',
}

export const globalEthics = [
  'We will not manipulate belief.',
  'We will not exploit fear.',
  'We will not sell personal data.',
  'We will not tell you who to vote for, hate, or fear.',
  `We aim only to encourage love, truth, mercy, and hope — as ${teacher} taught.`,
]

export const launchSoft = [
  {
    title: 'Phase 1 — Private sharing',
    lines: ['friends', 'educators', 'chaplains', 'clinicians', 'faith leaders'],
    tone: 'Language: “We’re building something gentle. Would you like to see it?”',
  },
  {
    title: 'Phase 2 — Public quiet launch',
    lines: ['no hype', 'no ads', 'no controversy', 'no debates', 'Let users talk.'],
  },
  {
    title: 'Phase 3 — Organic growth',
    lines: [
      'People share because it helped them, felt safe, didn’t push, and gave peace.',
    ],
  },
]

export const visionFiveYears = [
  'A recommended wellbeing tool',
  'A school reflection resource',
  'A chaplaincy companion',
  'A spiritual safe space',
  'A gentle gateway to spiritual life',
  'A model for humane faith online',
]

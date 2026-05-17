/**
 * Path of Unparalleled Love — moments (not lessons). Plain language; depth without debate.
 * @typedef {{
 *   id: string
 *   title: string
 *   story: string
 *   question: string
 *   reflection: string
 *   smallAct: string
 * }} LovePathMoment
 */

import { SPIRITUAL_NAMES } from './spiritualLanguage.js'

const { teacher, teacherPossessive, sacredStories } = SPIRITUAL_NAMES

/** @type {LovePathMoment[]} */
export const jesusPathMoments = [
  {
    id: 'notices',
    title: `${teacher} notices`,
    story: `In ${sacredStories}, ${teacher} often stops for people others pass by — the overlooked, the judged, the exhausted. Love looks up. It asks a simple question. It does not rush.`,
    question: 'Who do I ignore without meaning to?',
    reflection: 'Attention is the first form of love.',
    smallAct: 'Notice one person today without your phone.',
  },
  {
    id: 'welcomes',
    title: `${teacher} welcomes`,
    story: `When children were pushed aside, ${teacher} made space. When someone felt unwelcome, love offered dignity first — not a lecture, not a test.`,
    question: 'Where do I make space for someone who feels small?',
    reflection: 'Welcome is a shelter before it is a sermon.',
    smallAct: 'Offer one warm greeting you do not have to give.',
  },
  {
    id: 'table',
    title: `${teacher} shares a table`,
    story: `${teacher} ate with people society side‑lined. A shared meal was a way of saying: you belong here. Truth could come later; friendship came first.`,
    question: 'Who have I written off without hearing their story?',
    reflection: 'Kindness at a table can change a heart faster than an argument.',
    smallAct: 'Share food or drink with someone — in person or with a simple invite.',
  },
  {
    id: 'forgives',
    title: `${teacher} forgives`,
    story: `Forgiveness in ${teacherPossessive} way is never cruelty dressed as holiness. It begins with honesty about pain — and a door opened toward freedom, not score‑keeping.`,
    question: 'Who am I still angry with?',
    reflection: 'Forgiveness begins inside, not with approval of harm.',
    smallAct: 'Release one sentence of bitterness — say it aloud or write it, then let it go.',
  },
  {
    id: 'serves',
    title: `${teacher} serves`,
    story: `${teacher} took the place of a servant — washing feet, carrying exhaustion, choosing humility when honour could have been demanded.`,
    question: 'What would it look like to lead with service today?',
    reflection: `Greatness, in ${teacherPossessive} way, looks like gentleness with strength.`,
    smallAct: 'Do one hidden task that helps someone — no announcement.',
  },
  {
    id: 'widow-poor',
    title: `${teacher} honours the poor`,
    story: `A widow gave two small coins — all she had — while others gave from surplus. ${teacher} praised her, not the wealthy display. Love stopped for women others dismissed, for beggars, for the sick — never for fame or empire.`,
    question: 'Who have I overlooked because they are not powerful or popular?',
    reflection: 'In God’s eyes, quiet generosity outweighs loud status.',
    smallAct: 'Give time or practical help to someone with little — without posting about it.',
  },
  {
    id: 'peace',
    title: `${teacher} speaks peace`,
    story: `When fear rose like a storm, ${teacher} spoke calm — not denial of danger, but a steady presence: “Peace. You are not alone.”`,
    question: 'What fear keeps tightening my chest?',
    reflection: 'Peace is not the absence of trouble; it is presence in the middle of it.',
    smallAct: 'Take three slow breaths before your next hard conversation.',
  },
  {
    id: 'weeps',
    title: `${teacher} weeps`,
    story: `At loss and grief, ${teacher} did not offer a slogan. Love wept. Compassion honoured pain instead of rushing past it.`,
    question: 'What sadness have I been too busy to feel?',
    reflection: 'Tears can be honest prayer when words fail.',
    smallAct: 'Name one loss or worry kindly to yourself — no fixing, just truth.',
  },
]

/** @type {Record<string, string>} */
export const lovePathQuietTitles = {
  notices: 'Noticing the overlooked',
  welcomes: 'A wide welcome',
  table: 'Sharing a table',
  forgives: 'Mercy and freedom',
  serves: 'Humble strength',
  'widow-poor': 'The poor and overlooked',
  peace: 'Peace in the storm',
  weeps: 'Honest grief',
}

/** @deprecated use lovePathQuietTitles */
export const jesusPathQuietTitles = lovePathQuietTitles

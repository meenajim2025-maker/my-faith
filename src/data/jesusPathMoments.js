/**
 * Walking With Jesus — moments (not lessons). Plain language; depth without debate.
 * @typedef {{
 *   id: string
 *   title: string
 *   story: string
 *   question: string
 *   reflection: string
 *   smallAct: string
 * }} JesusPathMoment
 */

/** @type {JesusPathMoment[]} */
export const jesusPathMoments = [
  {
    id: 'notices',
    title: 'Jesus notices',
    story:
      'In the Gospels, Jesus often stops for people others pass by — the overlooked, the judged, the exhausted. He looks up. He asks a simple question. He does not rush.',
    question: 'Who do I ignore without meaning to?',
    reflection: 'Attention is the first form of love.',
    smallAct: 'Notice one person today without your phone.',
  },
  {
    id: 'welcomes',
    title: 'Jesus welcomes',
    story:
      'When children were pushed aside, Jesus made space. When someone felt unwelcome, he offered dignity first — not a lecture, not a test.',
    question: 'Where do I make space for someone who feels small?',
    reflection: 'Welcome is a shelter before it is a sermon.',
    smallAct: 'Offer one warm greeting you do not have to give.',
  },
  {
    id: 'table',
    title: 'Jesus shares a table',
    story:
      'Jesus ate with people society side‑lined. A shared meal was his way of saying: you belong here. Truth could come later; friendship came first.',
    question: 'Who have I written off without hearing their story?',
    reflection: 'Kindness at a table can change a heart faster than an argument.',
    smallAct: 'Share food or drink with someone — in person or with a simple invite.',
  },
  {
    id: 'forgives',
    title: 'Jesus forgives',
    story:
      'Forgiveness in Jesus’ life is never cruelty dressed as holiness. It begins with honesty about pain — and a door opened toward freedom, not score‑keeping.',
    question: 'Who am I still angry with?',
    reflection: 'Forgiveness begins inside, not with approval of harm.',
    smallAct: 'Release one sentence of bitterness — say it aloud or write it, then let it go.',
  },
  {
    id: 'serves',
    title: 'Jesus serves',
    story:
      'Jesus took the place of a servant — washing feet, carrying exhaustion, choosing humility when he had every right to demand honour.',
    question: 'What would it look like to lead with service today?',
    reflection: 'Greatness, in Jesus’ way, looks like gentleness with strength.',
    smallAct: 'Do one hidden task that helps someone — no announcement.',
  },
  {
    id: 'peace',
    title: 'Jesus speaks peace',
    story:
      'When fear rose like a storm, Jesus spoke calm — not denial of danger, but a steady presence: “Peace. You are not alone.”',
    question: 'What fear keeps tightening my chest?',
    reflection: 'Peace is not the absence of trouble; it is presence in the middle of it.',
    smallAct: 'Take three slow breaths before your next hard conversation.',
  },
  {
    id: 'weeps',
    title: 'Jesus weeps',
    story:
      'At loss and grief, Jesus did not offer a slogan. He wept. His compassion honoured pain instead of rushing past it.',
    question: 'What sadness have I been too busy to feel?',
    reflection: 'Tears can be honest prayer when words fail.',
    smallAct: 'Name one loss or worry kindly to yourself — no fixing, just truth.',
  },
]

/** @type {Record<string, string>} */
export const jesusPathQuietTitles = {
  notices: 'Noticing the overlooked',
  welcomes: 'A wide welcome',
  table: 'Sharing a table',
  forgives: 'Mercy and freedom',
  serves: 'Humble strength',
  peace: 'Peace in the storm',
  weeps: 'Honest grief',
}

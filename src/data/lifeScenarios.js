import { SPIRITUAL_NAMES } from './spiritualLanguage.js'

const { teacher, sacredStories, spiritOfWisdom } = SPIRITUAL_NAMES

/**
 * @typedef {{
 *   id: string
 *   title: string
 *   trigger: string
 *   principle: string
 *   steps: string[]
 *   prayer: string
 * }} LifeScenario
 */

/** @type {LifeScenario[]} */
export const lifeScenarios = [
  {
    id: 'anger',
    title: 'When anger is rising',
    trigger: 'You feel disrespected and want to react quickly.',
    principle: 'Gentleness with truth',
    steps: [
      'Pause before speaking.',
      'Ask: will my words heal or harm?',
      'Choose one calm sentence.',
      'Return later if needed.',
    ],
    prayer:
      'Sacred Love, help me slow down. Give me words that are honest, calm and kind.',
  },
  {
    id: 'comparison',
    title: 'When comparison hurts',
    trigger: 'You feel others are more successful, loved or noticed.',
    principle: 'Gratitude',
    steps: [
      'Name one gift in your life.',
      'Take a short break from scrolling.',
      'Do one small act of service.',
      'Remember dignity is not a competition.',
    ],
    prayer:
      'God, teach me gratitude. Help me see my own life with kindness and hope.',
  },
  {
    id: 'faith-doubt',
    title: 'When faith feels far away',
    trigger: 'You want to believe, but feel dry, unsure or distant.',
    principle: 'Hope',
    steps: [
      'Be honest with God.',
      'Use one short prayer.',
      `Read one moment from ${sacredStories}.`,
      'Speak with a trusted person.',
    ],
    prayer:
      `${teacher}, if I feel far from You, meet me gently. Help me take one small step.`,
  },
  {
    id: 'kindness',
    title: 'When someone needs kindness',
    trigger: 'You notice someone isolated, upset or overlooked.',
    principle: 'Love of neighbour',
    steps: [
      'Notice without judging.',
      'Offer one practical help.',
      'Respect their dignity.',
      'Follow up later.',
    ],
    prayer: 'Sacred Love, open my eyes to those who need kindness today.',
  },
  {
    id: 'forgiveness',
    title: 'When forgiveness is difficult',
    trigger:
      'You have been hurt and do not want bitterness to control you.',
    principle: 'Healing with wisdom',
    steps: [
      'Name the hurt honestly.',
      'Do not pretend it did not matter.',
      'Ask for grace to release hatred.',
      'Keep wise boundaries where needed.',
    ],
    prayer:
      'God of mercy, help me choose healing without denying the truth.',
  },
  {
    id: 'loneliness',
    title: 'When you feel lonely',
    trigger: 'You feel unseen, forgotten or disconnected.',
    principle: 'Human dignity',
    steps: [
      'Take one gentle breath.',
      'Send a message to one safe person.',
      'Step outside if possible.',
      'Say one short prayer of trust.',
    ],
    prayer: 'Sacred Love, remind me that I am seen, known and loved.',
  },
  {
    id: 'decision',
    title: 'When making a difficult decision',
    trigger: 'You are unsure which path is wise.',
    principle: 'Discernment',
    steps: [
      'Ask what leads to love and truth.',
      'Notice what brings deep peace, not just comfort.',
      'Seek wise advice.',
      'Take the next honest step.',
    ],
    prayer:
      `${spiritOfWisdom}, guide my judgement. Help me choose what is loving, truthful and wise.`,
  },
  {
    id: 'grief-despair',
    title: 'When grief or despair feels endless',
    trigger:
      'Bereavement, loss, or numbness is so heavy that hope feels dishonest or far away.',
    principle: 'Hope beyond the worst night',
    steps: [
      'Let tears be honest — despair is not failure.',
      'Do one bodily kindness: water, rest, fresh air.',
      'Let someone sit with you without fixing you.',
      'Whisper one prayer or phrase of love — even if you do not feel it yet.',
    ],
    prayer:
      'God of comfort, stay in this darkness with me. When I cannot hope, hold me until I can breathe again.',
  },
  {
    id: 'caring-cannot-ask',
    title: 'When you care for someone who cannot ask',
    trigger:
      'A child, an ill relative, or someone with profound mental struggle depends on you.',
    principle: 'Love stands in the gap',
    steps: [
      'Pray simply on their behalf.',
      'Protect dignity — refuse shame or gossip.',
      'Ask for practical help for yourself as a carer.',
      'Remember: their worth is not measured by words.',
    ],
    prayer:
      'Sacred Love, be close to one who cannot ask today. Let my love be part of Your answer.',
  },
  {
    id: 'voice-for-oppressed',
    title: 'When someone is trapped by another’s power',
    trigger:
      'You see abuse, coercion, or cruelty — or you are the one trapped.',
    principle: 'Justice with love',
    steps: [
      'Believe that this is not God’s wish — it is human evil.',
      'Seek safe help: trusted person, helpline, safeguarding, law where needed.',
      'Do not confuse forgiveness with staying in danger.',
      'If you are safe, advocate for the one who has no voice.',
    ],
    prayer:
      'God of justice, break what binds the oppressed. Use my courage as part of Your healing.',
  },
  {
    id: 'social-media',
    title: 'When social media affects your peace',
    trigger:
      'You feel restless, jealous, angry or inadequate after scrolling.',
    principle: 'Inner freedom',
    steps: [
      'Pause the app for ten minutes.',
      'Ask what feeling has been stirred.',
      'Do one real-world action.',
      'Return only if it helps rather than harms.',
    ],
    prayer:
      'God, give me freedom from comparison and help me live with peace.',
  },
]

/** @param {string} id */
export function getLifeScenarioById(id) {
  return lifeScenarios.find((s) => s.id === id) ?? null
}

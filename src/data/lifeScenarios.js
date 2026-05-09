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
      'Lord, help me slow down. Give me words that are honest, calm and kind.',
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
      'Read one Gospel moment.',
      'Speak with a trusted person.',
    ],
    prayer:
      'Jesus, if I feel far from You, meet me gently. Help me take one small step.',
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
    prayer: 'Lord, open my eyes to those who need kindness today.',
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
    prayer: 'Lord, remind me that I am seen, known and loved.',
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
      'Holy Spirit, guide my judgement. Help me choose what is loving, truthful and wise.',
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

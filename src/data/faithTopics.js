/** @typedef {'plain' | 'teenager' | 'adult' | 'older' | 'explorer'} TopicVoice */

/**
 * @typedef {{
 *   id: string
 *   title: string
 *   plain: string
 *   teenager: string
 *   adult: string
 *   older: string
 *   explorer: string
 *   reflection: string
 * }} FaithTopic
 */

import { SPIRITUAL_NAMES } from './spiritualLanguage.js'

const {
  teacher,
  loveHimself,
  sacredStories,
  dialogueOfCourage,
  wisdomOfStillness,
  faithfulMother,
  companions,
} = SPIRITUAL_NAMES

/** @type {{ id: TopicVoice; label: string }[]} */
export const topicVoices = [
  { id: 'plain', label: 'Plain language' },
  { id: 'teenager', label: 'Teenager' },
  { id: 'adult', label: 'Adult' },
  { id: 'older', label: 'Later life' },
  { id: 'explorer', label: 'Explorer / unsure' },
]

/** @type {FaithTopic[]} */
export const faithTopics = [
  {
    id: 'who-is-god',
    title: 'Who is God?',
    plain:
      'God is the source of life, love, truth and goodness — not distant, but lovingly close to every person.',
    teenager:
      'God is not just a rule-maker. God is the loving source of your life and dignity.',
    adult:
      'God gives meaning, moral direction and hope in the middle of ordinary responsibilities.',
    older:
      'God is the faithful presence who has walked with you through every season of life.',
    explorer:
      'If you are unsure about faith, begin by looking at love, truth, beauty and conscience.',
    reflection:
      'If God is love, then every honest act of love points us closer to Him.',
  },
  {
    id: 'who-is-jesus',
    title: `Who is ${teacher}?`,
    plain: `${loveHimself} is how many people name God made visible — merciful, truthful, courageous, gentle and close to the suffering.`,
    teenager: `${teacher} shows strength without cruelty and kindness without weakness.`,
    adult: `${teacher} gives a pattern for living with integrity, compassion and courage.`,
    older: `${teacher} remains close in memory, suffering, gratitude and hope.`,
    explorer: `A good first step is to read one short story from ${sacredStories} and ask: what kind of love is this?`,
    reflection: `To know ${teacher} is to learn how to love without losing truth.`,
  },
  {
    id: 'mary',
    title: `Why ${faithfulMother} matters`,
    plain: `${faithfulMother} is honoured because she trusted God and pointed people towards ${teacher}. She is a model of humility, courage and quiet strength.`,
    teenager: `${faithfulMother} teaches that quiet courage can change the world.`,
    adult: `${faithfulMother} shows trust, patience and love in uncertain circumstances.`,
    older: `${faithfulMother} is a companion in prayer, tenderness and hope.`,
    explorer: `${faithfulMother} can be understood as a human example of deep trust and faithful love.`,
    reflection: `${faithfulMother} teaches us to listen deeply and say yes to goodness.`,
  },
  {
    id: 'apostles',
    title: 'Companions on the path',
    plain: `${companions} were ordinary people who became witnesses of ${teacher}. Their story says faith is lived through friendship, courage and service.`,
    teenager:
      'You do not need to be perfect to begin a meaningful journey.',
    adult:
      'Faith grows through community, service and steady witness.',
    older:
      'A life of faith leaves a quiet witness for those who come after us.',
    explorer:
      `${companions} show how ordinary people can be changed by hope.`,
    reflection:
      'You do not need to be perfect to begin.',
  },
  {
    id: 'prayer',
    title: 'What is prayer?',
    plain:
      'Prayer is honest conversation with God. It can include words, silence, gratitude, sorrow, hope and listening.',
    teenager:
      'Prayer can be as simple as saying: God, help me today.',
    adult:
      'Prayer helps you pause, reflect and act with wisdom.',
    older:
      'Prayer can become a peaceful rhythm of gratitude and trust.',
    explorer:
      'If you are unsure, try a quiet sentence: If You are there, guide me towards love and truth.',
    reflection:
      'Prayer is not performance. It is relationship.',
  },
  {
    id: 'universal-love',
    title: 'Universal love',
    plain: `Spiritual life and ancient wisdom both point one way: love is the deepest reality. ${wisdomOfStillness} speaks of one light in all beings; ${teacher} teaches love of God and neighbour. We explore that thread without ranking people or debating inequality.`,
    teenager:
      'You do not have to win a religion contest. Start with kindness — it is never wasted.',
    adult:
      'Universal love means acting justly, forgiving honestly, and seeing dignity in people society ignores.',
    older:
      'A long life teaches that love outlasts status, money, and fame.',
    explorer: `Read one story of ${teacher} with someone overlooked, and one teaching from ${dialogueOfCourage} about acting without hatred — notice what they share.`,
    reflection:
      'Where love is sincere, arguments grow quieter.',
  },
  {
    id: 'asking-god',
    title: 'Why we ask — and why love waits',
    plain: `God made human beings in his image — able to love, protect, and choose. That is why love does not usually force every outcome. Yet sacred story and ${dialogueOfCourage} agree: honest asking opens the door to guidance, courage, and sometimes the undoing of harm — especially when evil blocks healing and peace.`,
    teenager:
      'It is okay to say: I need help. Asking is strength, not failure.',
    adult:
      'Ask for wisdom, not revenge. Be ready to act when the way becomes clear.',
    older:
      'You have asked in silence for years; those prayers were heard.',
    explorer:
      'Try one sentence today: If love is real, show me one step toward peace.',
    reflection:
      'Without asking, we may not receive — not because love is cruel, but because love refuses to force a closed heart.',
  },
  {
    id: 'those-who-cannot-ask',
    title: 'Those who cannot ask',
    plain:
      'Children, the unconscious, profound mental illness, and people trapped by oppression cannot always pray with words. Their worth is unchanged. Love meets them through mercy, through carers who pray on their behalf, and through justice that frees the trapped.',
    teenager:
      'If someone is hurting and cannot speak up, your kindness may be their prayer.',
    adult:
      'Intercession includes action: safeguarding, medical care, friendship, and refusing blame.',
    older:
      'To stay beside someone who cannot respond is itself a holy work.',
    explorer:
      'Hope for the helpless is carried by community — not earned by eloquence.',
    reflection:
      'God sees the heart when the mouth is silent.',
  },
  {
    id: 'love-neighbour',
    title: 'Love of neighbour',
    plain: `${teacher} taught that love of God and love of neighbour belong together. Faith becomes real when it becomes kindness, patience, mercy and service.`,
    teenager:
      'Love means choosing not to humiliate, exclude or use others.',
    adult:
      'Love means patience, justice, forgiveness and practical help.',
    older:
      'Love may be shown through wisdom, listening and blessing others.',
    explorer:
      'Even before belief is certain, love of neighbour can be practised.',
    reflection:
      'A loving action can become a quiet prayer.',
  },
]

/** @param {string} id */
export function getFaithTopicById(id) {
  return faithTopics.find((t) => t.id === id) ?? null
}

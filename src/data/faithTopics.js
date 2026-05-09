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
      'God is the source of life, love, truth and goodness. Christians believe God is not distant, but lovingly close to every person.',
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
    title: 'Who is Jesus Christ?',
    plain:
      'Christians believe Jesus is the Son of God. He shows us what God is like: merciful, truthful, courageous, gentle and close to the suffering.',
    teenager:
      'Jesus shows strength without cruelty and kindness without weakness.',
    adult:
      'Jesus gives a pattern for living with integrity, compassion and courage.',
    older:
      'Jesus remains close in memory, suffering, gratitude and hope.',
    explorer:
      'A good first step is to read one short Gospel story and ask: what kind of person is Jesus?',
    reflection:
      'To know Jesus is to learn how to love without losing truth.',
  },
  {
    id: 'mary',
    title: 'Why Mary matters',
    plain:
      'Mary is honoured because she trusted God and pointed people towards Jesus. She is a model of humility, courage and quiet strength.',
    teenager:
      'Mary teaches that quiet courage can change the world.',
    adult:
      'Mary shows trust, patience and love in uncertain circumstances.',
    older:
      'Mary is a companion in prayer, tenderness and hope.',
    explorer:
      'Mary can be understood as a human example of deep trust and faithful love.',
    reflection:
      'Mary teaches us to listen deeply and say yes to goodness.',
  },
  {
    id: 'apostles',
    title: 'The Apostles',
    plain:
      'The apostles were ordinary people who became witnesses of Jesus. Their story says faith is lived through friendship, courage and service.',
    teenager:
      'You do not need to be perfect to begin a meaningful journey.',
    adult:
      'Faith grows through community, service and steady witness.',
    older:
      'A life of faith leaves a quiet witness for those who come after us.',
    explorer:
      'The apostles show how ordinary people can be changed by hope.',
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
    id: 'love-neighbour',
    title: 'Love of neighbour',
    plain:
      'Jesus taught that love of God and love of neighbour belong together. Faith becomes real when it becomes kindness, patience, mercy and service.',
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

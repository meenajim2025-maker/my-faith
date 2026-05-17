/** @typedef {'neutral' | 'spiritual' | 'quiet'} CopyMode */

/** @type {Record<string, Record<CopyMode, string>>} */
const carryingThoughts = {
  heavy: {
    neutral: 'You are more than this moment. What feels heavy is real — and it is not all of you.',
    spiritual:
      'You are held in love beyond this weight. Your heart may rest without having every answer.',
    quiet: 'More than this moment.',
  },
  lost: {
    neutral: 'Feeling lost does not mean you have failed. The way can return one step at a time.',
    spiritual: 'Even when the path is hidden, grace can meet you in the next honest step.',
    quiet: 'Lost is not failure.',
  },
  restless: {
    neutral: 'Restlessness often means something in you is asking for care. You may pause without fixing everything.',
    spiritual: 'A restless heart can still be loved. Stillness may come as a gift, not a demand.',
    quiet: 'Pause is allowed.',
  },
  ashamed: {
    neutral: 'Shame shrinks in gentle light. You are still worthy of kindness — including from yourself.',
    spiritual: 'Mercy can reach you before you feel deserving. You are not only your worst moment.',
    quiet: 'You are still worthy.',
  },
  angry: {
    neutral: 'Anger can point to something that matters. You do not have to act on it right away.',
    spiritual: 'Anger may guard something sacred. Offer it to love without hatred.',
    quiet: 'Anger is human.',
  },
  lonely: {
    neutral: 'Loneliness is painful and honest. Connection can begin very small.',
    spiritual: 'You are not forgotten. One gentle reach may open a little light.',
    quiet: 'You are not alone.',
  },
  afraid: {
    neutral: 'Fear is a signal, not a verdict. You may move slowly and still move.',
    spiritual: 'Courage can be quiet. You may ask for peace without pretending fear is gone.',
    quiet: 'Move slowly.',
  },
  empty: {
    neutral: 'Emptiness can follow carrying too much. Filling may begin with one small kindness.',
    spiritual: 'An empty season is not the end. Sacred life can return in small ways.',
    quiet: 'Small kindness.',
  },
  curious: {
    neutral: 'Curiosity is a brave beginning. You do not need to know everything to start.',
    spiritual: 'An open heart is already a form of prayer. Wonder is welcome here.',
    quiet: 'Wonder is welcome.',
  },
  grateful: {
    neutral: 'Gratitude is worth noticing, even if the day is mixed.',
    spiritual: 'Thankfulness can open the heart without denying what is hard.',
    quiet: 'Notice good.',
  },
}

/** @type {Record<string, Record<CopyMode, string>>} */
const helpAccent = {
  calm: {
    neutral: 'Calm can be built one breath at a time.',
    spiritual: 'Peace may arrive as a quiet blessing.',
    quiet: 'One breath.',
  },
  clarity: {
    neutral: 'Clarity often comes after honesty, not before.',
    spiritual: 'Light may grow gently in an honest heart.',
    quiet: 'See clearly.',
  },
  courage: {
    neutral: 'Courage can be very small and still real.',
    spiritual: 'Grace can strengthen a quiet yes.',
    quiet: 'Small yes.',
  },
  forgiveness: {
    neutral: 'Forgiveness can begin softly, without forcing it.',
    spiritual: 'Mercy can loosen what bitterness holds.',
    quiet: 'Loosen.',
  },
  hope: {
    neutral: 'Hope does not need to be loud to be real.',
    spiritual: 'A small flame is still light.',
    quiet: 'A little hope.',
  },
  'letting-go': {
    neutral: 'Letting go can be an act of care, not defeat.',
    spiritual: 'Release can make room for love again.',
    quiet: 'Let go.',
  },
}

/** @type {Record<string, Record<CopyMode, string>>} */
const helpPractice = {
  calm: {
    neutral: 'Take one slow breath. Let your shoulders soften.',
    spiritual: 'Breathe in slowly. Ask for peace. Breathe out.',
    quiet: 'Breathe. Soften.',
  },
  clarity: {
    neutral: 'Name one thing you know for sure today — without fixing the rest.',
    spiritual: 'Whisper one true thing to your heart. Wait in silence.',
    quiet: 'One true thing.',
  },
  courage: {
    neutral: 'Stand or sit tall for ten seconds. Feel your feet on the ground.',
    spiritual: 'Place a hand on your heart. Say quietly: I can try.',
    quiet: 'Feet down. Try.',
  },
  forgiveness: {
    neutral: 'Place a hand where you feel tension. Breathe once without judging.',
    spiritual: 'Offer one sentence of mercy — to yourself or another.',
    quiet: 'Mercy once.',
  },
  hope: {
    neutral: 'Look for one small sign of goodness in the next hour.',
    spiritual: 'Thank love for one thing still here.',
    quiet: 'One good sign.',
  },
  'letting-go': {
    neutral: 'Choose one worry to set down for the next hour — not forever.',
    spiritual: 'Release one grip into gentle hands.',
    quiet: 'Set down one.',
  },
}

/** @type {Record<string, Record<CopyMode, string>>} */
const helpStep = {
  calm: {
    neutral: 'Sit quietly for thirty seconds.',
    spiritual: 'Sit in stillness for one minute, if you can.',
    quiet: 'Sit thirty seconds.',
  },
  clarity: {
    neutral: 'Write one honest sentence about what is true right now.',
    spiritual: 'Write one line your heart needs to hear.',
    quiet: 'One honest line.',
  },
  courage: {
    neutral: 'Do one small thing you have been avoiding.',
    spiritual: 'Take one gentle step your conscience asks for.',
    quiet: 'One small step.',
  },
  forgiveness: {
    neutral: 'Write one line you are ready to release — or one apology to offer.',
    spiritual: 'Pray or reflect: help me choose mercy.',
    quiet: 'Release one line.',
  },
  hope: {
    neutral: 'Do one thing that makes tomorrow slightly kinder.',
    spiritual: 'Offer tomorrow one gentle yes.',
    quiet: 'One kind act.',
  },
  'letting-go': {
    neutral: 'Put one object away or close one tab — a symbol of loosening.',
    spiritual: 'Offer one burden in quiet prayer.',
    quiet: 'Loosen one thing.',
  },
}

/** @type {Record<string, Record<CopyMode, string>>} */
const helpShare = {
  calm: {
    neutral: 'One breath at a time.',
    spiritual: 'Peace, gently.',
    quiet: 'Breathe.',
  },
  clarity: {
    neutral: 'Truth, one line at a time.',
    spiritual: 'Light grows gently.',
    quiet: 'See truly.',
  },
  courage: {
    neutral: 'Small courage counts.',
    spiritual: 'Grace for one step.',
    quiet: 'Try once.',
  },
  forgiveness: {
    neutral: 'Begin again, gently.',
    spiritual: 'Mercy meets me here.',
    quiet: 'Begin again.',
  },
  hope: {
    neutral: 'A little hope is enough.',
    spiritual: 'The flame is still here.',
    quiet: 'Still hope.',
  },
  'letting-go': {
    neutral: 'Loosen, do not flee.',
    spiritual: 'Held as I release.',
    quiet: 'Let go.',
  },
}

/** @type {Record<string, Record<CopyMode, string>>} */
const carryingStep = {
  heavy: {
    neutral: 'Write one honest sentence about what feels heavy.',
    spiritual: 'Write one line you would offer to love in prayer.',
    quiet: 'One line.',
  },
  lost: {
    neutral: 'Name one place or person that feels like home, even a little.',
    spiritual: 'Ask for guidance for the next step only.',
    quiet: 'One guide.',
  },
  restless: {
    neutral: 'Step away from the screen for two minutes.',
    spiritual: 'Walk slowly and notice three things you can see.',
    quiet: 'Two-minute pause.',
  },
  ashamed: {
    neutral: 'Say one kind sentence to yourself out loud or in writing.',
    spiritual: 'Whisper: I am still worthy of love.',
    quiet: 'Kind sentence.',
  },
  angry: {
    neutral: 'Write what you are angry about in one line — no sending yet.',
    spiritual: 'Offer anger to love without cruelty.',
    quiet: 'One line only.',
  },
  lonely: {
    neutral: 'Message one safe person, or plan to tomorrow.',
    spiritual: 'Light a candle or open a window — a sign you are here.',
    quiet: 'Reach once.',
  },
  afraid: {
    neutral: 'Name the fear in one word. Breathe out slowly.',
    spiritual: 'Ask for courage without pretending fear is gone.',
    quiet: 'Name fear.',
  },
  empty: {
    neutral: 'Do one small caring act — water, food, or fresh air.',
    spiritual: 'Receive one blessing: sun, breath, or silence.',
    quiet: 'One care act.',
  },
  curious: {
    neutral: 'Read or listen to one paragraph that interests you.',
    spiritual: 'Sit with one question without rushing an answer.',
    quiet: 'One question.',
  },
  grateful: {
    neutral: 'Write one thing you are thankful for today.',
    spiritual: 'Thank love for one gift, aloud or in writing.',
    quiet: 'One thanks.',
  },
}

/**
 * @param {string} mode
 * @param {Record<CopyMode, string>} block
 */
function pick(mode, block) {
  const safe = ['neutral', 'spiritual', 'quiet'].includes(mode) ? mode : 'neutral'
  return block[safe] || block.neutral
}

/** @type {Record<CopyMode, string>} */
const upliftingAffirmation = {
  neutral:
    'You showed courage by pausing here. That matters. You are allowed to be a work in progress.',
  spiritual:
    'You are seen with love — not for your performance, but for your humanity. Grace is patient with you.',
  quiet: 'You matter. Slow is allowed.',
}

/** @type {Record<string, Record<CopyMode, string>>} */
const readinessStep = {
  'tiny-step': {
    neutral: 'Choose one action that takes less than five minutes — and do only that.',
    spiritual: 'Offer one small act as a gift, not a burden.',
    quiet: 'Five minutes. One act.',
  },
  'rest-first': {
    neutral: 'Rest is not laziness when you are depleted. Lie down, drink water, or close your eyes for ten minutes.',
    spiritual: 'Receive rest as permission from love, not guilt.',
    quiet: 'Rest ten minutes.',
  },
  encouragement: {
    neutral: 'Read your gentle thought again slowly. Let it land without arguing with it.',
    spiritual: 'Whisper your shareable line like a blessing over yourself.',
    quiet: 'Read once. Breathe.',
  },
  silence: {
    neutral: 'Sit without a goal for three minutes. Notice breath. Nothing to fix.',
    spiritual: 'Sit in quiet presence. No words required.',
    quiet: 'Three minutes. Breath.',
  },
  connection: {
    neutral: 'Send one message to someone safe: “Thinking of you — no need to reply quickly.”',
    spiritual: 'Reach toward love through one honest connection.',
    quiet: 'One message.',
  },
  unsure: {
    neutral: 'It is enough to have named what is here. Come back when you are ready.',
    spiritual: 'Not knowing is a honest place. Love can meet you there too.',
    quiet: 'Enough for now.',
  },
}

/** @type {Record<string, Record<CopyMode, string>>} */
const whyThisHelpsBlock = {
  neutral:
    'We asked these questions so your reflection fits you — not a generic poster. Noticing, naming, and choosing one kind step are evidence-based ways people find steadiness. This does not replace professional care when you need it.',
  spiritual:
    'Honest questions open the heart. You are not graded. The goal is companionship with truth and one step of love.',
  quiet: 'Questions help the answer fit you.',
}

/**
 * @param {string | undefined} optionId
 * @param {string | undefined} customText
 * @param {string} fallback
 */
function resolveOptionId(optionId, customText, fallback = 'heavy') {
  if (optionId && optionId !== 'custom') return optionId
  if (customText?.trim()) return 'custom'
  return fallback
}

/**
 * @param {Record<string, string>} answers
 * @param {string} mode
 */
export function getStartHereSummary(answers, mode = 'neutral') {
  const safeMode = ['neutral', 'spiritual', 'quiet'].includes(mode) ? mode : 'neutral'

  const carrying = resolveOptionId(answers.carrying, answers.carryingText, 'heavy')
  const help = resolveOptionId(answers.help, answers.helpText, 'calm')
  const readiness = resolveOptionId(answers.readiness, answers.readinessText, 'unsure')

  const cThought =
    carrying === 'custom' ? carryingThoughts.heavy : carryingThoughts[carrying] || carryingThoughts.heavy
  const hAccent = helpAccent[help] || helpAccent.calm
  const hPractice = helpPractice[help] || helpPractice.calm
  const hShare = helpShare[help] || helpShare.calm
  const rStep = readinessStep[readiness] || readinessStep.unsure

  const gentleThoughtParts = [
    pick(safeMode, cThought),
    safeMode !== 'quiet' ? pick(safeMode, hAccent) : '',
    safeMode !== 'quiet'
      ? 'You are more than this moment. What you feel does not define your worth.'
      : '',
  ]

  const gentleThought = gentleThoughtParts.filter(Boolean).join(' ').trim()

  const typedSnippets = [
    answers.carryingText,
    answers.carryingDetail,
    answers.bodyNoticeText,
    answers.helpText,
    answers.supportText,
    answers.readinessText,
  ].filter((s) => s?.trim())

  const inYourWords =
    typedSnippets.length > 0
      ? safeMode === 'quiet'
        ? 'Your words were heard.'
        : safeMode === 'spiritual'
          ? `You brought honest words — and they matter to love: “${typedSnippets[0].trim().slice(0, 200)}${typedSnippets[0].length > 200 ? '…' : ''}”. Nothing you named is too much for gentle care.`
          : `You named something real: “${typedSnippets[0].trim().slice(0, 200)}${typedSnippets[0].length > 200 ? '…' : ''}”. Thank you for trusting this space with it.`
      : ''

  return {
    gentleThought,
    whyThisHelps: pick(safeMode, whyThisHelpsBlock),
    affirmation: pick(safeMode, upliftingAffirmation),
    quietPractice: pick(safeMode, hPractice),
    oneSmallStep: pick(safeMode, rStep),
    shareableLine: pick(safeMode, hShare),
    inYourWords,
  }
}

/** Summary section labels by mode */
export const summaryLabels = {
  gentleThought: {
    neutral: 'Gentle thought',
    spiritual: 'Gentle thought',
    quiet: 'Thought',
  },
  whyThisHelps: {
    neutral: 'Why we asked',
    spiritual: 'Why we asked',
    quiet: 'Why',
  },
  affirmation: {
    neutral: 'A word of encouragement',
    spiritual: 'Encouragement',
    quiet: 'Encourage',
  },
  quietPractice: {
    neutral: 'Quiet practice',
    spiritual: 'Quiet practice',
    quiet: 'Practice',
  },
  oneSmallStep: {
    neutral: 'One small step',
    spiritual: 'One small step',
    quiet: 'Step',
  },
  shareableLine: {
    neutral: 'Shareable line',
    spiritual: 'Shareable line',
    quiet: 'Line',
  },
  inYourWords: {
    neutral: 'In your words',
    spiritual: 'What you brought',
    quiet: 'Yours',
  },
}

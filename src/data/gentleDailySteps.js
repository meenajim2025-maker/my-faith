/**
 * Daily Gentle Step — one living test per day (rotates by date).
 * @typedef {{
 *   title: Record<string, string>
 *   test: Record<string, string>
 *   question: Record<string, string>
 *   tensionId: string
 * }} GentleDailyStep
 */

/** @type {GentleDailyStep[]} */
export const gentleDailySteps = [
  {
    tensionId: 'image-honesty',
    title: { neutral: "Today's test", spiritual: "Today's invitation", quiet: 'Today' },
    test: {
      neutral:
        'When you feel the need to prove yourself, pause.\nAsk: Do I want truth, or do I want victory?',
      spiritual:
        'When pride whispers, pause.\nAsk: Do I want truth, or do I want to be right before love?',
      quiet: 'Truth or victory?',
    },
    question: {
      neutral: 'Where did you choose truth today — even when it cost something?',
      spiritual: 'Where did honesty open a little room for grace?',
      quiet: 'One honest moment?',
    },
  },
  {
    tensionId: 'peace-revenge',
    title: { neutral: "Today's test", spiritual: "Today's invitation", quiet: 'Today' },
    test: {
      neutral:
        'Before you send the sharp reply, wait ten minutes.\nAsk: Am I seeking peace, or am I seeking payback?',
      spiritual:
        'Before the angry word leaves your mouth, breathe.\nAsk: Does love ask for silence or for fire?',
      quiet: 'Peace or payback?',
    },
    question: {
      neutral: 'What did waiting change?',
      spiritual: 'What did mercy make possible?',
      quiet: 'What changed?',
    },
  },
  {
    tensionId: 'noise-silence',
    title: { neutral: "Today's test", spiritual: "Today's invitation", quiet: 'Today' },
    test: {
      neutral:
        'Put the phone down for five minutes without filling the gap.\nLet silence be boring on purpose.',
      spiritual:
        'Five minutes without noise.\nLet the heart hear what hurry drowns out.',
      quiet: 'Five minutes. Silence.',
    },
    question: {
      neutral: 'What appeared when you stopped scrolling?',
      spiritual: 'What did stillness show you?',
      quiet: 'What appeared?',
    },
  },
  {
    tensionId: 'desire-freedom',
    title: { neutral: "Today's test", spiritual: "Today's invitation", quiet: 'Today' },
    test: {
      neutral:
        'Notice one craving today.\nAsk: Is this freedom, or is this a chain I call comfort?',
      spiritual:
        'Notice one pull of the heart.\nAsk: Does this lead toward love, or away from it?',
      quiet: 'Notice one want.',
    },
    question: {
      neutral: 'What did you learn about the want?',
      spiritual: 'What did the heart admit?',
      quiet: 'What want?',
    },
  },
  {
    tensionId: 'shame-return',
    title: { neutral: "Today's test", spiritual: "Today's invitation", quiet: 'Today' },
    test: {
      neutral:
        'Say one true sentence to yourself: “I am still worthy of kindness.”\nDo not argue with it. Just hear it.',
      spiritual:
        'Whisper one true line: “Mercy can meet me here.”\nYou do not need to be finished to return.',
      quiet: 'One kind line.',
    },
    question: {
      neutral: 'What shifted, even slightly?',
      spiritual: 'Where did return begin?',
      quiet: 'Any shift?',
    },
  },
  {
    tensionId: 'loneliness-connection',
    title: { neutral: "Today's test", spiritual: "Today's invitation", quiet: 'Today' },
    test: {
      neutral:
        'Send one honest message to someone safe.\nNot performance. Not a essay. Just: “Thinking of you.”',
      spiritual:
        'Reach toward one safe person.\nConnection is often smaller than we think.',
      quiet: 'One message.',
    },
    question: {
      neutral: 'How did it feel to reach?',
      spiritual: 'Where did love touch loneliness?',
      quiet: 'Reached?',
    },
  },
  {
    tensionId: 'control-trust',
    title: { neutral: "Today's test", spiritual: "Today's invitation", quiet: 'Today' },
    test: {
      neutral:
        'Name one thing you cannot control today.\nHand it one sentence on paper — then do the next small kind thing anyway.',
      spiritual:
        'Release one outcome to love.\nThen take one step you can still choose with integrity.',
      quiet: 'Release one grip.',
    },
    question: {
      neutral: 'What became possible after letting go a little?',
      spiritual: 'What step remained?',
      quiet: 'What step?',
    },
  },
  {
    tensionId: 'truth-comfort',
    title: { neutral: "Today's test", spiritual: "Today's invitation", quiet: 'Today' },
    test: {
      neutral:
        'Tell one person one honest thing you have been avoiding — gently, without cruelty.',
      spiritual:
        'Speak one truth with love.\nComfort is not always the same as kindness.',
      quiet: 'One truth. Kind.',
    },
    question: {
      neutral: 'What was hard? What was right?',
      spiritual: 'Where did truth meet compassion?',
      quiet: 'Hard? Right?',
    },
  },
]

/**
 * @param {Date} [date]
 */
export function getGentleDailyStepForDate(date = new Date()) {
  const start = new Date(date.getFullYear(), 0, 0)
  const diff = date - start
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24))
  return gentleDailySteps[dayOfYear % gentleDailySteps.length]
}

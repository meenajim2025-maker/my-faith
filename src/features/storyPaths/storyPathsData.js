/**
 * @typedef {'neutral' | 'spiritual' | 'quiet'} CopyMode
 * @typedef {Record<CopyMode, string>} ModeCopy
 *
 * @typedef {{
 *   id: string
 *   label: string
 *   response: ModeCopy
 * }} StoryChoice
 *
 * @typedef {{
 *   id: string
 *   title: string
 *   theme: string
 *   description: ModeCopy
 *   durationMinutes: number
 *   tags: string[]
 *   available: boolean
 *   scene: ModeCopy
 *   conflict: ModeCopy
 *   choices?: StoryChoice[]
 *   practice?: ModeCopy
 *   challenge?: ModeCopy
 *   takeaway?: ModeCopy
 * }} StoryPath
 */

/** @type {StoryPath[]} */
export const storyPaths = [
  {
    id: 'angry-message',
    title: 'The Message You Should Not Send',
    theme: 'Anger, impulse, and pause',
    description: {
      neutral: 'Late night. Your thumb hovers over Send. What do you do with honest rage?',
      spiritual: 'A hurt heart, a sharp message, and a moment before Send.',
      quiet: 'Hurt. Message. Send?',
    },
    durationMinutes: 4,
    tags: ['anger', 'anxiety', 'overthinking'],
    available: true,
    scene: {
      neutral:
        'It is late.\n\nYou are holding your phone.\nSomeone has hurt you.\nYou have written a message three times.\n\nThe message is sharp.\nPart of you wants justice.\nPart of you wants peace.\nPart of you just wants them to feel what you felt.\n\nYour thumb is near Send.',
      spiritual:
        'It is late.\n\nYour phone is warm in your hand.\nSomeone has hurt you.\nYou have rewritten the message again and again.\n\nThe words are sharp.\nPart of you wants justice.\nPart of you wants peace.\nPart of you wants your pain to be seen.\n\nYour thumb is near Send.',
      quiet: 'Late. Phone. Hurt.\nSharp words written.\nThumb near Send.',
    },
    conflict: {
      neutral:
        'The conflict is not only with them. It is inside you — between pain and wisdom, between being heard and causing harm.',
      spiritual:
        'The fight is not only out there. In your heart, pain and wisdom are both asking for a voice.',
      quiet: 'Pain vs wisdom. Both real.',
    },
    choices: [
      {
        id: 'send',
        label: 'Send it',
        response: {
          neutral:
            'Sometimes we send pain because we want it witnessed.\n\nThat does not make you bad.\nIt means something in you wants to be heard.\n\nBut not every true feeling needs to become an immediate action.',
          spiritual:
            'Sometimes we send pain because we want it witnessed.\n\nThat does not make you bad.\nYour heart longs to be heard.\n\nNot every true feeling needs to become an immediate action.',
          quiet: 'Pain wants witness. Not every feeling needs Send.',
        },
      },
      {
        id: 'delete',
        label: 'Delete it',
        response: {
          neutral:
            'Deleting can be strong.\n\nBut do not delete the truth inside the feeling.\nAsk what the anger was trying to protect.',
          spiritual:
            'Deleting can be strong.\n\nDo not erase the truth inside the feeling.\nAsk what the anger was guarding.',
          quiet: 'Delete the text. Keep the truth.',
        },
      },
      {
        id: 'save',
        label: 'Save it as a note',
        response: {
          neutral:
            'This gives the feeling somewhere to go.\n\nYou have not denied it.\nYou have also not handed it control.',
          spiritual:
            'You gave the feeling a resting place.\n\nYou did not deny it.\nYou did not hand it the keys.',
          quiet: 'Feeling has a home. Not the Send button.',
        },
      },
      {
        id: 'wait',
        label: 'Wait ten minutes',
        response: {
          neutral:
            'This is not weakness.\n\nWaiting gives your deeper self time to arrive.\nThe first feeling is real.\nIt is not always the wisest guide.',
          spiritual:
            'This is not weakness.\n\nWaiting lets your deeper self arrive.\nThe first feeling is real.\nIt is not always the wisest guide.',
          quiet: 'Wait. First feeling ≠ wisest.',
        },
      },
    ],
    practice: {
      neutral:
        'Write one sentence before you reply:\n“What I really wanted them to understand was…”',
      spiritual:
        'Write one sentence before you reply:\n“What my heart needed them to understand was…”',
      quiet: 'One line: what I needed them to understand…',
    },
    challenge: {
      neutral: 'Today, pause once before reacting. Let your wiser self catch up.',
      spiritual: 'Today, pause once before you answer. Let grace catch up to your pain.',
      quiet: 'Pause once before reacting.',
    },
    takeaway: {
      neutral: 'A pause can protect what anger would damage.',
      spiritual: 'A pause can protect what anger would break.',
      quiet: 'Pause protects.',
    },
  },
  {
    id: 'empty-scroll',
    title: 'The Empty Scroll',
    theme: 'Avoiding silence and craving distraction',
    description: {
      neutral: 'You reach for the feed again — not because you care, but because quiet feels too loud.',
      spiritual: 'When silence feels heavy, the scroll feels like shelter.',
      quiet: 'Scroll instead of silence.',
    },
    durationMinutes: 5,
    tags: ['overthinking', 'anxiety', 'meaning'],
    available: false,
    scene: {
      neutral: 'Coming soon.',
      spiritual: 'Coming soon.',
      quiet: 'Soon.',
    },
    conflict: { neutral: '', spiritual: '', quiet: '' },
  },
  {
    id: 'friend-quiet',
    title: 'The Friend Who Went Quiet',
    theme: 'Rejection, loneliness, and self-worth',
    description: {
      neutral: 'They used to reply. Now silence. You wonder what you did — or what you are worth.',
      spiritual: 'When someone goes quiet, the heart fills in the blanks.',
      quiet: 'Friend silent. Mind loud.',
    },
    durationMinutes: 5,
    tags: ['loneliness', 'anxiety', 'meaning'],
    available: false,
    scene: { neutral: 'Coming soon.', spiritual: 'Coming soon.', quiet: 'Soon.' },
    conflict: { neutral: '', spiritual: '', quiet: '' },
  },
  {
    id: 'part-you-hide',
    title: 'The Part You Hide',
    theme: 'Guilt, shame, honesty, and return',
    description: {
      neutral: 'You said you were fine. You were not. Shame says hide. Honesty says there is still a way back.',
      spiritual: 'What you hide still weighs. Mercy begins when something true is spoken.',
      quiet: 'Hide vs return.',
    },
    durationMinutes: 5,
    tags: ['guilt', 'starting-again', 'meaning'],
    available: false,
    scene: { neutral: 'Coming soon.', spiritual: 'Coming soon.', quiet: 'Soon.' },
    conflict: { neutral: '', spiritual: '', quiet: '' },
  },
  {
    id: 'grip-hurts',
    title: 'The Grip That Hurts',
    theme: 'Resentment, control, and letting go',
    description: {
      neutral: 'You replay what they did. Fairness feels like a reason to keep holding on.',
      spiritual: 'Resentment can feel like justice — until it becomes a cage.',
      quiet: 'Holding on hurts.',
    },
    durationMinutes: 5,
    tags: ['anger', 'jealousy', 'starting-again'],
    available: false,
    scene: { neutral: 'Coming soon.', spiritual: 'Coming soon.', quiet: 'Soon.' },
    conflict: { neutral: '', spiritual: '', quiet: '' },
  },
  {
    id: 'need-seen',
    title: 'The Need to Be Seen',
    theme: 'Comparison, envy, and identity',
    description: {
      neutral: 'Their life looks easier online. You compare and shrink. Who are you when no one is watching?',
      spiritual: 'When another life shines brighter on a screen, your own can feel small.',
      quiet: 'Compare. Shrink.',
    },
    durationMinutes: 5,
    tags: ['jealousy', 'meaning', 'anxiety'],
    available: false,
    scene: { neutral: 'Coming soon.', spiritual: 'Coming soon.', quiet: 'Soon.' },
    conflict: { neutral: '', spiritual: '', quiet: '' },
  },
  {
    id: 'day-behind',
    title: 'The Day You Feel Behind',
    theme: 'Pressure, purpose, and patience',
    description: {
      neutral: 'Everyone seems ahead. You wonder if you missed your turn. Pressure whispers that you are late.',
      spiritual: 'When others seem ahead, patience is hard — and still holy.',
      quiet: 'Feel behind. Breathe.',
    },
    durationMinutes: 5,
    tags: ['meaning', 'anxiety', 'starting-again'],
    available: false,
    scene: { neutral: 'Coming soon.', spiritual: 'Coming soon.', quiet: 'Soon.' },
    conflict: { neutral: '', spiritual: '', quiet: '' },
  },
]

/** @type {Record<string, string>} */
export const dealingWithToStoryId = {
  overthinking: 'empty-scroll',
  anger: 'angry-message',
  guilt: 'part-you-hide',
  loneliness: 'friend-quiet',
  anxiety: 'empty-scroll',
  jealousy: 'need-seen',
  meaning: 'day-behind',
  'starting-again': 'part-you-hide',
}

/** @type {{ id: string; label: string; tag?: string; storyId?: string; tab?: string }[]} */
export const homeFeelingButtons = [
  { id: 'angry', label: 'I am angry', storyId: 'angry-message' },
  { id: 'lost', label: 'I feel lost', tab: 'starthere' },
  { id: 'guilty', label: 'I feel guilty', tag: 'guilt' },
  { id: 'alone', label: 'I feel alone', tag: 'loneliness' },
  { id: 'overthinking', label: 'I keep overthinking', tag: 'overthinking' },
  { id: 'peace', label: 'I need peace', tab: 'firstpath' },
  { id: 'begin', label: 'I want to begin', tab: 'starthere' },
]

/** @type {{ id: string; label: string }[]} */
export const dealingWithOptions = [
  { id: 'overthinking', label: 'Overthinking' },
  { id: 'anger', label: 'Anger' },
  { id: 'guilt', label: 'Guilt' },
  { id: 'loneliness', label: 'Loneliness' },
  { id: 'anxiety', label: 'Anxiety' },
  { id: 'jealousy', label: 'Jealousy' },
  { id: 'meaning', label: 'Meaning' },
  { id: 'starting-again', label: 'Starting again' },
]

export const storyFlowSteps = ['scene', 'choice', 'outcome']

/**
 * @param {string} id
 */
export function getStoryById(id) {
  return storyPaths.find((s) => s.id === id) || null
}

/**
 * @param {string} tag
 */
export function getSuggestedStoryForTag(tag) {
  const storyId = dealingWithToStoryId[tag]
  const story = storyId ? getStoryById(storyId) : null
  if (story?.available) return story
  return getStoryById('angry-message')
}

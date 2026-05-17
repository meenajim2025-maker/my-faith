/** @typedef {'neutral' | 'spiritual' | 'quiet'} MirrorMode */

export const lifeMirrorFlow = {
  opening: {
    id: 'opening',
    type: 'intro',
    title: {
      neutral: 'Life Mirror',
      spiritual: 'Life Mirror',
      quiet: 'Pause',
    },
    body: {
      neutral: 'A quiet look inward — before fixing, explaining, or performing.',
      spiritual: 'A quiet look inward — room for your heart to speak honestly.',
      quiet: 'Look inward.',
    },
    tensionId: 'image-honesty',
    actionLabel: {
      neutral: 'Begin',
      spiritual: 'Begin',
      quiet: 'Start',
    },
  },

  story: {
    id: 'story',
    type: 'intro',
    title: {
      neutral: 'Before the questions',
      spiritual: 'Before the questions',
      quiet: 'First',
    },
    body: {
      neutral:
        'You have been carrying something all day.\nMaybe nobody noticed.\nMaybe you smiled through it.\nMaybe you are not even sure what it is.\n\nBefore you fix anything,\njust look honestly.',
      spiritual:
        'You have been carrying something all day.\nMaybe nobody noticed.\nMaybe you smiled through it.\nMaybe your heart is tired of holding it alone.\n\nBefore you fix anything,\njust look honestly.',
      quiet: 'Carrying something.\nMaybe hidden.\nLook honestly.',
    },
    tensionId: 'truth-comfort',
    actionLabel: {
      neutral: 'I am ready to look',
      spiritual: 'I am ready',
      quiet: 'Look',
    },
  },

  feeling: {
    id: 'feeling',
    type: 'choice',
    tensionId: 'loneliness-connection',
    title: {
      neutral: 'What feels closest right now?',
      spiritual: 'What feels closest in your heart right now?',
      quiet: 'What is here?',
    },
    options: [
      { id: 'heavy', label: 'Heavy', tone: 'low' },
      { id: 'anxious', label: 'Anxious', tone: 'alert' },
      { id: 'sad', label: 'Sad', tone: 'low' },
      { id: 'angry', label: 'Angry', tone: 'strong' },
      { id: 'numb', label: 'Numb', tone: 'quiet' },
      { id: 'lost', label: 'Lost', tone: 'uncertain' },
      { id: 'grateful', label: 'Grateful', tone: 'warm' },
      { id: 'peaceful', label: 'Peaceful', tone: 'warm' },
    ],
  },

  need: {
    id: 'need',
    type: 'choice',
    tensionId: 'shame-return',
    title: {
      neutral: 'What might be underneath it?',
      spiritual: 'What might your heart be asking for?',
      quiet: 'What is needed?',
    },
    options: [
      { id: 'rest', label: 'Rest' },
      { id: 'safety', label: 'Safety' },
      { id: 'connection', label: 'Connection' },
      { id: 'clarity', label: 'Clarity' },
      { id: 'forgiveness', label: 'Forgiveness' },
      { id: 'courage', label: 'Courage' },
      { id: 'space', label: 'Space' },
      { id: 'hope', label: 'Hope' },
    ],
  },

  support: {
    id: 'support',
    type: 'choice',
    tensionId: 'control-trust',
    title: {
      neutral: 'What kind of support would help now?',
      spiritual: 'What kind of support would help your spirit now?',
      quiet: 'What may help?',
    },
    options: [
      { id: 'short-reflection', label: 'A short reflection' },
      { id: 'breathing', label: 'A quiet breathing pause' },
      { id: 'write', label: 'Write it out' },
      { id: 'small-step', label: 'A small next step' },
    ],
  },

  step: {
    id: 'step',
    type: 'choice',
    tensionId: 'desire-freedom',
    title: {
      neutral: 'What small next step feels possible?',
      spiritual: 'What gentle next step feels possible?',
      quiet: 'One small step?',
    },
    options: [
      { id: 'drink-water', label: 'Drink some water' },
      { id: 'step-away', label: 'Step away for two minutes' },
      { id: 'message-someone', label: 'Message someone safe' },
      { id: 'write-one-line', label: 'Write one honest line' },
      { id: 'sit-quietly', label: 'Sit quietly' },
      { id: 'come-back-later', label: 'Come back later' },
    ],
  },
}

export const lifeMirrorStepOrder = [
  'opening',
  'story',
  'feeling',
  'need',
  'support',
  'step',
  'summary',
]

export const lifeMirrorIntroSteps = ['opening', 'story']

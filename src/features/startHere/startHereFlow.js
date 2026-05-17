/** @typedef {'neutral' | 'spiritual' | 'quiet'} StartHereMode */

/** @typedef {{
 *   id: string
 *   label: string
 * }} FlowOption */

export const startHereFlow = {
  opening: {
    id: 'opening',
    type: 'intro',
    title: {
      neutral: 'Start Here',
      spiritual: 'Start Here',
      quiet: 'Start',
    },
    body: {
      neutral:
        'You do not need to know what you believe.\nYou do not need the right words.\nYou only need one honest moment.\n\nThis is a quiet conversation with yourself — not a test, not a sermon, and not a diagnosis.',
      spiritual:
        'You do not need perfect faith.\nYou do not need the right words.\nOne honest moment with an open heart is enough.\n\nThis is gentle space — not pressure to believe more than you can today.',
      quiet: 'No right words needed.\nOne honest moment.\nNo test.',
    },
    actionLabel: {
      neutral: 'Begin gently',
      spiritual: 'Open this space',
      quiet: 'Start',
    },
  },

  about: {
    id: 'about',
    type: 'intro',
    title: {
      neutral: 'What we will ask — and why',
      spiritual: 'What we will ask — and why',
      quiet: 'Why we ask',
    },
    body: {
      neutral:
        'We will ask a few simple questions, like a calm listener might.\n\nThere are no wrong answers. You may tap a button or type in your own words — whichever feels easier.\n\nWe are not here to judge, convert, or argue. We only help you notice what you carry, what might help, and one small step that is possible today.\n\nYou can go back at any time. You can skip typing. You can stop when you have enough.',
      spiritual:
        'We will ask a few gentle questions — room for your heart to speak.\n\nTap a word or type your own. No wrong answers. No pressure to perform faith.\n\nThis is not preaching. It is companionship: noticing, hoping, and choosing one kind step.\n\nGo at your own pace. Grace has time for you.',
      quiet: 'A few questions.\nTap or type.\nNo wrong answers.\nStop when enough.',
    },
    actionLabel: {
      neutral: 'I understand — continue',
      spiritual: 'Continue with gentleness',
      quiet: 'Continue',
    },
  },

  carrying: {
    id: 'carrying',
    type: 'reflect',
    title: {
      neutral: 'What are you carrying today?',
      spiritual: 'What is your heart carrying today?',
      quiet: 'What is here?',
    },
    guidance: {
      neutral:
        'Psychologists often begin by naming what is present — without fixing it yet. Naming can lighten the load a little.',
      spiritual:
        'Sacred traditions also begin with honest noticing. What is here is allowed to be spoken gently.',
      quiet: 'Name what is here.',
    },
    hint: {
      neutral: 'Tap the closest word, or describe it in your own words below.',
      spiritual: 'Tap one word, or write what your heart would say.',
      quiet: 'Tap or type.',
    },
    textLabel: {
      neutral: 'Or write in your own words',
      spiritual: 'Or write from your heart',
      quiet: 'Your words',
    },
    textPlaceholder: {
      neutral: 'For example: “I feel overwhelmed about work and tired of pretending I am fine.”',
      spiritual: 'For example: “My heart feels heavy about someone I love.”',
      quiet: 'A few words…',
    },
    options: [
      { id: 'heavy', label: 'Heavy' },
      { id: 'lost', label: 'Lost' },
      { id: 'restless', label: 'Restless' },
      { id: 'ashamed', label: 'Ashamed' },
      { id: 'angry', label: 'Angry' },
      { id: 'lonely', label: 'Lonely' },
      { id: 'afraid', label: 'Afraid' },
      { id: 'empty', label: 'Empty' },
      { id: 'curious', label: 'Curious' },
      { id: 'grateful', label: 'Grateful' },
    ],
  },

  carryingDetail: {
    id: 'carryingDetail',
    type: 'reflect-text',
    title: {
      neutral: 'Would you like to say a little more?',
      spiritual: 'Would your heart like to say more?',
      quiet: 'More?',
    },
    guidance: {
      neutral:
        'Optional. A few honest words can help the reflection fit you better. We do not store this unless you choose to copy or save it elsewhere.',
      spiritual:
        'Optional. Love meets us in specificity — a name, a fear, a hope. Share only what feels safe.',
      quiet: 'Optional. A few words.',
    },
    hint: {
      neutral: 'What happened, what you fear, or what you long for — in one or two sentences.',
      spiritual: 'What you bring to the light today.',
      quiet: 'One or two lines.',
    },
    textLabel: {
      neutral: 'Your words',
      spiritual: 'Your words',
      quiet: 'Words',
    },
    textPlaceholder: {
      neutral: '“Today I am carrying worry about…”',
      spiritual: '“Lord / Love, I am carrying…”',
      quiet: '…',
    },
    optional: true,
    options: [],
  },

  bodyNotice: {
    id: 'bodyNotice',
    type: 'reflect',
    title: {
      neutral: 'Where do you notice this in your body?',
      spiritual: 'Where do you notice this in body or spirit?',
      quiet: 'Where in the body?',
    },
    guidance: {
      neutral:
        'Mind and body are connected. Noticing sensation without judgement can help you care for yourself wisely.',
      spiritual:
        'The body often prays before words arrive. Notice with kindness.',
      quiet: 'Notice kindly.',
    },
    hint: {
      neutral: 'Tap one, or describe the sensation in your own words.',
      spiritual: 'Tap or write gently.',
      quiet: 'Tap or type.',
    },
    textLabel: {
      neutral: 'Or describe the sensation',
      spiritual: 'Or describe what you feel',
      quiet: 'Describe',
    },
    textPlaceholder: {
      neutral: 'For example: tight chest, shallow breath, clenched jaw…',
      spiritual: 'For example: heaviness, restlessness, ache…',
      quiet: '…',
    },
    options: [
      { id: 'chest', label: 'Chest or breath' },
      { id: 'stomach', label: 'Stomach' },
      { id: 'head', label: 'Head or mind racing' },
      { id: 'shoulders', label: 'Shoulders or neck' },
      { id: 'whole', label: 'Everywhere / whole body' },
      { id: 'unclear', label: 'Hard to name' },
    ],
  },

  help: {
    id: 'help',
    type: 'reflect',
    title: {
      neutral: 'What would help most right now?',
      spiritual: 'What would help your spirit most?',
      quiet: 'What helps?',
    },
    guidance: {
      neutral:
        'This is not a demand to improve. It is an invitation: if one gift could meet you today, which would you choose?',
      spiritual:
        'Ask without shame. The help you name is holy information — not failure.',
      quiet: 'Choose one gift.',
    },
    hint: {
      neutral: 'Tap one, or name your own need below.',
      spiritual: 'Tap or write what you need.',
      quiet: 'Tap or type.',
    },
    textLabel: {
      neutral: 'Or name your own need',
      spiritual: 'Or name what your soul needs',
      quiet: 'Your need',
    },
    textPlaceholder: {
      neutral: 'For example: “I need someone to listen without fixing me.”',
      spiritual: 'For example: “I need peace and the courage to forgive.”',
      quiet: '…',
    },
    options: [
      { id: 'calm', label: 'Calm' },
      { id: 'clarity', label: 'Clarity' },
      { id: 'courage', label: 'Courage' },
      { id: 'forgiveness', label: 'Forgiveness' },
      { id: 'hope', label: 'Hope' },
      { id: 'letting-go', label: 'Letting go' },
    ],
  },

  support: {
    id: 'support',
    type: 'reflect',
    title: {
      neutral: 'What has helped you before — even a little?',
      spiritual: 'What has brought you comfort before?',
      quiet: 'What helped before?',
    },
    guidance: {
      neutral:
        'You already carry wisdom from your life. Remembering a small success is not boasting — it is hope with evidence.',
      spiritual:
        'Grace often returns through ordinary means: a walk, a word, a breath. Nothing is too small to name.',
      quiet: 'Name one help.',
    },
    hint: {
      neutral: 'Tap one, or write your own.',
      spiritual: 'Tap or write.',
      quiet: 'Tap or type.',
    },
    textLabel: {
      neutral: 'Or write your own',
      spiritual: 'Or write your own',
      quiet: 'Yours',
    },
    textPlaceholder: {
      neutral: 'For example: talking to a friend, music, a walk…',
      spiritual: 'For example: prayer, silence, kindness from someone…',
      quiet: '…',
    },
    options: [
      { id: 'talking', label: 'Talking to someone safe' },
      { id: 'walking', label: 'Walking or movement' },
      { id: 'writing', label: 'Writing or journaling' },
      { id: 'music', label: 'Music or art' },
      { id: 'nature', label: 'Nature or fresh air' },
      { id: 'stillness', label: 'Stillness or breathing' },
      { id: 'unsure', label: 'Not sure yet' },
    ],
  },

  readiness: {
    id: 'readiness',
    type: 'reflect',
    title: {
      neutral: 'What feels possible for you today?',
      spiritual: 'What feels possible for your heart today?',
      quiet: 'Possible today?',
    },
    guidance: {
      neutral:
        'Healing and reflection respect capacity. A tiny step is complete when it is honest.',
      spiritual:
        'Love does not measure you against others. Today’s yes may be very small — and still sacred.',
      quiet: 'Small is enough.',
    },
    hint: {
      neutral: 'Tap one, or write what feels realistic.',
      spiritual: 'Tap or write gently.',
      quiet: 'Tap or type.',
    },
    textLabel: {
      neutral: 'Or write what feels realistic',
      spiritual: 'Or write what grace allows today',
      quiet: 'Realistic',
    },
    textPlaceholder: {
      neutral: 'For example: “I can rest for ten minutes without guilt.”',
      spiritual: 'For example: “I can pray one honest sentence.”',
      quiet: '…',
    },
    options: [
      { id: 'tiny-step', label: 'One very small step' },
      { id: 'rest-first', label: 'Rest before action' },
      { id: 'encouragement', label: 'Encouragement only' },
      { id: 'silence', label: 'Silence and breathing' },
      { id: 'connection', label: 'Reach out to someone' },
      { id: 'unsure', label: 'I am not sure yet' },
    ],
  },

  voice: {
    id: 'voice',
    type: 'voice',
    title: {
      neutral: 'Would you like a gentle conversation?',
      spiritual: 'Would you like a gentle conversation?',
      quiet: 'Talk?',
    },
    guidance: {
      neutral:
        'Optional. Soon you can speak and listen here — a calm back-and-forth, not a lecture. For now you can try text chat; when your API is connected, voice will use the same place.',
      spiritual:
        'Optional. A listening presence — by voice or words — can walk beside you. This is invitation, not requirement.',
      quiet: 'Optional chat.',
    },
  },
}

export const startHereStepOrder = [
  'opening',
  'about',
  'carrying',
  'carryingDetail',
  'bodyNotice',
  'help',
  'support',
  'readiness',
  'voice',
  'summary',
]

export const reflectStepIds = [
  'carrying',
  'carryingDetail',
  'bodyNotice',
  'help',
  'support',
  'readiness',
]

/** @type {Record<string, string>} */
export const answerTextKeys = {
  carrying: 'carryingText',
  carryingDetail: 'carryingDetail',
  bodyNotice: 'bodyNoticeText',
  help: 'helpText',
  support: 'supportText',
  readiness: 'readinessText',
}

/** @typedef {'neutral' | 'spiritual' | 'quiet'} CopyMode */

/** @type {Record<string, { scene: Record<CopyMode, string>; tensionId: string }>} */
export const firstPathScenes = {
  'quiet-beginning': {
    tensionId: 'noise-silence',
    scene: {
      neutral:
        'The room is not empty.\nYour phone is still glowing.\nYour mind is still narrating.\n\nYou sit anyway.\nNot to win at peace.\nJust to stop running for one minute.',
      spiritual:
        'The world keeps speaking.\nYour heart keeps answering.\n\nYou sit — not to perform stillness,\nbut to let love find you in the quiet.',
      quiet: 'Phone glows.\nMind runs.\nYou sit.',
    },
  },
  'inner-mirror': {
    tensionId: 'image-honesty',
    scene: {
      neutral:
        'You smile in the mirror.\nYou answer “I’m fine” before anyone asks.\n\nBut you know the version you show\nand the version you carry\nare not the same person today.',
      spiritual:
        'You present a calm face.\nInside, something else waits.\n\nHonesty is not self-attack.\nIt is the door mercy walks through.',
      quiet: 'Fine on the outside.\nHeavy inside.',
    },
  },
  'fire-of-desire': {
    tensionId: 'desire-freedom',
    scene: {
      neutral:
        'You reach for the thing again.\nNot because it satisfies you.\nBecause silence feels harder.\n\nThis is where freedom begins:\nnot with shame,\nbut with noticing.',
      spiritual:
        'You reach again —\nnot from fullness, but from hunger.\n\nFreedom begins here:\nnot with shame,\nbut with honest noticing.',
      quiet: 'Reach again.\nSilence hurts.\nNotice.',
    },
  },
  'gentle-release': {
    tensionId: 'control-trust',
    scene: {
      neutral:
        'Your jaw is tight.\nYou replay what they said.\nYou rehearse what you should have said.\n\nPart of you wants to win.\nPart of you is tired of carrying it.',
      spiritual:
        'The story loops in your heart.\nYou grip what hurt you.\n\nLove does not ask you to pretend.\nIt asks what you are ready to loosen.',
      quiet: 'Replay. Grip. Tired.',
    },
  },
  'wound-and-return': {
    tensionId: 'shame-return',
    scene: {
      neutral:
        'You said you were over it.\nYou are not.\n\nThe wound does not care about your calendar.\nReturn is still allowed.',
      spiritual:
        'You thought healing meant forgetting.\nGrief has its own timetable.\n\nReturn is not failure.\nIt is honesty.',
      quiet: 'Not over it.\nReturn allowed.',
    },
  },
  'way-of-harmlessness': {
    tensionId: 'peace-revenge',
    scene: {
      neutral:
        'You type the message.\nIt is clever. It is fair.\nIt would feel good for about nine seconds.\n\nYour thumb hovers.\nPeace and revenge are both asking.',
      spiritual:
        'Words rise that would wound.\nThey feel justified.\n\nMercy does not deny the hurt.\nIt asks what love does next.',
      quiet: 'Clever words wait.\nThumb hovers.',
    },
  },
  'good-order': {
    tensionId: 'truth-comfort',
    scene: {
      neutral:
        'You could smooth this over.\nEveryone would relax.\nNothing would change.\n\nComfort is not always kindness.\nSometimes truth is the gentler long road.',
      spiritual:
        'You could keep the peace on the surface.\nThe heart knows what is unfinished.\n\nOrder without truth becomes a quiet lie.',
      quiet: 'Smooth it over?\nOr truth?',
    },
  },
  'courage-conscience': {
    tensionId: 'control-trust',
    scene: {
      neutral:
        'Everyone agrees.\nYou disagree inside.\n\nSpeaking may cost you belonging.\nSilence may cost you integrity.',
      spiritual:
        'The room wants agreement.\nYour conscience whispers otherwise.\n\nCourage is not loudness.\nIt is fidelity to what is right.',
      quiet: 'Room agrees.\nYou do not.',
    },
  },
  'life-of-service': {
    tensionId: 'image-honesty',
    scene: {
      neutral:
        'You want to be seen helping.\nYou also want to help.\n\nBoth can be true.\nOnly one should drive the choice.',
      spiritual:
        'Service can become performance.\nLove prefers the hidden cup of water.\n\nAsk who this act is for.',
      quiet: 'Seen helping?\nOr help?',
    },
  },
  'open-door': {
    tensionId: 'shame-return',
    scene: {
      neutral:
        'You thought one lesson would fix you.\nYou are still human.\n\nThe door is not closing.\nYou are allowed to walk through it again.',
      spiritual:
        'You wanted arrival.\nLife offered a threshold instead.\n\nHope without denial:\nyou continue, not because you are finished.',
      quiet: 'Not fixed.\nDoor open.',
    },
  },
}

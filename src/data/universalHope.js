/**
 * Universal hope — timeless spiritual wisdom woven with love.
 * Plain language; no caste or power debates; welcoming names throughout.
 */

import { SPIRITUAL_NAMES } from './spiritualLanguage.js'

const { teacher, dialogueOfCourage, wisdomOfStillness, sacredStories, wearySoul, faithfulMother } =
  SPIRITUAL_NAMES

export const universalHopeLead =
  'Love is the thread that runs through every true path. Here we explore that thread — simply, without argument — so despair can soften into hope.'

/** Core ideas the app returns to (everyday words). */
export const universalLoveThreads = [
  {
    id: 'one-love',
    title: 'One love, many paths',
    body:
      'Ancient sages taught that the deepest reality is one — and that love is how we touch it. Many call this the love of God poured into the heart. Different words; one direction: kindness, truth, and mercy toward every person.',
    quietBody:
      'Wise traditions agree: the deepest reality is one, and love is how we meet it. Different words — one direction: kindness, truth, and mercy.',
  },
  {
    id: 'action-with-love',
    title: 'Love that acts',
    body:
      `In ${dialogueOfCourage}, ${wearySoul} learns that love is not escape from duty — it is doing what is right without hatred, without craving praise, and without crushing the weak. ${teacher} washed feet and defended the overlooked. Love kneels before it shouts.`,
    quietBody:
      'Love is not escape from responsibility. It is doing what is right without hatred, without craving status, and without crushing the weak.',
  },
  {
    id: 'stillness',
    title: 'Stillness that listens',
    body:
      `${wisdomOfStillness} invites us to pause until the inner noise softens — “Be still and know.” Prayer and quiet breathing are not weakness; they are how a hurried heart remembers who it is meant to become.`,
    quietBody:
      'Pause until inner noise softens. Quiet is not weakness; it is how a hurried heart remembers what matters.',
  },
  {
    id: 'detachment',
    title: 'Freedom from despair',
    body:
      `${dialogueOfCourage} teaches working for good without clinging to outcomes — so failure and grief do not own you. That is not coldness; it is room for hope. You may grieve deeply and still choose one loving step tomorrow.`,
    quietBody:
      'Do good without clinging to every outcome — so grief does not own you. You may hurt deeply and still take one loving step.',
  },
  {
    id: 'compassion',
    title: 'Compassion for suffering',
    body:
      'Suffering is human. Awareness does not blame you for pain. Compassion asks: can I meet this moment without cruelty — toward myself or another?',
    quietBody: 'Pain is human. Meet it gently.',
  },
  {
    id: 'renewal',
    title: 'Return and renewal',
    body:
      'Return is possible after failure, loss, or numbness. Mercy and forgiveness are not excuses for harm — they are ways the heart breathes again.',
    quietBody: 'Return is possible.',
  },
  {
    id: 'conscience',
    title: 'Conscience and courage',
    body:
      'Under pressure, conscience still speaks. Courage can be quiet: refusing betrayal, protecting dignity, telling the truth without violence.',
    quietBody: 'Quiet courage counts.',
  },
  {
    id: 'service',
    title: 'Service and dignity',
    body:
      'Meaning grows when love becomes duty — listening, fairness, humble service, protection of the vulnerable. Peace is often built in small acts.',
    quietBody: 'Serve. Protect. Peace.',
  },
]

/** Why divine love does not “fix everything” overnight — and the dignity of asking. */
export const whyLoveWaits = {
  title: 'Why love waits for us to ask',
  paragraphs: [
    'Many people ask: if God is love, why does cruelty still happen?',
    `A gentle answer from sacred story and ${dialogueOfCourage}: God made human beings to carry something of his own image — the capacity to love, protect, forgive, and stand for the helpless. Love does not want puppets; it wants partners.`,
    'So evil is often human-made: greed, cruelty, indifference, and the misuse of power. God does not usually override every human choice, because that would erase the very freedom love needs to grow.',
    `Yet ${dialogueOfCourage} and ${sacredStories} agree on this: when someone honestly asks — with a humble heart, for the sake of healing and peace, not for revenge — help can come. Guidance. Courage. Sometimes protection. Sometimes the slow undoing of harm through people who finally act.`,
    'Without asking, we may not receive — not because God is petty, but because love refuses to force itself where the heart is still closed. Asking is the door.',
  ],
  prayer:
    'God of love, I do not understand all suffering. Teach me to ask honestly, to act justly, and to trust that You hear those who cannot speak for themselves.',
  quietPrayer:
    'Source of love, teach me to ask honestly, to act justly, and to trust that the helpless are held in mercy.',
}

/** Who the stories lift up — deliberately not the rich, famous, or powerful. */
export const honouredInTheStories = {
  title: 'Those the stories lift up',
  intro:
    'My Faith follows the people the sacred stories stop for — not celebrities, tyrants, or the proud.',
  groups: [
    {
      title: 'Women of quiet courage',
      text:
        `${faithfulMother}, the woman at the well, the widow who gave her last coins, mothers who stayed when others fled. ${dialogueOfCourage} honours devotion from any station; ${teacher} honours women when society did not. Their strength is presence, truth, and faithful love — not dominance.`,
    },
    {
      title: 'The poor and overlooked',
      text:
        `Beggars, labourers, children, strangers, and the sick. ${wisdomOfStillness} says the divine dwells in all beings; ${teacher} blesses “the least.” We do not glorify wealth or fame here — we learn from those who have little and still love much.`,
    },
    {
      title: 'The tired and wounded',
      text:
        'Not the armies of empire, but the exhausted, the shamed, the bereaved. Hope begins where pretence ends.',
    },
  ],
}

/**
 * When someone cannot ask — moral weight held with hope, not blame.
 * @type {{ title: string, situation: string, insight: string, forOthers: string, prayer: string }[]}
 */
export const whenWordsAreNotPossible = [
  {
    title: 'Little children',
    situation: 'They cannot argue theology or choose their circumstances.',
    insight:
      `Love does not demand understanding from a child. Sacred story trusts that ${teacher} welcomes children; the heart of ${dialogueOfCourage} is devotion, not examination. A child is held in mercy — and adults are called to protect, not exploit, their innocence.`,
    forOthers:
      'Pray simply on their behalf. Be trustworthy. Remove harm where you can.',
    prayer:
      'God of tenderness, hold this child in love. Help me guard their peace and dignity.',
  },
  {
    title: 'Severe illness, injury, or unconsciousness',
    situation: 'Someone cannot speak, decide, or pray as they once did.',
    insight:
      'Their worth does not shrink when their voice does. Love is not earned by eloquence. Many traditions believe God meets the person — not only the body’s condition. Family and friends can “carry” the prayer: asking, loving, and staying present.',
    forOthers:
      'Speak love aloud in the room. Advocate for gentle care. Do not measure a soul by medical charts alone.',
    prayer:
      'God who knows every heart, be close to one who cannot ask today. Let my love stand in the gap.',
  },
  {
    title: 'Mental illness and profound learning difference',
    situation: 'Thought, mood, or understanding may be fragmented or overwhelmed.',
    insight:
      `Shame does not come from God. A mind that struggles is still a person of dignity. ${dialogueOfCourage} warns against despising another’s path; ${teacher} never humiliated the vulnerable. What matters is love received and love given — in ways that person can feel: safety, patience, belonging.`,
    forOthers:
      'Adapt communication. Refuse bullying. Include them in community life where safe.',
    prayer:
      'God of patience, help me see this person whole — not as a problem to fix, but as someone You love.',
  },
  {
    title: 'Oppression — when another person steals voice and choice',
    situation: 'Abuse, trafficking, coercion, or cruelty from someone stronger.',
    insight:
      'This suffering is not God’s wish — it is human evil. The answer is not “pray harder and stay quiet,” but rescue, justice, and safe community. God’s image in humanity means we are meant to defend the trapped. Intercession includes action: reporting, shelter, law, friendship.',
    forOthers:
      'Believe survivors. Do not blame them for their cage. Be the asker on their behalf until they can breathe freely.',
    prayer:
      'God of justice, break what binds the oppressed. Use my hands, voice, and courage as part of Your answer.',
  },
  {
    title: 'Deep grief and despair',
    situation: 'Bereavement, loss, or numbness so heavy that hope feels false.',
    insight:
      `Despair is not a sin — it is pain looking for air. ${dialogueOfCourage} does not mock ${wearySoul}'s tears; ${teacher} wept at a grave. Hope is not pretending nothing hurts. It is the promise that love outlasts the worst night — and that one small step (water, rest, a friend, a whispered prayer) still matters.`,
    forOthers:
      'Stay nearby without fixing. Grieve with them. Offer food, time, and silence.',
    prayer:
      'God of all comfort, sit with me in this darkness. When I cannot hope, let love hold me until I can breathe again.',
  },
]

/** Short wisdom chapters for reading in the app. */
export const sacredWisdomChapters = [
  {
    id: 'duty-without-hatred',
    title: 'Do what is right — without hatred',
    summary: `${wearySoul} faces violence and confusion. A sacred guide does not say “hate your enemy” or “flee from duty.” The teaching is clarity: act for protection and justice, but do not let rage poison the heart. For us: stand against harm; do not become harm.`,
  },
  {
    id: 'surrender',
    title: 'Honest asking',
    summary:
      'When the weary soul finally asks for help, guidance comes. The lesson is not magic for laziness — it is partnership: human effort joined to divine grace. Ask for wisdom, courage, and healing — especially for others — and be ready to act when the way opens.',
  },
  {
    id: 'equality-of-souls',
    title: 'The same light in everyone',
    summary: `${wisdomOfStillness}: the same reality shines in all beings. That is why cruelty to anyone is cruelty to the sacred. We avoid debates about rank or inequality; we practise seeing the overlooked first — women, the poor, strangers — as neighbours, not obstacles.`,
  },
  {
    id: 'hope-final',
    title: 'Hope is the last word',
    summary:
      'Universal love is not a theory for good days. It is food for the worst days — when bereavement, failure, or injustice would pull you under. Hope says: you are not abandoned; one loving act still counts; the story is not finished while breath remains.',
  },
]

export const hopeClosing =
  'This tool supports reflection and does not replace pastoral care, therapy, medical care, or emergency help. If you or someone else is in danger, contact local emergency or safeguarding services. Love includes getting real help.'

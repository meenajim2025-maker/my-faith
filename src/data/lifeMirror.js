/** @typedef {{ id: string, label: string }} LifeMirrorOption */

/** @type {LifeMirrorOption[]} */
export const lifeMirrorWeights = [
  { id: 'anger', label: 'Anger' },
  { id: 'fear', label: 'Fear' },
  { id: 'loneliness', label: 'Loneliness' },
  { id: 'guilt', label: 'Guilt' },
  { id: 'exhaustion', label: 'Exhaustion' },
  { id: 'confusion', label: 'Confusion' },
]

/** @type {LifeMirrorOption[]} */
export const lifeMirrorPlaces = [
  { id: 'family', label: 'Family' },
  { id: 'work', label: 'Work' },
  { id: 'school', label: 'School' },
  { id: 'relationships', label: 'Relationships' },
  { id: 'self-worth', label: 'Self-worth' },
]

/** @type {Record<string, { truth: string, jesusInsight: string, prayer: string }>} */
export const mirrorByWeight = {
  anger: {
    truth: 'When anger stays unspoken, it often turns into distance.',
    jesusInsight: 'Jesus taught truth without cruelty — steady eyes, steady heart.',
    prayer: 'Jesus, teach me strength without harm.',
  },
  fear: {
    truth: 'Fear often grows in the stories we rehearse about tomorrow.',
    jesusInsight:
      'In the Gospels, Jesus does not shame fear — he names it, then draws near.',
    prayer: 'Jesus, stay close when my mind runs ahead.',
  },
  loneliness: {
    truth: 'Loneliness is not weakness; it is a human ache for belonging.',
    jesusInsight: 'Jesus made time for people who felt unseen — with patience, not hurry.',
    prayer: 'Jesus, meet me in this quiet.',
  },
  guilt: {
    truth:
      'Guilt can signal love and conscience — but shame that attacks your dignity is not from God.',
    jesusInsight: 'Jesus looked at people with mercy before he asked anything of them.',
    prayer: 'Jesus, help me receive forgiveness and learn mercy.',
  },
  exhaustion: {
    truth: 'Exhaustion can be your mind and body asking for permission to be limited — not lazy.',
    jesusInsight: 'Jesus welcomed weary people to rest without proving their worth.',
    prayer: 'Jesus, give me one gentle breath of peace.',
  },
  confusion: {
    truth:
      'Confusion can mean your heart is honest enough to admit you do not have all the answers.',
    jesusInsight: 'Jesus welcomed questions more than fake certainty.',
    prayer: 'Jesus, walk with me in the fog.',
  },
}

/** @type {Record<string, Record<string, string>>} */
export const actByWeightAndPlace = {
  anger: {
    family:
      'Before you reply at home, pause once — silence can be kindness when anger is loud.',
    work: 'Step away from the screen for ninety seconds before you send the next message.',
    school:
      'When heat rises, name one true thing calmly before you debate — truth can be soft.',
    relationships:
      'Try one honest feeling without blame: “I felt…” instead of “You always…”.',
    'self-worth':
      'Hand on chest, slow breath — speak to yourself the way you would a tired friend.',
  },
  fear: {
    family:
      'Tell one safe person one fear, or write it down — naming fear often shrinks its power.',
    work: 'Do only the next small task; let the rest wait fifteen minutes without shame.',
    school: 'Ask one concrete question for help — you do not have to carry it silently.',
    relationships:
      'Send one gentle truth: “I feel anxious — I still care about you.”',
    'self-worth':
      'Swap one “what if” for one “right now I am okay enough for this step.”',
  },
  loneliness: {
    family:
      'Sit in the same room without performing — presence can come before conversation.',
    work: 'Offer one small kindness to a colleague — bridges build slowly.',
    school:
      'Join one low-pressure moment: a quiet hello, a shared table, a walk between classes.',
    relationships: 'Reach out with a simple check-in — a line, not a speech.',
    'self-worth':
      'Write one true sentence: someone would miss you — let that be a fact, not a test.',
  },
  guilt: {
    family: 'Repair one specific moment with a clear apology — repair beats perfection.',
    work: 'Correct what you can today; leave tomorrow’s shame for tomorrow.',
    school: 'Return one message or task honestly — small integrity still counts.',
    relationships:
      'Ask once: “What would make this fairer for both of us?” — fairness heals.',
    'self-worth':
      'Keep “I did wrong” if it is true — refuse “I am worthless.” Those are not the same.',
  },
  exhaustion: {
    family: 'Ask for one concrete help — a dish, a bedtime, a ten-minute pause.',
    work: 'Block twenty minutes with no new tasks; water, stretch, look out a window.',
    school:
      'Protect sleep tonight like it matters — even one hour earlier is mercy.',
    relationships:
      'Say plainly: “I’m tapped out; I care; I need a short pause.”',
    'self-worth':
      'Cancel one thing that exists only to impress — your dignity is not a performance.',
  },
  confusion: {
    family:
      'Ask one gentle question instead of guessing what someone meant — curiosity calms stories.',
    work: 'Write two options on paper; choose a small experiment, not a final verdict.',
    school: 'Review for ten minutes only — clarity often arrives in layers, not leaps.',
    relationships:
      'Say: “I’m unsure — can we slow this down?” Pace is a form of love.',
    'self-worth':
      'Name one thing you know today; hold that small ground without forcing the rest.',
  },
}

/**
 * @param {string} weightId
 * @param {string} placeId
 * @returns {{ truth: string, jesusInsight: string, act: string, prayer: string, weightLabel: string, placeLabel: string } | null}
 */
export function getLifeMirrorResponse(weightId, placeId) {
  const weight = mirrorByWeight[weightId]
  const act = actByWeightAndPlace[weightId]?.[placeId]
  const wLabel = lifeMirrorWeights.find((w) => w.id === weightId)?.label
  const pLabel = lifeMirrorPlaces.find((p) => p.id === placeId)?.label
  if (!weight || !act || !wLabel || !pLabel) return null
  return {
    truth: weight.truth,
    jesusInsight: weight.jesusInsight,
    act,
    prayer: weight.prayer,
    weightLabel: wLabel,
    placeLabel: pLabel,
  }
}

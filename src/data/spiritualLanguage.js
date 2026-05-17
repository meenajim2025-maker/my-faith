/**
 * Welcoming spiritual vocabulary — less denomination-specific labels in the UI.
 * Source content uses these terms; applySpiritualDisplayText catches legacy/API wording.
 */

/** @type {Readonly<Record<string, string>>} */
export const SPIRITUAL_NAMES = {
  teacher: 'Unparalleled Love',
  teacherPossessive: "Unparalleled Love's",
  loveHimself: 'Love Himself',
  sacredStories: 'the sacred stories',
  dialogueOfCourage: 'the Dialogue of Courage',
  wisdomOfStillness: 'the Wisdom of Stillness',
  wearySoul: 'a weary soul',
  faithfulMother: 'a faithful mother',
  companions: 'companions on the path',
  spiritOfWisdom: 'the Spirit of wisdom',
}

/** UI labels (default + quiet where different). */
export const UI_LABELS = {
  pathSection: 'Path of Unparalleled Love',
  pathSectionQuiet: 'Path of gentle love',
  learnSection: 'Gentle wisdom',
  learnSectionQuiet: 'Simple reflection',
  loveJourney: 'Journey of Unparalleled Love',
  insightLabel: 'A love-centred insight',
  insightLabelQuiet: 'A mercy-shaped insight',
}

/**
 * Safety net for API/legacy copy — maps old religious names to welcoming language.
 * @param {string} text
 * @returns {string}
 */
export function applySpiritualDisplayText(text) {
  if (text == null || typeof text !== 'string') return text
  let s = text

  s = s.replace(/\bBhagavad Gita\b/gi, SPIRITUAL_NAMES.dialogueOfCourage)
  s = s.replace(/\bthe Gita\b/gi, SPIRITUAL_NAMES.dialogueOfCourage)
  s = s.replace(/\bGita\b/g, SPIRITUAL_NAMES.dialogueOfCourage)
  s = s.replace(/\bUpanishadic\b/gi, SPIRITUAL_NAMES.wisdomOfStillness)
  s = s.replace(/\bUpanishads\b/gi, SPIRITUAL_NAMES.wisdomOfStillness)
  s = s.replace(/\bJesus Christ\b/gi, SPIRITUAL_NAMES.loveHimself)
  s = s.replace(/\bJesus'\b/g, SPIRITUAL_NAMES.teacherPossessive)
  s = s.replace(/\bJesus's\b/gi, SPIRITUAL_NAMES.teacherPossessive)
  s = s.replace(/\bJesus\b/g, SPIRITUAL_NAMES.teacher)
  s = s.replace(/\bthe Gospels\b/gi, SPIRITUAL_NAMES.sacredStories)
  s = s.replace(/\bGospels\b/g, SPIRITUAL_NAMES.sacredStories)
  s = s.replace(/\bGospel\b/gi, 'sacred story')
  s = s.replace(/\bChrist's\b/gi, `${SPIRITUAL_NAMES.loveHimself}'s`)
  s = s.replace(/\bChrist\b/gi, SPIRITUAL_NAMES.loveHimself)
  s = s.replace(/\bChristian spirituality\b/gi, 'spiritual life')
  s = s.replace(/\bChristian faith\b/gi, 'spiritual life')
  s = s.replace(/\bChristian love\b/gi, 'universal love')
  s = s.replace(/\bChristians\b/gi, 'many people of faith')
  s = s.replace(/\bChristian\b/gi, 'spiritual')
  s = s.replace(/\bHoly Spirit\b/gi, SPIRITUAL_NAMES.spiritOfWisdom)
  s = s.replace(/\bArjuna\b/gi, SPIRITUAL_NAMES.wearySoul)
  s = s.replace(/\bMary\b/g, SPIRITUAL_NAMES.faithfulMother)
  s = s.replace(/\bWalking With Jesus\b/gi, UI_LABELS.pathSection)
  s = s.replace(/\bWalking with Jesus\b/gi, UI_LABELS.pathSection)

  return s.replace(/\s{2,}/g, ' ').trim()
}

/**
 * Standard display pipeline: welcoming names, then optional Quiet Mode.
 * @param {string} text
 * @param {boolean} [quietMode]
 * @returns {string}
 */
export function displaySpiritualText(text, quietMode = false) {
  const base = applySpiritualDisplayText(text)
  if (!quietMode) return base
  let s = base
  s = s.replace(/\bUnparalleled Love\b/g, 'the gift of love')
  s = s.replace(/\bLove Himself\b/gi, 'love made visible')
  s = s.replace(/\bGod\b/g, 'the sacred')
  s = s.replace(/\bSacred Love\b/g, 'love')
  s = s.replace(/\bAmen\b\.?/gi, 'So may it be.')
  return s.replace(/\s{2,}/g, ' ').trim()
}

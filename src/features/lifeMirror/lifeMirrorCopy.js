import { getLifeMirrorThemeEcho } from './lifeMirrorThemes.js'

const feelingCopy = {
  heavy: {
    neutral: 'Something may feel difficult to carry today. Awareness is not blame — only noticing.',
    spiritual: 'Something may feel heavy on your heart today. You may loosen what grips too tightly.',
    quiet: 'This feels heavy.',
  },
  anxious: {
    neutral: 'Your mind or body may be looking for steadiness.',
    spiritual: 'Your heart may be longing for peace.',
    quiet: 'There is unease.',
  },
  sad: {
    neutral: 'Sadness often asks for gentleness, not pressure.',
    spiritual: 'Sadness can be held with tenderness.',
    quiet: 'Sadness is here.',
  },
  angry: {
    neutral: 'Anger can point to something that matters.',
    spiritual: 'Anger may be protecting something precious.',
    quiet: 'There is anger.',
  },
  numb: {
    neutral: 'Numbness can be a sign that you have carried a lot.',
    spiritual: 'Numbness may be a quiet place before words return.',
    quiet: 'Numbness is here.',
  },
  lost: {
    neutral: 'Feeling lost does not mean you have failed.',
    spiritual: 'Feeling lost can still be part of the path.',
    quiet: 'The way feels unclear.',
  },
  grateful: {
    neutral: 'Gratitude can be a small light in the day.',
    spiritual: 'Gratitude can open the heart gently.',
    quiet: 'There is gratitude.',
  },
  peaceful: {
    neutral: 'Peace is worth noticing, even if it is small.',
    spiritual: 'Peace can be received gently.',
    quiet: 'Peace is here.',
  },
}

const needCopy = {
  rest: {
    neutral: 'Rest may be enough for this moment.',
    spiritual: 'Rest may let the heart breathe.',
    quiet: 'Rest may help.',
  },
  safety: {
    neutral: 'Feeling safe matters. You do not have to rush.',
    spiritual: 'A safe place can help the heart settle.',
    quiet: 'Safety matters.',
  },
  connection: {
    neutral: 'A small connection may ease the weight.',
    spiritual: 'Connection can remind you that you are not alone.',
    quiet: 'Connection may help.',
  },
  clarity: {
    neutral: 'Clarity often comes one step at a time.',
    spiritual: 'Clarity may come gently, not all at once.',
    quiet: 'One step at a time.',
  },
  forgiveness: {
    neutral: 'Forgiveness can begin softly — a return, not perfection first.',
    spiritual: 'Mercy can meet you before you have every answer.',
    quiet: 'No forcing.',
  },
  courage: {
    neutral: 'Courage can be very small — conscience speaking without cruelty.',
    spiritual: 'Courage can begin as a quiet yes to dignity and truth.',
    quiet: 'Small courage counts.',
  },
  space: {
    neutral: 'Space can help you hear yourself again.',
    spiritual: 'Space can make room for stillness.',
    quiet: 'Space may help.',
  },
  hope: {
    neutral: 'Hope does not need to be loud. One honest step still counts.',
    spiritual: 'Hope can be a small flame — dignity and meaning in ordinary hours.',
    quiet: 'A little hope.',
  },
}

const supportCopy = {
  'short-reflection': {
    neutral: 'You may take one sentence with you: I can meet this moment gently.',
    spiritual: 'You may take one sentence with you: Love can meet me here.',
    quiet: 'Gently does it.',
  },
  breathing: {
    neutral: 'If it helps, try one slow breath in, and one slow breath out.',
    spiritual: 'If it helps, let this breath be a small return to peace.',
    quiet: 'Breathe in. Breathe out.',
  },
  write: {
    neutral: 'You could write: Right now, I notice...',
    spiritual: 'You could write: In my heart, I notice...',
    quiet: 'Write one line.',
  },
  'small-step': {
    neutral: 'One small action is enough for now.',
    spiritual: 'One gentle step is enough for now.',
    quiet: 'One step.',
  },
}

const stepCopy = {
  'drink-water': {
    neutral: 'Care can begin with something simple.',
    spiritual: 'Small care can still be sacred.',
    quiet: 'Drink water.',
  },
  'step-away': {
    neutral: 'A short pause may give your body room.',
    spiritual: 'A short pause may give your heart room.',
    quiet: 'Pause.',
  },
  'message-someone': {
    neutral: 'You do not have to carry everything alone. Connection protects dignity.',
    spiritual: 'You are not meant to carry everything alone. Love often arrives through another safe person.',
    quiet: 'Reach out.',
  },
  'write-one-line': {
    neutral: 'One honest line can be enough.',
    spiritual: 'One honest line can open a little light.',
    quiet: 'One line.',
  },
  'sit-quietly': {
    neutral: 'Sitting quietly can be a kind response.',
    spiritual: 'Stillness can be a gentle prayer, if that helps.',
    quiet: 'Sit quietly.',
  },
  'come-back-later': {
    neutral: 'Leaving and returning later is allowed.',
    spiritual: 'Returning later is still part of the journey.',
    quiet: 'Come back later.',
  },
}

/**
 * @param {{
 *   feeling: string
 *   need: string
 *   support: string
 *   step: string
 *   mode?: string
 * }} params
 */
export function getLifeMirrorSummary({ feeling, need, support, step, mode = 'neutral' }) {
  const safeMode = ['neutral', 'spiritual', 'quiet'].includes(mode) ? mode : 'neutral'

  return {
    feelingText:
      feelingCopy[feeling]?.[safeMode] || 'Something is present today.',
    needText: needCopy[need]?.[safeMode] || 'Something in you may need care.',
    supportText:
      supportCopy[support]?.[safeMode] || 'A gentle pause may help.',
    stepText: stepCopy[step]?.[safeMode] || 'One small step is enough.',
    themeEcho: getLifeMirrorThemeEcho({ feeling, need, support, step }, safeMode),
  }
}

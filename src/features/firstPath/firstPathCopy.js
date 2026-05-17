import { firstPathSummary as summaryCopy } from './firstPathFlow.js'
import { firstPathScenes } from './firstPathScenes.js'
import { tensionLabelById } from '../../language/tensions.js'

/**
 * Mode-aware copy for each moment. Universal language only — no named traditions.
 * @typedef {import('./firstPathFlow.js').FirstPathMode} FirstPathMode
 */

/** @type {Record<string, {
 *   title: Record<FirstPathMode, string>
 *   introduction: Record<FirstPathMode, string>
 *   humanInsight: Record<FirstPathMode, string>
 *   simplePractice: Record<FirstPathMode, string>
 *   reflectionQuestion: Record<FirstPathMode, string>
 *   closingLine?: Record<FirstPathMode, string>
 * }>} */
export const firstPathMomentCopy = {
  'quiet-beginning': {
    title: {
      neutral: 'The Quiet Beginning',
      spiritual: 'The Quiet Beginning',
      quiet: 'Quiet',
    },
    introduction: {
      neutral: 'Every inner life starts with a pause. You do not need to fix yourself first.',
      spiritual: 'Every heart meets the sacred in stillness. You do not need to perform.',
      quiet: 'Pause first.',
    },
    humanInsight: {
      neutral:
        'Stillness and awareness come first. You may notice breath, sound, or the weight of the day — without fixing anything yet.',
      spiritual:
        'In quiet, the heart can loosen its grip. Stillness is not emptiness; it is room.',
      quiet: 'Still. Aware.',
    },
    simplePractice: {
      neutral: 'Sit for one minute. Name three things you can hear or feel.',
      spiritual: 'Sit for one minute. Offer the moment without asking for answers yet.',
      quiet: 'One minute. Listen.',
    },
    reflectionQuestion: {
      neutral: 'What is present in me right now — without judgement?',
      spiritual: 'What is my heart carrying that wants to be seen?',
      quiet: 'What is here?',
    },
    closingLine: {
      neutral: 'Beginning can be this small.',
      spiritual: 'The path often starts in silence.',
      quiet: 'Enough.',
    },
  },
  'inner-mirror': {
    title: {
      neutral: 'The Inner Mirror',
      spiritual: 'The Inner Mirror',
      quiet: 'Mirror',
    },
    introduction: {
      neutral: 'An honest look inward is not self-attack. It is clarity.',
      spiritual: 'Truth before the sacred begins with truth before yourself.',
      quiet: 'Look gently.',
    },
    humanInsight: {
      neutral:
        'Clear seeing is not cruelty. Truthfulness toward yourself makes compassion possible.',
      spiritual:
        'The heart holds more than the face shows. Honest awareness opens the door to mercy.',
      quiet: 'See truth. Stay kind.',
    },
    simplePractice: {
      neutral: 'Write one true sentence: “Today I notice…”',
      spiritual: 'Write one true sentence: “In my inner life, I notice…”',
      quiet: 'One line. True.',
    },
    reflectionQuestion: {
      neutral: 'What do I see in myself that I have been avoiding?',
      spiritual: 'What does my conscience already know?',
      quiet: 'What do I see?',
    },
    closingLine: {
      neutral: 'Honesty can be kind.',
      spiritual: 'Truth and tenderness can walk together.',
      quiet: 'Kind honesty.',
    },
  },
  'fire-of-desire': {
    title: {
      neutral: 'The Fire of Desire',
      spiritual: 'The Fire of Desire',
      quiet: 'Desire',
    },
    introduction: {
      neutral: 'Wanting is not shameful. Desire moves careers, love, art, and survival.',
      spiritual: 'Longing can point toward beauty — or toward chains.',
      quiet: 'Wanting is human.',
    },
    humanInsight: {
      neutral:
        'Freedom from craving does not mean feeling nothing. It means not being owned by every want.',
      spiritual:
        'Non-attachment is not coldness. It is choosing what truly nourishes the soul.',
      quiet: 'Notice the pull.',
    },
    simplePractice: {
      neutral: 'Name one desire. Ask: does this build life or drain it?',
      spiritual: 'Name one desire. Ask: does this lead toward love or away from it?',
      quiet: 'One want. Notice.',
    },
    reflectionQuestion: {
      neutral: 'Which want has been running me lately?',
      spiritual: 'What does my heart chase when I am afraid or empty?',
      quiet: 'What pulls hardest?',
    },
    closingLine: {
      neutral: 'Self-control grows from seeing clearly.',
      spiritual: 'Freedom often begins with honest wanting.',
      quiet: 'See it.',
    },
  },
  'gentle-release': {
    title: {
      neutral: 'The Gentle Release',
      spiritual: 'The Gentle Release',
      quiet: 'Release',
    },
    introduction: {
      neutral: 'Liberation is not escape from life. It is loosening what grips too tightly.',
      spiritual: 'Release can feel like breath returning after holding too long.',
      quiet: 'Loosen.',
    },
    humanInsight: {
      neutral:
        'Letting go can bring freedom. Grudges and old stories weigh down the mind — you may set down a little.',
      spiritual:
        'Forgiveness and release are slow works of mercy. Renewal often begins in a small loosening.',
      quiet: 'Let go a little.',
    },
    simplePractice: {
      neutral: 'Choose one small thing to release today — a thought, a grudge, a “must”.',
      spiritual: 'Whisper: I release what I cannot carry. Help me take the next kind step.',
      quiet: 'Release one thing.',
    },
    reflectionQuestion: {
      neutral: 'What am I ready to loosen — even slightly?',
      spiritual: 'What would mercy ask me to set down?',
      quiet: 'What to release?',
    },
    closingLine: {
      neutral: 'Letting go can be an act of courage.',
      spiritual: 'Grace often feels like room to breathe.',
      quiet: 'Breathe.',
    },
  },
  'wound-and-return': {
    title: {
      neutral: 'The Wound and the Return',
      spiritual: 'The Wound and the Return',
      quiet: 'Return',
    },
    introduction: {
      neutral: 'Pain is part of being human. Compassion does not deny the wound.',
      spiritual: 'Healing often walks through grief — not around it.',
      quiet: 'Hurt is real.',
    },
    humanInsight: {
      neutral:
        'Suffering can be met with tenderness. Return to yourself after loss is still movement — still hope.',
      spiritual:
        'Mercy can meet a broken heart. You may be made new one step at a time, not all at once.',
      quiet: 'Return. Gentle.',
    },
    simplePractice: {
      neutral: 'Place a hand on your chest. Say: I am still here. One step is enough.',
      spiritual: 'Place a hand on your chest. Ask for healing without demanding a timetable.',
      quiet: 'Hand on chest. Breathe.',
    },
    reflectionQuestion: {
      neutral: 'Where do I need to return — to peace, to truth, to myself?',
      spiritual: 'Where is my heart asking to come home?',
      quiet: 'Where to return?',
    },
    closingLine: {
      neutral: 'Returning is not failure. It is wisdom.',
      spiritual: 'The path bends toward hope again.',
      quiet: 'Homeward.',
    },
  },
  'way-of-harmlessness': {
    title: {
      neutral: 'The Way of Harmlessness',
      spiritual: 'The Way of Harmlessness',
      quiet: 'Kindness',
    },
    introduction: {
      neutral: 'Non-violence begins in speech, thought, and small choices.',
      spiritual: 'Compassion is a spiritual discipline — not a mood.',
      quiet: 'Do no harm.',
    },
    humanInsight: {
      neutral:
        'Non-harm begins in speech, thought, and restraint. Reverence for life includes how you treat yourself.',
      spiritual:
        'Compassion is a discipline. Love of neighbour includes the neighbour in the mirror.',
      quiet: 'Harm none.',
    },
    simplePractice: {
      neutral: 'Before your next hard message, pause. Ask: will this heal or harm?',
      spiritual: 'Choose one act of gentleness you do not have to announce.',
      quiet: 'One gentle act.',
    },
    reflectionQuestion: {
      neutral: 'Where could I reduce harm today — outward or inward?',
      spiritual: 'Who needs my gentleness — including me?',
      quiet: 'Where less harm?',
    },
    closingLine: {
      neutral: 'Peace grows in small refusals of violence.',
      spiritual: 'The sacred often looks like restraint.',
      quiet: 'Peace.',
    },
  },
  'good-order': {
    title: {
      neutral: 'The Good Order of Life',
      spiritual: 'The Good Order of Life',
      quiet: 'Order',
    },
    introduction: {
      neutral:
        'Duty, respect, and steady character are not old-fashioned. They protect what you love.',
      spiritual:
        'Truthfulness and self-control honour the sacred in ordinary life.',
      quiet: 'Steady steps.',
    },
    humanInsight: {
      neutral:
        'Social harmony begins at home — in speech, promises, and how we treat family and strangers.',
      spiritual:
        'Disciplined love prepares the heart. Humility keeps duty from becoming pride.',
      quiet: 'Order with heart.',
    },
    simplePractice: {
      neutral: 'Pick one area — sleep, speech, money, time — and make one honest improvement.',
      spiritual: 'Ask: does my daily life reflect what I say I value?',
      quiet: 'One honest fix.',
    },
    reflectionQuestion: {
      neutral: 'What small order would help me live more truthfully?',
      spiritual: 'Where does my life need alignment with love?',
      quiet: 'What needs order?',
    },
    closingLine: {
      neutral: 'Order is a kindness to your future self.',
      spiritual: 'Discipline can serve devotion.',
      quiet: 'Steady.',
    },
  },
  'courage-conscience': {
    title: {
      neutral: 'The Courage of Conscience',
      spiritual: 'The Courage of Conscience',
      quiet: 'Courage',
    },
    introduction: {
      neutral: 'Many people quietly refused to betray what they knew was right.',
      spiritual: 'Conscience is an inner voice that calls toward dignity and justice.',
      quiet: 'Stand inside.',
    },
    humanInsight: {
      neutral:
        'Under pressure, conscience asks for truth without cruelty. Refusing betrayal of your values is courage.',
      spiritual:
        'To stand for dignity when it costs something is a quiet form of witness.',
      quiet: 'Truth. Courage.',
    },
    simplePractice: {
      neutral: 'Name one situation where you could speak or act with quiet integrity.',
      spiritual: 'Pray or reflect: give me courage without hatred.',
      quiet: 'One brave step.',
    },
    reflectionQuestion: {
      neutral: 'What does my conscience ask of me now?',
      spiritual: 'What truth am I being invited to live?',
      quiet: 'What is right?',
    },
    closingLine: {
      neutral: 'Integrity is spirituality in work clothes.',
      spiritual: 'The heart can be brave and gentle at once.',
      quiet: 'Brave. Gentle.',
    },
  },
  'life-of-service': {
    title: {
      neutral: 'The Life of Service',
      spiritual: 'The Life of Service',
      quiet: 'Service',
    },
    introduction: {
      neutral: 'Inner life is not only inward. It flows toward others.',
      spiritual: 'Love becomes real when it kneels — when it serves without spectacle.',
      quiet: 'Give quietly.',
    },
    humanInsight: {
      neutral:
        'Meaning grows through service, justice, and moral responsibility — often in small acts.',
      spiritual:
        'Love matures in humble duty toward neighbours, strangers, and those the world overlooks.',
      quiet: 'Serve quietly.',
    },
    simplePractice: {
      neutral:
        'Do one hidden kindness — especially toward someone vulnerable. No post, no praise required.',
      spiritual: 'Offer one act of protection or care as a quiet gift.',
      quiet: 'One kind act.',
    },
    reflectionQuestion: {
      neutral: 'Who around me needs dignity or practical care?',
      spiritual: 'How may love move through my hands today?',
      quiet: 'Who needs care?',
    },
    closingLine: {
      neutral: 'You belong to the human family.',
      spiritual: 'Service can be a form of prayer.',
      quiet: 'Give.',
    },
  },
  'open-door': {
    title: {
      neutral: 'The Open Door',
      spiritual: 'The Open Door',
      quiet: 'Door open',
    },
    introduction: {
      neutral: 'This is not the end. It is a threshold.',
      spiritual: 'Awakening is not a single day. The door stays open.',
      quiet: 'Continue.',
    },
    humanInsight: {
      neutral:
        'Freedom and meaning need not arrive all at once. You may walk on without owning every answer.',
      spiritual:
        'Peace, renewal, and awakening are many names for the same open door. Your path is yours to live.',
      quiet: 'Door open.',
    },
    simplePractice: {
      neutral: 'Choose one practice from this journey to repeat tomorrow.',
      spiritual: 'Choose one practice to offer tomorrow — in silence or in action.',
      quiet: 'One practice tomorrow.',
    },
    reflectionQuestion: {
      neutral: 'What will I carry forward from this beginning?',
      spiritual: 'What small yes is my heart ready to make?',
      quiet: 'What next?',
    },
    closingLine: {
      neutral: 'You can begin spirituality without a group. You are already walking.',
      spiritual: 'The door is open. Walk gently.',
      quiet: 'Walk on.',
    },
  },
}

/**
 * @param {string} momentId
 * @param {string} [mode]
 */
export function getFirstPathMoment(momentId, mode = 'neutral') {
  const safe = ['neutral', 'spiritual', 'quiet'].includes(mode) ? mode : 'neutral'
  const m = firstPathMomentCopy[momentId]
  if (!m) return null
  const sceneBlock = firstPathScenes[momentId]
  return {
    title: m.title[safe],
    scene: sceneBlock?.scene[safe] ?? '',
    tension: sceneBlock ? (tensionLabelById[sceneBlock.tensionId] ?? '') : '',
    introduction: m.introduction[safe],
    humanInsight: m.humanInsight[safe],
    simplePractice: m.simplePractice[safe],
    reflectionQuestion: m.reflectionQuestion[safe],
    closingLine: m.closingLine?.[safe] ?? '',
  }
}

/**
 * @param {string} [mode]
 * @param {string[]} [visitedMomentIds]
 */
export function getFirstPathSummary(mode = 'neutral', visitedMomentIds = []) {
  const safe = ['neutral', 'spiritual', 'quiet'].includes(mode) ? mode : 'neutral'
  return {
    title: summaryCopy.title[safe],
    body: summaryCopy.body[safe],
    invite: summaryCopy.invite[safe],
    visitedCount: visitedMomentIds.length,
  }
}

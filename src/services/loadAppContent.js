import { apiClient } from './apiClient.js'
import { applySpiritualDisplayText } from '../data/spiritualLanguage.js'

function asString(value) {
  if (value == null) return ''
  return typeof value === 'string' ? value : String(value)
}

function normalizeSteps(steps) {
  if (!Array.isArray(steps)) return []
  return steps.map((step) => asString(step))
}

/** @param {Record<string, unknown>} row */
export function mapFaithTopic(row) {
  return {
    id: asString(row.id),
    slug: row.slug != null ? asString(row.slug) : '',
    title: asString(row.title),
    plain: asString(row.plain),
    teenager: row.teenager != null ? asString(row.teenager) : '',
    adult: row.adult != null ? asString(row.adult) : '',
    older: row.older != null ? asString(row.older) : '',
    explorer: row.explorer != null ? asString(row.explorer) : '',
    reflection: row.reflection != null ? asString(row.reflection) : '',
    theme: row.theme != null ? asString(row.theme) : '',
  }
}

/** @param {Record<string, unknown>} row */
export function mapLifeScenario(row) {
  return {
    id: asString(row.id),
    slug: row.slug != null ? asString(row.slug) : '',
    title: asString(row.title),
    trigger: asString(row.trigger),
    principle: asString(row.principle),
    steps: normalizeSteps(row.steps),
    prayer: row.prayer != null ? asString(row.prayer) : '',
  }
}

/** @param {Record<string, unknown>} row */
export function mapMeditation(row) {
  return {
    id: asString(row.id),
    slug: row.slug != null ? asString(row.slug) : '',
    title: asString(row.title),
    duration: row.duration != null ? Number(row.duration) : 0,
    theme: row.theme != null ? asString(row.theme) : '',
    script: asString(row.script),
  }
}

/** @param {Record<string, unknown>} row */
export function mapChant(row) {
  return {
    id: asString(row.id),
    slug: row.slug != null ? asString(row.slug) : '',
    title: asString(row.title),
    line: asString(row.line),
    meaning: row.meaning != null ? asString(row.meaning) : '',
  }
}

/** @param {Record<string, unknown>} row */
export function mapDailyReflection(row) {
  const body = row.text != null ? asString(row.text) : ''
  return {
    id: asString(row.id),
    slug: row.slug != null ? asString(row.slug) : '',
    title: asString(row.title),
    theme: row.theme != null ? asString(row.theme) : '',
    text: body,
    action: row.action != null ? asString(row.action) : '',
    prayer: row.prayer != null ? asString(row.prayer) : '',
  }
}

/** @param {Record<string, unknown>} row */
export function mapSavedPrayerRow(row) {
  return {
    id: asString(row.id),
    text: asString(row.prayer_text),
    createdAt: row.created_at != null ? asString(row.created_at) : '',
    ageGroup: row.age_group != null ? asString(row.age_group) : '',
    mood: row.mood != null ? asString(row.mood) : '',
    situation: row.situation != null ? asString(row.situation) : '',
  }
}

/** @param {Record<string, unknown>} row */
export function mapJournalRow(row) {
  return {
    id: asString(row.id),
    text: asString(row.entry_text),
    createdAt: row.created_at != null ? asString(row.created_at) : '',
  }
}

/**
 * Loads published content from the API. Throws if any request fails.
 * @returns {Promise<{
 *   faithTopics: ReturnType<typeof mapFaithTopic>[]
 *   lifeScenarios: ReturnType<typeof mapLifeScenario>[]
 *   meditations: ReturnType<typeof mapMeditation>[]
 *   chants: ReturnType<typeof mapChant>[]
 *   dailyReflections: ReturnType<typeof mapDailyReflection>[]
 * }>}
 */
export async function loadPublishedContentFromApi() {
  const [faithRows, scenarioRows, meditationRows, chantRows, reflectionRows] =
    await Promise.all([
      apiClient.getFaithTopics(),
      apiClient.getLifeScenarios(),
      apiClient.getMeditations(),
      apiClient.getChants(),
      apiClient.getDailyReflections(),
    ])

  return {
    faithTopics: faithRows.map((row) => spiritualizeFaithTopic(mapFaithTopic(row))),
    lifeScenarios: scenarioRows.map((row) => spiritualizeLifeScenario(mapLifeScenario(row))),
    meditations: meditationRows.map((row) => spiritualizeMeditation(mapMeditation(row))),
    chants: chantRows.map((row) => spiritualizeChant(mapChant(row))),
    dailyReflections: reflectionRows.map((row) =>
      spiritualizeDailyReflection(mapDailyReflection(row)),
    ),
  }
}

/** @param {string} value */
function spiritualize(value) {
  return applySpiritualDisplayText(value)
}

/** @param {ReturnType<typeof mapFaithTopic>} topic */
function spiritualizeFaithTopic(topic) {
  return {
    ...topic,
    title: spiritualize(topic.title),
    plain: spiritualize(topic.plain),
    teenager: spiritualize(topic.teenager),
    adult: spiritualize(topic.adult),
    older: spiritualize(topic.older),
    explorer: spiritualize(topic.explorer),
    reflection: spiritualize(topic.reflection),
    theme: spiritualize(topic.theme),
  }
}

/** @param {ReturnType<typeof mapLifeScenario>} scenario */
function spiritualizeLifeScenario(scenario) {
  return {
    ...scenario,
    title: spiritualize(scenario.title),
    trigger: spiritualize(scenario.trigger),
    principle: spiritualize(scenario.principle),
    steps: scenario.steps.map((step) => spiritualize(step)),
    prayer: spiritualize(scenario.prayer),
  }
}

/** @param {ReturnType<typeof mapMeditation>} meditation */
function spiritualizeMeditation(meditation) {
  return {
    ...meditation,
    title: spiritualize(meditation.title),
    theme: spiritualize(meditation.theme),
    script: spiritualize(meditation.script),
  }
}

/** @param {ReturnType<typeof mapChant>} chant */
function spiritualizeChant(chant) {
  return {
    ...chant,
    title: spiritualize(chant.title),
    line: spiritualize(chant.line),
    meaning: spiritualize(chant.meaning),
  }
}

/** @param {ReturnType<typeof mapDailyReflection>} reflection */
function spiritualizeDailyReflection(reflection) {
  return {
    ...reflection,
    title: spiritualize(reflection.title),
    theme: spiritualize(reflection.theme),
    text: spiritualize(reflection.text),
    action: spiritualize(reflection.action),
    prayer: spiritualize(reflection.prayer),
  }
}

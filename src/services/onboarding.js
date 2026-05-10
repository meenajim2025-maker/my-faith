import { loadJson, saveJson } from './storage.js'

const ONBOARDING_DONE_KEY = 'first_visit_onboarding_v1'
const FIRST_PATH_KEY = 'first_visit_path_choice'

/** @typedef {'peace' | 'curious' | 'tired'} FirstVisitPath */

export function hasCompletedFirstVisitOnboarding() {
  return loadJson(ONBOARDING_DONE_KEY, false) === true
}

/**
 * @param {FirstVisitPath | null | undefined} pathChoice
 */
export function completeFirstVisitOnboarding(pathChoice) {
  saveJson(ONBOARDING_DONE_KEY, true)
  if (pathChoice === 'peace' || pathChoice === 'curious' || pathChoice === 'tired') {
    saveJson(FIRST_PATH_KEY, pathChoice)
  }
}

/** @returns {FirstVisitPath | null} */
export function getFirstVisitPathChoice() {
  const v = loadJson(FIRST_PATH_KEY, null)
  if (v === 'peace' || v === 'curious' || v === 'tired') return v
  return null
}

/**
 * Start Here — conversation API (voice or text).
 *
 * Set in .env when your API is ready:
 *   VITE_START_HERE_VOICE_API_URL=https://your-api.example/start-here/conversation
 *
 * Expected request (POST, JSON):
 * {
 *   sessionId: string,
 *   message: string,
 *   mode: 'neutral' | 'spiritual' | 'quiet',
 *   context?: { answers?: Record<string, string> }
 * }
 *
 * Expected response (JSON):
 * {
 *   reply: string,
 *   audioUrl?: string   // optional — for voice playback when you add TTS
 * }
 */

const SESSION_KEY = 'start_here_voice_session'

/** @returns {boolean} */
export function isVoiceApiConfigured() {
  const url = import.meta.env.VITE_START_HERE_VOICE_API_URL
  return typeof url === 'string' && url.trim().length > 0
}

/** @returns {string} */
export function getOrCreateSessionId() {
  try {
    const existing = sessionStorage.getItem(SESSION_KEY)
    if (existing) return existing
    const id = `sh-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
    sessionStorage.setItem(SESSION_KEY, id)
    return id
  } catch {
    return `sh-${Date.now()}`
  }
}

export function resetVoiceSession() {
  try {
    sessionStorage.removeItem(SESSION_KEY)
  } catch {
    /* ignore */
  }
}

/**
 * @param {{
 *   message: string
 *   mode?: string
 *   context?: { answers?: Record<string, string> }
 * }} params
 * @returns {Promise<{ reply: string; audioUrl?: string } | { error: string; demo?: boolean }>}
 */
export async function sendConversationTurn({ message, mode = 'neutral', context }) {
  const url = import.meta.env.VITE_START_HERE_VOICE_API_URL?.trim()
  const sessionId = getOrCreateSessionId()

  if (!url) {
    return {
      error: 'not_configured',
      demo: true,
      reply: getDemoReply(message, mode),
    }
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId,
        message,
        mode,
        context,
      }),
    })

    if (!res.ok) {
      return { error: `http_${res.status}` }
    }

    const data = await res.json()
    if (!data?.reply) {
      return { error: 'invalid_response' }
    }

    return {
      reply: String(data.reply),
      audioUrl: data.audioUrl != null ? String(data.audioUrl) : undefined,
    }
  } catch {
    return { error: 'network' }
  }
}

/**
 * Demo replies until your API URL is set.
 * @param {string} message
 * @param {string} mode
 */
function getDemoReply(message, mode) {
  const short = mode === 'quiet'
  if (short) {
    return 'Thank you. I hear you. One breath. One step.'
  }
  const preview = message.trim().slice(0, 80)
  const echo = preview ? `You shared: “${preview}${message.length > 80 ? '…' : ''}”. ` : ''
  return `${echo}Thank you for trusting this space. When your API is connected, a gentle conversation can continue here — by voice or text. For now, take the reflection below at your own pace. You are allowed to go slowly.`
}

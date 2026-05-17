import { useState } from 'react'
import { MicOff, Send } from 'lucide-react'
import ModeAwareText from '../../components/shared/ModeAwareText.jsx'
import {
  isVoiceApiConfigured,
  sendConversationTurn,
} from './startHereVoiceClient.js'
import { getModeText } from './startHereUtils.js'

/**
 * @param {{
 *   mode: string
 *   answers: Record<string, string>
 *   onContinue: () => void
 *   onBack: () => void
 * }} props
 */
export default function VoiceConversationPanel({ mode, answers, onContinue, onBack }) {
  const [messages, setMessages] = useState(
    /** @type {{ role: 'user' | 'assistant'; text: string }[]} */ ([]),
  )
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [notice, setNotice] = useState('')
  const apiReady = isVoiceApiConfigured()

  async function sendMessage() {
    const text = input.trim()
    if (!text || busy) return

    setInput('')
    setMessages((prev) => [...prev, { role: 'user', text }])
    setBusy(true)
    setNotice('')

    const result = await sendConversationTurn({
      message: text,
      mode,
      context: { answers },
    })

    setBusy(false)

    if ('reply' in result && result.reply) {
      setMessages((prev) => [...prev, { role: 'assistant', text: result.reply }])
      if ('demo' in result && result.demo) {
        setNotice(
          getModeText(
            {
              neutral:
                'Demo mode — add VITE_START_HERE_VOICE_API_URL to your .env when your API is ready. Voice will use the same endpoint.',
              spiritual: 'Demo mode — your listening API can connect here when ready.',
              quiet: 'Demo. API later.',
            },
            mode,
          ),
        )
      }
    } else {
      setNotice(
        getModeText(
          {
            neutral:
              'Could not reach the conversation service. You can still continue to your reflection.',
            spiritual:
              'The conversation could not connect. Your reflection below is still here for you.',
            quiet: 'No connection. Continue below.',
          },
          mode,
        ),
      )
    }
  }

  return (
    <div className="sh-voice-panel card">
      <ModeAwareText
        text={{
          neutral: 'Gentle conversation (optional)',
          spiritual: 'Gentle conversation (optional)',
          quiet: 'Talk (optional)',
        }}
        mode={mode}
        as="h3"
        className="sh-voice-title"
      />
      <p className="muted sh-voice-status">
        {apiReady
          ? getModeText(
              {
                neutral:
                  'Your API is connected. Type below; voice input will use the same service when you add it.',
                spiritual: 'Connected. Speak or type — love meets you in honest words.',
                quiet: 'API on. Type.',
              },
              mode,
            )
          : getModeText(
              {
                neutral:
                  'Voice chat will connect when you add your API URL. For now, try a short text message — we will answer gently in demo mode.',
                spiritual:
                  'When your API is ready, voice and text can listen here. Try a message now in demo mode.',
                quiet: 'API later. Try text.',
              },
              mode,
            )}
      </p>

      <div className="sh-voice-toolbar">
        <button
          type="button"
          className="secondary-btn sh-voice-mic"
          disabled
          title={
            apiReady
              ? 'Voice input — wire your microphone handler to the same API'
              : 'Voice will be enabled when your API is connected'
          }
        >
          <MicOff size={18} aria-hidden />
          <span>
            {getModeText(
              { neutral: 'Voice (soon)', spiritual: 'Voice (soon)', quiet: 'Voice' },
              mode,
            )}
          </span>
        </button>
        {!apiReady ? (
          <span className="sh-voice-badge muted">API not set</span>
        ) : (
          <span className="sh-voice-badge sh-voice-badge--on">API ready</span>
        )}
      </div>

      <div className="sh-voice-messages" role="log" aria-live="polite">
        {messages.length === 0 ? (
          <p className="muted sh-voice-empty">
            {getModeText(
              {
                neutral:
                  'Example: “I feel anxious about tomorrow and I do not know what to pray.”',
                spiritual: 'Example: “My heart is heavy. I need peace.”',
                quiet: 'Say what is true.',
              },
              mode,
            )}
          </p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={`${msg.role}-${index}`}
              className={`sh-voice-msg sh-voice-msg--${msg.role}`}
            >
              {msg.text}
            </div>
          ))
        )}
        {busy ? <p className="muted sh-voice-typing">Listening…</p> : null}
      </div>

      <div className="sh-voice-compose">
        <textarea
          className="sh-textarea sh-voice-input"
          rows={2}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={getModeText(
            {
              neutral: 'Type a message…',
              spiritual: 'Speak to the quiet…',
              quiet: '…',
            },
            mode,
          )}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              sendMessage()
            }
          }}
        />
        <button
          type="button"
          className="primary-btn sh-voice-send"
          disabled={busy || input.trim().length < 2}
          onClick={sendMessage}
        >
          <Send size={16} aria-hidden />
          <span>Send</span>
        </button>
      </div>

      {notice ? (
        <p className="lm2-notice" role="status">
          {notice}
        </p>
      ) : null}

      <div className="lm2-nav">
        <button type="button" className="secondary-btn" onClick={onBack}>
          Back
        </button>
        <button type="button" className="primary-btn" onClick={onContinue}>
          {getModeText(
            {
              neutral: 'Continue to my reflection',
              spiritual: 'See my reflection',
              quiet: 'Reflection',
            },
            mode,
          )}
        </button>
      </div>
    </div>
  )
}

import { getModeText } from '../../language/modeText.js'

/**
 * @param {{
 *   text: Record<string, string> | string
 *   mode?: string
 *   as?: keyof JSX.IntrinsicElements
 *   className?: string
 * }} props
 */
export default function ModeAwareText({
  text,
  mode = 'neutral',
  as: Component = 'p',
  className = '',
}) {
  return <Component className={className}>{getModeText(text, mode)}</Component>
}

/**
 * @param {{ children: import('react').ReactNode; selected?: boolean; onClick: () => void }} props
 */
export default function ChoiceButton({ children, selected = false, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`lm2-choice-btn${selected ? ' lm2-choice-btn--selected' : ''}`}
    >
      {children}
    </button>
  )
}

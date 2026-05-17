/**
 * @param {{ children: import('react').ReactNode; className?: string }} props
 */
export default function SoftCard({ children, className = '' }) {
  return (
    <section className={`soft-card card ${className}`.trim()}>{children}</section>
  )
}

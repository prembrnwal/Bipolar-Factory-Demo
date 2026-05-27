import { Link } from 'react-router-dom'
import { useReveal } from './useReveal'
import styles from './CTA.module.css'

export default function CTA() {
  const r1 = useReveal()
  const r2 = useReveal()
  const r3 = useReveal()
  const r4 = useReveal()
  const r5 = useReveal()

  return (
    <section id="cta" className={styles.cta}>
      <div className={styles.bg} />
      <div className={`${styles.contextRow} reveal`} ref={r1}>
        <span className={styles.contextChip}>Enterprise Systems</span>
        <span className={styles.contextDivider}>·</span>
        <span className={styles.contextChip}>Consumer Products</span>
        <span className={styles.contextDivider}>·</span>
        <span className={styles.contextChip}>R&D Engagements</span>
      </div>
      <div className="section-label reveal" style={{ justifyContent: 'center', marginBottom: '24px' }} ref={r2}>Ready to Build?</div>
      <h2 className={`${styles.headline} reveal reveal-delay-1`} ref={r3}>
        Let's make<br /><span className={styles.line2}>something real.</span>
      </h2>
      <p className={`${styles.sub} reveal reveal-delay-2`} ref={r4}>
        Whether you're automating critical infrastructure or launching the next creator platform — we're the partner that ships.
      </p>
      <div className={`${styles.actions} reveal reveal-delay-3`} ref={r5}>
        <Link to="/contact" className="btn-primary"><span>Start a Conversation</span></Link>
        <Link to="/#products" className="btn-ghost">See Our Work</Link>
      </div>
      <a href="mailto:hello@bipolarfactory.com" className={styles.emailLink}>hello@bipolarfactory.com</a>
    </section>
  )
}

import { useReveal } from './useReveal'
import styles from './Manifesto.module.css'

const enterprise = [
  'Bihar State Election Automation',
  'Industrial GPS for Factory Floors',
  'Waste Management EPR Portals',
  'Security Systems Engineering',
]

const consumer = [
  'Metawood Creator Economy',
  'Gamified Streaming Platform',
  'Tokenised Digital Ownership',
  'Decentralised Reward Systems',
]

export default function Manifesto() {
  const r1 = useReveal()
  const r2 = useReveal()
  const r3 = useReveal()

  return (
    <section className={styles.section}>
      <div className={`${styles.statement} reveal`} ref={r1}>
        We don't pick sides.<br />We <span className={styles.accent}>master both.</span>
      </div>

      <div className={`${styles.poles} reveal reveal-delay-1`} ref={r2}>
        <div className={styles.pole}>
          <div className={styles.poleLabel}>
            <span className={styles.poleNum}>01</span>
            Enterprise
          </div>
          <ul className={styles.poleList}>
            {enterprise.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.divider}>
          <div className={styles.dividerLine} />
          <div className={styles.dividerSymbol}>×</div>
          <div className={styles.dividerLine} />
        </div>

        <div className={styles.pole}>
          <div className={`${styles.poleLabel} ${styles.poleLabelRight}`}>
            <span className={styles.poleNum}>02</span>
            Consumer
          </div>
          <ul className={`${styles.poleList} ${styles.poleListRight}`}>
            {consumer.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`${styles.footer} reveal reveal-delay-2`} ref={r3}>
        That tension is not a contradiction — it's the product.
      </div>
    </section>
  )
}

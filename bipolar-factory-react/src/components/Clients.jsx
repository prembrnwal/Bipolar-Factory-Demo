import { useReveal } from './useReveal'
import styles from './Clients.module.css'

const clients = [
  { name: 'Bihar Election Commission', industry: 'Electoral Technology' },
  { name: 'Zigma', industry: 'Environmental Tech' },
  { name: 'WoTA', industry: 'Industrial IoT' },
  { name: 'iNET Secure Labs', industry: 'Security Systems' },
]

export default function Clients() {
  const r1 = useReveal()
  return (
    <section id="clients" className={styles.section}>
      <div className={styles.label} ref={r1}>Trusted Across Industries</div>
      <div className={styles.row}>
        {clients.map((c, i) => {
          const ref = useReveal()
          return (
            <div key={c.name} className={`${styles.clientCard} reveal reveal-delay-${i}`} ref={ref}>
              <div className={styles.clientName}>{c.name}</div>
              <div className={styles.clientIndustry}>{c.industry}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

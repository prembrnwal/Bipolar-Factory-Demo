import { Link } from 'react-router-dom'
import { useReveal } from './useReveal'
import styles from './CaseStudies.module.css'

const cases = [
  {
    client: 'Bihar Election Commission × BPF',
    title: 'Automated Vote Counting',
    desc: 'How we helped one of India\'s largest state election commissions deliver a transparent, accurate, and efficient vote-counting process — at scale.',
    impact: 'Counting accuracy guaranteed across 40+ assembly segments',
    tag: 'Electoral Technology',
    year: '2022',
  },
  {
    client: 'Zigma × BPF',
    title: 'EPR Portal for Waste Management',
    desc: 'A digital cornerstone for modernizing Zigma\'s waste management services — significantly elevating operational efficiency and environmental impact.',
    impact: 'Reduced manual processing overhead by 60%+',
    tag: 'Environmental Tech',
    year: '2023',
  },
  {
    client: 'WoTA × BPF',
    title: 'Indoor GPS for Weaving Units',
    desc: 'A game-changing indoor GPS solution for weaving units in Coimbatore that brought a new level of precision and productivity to the shop floor.',
    impact: 'Sub-metre indoor positioning across 200+ active looms',
    tag: 'Industrial IoT',
    year: '2023',
  },
  {
    client: 'iNET Secure Labs × BPF',
    title: 'Complex Systems Engineering',
    desc: 'Demonstrating technological prowess and an understanding of complex systems in high-stakes environments where accuracy is non-negotiable.',
    impact: 'Mission-critical deployment in certified security environments',
    tag: 'Security Systems',
    year: '2024',
  },
]

export default function CaseStudies() {
  const r1 = useReveal()
  const r2 = useReveal()

  return (
    <section id="casestudies" className={styles.section}>
      <div className="section-label reveal" ref={r1}>Spotlight on Success</div>
      <h2 className="section-title reveal reveal-delay-1" ref={r2}>Case<br />Studies</h2>
      <div className={styles.grid}>
        {cases.map((c, i) => {
          const ref = useReveal()
          return (
            <div key={i} className={`${styles.card} reveal reveal-delay-${i}`} ref={ref}>
              <div className={styles.cardBg} />
              <div className={styles.cardHeader}>
                <div className={styles.client}>{c.client}</div>
                <div className={styles.year}>{c.year}</div>
              </div>
              <div className={styles.title}>{c.title}</div>
              <div className={styles.desc}>{c.desc}</div>
              <div className={styles.impact}>
                <span className={styles.impactArrow}>▶</span>
                {c.impact}
              </div>
              <div className={styles.tag}>{c.tag}</div>
              <div className={styles.actionRow}>
                {i === 0 ? (
                  <Link to="/case-study" className={styles.readLink}>Read Case Study →</Link>
                ) : (
                  <div className={styles.readLinkMuted}>Active System</div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

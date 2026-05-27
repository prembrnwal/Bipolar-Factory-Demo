import { useReveal } from './useReveal'
import styles from './Services.module.css'

const services = [
  {
    num: '01',
    name: 'Technical Consulting',
    desc: "We go deep — not wide. Our consultants don't hand you a slide deck; they stay until it works. Strategies built around your actual challenges, not industry templates.",
    keyword: 'Strategy',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    num: '02',
    name: 'Digital Transformation',
    desc: "From factory floors in Coimbatore to election centres in Bihar — we have transformed operations in environments most agencies won't touch. Every touchpoint. Every stakeholder.",
    keyword: 'Transformation',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3" />
      </svg>
    ),
  },
  {
    num: '03',
    name: 'Research & Development',
    desc: "We run actual experiments — not just market research. Indoor GPS for weaving factories, automated vote counting, gamified streaming economies. All started as R&D with us.",
    keyword: 'Innovation',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    num: '04',
    name: 'Custom Application Dev',
    desc: "Your software. Your rules. We build precisely to spec and stay accountable to outcomes, not just deliverables. From concept to deployment — and beyond.",
    keyword: 'Execution',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
]

export default function Services() {
  const r1 = useReveal()
  const r2 = useReveal()

  return (
    <section id="services" className={styles.section}>
      <div className="section-label reveal" ref={r1}>How We Work</div>
      <h2 className="section-title reveal reveal-delay-1" ref={r2}>Technology<br />Partnership</h2>
      <div className={styles.timeline}>
        {services.map((s, i) => {
          const ref = useReveal()
          return (
            <div key={s.num} className={`${styles.item} reveal reveal-delay-${i}`} ref={ref}>
              <div className={styles.itemLeft}>
                <div className={styles.bigNum}>{s.num}</div>
              </div>
              <div className={styles.itemLine}>
                <div className={styles.lineDot} />
                <div className={styles.lineTrack} />
              </div>
              <div className={styles.itemRight}>
                <div className={styles.itemHeader}>
                  <div className={styles.icon}>{s.icon}</div>
                  <div className={styles.keyword}>{s.keyword}</div>
                </div>
                <div className={styles.name}>{s.name}</div>
                <div className={styles.desc}>{s.desc}</div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

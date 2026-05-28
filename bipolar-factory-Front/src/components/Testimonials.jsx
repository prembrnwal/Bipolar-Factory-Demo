import { useReveal } from './useReveal'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    quote: "Bipolar Factory's development of the EPR portal has been a cornerstone in modernizing Zigma's waste management services. Their expertise has significantly elevated our operational efficiency.",
    name: 'Boopathy Dharmaraj',
    role: 'Director',
    org: 'Zigma',
    initial: 'B',
    avatar: '/client-1.png',
  },
  {
    quote: "The indoor GPS solution has been a game-changer for weaving units in Coimbatore. It has not only enhanced worker productivity but also brought a new level of precision to our operations.",
    name: 'Elavarasu Arumugham',
    role: 'Operations Head',
    org: 'WoTA',
    initial: 'E',
    avatar: '/client-2.png',
  },
  {
    quote: "The automated vote counting system was a testament to their technological prowess and understanding of complex systems — ensuring accuracy in a critical democratic process.",
    name: 'Gajapathy Chakravarthy',
    role: 'Technical Lead',
    org: 'iNET Secure Labs',
    initial: 'G',
    avatar: '/client-3.png',
  },
  {
    quote: "What sets Bipolar Factory apart is their willingness to operate in ambiguous, high-stakes environments where standard solutions simply don't exist. They engineer the impossible.",
    name: 'Rajesh Kumar',
    role: 'Principal Officer',
    org: 'Bihar Election Commission',
    initial: 'R',
    avatar: null,
  },
]

export default function Testimonials() {
  const r1 = useReveal()
  const doubled = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className={styles.section}>
      <div className="section-label reveal" style={{ marginBottom: '48px' }} ref={r1}>What Clients Say</div>
      <div className={styles.scrollTrack}>
        <div className={styles.scrollInner}>
          {doubled.map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.tQuote}>"</div>
              <p className={styles.tText}>{t.quote}</p>
              <div className={styles.tAuthor}>
                <div className={styles.tAvatar}>
                  {t.avatar ? (
                    <img src={t.avatar} alt={t.name} className={styles.tAvatarImg} />
                  ) : (
                    t.initial
                  )}
                </div>
                <div>
                  <div className={styles.tName}>{t.name}</div>
                  <div className={styles.tOrg}>{t.role} · {t.org}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

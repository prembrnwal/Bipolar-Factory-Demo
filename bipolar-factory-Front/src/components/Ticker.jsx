import styles from './Ticker.module.css'

const items = [
  'OLY Video Security',
  'Metawood Creator Economy',
  'Electoral Technology',
  'Industrial IoT',
  'Digital Transformation',
  'Coimbatore → World',
  'Enterprise Software',
  'R&D & Innovation',
]

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div className={styles.wrap}>
      <div className={styles.ticker}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>{item}</span>
        ))}
      </div>
    </div>
  )
}

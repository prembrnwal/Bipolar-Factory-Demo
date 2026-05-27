import styles from './BrandStamp.module.css'

export default function BrandStamp() {
  return (
    <div className={styles.stamp}>
      <div className={styles.inner}>
        <span className={styles.text}>BIPOLAR</span>
        <span className={styles.dividerChar}>×</span>
        <span className={styles.text}>FACTORY</span>
      </div>
      <div className={styles.sub}>
        <span>Est. 2016</span>
        <span className={styles.dot} />
        <span>Coimbatore, India</span>
        <span className={styles.dot} />
        <span>Building for the World</span>
      </div>
    </div>
  )
}

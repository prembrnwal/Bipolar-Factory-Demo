import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.gridBg} />
      <div className={styles.glow} />
      <div className={styles.glow2} />

      <div className={styles.dualityBadge}>
        <span className={styles.badgeDot} />
        Enterprise &times; Consumer
      </div>

      <div className={styles.tag}>Dedicated Technology Partner</div>

      <h1 className={styles.headline}>
        Innovations<br />
        of <span className={styles.accent}>tomorrow,</span><br />
        <span className={styles.accentOrange} data-text="delivered">delivered</span> today.
      </h1>

      <div className={styles.accentLine} />

      <p className={styles.sub}>
        A collective of forward-thinking minds driven by a singular purpose — to harness
        the power of technology for the betterment of society.
      </p>

      <div className={styles.actions}>
        <a href="#products" className="btn-primary"><span>Explore Work</span></a>
        <a href="#about" className="btn-ghost">Who We Are</a>
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        Scroll to explore
      </div>
    </section>
  )
}

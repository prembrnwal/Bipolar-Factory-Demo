import { useEffect, useRef } from 'react'
import { useReveal } from './useReveal'
import styles from './About.module.css'

function CounterNum({ target, suffix = '' }) {
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const step = () => {
          start += Math.ceil((target - start) / 8)
          el.textContent = start + suffix
          if (start < target) requestAnimationFrame(step)
          else el.textContent = target + suffix
        }
        step()
        observer.unobserve(el)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, suffix])

  return <span ref={ref}>0</span>
}

export default function About() {
  const r1 = useReveal()
  const r2 = useReveal()
  const r3 = useReveal()
  const r4 = useReveal()
  const r5 = useReveal()
  const rVis = useReveal()

  return (
    <section id="about" className={styles.about}>
      {/* Visual Composition Column */}
      <div className={styles.visual} ref={rVis}>
        <div className={styles.composition}>
          {/* Box 1: Enterprise System Panel */}
          <div className={`${styles.box} ${styles.box1}`}>
            <div className={styles.panelHeader}>
              <span className={styles.panelDot} />
              <span className={styles.panelTitle}>ENTERPRISE CORE</span>
            </div>
            <span className={styles.boxText}>BPF</span>
            <div className={styles.panelData}>
              <span>SYS_STATUS: ACTIVE</span>
              <span>SECURITY_LVL: 5</span>
            </div>
          </div>

          {/* Box 2: Consumer Platform Panel */}
          <div className={`${styles.box} ${styles.box2}`}>
            <span className={styles.boxTextSmall}>01</span>
            <div className={styles.consumerLabel}>CREATIVE</div>
          </div>

          {/* Box 3: Rotating Wireframe Detail */}
          <div className={`${styles.box} ${styles.box3}`}>
            <div className={styles.wireCircle} />
          </div>
        </div>

        {/* Stats Grid Dashboard */}
        <div className={styles.statGrid}>
          <div className={styles.statItem}>
            <div className={styles.statNum}><CounterNum target={8} suffix="+" /></div>
            <div className={styles.statLabel}>Years of Edge</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}><CounterNum target={50} suffix="+" /></div>
            <div className={styles.statLabel}>Deployed Systems</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}><CounterNum target={3} suffix="" /></div>
            <div className={styles.statLabel}>Signature Products</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}><CounterNum target={4} suffix="" /></div>
            <div className={styles.statLabel}>Industries Served</div>
          </div>
        </div>
      </div>

      {/* Copy Column */}
      <div className={styles.text}>
        <div className={`section-label reveal`} ref={r1}>About Us</div>
        <h2 className={`section-title reveal reveal-delay-1`} ref={r2}>
          We build tech<br />that <span style={{ color: 'var(--acid)' }}>matters.</span>
        </h2>
        <p className={`reveal reveal-delay-2`} ref={r3}>
          <span className={styles.accentText}>Duality is our design.</span> While most firms pick a lane — enterprise services or consumer products — Bipolar Factory operates at both poles simultaneously. We secure election infrastructure and build gamified creator economies. That tension is intentional.
        </p>
        <p className={`reveal reveal-delay-3`} ref={r4}>
          From automating Bihar's state vote-counting process to deploying indoor GPS on Coimbatore's factory floors — we operate in environments most agencies won't touch. High stakes. Complex systems. <span className={styles.accentTextOrange}>Uncompromising execution.</span>
        </p>
        <p className={`reveal reveal-delay-4`} ref={r5}>
          Coimbatore-born. India-built. <span className={styles.accentText}>World-calibre.</span>
        </p>
      </div>
    </section>
  )
}

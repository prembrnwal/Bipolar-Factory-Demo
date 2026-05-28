import { useReveal } from './useReveal'
import styles from './CaseStudyPage.module.css'

export default function CaseStudyPage() {
  const rHeader = useReveal()
  const rIntro = useReveal()
  const rSolution = useReveal()
  const rMetrics = useReveal()

  const handleDownload = () => {
    alert('Downloading Case Study document (PDF)...')
  }

  return (
    <div className={styles.page}>
      <div className={styles.gridLines} />

      {/* Header Section */}
      <header className={styles.header}>
        <div ref={rHeader} className="reveal">
          <div className={styles.headerLabel}>Spotlight on Success / Case Study</div>
          <h1 className={styles.headerTitle}>
            Automating the Counting Process for<br />State Election Commission
          </h1>
        </div>
      </header>

      {/* Intro Section */}
      <section ref={rIntro} className={`${styles.introSection} reveal`}>
        <div className={styles.container}>
          <div className={styles.introLeft}>
            <p className={styles.introPara}>
              In order to streamline transparency of India's democracy, the Bihar state election commission
              wanted to automate the counting process to avoid human errors and provide a transparent counting process.
            </p>
            <p className={styles.introPara}>
              While the manual counting process has been widely used for many years, it is not without its challenges.
              It is prone to human errors, such as miscounting or misinterpreting ballots, which can lead to incorrect
              results. Moreover, the process can be time-consuming and complex, especially in areas with a large
              number of candidates or high voter turnout.
            </p>
            <button onClick={handleDownload} className={styles.downloadBtn}>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className={styles.downloadIcon}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Case Study
            </button>
          </div>

          <div className={styles.introRight}>
            <div className={styles.emblemCard}>
              <img
                src="/emblem-of-india.png"
                alt="Emblem of India Sarnath Lion Capital"
                className={styles.emblemImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section (Orange Backdrop) */}
      <section ref={rSolution} className={`${styles.solutionSection} reveal`}>
        <div className={styles.solutionContainer}>
          <h2 className={styles.solutionTitle}>Our Solution</h2>
          
          <div className={styles.solutionGrid}>
            <div className={styles.solutionCard}>
              <h3 className={styles.solutionCardHeader}>The EVM Stand</h3>
              <p className={styles.solutionCardText}>
                A dedicated stand was designed to securely hold the voting machine. This stand incorporated a camera system
                that enabled real-time optical character recognition (OCR) technology to accurately interpret and extract
                information from the ballots.
              </p>
            </div>

            <div className={styles.solutionCard}>
              <h3 className={styles.solutionCardHeader}>Real Time OCR</h3>
              <p className={styles.solutionCardText}>
                A custom OCR AI model was developed and deployed on the cloud to address the need for accurate digitization
                of the EVM's LED display. The model was specifically designed to read and interpret the digits displayed on
                the EVM in real-time, enabling instant digitization of the displayed information.
              </p>
            </div>

            <div className={styles.solutionCard}>
              <h3 className={styles.solutionCardHeader}>votepulseindia.com</h3>
              <p className={styles.solutionCardText}>
                In addition to the OCR AI model, a dedicated portal was developed to monitor real-time vote statistics. This
                portal served as a centralized platform that provided instant access to up-to-date information on the ongoing
                vote counting process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section ref={rMetrics} className={`${styles.metricsSection} reveal`}>
        <div className={styles.containerMetrics}>
          {/* Metrics Left */}
          <div className={styles.metricsLeft}>
            <h2 className={styles.metricsTitle}>Key Metrics</h2>
            <p className={styles.metricsSubtitle}>
              This project stands as a remarkable testament to the power of technology in safeguarding the integrity of
              democracy, ensuring fair representation, and shaping the future of elections.
            </p>
            
            <div className={styles.partnershipLogos}>
              <div className={styles.logoBadgeBpf}>
                <span>bpf</span>
              </div>
              <div className={styles.logoBadgeUinet}>
                <span>uinet</span>
              </div>
            </div>
          </div>

          {/* Metrics Right */}
          <div className={styles.metricsRight}>
            <ul className={styles.metricsList}>
              <li className={styles.metricItem}>
                <span className={styles.metricVal}>6,50,000+</span>
                <span className={styles.metricLabel}>training dataset</span>
              </li>
              <li className={styles.metricItem}>
                <span className={styles.metricVal}>60,000+</span>
                <span className={styles.metricLabel}>images annotated</span>
              </li>
              <li className={styles.metricItem}>
                <span className={styles.metricVal}>80+</span>
                <span className={styles.metricLabel}>hours of model training</span>
              </li>
              <li className={styles.metricItem}>
                <span className={styles.metricVal}>4620</span>
                <span className={styles.metricLabel}>EVMs scanned</span>
              </li>
              <li className={styles.metricItem}>
                <span className={styles.metricVal}>70000+</span>
                <span className={styles.metricLabel}>datapoints collected</span>
              </li>
              <li className={styles.metricItem}>
                <span className={styles.metricVal}>&lt;7s</span>
                <span className={styles.metricLabel}>latency to publish results</span>
              </li>
            </ul>
            <div className={styles.metricsHeading}>
              Cascading AI Pipeline to achieve 100% accuracy.
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Download CTA */}
      <div className={styles.bottomCta}>
        <button onClick={handleDownload} className={styles.downloadBtn}>
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className={styles.downloadIcon}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Download Case Study
        </button>
      </div>
    </div>
  )
}

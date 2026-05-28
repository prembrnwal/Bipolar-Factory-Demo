import { useReveal } from './useReveal'
import styles from './ProductPage.module.css'

const productsData = [
  {
    id: 'oly-store-sync',
    num: '01',
    name: 'OLY Store Sync',
    type: 'SaaS',
    status: 'live',
    subtitle: 'Cloud-native AI security network & real-time analytics sync.',
    description: 'OLY Store Sync bridges physical security infrastructure with advanced cloud intelligence. Built to handle thousands of concurrent camera streams, it performs real-time edge-to-cloud synchronization, giving multi-site businesses instant visibility. Analyze customer footfall patterns, detect potential safety anomalies, and manage site data without heavy local hardware.',
    features: [
      'Edge-to-Cloud Syncing: Instant backups and synchronization of key video events even on low-bandwidth networks.',
      'AI Anomaly Detection: Real-time identification of unauthorized entry, hardware failure, or safety hazards.',
      'Multi-site Management: A unified console to monitor operations across dozens of retail stores or warehouses.',
      'Bandwidth Optimization: Smart compression algorithms that prioritize critical alert footage.'
    ],
    image: '/oly-store-sync.png',
    links: {
      primary: { label: 'Launch Dashboard', url: 'https://www.oly.live/' },
      secondary: { label: 'Technical Specs', url: 'https://docs.bipolarfactory.com/oly-sync' }
    }
  },
  {
    id: 'oly-control-center',
    num: '02',
    name: 'OLY Control Center',
    type: 'Enterprise',
    status: 'live',
    subtitle: 'Enterprise video management suite for high-security environments.',
    description: 'Engineered for high-stakes municipal and industrial control rooms, OLY Control Center is a high-performance Video Management System (VMS). Experience ultra-low latency playback, interactive spatial maps, and advanced forensic search capability. It interfaces seamlessly with legacy camera arrays and supports high-security roles and encryption protocols.',
    features: [
      'Ultra-low Latency Streams: Sub-100ms video rendering for critical real-time decision making.',
      'Role-Based Access Control: Strict credentialing and audit logs for operators, managers, and external security personnel.',
      'Forensic Search: Rapid scan through hours of historical feeds using automated object filters.',
      'Hardware Acceleration: Optimized GPU decoding to display up to 64 streams simultaneously on a single workstation.'
    ],
    image: '/oly-control-center.png',
    links: {
      primary: { label: 'Request Demo', url: 'https://www.oly.live/' },
      secondary: { label: 'Developer Docs', url: 'https://docs.bipolarfactory.com/oly-cc' }
    }
  },
  {
    id: 'metawood',
    num: '03',
    name: 'Metawood',
    type: 'Consumer Platform',
    status: 'dev',
    subtitle: 'Gamified streaming platform and decentralized creator economy.',
    description: 'Metawood is redefining the creator economy through interactive, gamified stream modules and transparent decentralized ownership. By introducing real-time tokenized incentives and user-run virtual spaces, Metawood closes the gap between creators and fans, establishing a self-sustaining ecosystem where attention is valued and rewards are instant.',
    features: [
      'Tokenized Rewards: Direct micro-transactions and token incentives for active participation and high-quality streaming.',
      'Gamified Engagement: Interactive overlay modules allowing viewers to influence streams or play real-time mini-games.',
      'Decentralized Governance: Community-led decision-making for platform rules and creator funding grants.',
      'Immersive Virtual Cities: Custom 3D spaces and hangouts for creators to host exclusive fan meetups.'
    ],
    image: '/metawood-platform.png',
    links: {
      primary: { label: 'Enter Multiverse', url: 'https://www.themetawood.com/' },
      secondary: { label: 'Read Whitepaper', url: 'https://whitepaper.metawood.bipolarfactory.com' }
    }
  }
]

export default function ProductPage() {
  const rHeader = useReveal()

  return (
    <div className={styles.page}>
      {/* Background grids */}
      <div className={styles.gridLines} />

      <header className={styles.header}>
        <div ref={rHeader} className="reveal">
          <div className={styles.headerLabel}>Product Showcase</div>
          <h1 className={styles.headerTitle}>Our Tech, Your Odyssey</h1>
          <p className={styles.headerSubtitle}>
            A deeper dive into the products we build to bridge enterprise operations and decentralized consumer futures.
          </p>
        </div>
      </header>

      <div className={styles.productsList}>
        {productsData.map((prod, idx) => {
          const rSection = useReveal()
          const isEven = idx % 2 === 0

          return (
            <section
              key={prod.id}
              id={prod.id}
              ref={rSection}
              className={`${styles.productSection} ${isEven ? styles.even : styles.odd} reveal`}
            >
              <div className={styles.container}>
                <div className={styles.mediaCol}>
                  <div className={styles.imageWrapper}>
                    <img src={prod.image} alt={prod.name} className={styles.productImage} />
                    <div className={styles.imageOverlay} />
                  </div>
                </div>

                <div className={styles.contentCol}>
                  <div className={styles.metaRow}>
                    <span className={styles.number}>{prod.num} / DETAIL</span>
                    <div className={styles.badgeRow}>
                      <span className={`${styles.typeBadge} ${styles[`type_${prod.type.replace(/\s/g, '_')}`]}`}>
                        {prod.type}
                      </span>
                      <span className={styles.statusPill}>
                        <span className={`${styles.statusDot} ${prod.status === 'live' ? styles.dotLive : styles.dotDev}`} />
                        {prod.status === 'live' ? 'Live' : 'In Development'}
                      </span>
                    </div>
                  </div>

                  <h2 className={styles.title}>{prod.name}</h2>
                  <h3 className={styles.subtitle}>{prod.subtitle}</h3>
                  <p className={styles.description}>{prod.description}</p>

                  <div className={styles.featuresSection}>
                    <h4 className={styles.featuresHeading}>Core Capabilities</h4>
                    <ul className={styles.featuresList}>
                      {prod.features.map((feat, fIdx) => {
                        const [title, desc] = feat.split(': ')
                        return (
                          <li key={fIdx} className={styles.featureItem}>
                            <span className={styles.featureTitle}>{title}</span>
                            {desc && <span className={styles.featureDesc}> — {desc}</span>}
                          </li>
                        )
                      })}
                    </ul>
                  </div>

                  <div className={styles.actionRow}>
                    <a
                      href={prod.links.primary.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <span>{prod.links.primary.label}</span>
                    </a>
                    <a
                      href={prod.links.secondary.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                    >
                      {prod.links.secondary.label}
                    </a>
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}

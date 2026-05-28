import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from './useReveal'
import styles from './Products.module.css'

const products = [
  {
    num: '01',
    name: 'OLY Store Sync',
    type: 'SaaS',
    status: 'live',
    desc: 'Unlock the full potential of your video security network with this revolutionary SaaS product — built for scale, built for intelligence.',
    features: ['Multi-site video aggregation', 'AI-powered anomaly alerts', 'Cloud-native architecture'],
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    num: '02',
    name: 'OLY Control Center',
    type: 'Enterprise',
    status: 'live',
    desc: 'A Video Management System unlike anything you\'ve worked with before. Total visibility. Total control. Engineered differently.',
    features: ['Total visibility dashboard', 'Live stream management', 'Role-based access control'],
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    num: '03',
    name: 'Metawood',
    type: 'Consumer Platform',
    status: 'dev',
    desc: 'A gamified streaming platform and a decentralised creator economy — all rolled into one. The future of digital ownership is here.',
    features: ['Tokenised creator rewards', 'Gamified engagement layer', 'Decentralised ownership model'],
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
]

function ProductCard({ product, delay }) {
  const cardRef = useRef(null)

  const onMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `perspective(600px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateZ(8px)`
  }
  const onMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = ''
  }

  const revealRef = useReveal()

  return (
    <Link
      to={`/product#${product.name.toLowerCase().replace(/\s+/g, '-')}`}
      ref={(el) => { cardRef.current = el; if (revealRef) revealRef.current = el }}
      className={`${styles.card} reveal ${delay}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div className={styles.cardBefore} />
      <div className={styles.cardTop}>
        <div className={styles.num}>{product.num} / Product</div>
        <div className={`${styles.typeBadge} ${styles[`type_${product.type.replace(/\s/g, '_')}`]}`}>{product.type}</div>
      </div>
      <div className={styles.icon}>{product.icon}</div>
      <div className={styles.name}>{product.name}</div>
      <div className={styles.statusPill}>
        <span className={`${styles.statusDot} ${product.status === 'live' ? styles.dotLive : styles.dotDev}`} />
        {product.status === 'live' ? 'Live' : 'In Development'}
      </div>
      <div className={styles.desc}>{product.desc}</div>
      <ul className={styles.featureList}>
        {product.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <div className={styles.link}>Learn More</div>
    </Link>
  )
}

export default function Products() {
  const r1 = useReveal()
  const r2 = useReveal()

  return (
    <section id="products" className={styles.section}>
      <div className="section-label reveal" ref={r1}>Our Products</div>
      <h2 className="section-title reveal reveal-delay-1" ref={r2}>Signature<br />Innovations</h2>
      <div className={styles.grid}>
        {products.map((p, i) => (
          <ProductCard key={p.num} product={p} delay={i > 0 ? `reveal-delay-${i}` : ''} />
        ))}
      </div>
    </section>
  )
}

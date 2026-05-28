import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const docH = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docH > 0 ? (window.scrollY / docH) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.progressBar} style={{ width: `${progress}%` }} />
      <Link to="/#hero" className={styles.logo}>
        <span className={styles.logoDot} />
        Bipolar Factory
      </Link>
      <ul className={styles.links}>
        <li><Link to="/#products">Products</Link></li>
        <li><Link to="/#services">Services</Link></li>
        <li><Link to="/#casestudies">Case Studies</Link></li>
        <li><Link to="/#about">About</Link></li>
      </ul>
      <Link to="/contact" className={styles.cta}>Contact Us</Link>
    </nav>
  )
}

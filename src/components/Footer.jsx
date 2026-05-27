import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.dot} />
            Bipolar Factory
          </div>
          <div className={styles.tagline}>Two poles. One vision.</div>
          <p>Custom software solutions that seamlessly align with unique business objectives and transform aspirations into reality.</p>
          <div className={styles.address}>
            2/118, First Floor, Nehru Nagar,<br />
            Koundampalayam Road, Edayarpalayam,<br />
            Coimbatore, Tamil Nadu 641025
          </div>
        </div>
        <div className={styles.col}>
          <h4>Navigate</h4>
          <ul>
            <li><Link to="/#products">Products</Link></li>
            <li><Link to="/#services">Services</Link></li>
            <li><Link to="/#casestudies">Case Studies</Link></li>
            <li><Link to="/#about">About</Link></li>
          </ul>
        </div>
        <div className={styles.col}>
          <h4>Company</h4>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className={styles.col}>
          <h4>Connect</h4>
          <ul>
            <li><Link to="/contact">hello@bipolarfactory.com</Link></li>
            <li><a href="https://www.linkedin.com/company/31221841/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://twitter.com/bipolarfactory" target="_blank" rel="noreferrer">Twitter / X</a></li>
            <li><a href="https://www.facebook.com/bipolarfactory" target="_blank" rel="noreferrer">Facebook</a></li>
          </ul>
        </div>
      </footer>
      <div className={styles.bottom}>
        <p>© 2025 Bipolar Factory Private Limited. All Rights Reserved.</p>
        <div className={styles.socials}>
          <a href="https://www.linkedin.com/company/31221841/" target="_blank" rel="noreferrer">LI</a>
          <a href="https://twitter.com/bipolarfactory" target="_blank" rel="noreferrer">X</a>
          <a href="https://www.facebook.com/bipolarfactory" target="_blank" rel="noreferrer">FB</a>
        </div>
      </div>
    </>
  )
}

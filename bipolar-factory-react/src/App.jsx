import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Manifesto from './components/Manifesto'
import About from './components/About'
import Products from './components/Products'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import Clients from './components/Clients'
import CTA from './components/CTA'
import BrandStamp from './components/BrandStamp'
import Footer from './components/Footer'
import ProductPage from './components/ProductPage'
import ContactPage from './components/ContactPage'
import CaseStudyPage from './components/CaseStudyPage'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <Manifesto />
      <About />
      <Products />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Clients />
      <CTA />
      <BrandStamp />
    </main>
  )
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Cursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/case-study" element={<CaseStudyPage />} />
        <Route path="/case-study/bihar-election" element={<CaseStudyPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

import { useState } from 'react'
import { useReveal } from './useReveal'
import styles from './ContactPage.module.css'

export default function ContactPage() {
  const rHeader = useReveal()
  const rForm = useReveal()
  const rDetails = useReveal()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    phoneCountryCode: '+91',
    companyName: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const tempErrors = {}
    if (!formData.firstName.trim()) tempErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) tempErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address'
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      tempErrors.phone = 'Please enter a valid 10-digit phone number'
    }
    if (!formData.subject) tempErrors.subject = 'Subject selection is required'
    if (!formData.message.trim()) tempErrors.message = 'Message is required'

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validate()) {
      try {
        const apiBase = import.meta.env.VITE_API_BASE_URL || 'https://bipolar-factory-demo-qvmm.vercel.app'
        const response = await fetch(`${apiBase}/api/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })

        if (response.ok) {
          setSubmitted(true)
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            phoneCountryCode: '+91',
            companyName: '',
            subject: '',
            message: ''
          })
        } else {
          alert('Failed to submit your message. Please try again.')
        }
      } catch (error) {
        console.error('Error submitting form:', error)
        alert('An error occurred. Please try again later.')
      }
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.gridLines} />

      <div className={styles.container}>
        {/* Drop Us a Line Section */}
        <section ref={rForm} className={`${styles.mainSection} reveal`}>
          <div className={styles.twoCol}>
            {/* Form Column */}
            <div className={styles.formCol}>
              <div ref={rHeader} className={`${styles.headerInfo} reveal`}>
                <span className={styles.sectionLabel}>Contact Us</span>
                <h1 className={styles.pageTitle}>Drop us a Line</h1>
                <p className={styles.pageSubtitle}>
                  Feel free to ask us more about the company and its products.
                </p>
              </div>

              {submitted ? (
                <div className={styles.successCard}>
                  <div className={styles.successIcon}>✓</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for starting a conversation. Our team will review your inquiry and get back to you shortly.</p>
                  <button onClick={() => setSubmitted(false)} className={styles.resetButton}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.row}>
                    <div className={styles.fieldGroup}>
                      <label htmlFor="firstName">First name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={errors.firstName ? styles.inputError : ''}
                      />
                      {errors.firstName && <span className={styles.errorText}>{errors.firstName}</span>}
                    </div>

                    <div className={styles.fieldGroup}>
                      <label htmlFor="lastName">Last name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={errors.lastName ? styles.inputError : ''}
                      />
                      {errors.lastName && <span className={styles.errorText}>{errors.lastName}</span>}
                    </div>
                  </div>

                  <div className={styles.row}>
                    <div className={styles.fieldGroup}>
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? styles.inputError : ''}
                      />
                      {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                    </div>

                    <div className={styles.fieldGroup}>
                      <label htmlFor="phone">Phone *</label>
                      <div className={styles.phoneInputWrapper}>
                        <select
                          name="phoneCountryCode"
                          value={formData.phoneCountryCode}
                          onChange={handleChange}
                          className={styles.countrySelect}
                        >
                          <option value="+91">🇮🇳 +91</option>
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+44">🇬🇧 +44</option>
                          <option value="+65">🇸🇬 +65</option>
                          <option value="+971">🇦🇪 +971</option>
                        </select>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={errors.phone ? styles.inputError : ''}
                          placeholder="98765 43210"
                        />
                      </div>
                      {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                    </div>
                  </div>

                  <div className={styles.row}>
                    <div className={styles.fieldGroup}>
                      <label htmlFor="companyName">Company name</label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className={styles.fieldGroup}>
                      <label htmlFor="subject">Subject *</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={errors.subject ? styles.inputError : ''}
                      >
                        <option value="">Click to select</option>
                        <option value="general">General Inquiry</option>
                        <option value="project">Project Pitch / Custom Dev</option>
                        <option value="product">Product Licensing (OLY/Metawood)</option>
                        <option value="careers">Careers / Join the Factory</option>
                      </select>
                      {errors.subject && <span className={styles.errorText}>{errors.subject}</span>}
                    </div>
                  </div>

                  <div className={styles.fieldGroupFull}>
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? styles.inputError : ''}
                    />
                    {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Submit
                  </button>
                </form>
              )}
            </div>

            {/* Illustration Column */}
            <div className={styles.illustrationCol}>
              <div className={styles.illustrationCard}>
                <img
                  src="/contact-illustration.png"
                  alt="Start a Conversation Illustration"
                  className={styles.illustrationImg}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Further Inquiries Section */}
        <section ref={rDetails} className={`${styles.detailsSection} reveal`}>
          <div className={styles.detailsHeader}>
            <span className={styles.detailsLabel}>Contact Us</span>
            <h2 className={styles.detailsTitle}>For further inquiries or questions, contact us:</h2>
          </div>

          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.iconContainer}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className={styles.cardIcon}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div className={styles.cardHeader}>ADDRESS</div>
              <div className={styles.cardContent}>
                439, Kamarajar Rd, Peelamedu,<br />
                Chitra Nagar, Hope College,<br />
                Coimbatore, Tamil Nadu 641004
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.iconContainer}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className={styles.cardIcon}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className={styles.cardHeader}>OFFICE HOURS</div>
              <div className={styles.cardContent}>
                Monday - Friday:<br />
                10AM - 5PM
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.iconContainer}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className={styles.cardIcon}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div className={styles.cardHeader}>EMAIL</div>
              <div className={styles.cardContent}>
                <a href="mailto:hello@bipolarfactory.com" className={styles.link}>
                  hello@bipolarfactory.com
                </a>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.iconContainer}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className={styles.cardIcon}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.176-4.154-6.98-6.98l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div className={styles.cardHeader}>PHONE</div>
              <div className={styles.cardContent}>
                <a href="tel:+917676412669" className={styles.link}>
                  +91 7676412669
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

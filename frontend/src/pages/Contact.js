import React, { useState } from 'react'
import "../assets/css/About.css"
import "../assets/css/Contact.css"

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="about-container contact-container">
      <h1 className="about-title">Contact Us</h1>
      <div className="contact-content">
        <div className="contact-details">
          <h2>Get in Touch</h2>
          <p><strong>Phone:</strong> <a href="tel:7013652387">7013652387</a></p>
          <p><strong>Email:</strong> <a href="mailto:vishnumorapally2004@gmail.com">vishnumorapally2004@gmail.com</a></p>
          <p><strong>Address:</strong> RTC Colony, Karimnagar, Telangana, India</p>
          <div className="contact-map">
            <iframe
              title="Google Map"
              width="100%"
              height="200"
              frameBorder="0"
              style={{ border: 0, borderRadius: "8px" }}
              src="https://maps.google.com/maps?q=RTC%20Colony,%20Karimnagar,%20Telangana,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          {submitted ? (
            <div className="contact-success">Thank you for contacting us! We will get back to you soon.</div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="contact-btn">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
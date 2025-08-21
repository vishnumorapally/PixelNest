import React from 'react'
import "../assets/css/About.css"
import { Link } from 'react-router-dom'

export const Terms = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">Terms and Conditions</h1>

      <section className="about-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using <strong>Vayujan</strong>, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please do not use our website.
        </p>
      </section>

      <section className="about-section">
        <h2>2. Free Image Usage</h2>
        <p>
          All images on Vayujan are free to use for personal and commercial purposes. You may download, modify, and share any image from our website without attribution. However, you are responsible for ensuring your use complies with applicable laws and regulations.
        </p>
      </section>

      <section className="about-section">
        <h2>3. Copyright & Reporting</h2>
        <p>
          We strive to ensure all images are original or free from copyright restrictions. If you believe any image infringes your copyright, please contact us immediately using the information in the website footer. We will promptly review and, if necessary, remove the content.
        </p>
      </section>

      <section className="about-section">
        <h2>4. SEO & Content</h2>
        <p>
          Vayujan may use SEO techniques, including metadata, tags, and optimized content, to improve search engine visibility. We do not guarantee any specific search ranking or traffic results. All content is provided for informational and creative purposes only.
        </p>
      </section>

      <section className="about-section">
        <h2>5. Monetization & Advertising</h2>
        <p>
          Our website may display advertisements, affiliate links, or sponsored content to support our services. We strive to ensure that all ads are relevant and non-intrusive. Vayujan is not responsible for the content or practices of third-party sites linked through advertisements.
        </p>
      </section>

      <section className="about-section">
        <h2>6. User Responsibilities</h2>
        <ul>
          <li>Do not use images or content from Vayujan for unlawful, offensive, or harmful purposes.</li>
          <li>Respect the intellectual property rights of others.</li>
          <li>Do not attempt to disrupt or misuse the website or its services.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>7. Disclaimer</h2>
        <p>
          Vayujan provides all content "as is" without warranties of any kind. We are not liable for any damages resulting from the use or inability to use our website or content.
        </p>
      </section>

      <section className="about-section">
        <h2>8. Changes to Terms</h2>
        <p>
          We reserve the right to update or modify these Terms and Conditions at any time. Changes will be posted on this page, and your continued use of the site constitutes acceptance of those changes.
        </p>
      </section>

      <section className="about-section">
        <h2>9. Contact Us</h2>
        <p>
          For copyright concerns, questions, or feedback, please contact us <Link to="/contact">Click Here</Link>.
        </p>
      </section>
    </div>
  )
}
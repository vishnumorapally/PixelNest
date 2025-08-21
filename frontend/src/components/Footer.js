import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/Footer.css"

export const Footer = () => {
  return (
    <div className='footer'>
        <p>© 2025 PixelNest <Link className='footer-link' to="/terms">Trems and Conditions</Link></p>
    </div>
  )
}

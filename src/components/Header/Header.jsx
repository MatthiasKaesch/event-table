import React from 'react'
import './Header.scss'
import Logo from '../../assets/images/Logo.webp'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

const Header = () => {
  return (
    <header className="container">
      <div className="header">
        <img className="header_image" src={Logo} alt="FutureFrame Logo" />
        <h1 className="headline">
          <span className="headline_hero">FutureFrame 2025</span>
          <span className="headline_subtitle">
            Exploring the Future of AI & Web - Innovations, Trends, and the Next
            Digital Evolution.
          </span>
          <span className="headline_location">København, Danmark</span>
        </h1>
      </div>
      <ThemeToggle />
    </header>
  )
}

export default Header

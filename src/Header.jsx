import React from 'react'
import './Header.scss'
import Logo from './assets/images/Logo.webp'

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="" />
      <h1 className="headline">
        <span className="headline_hero">FutureFrame 2025</span>
        Exploring the Future of AI & Web - Innovations, Trends, and the Next
        Digital Evolution.
        <span className="headline_location">København, Danmark</span>
      </h1>
    </div>
  )
}

export default Header

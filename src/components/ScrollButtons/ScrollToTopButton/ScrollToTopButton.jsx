import React, { useState } from 'react'
import './ScrollToTopButton.scss'
import ArrowDown from '../../../assets/icons/down-arrow.svg?react'

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <button className="scrollDownButton" onClick={scrollToTop}>
      Back to top
    </button>
  )
}

export default ScrollToTopButton

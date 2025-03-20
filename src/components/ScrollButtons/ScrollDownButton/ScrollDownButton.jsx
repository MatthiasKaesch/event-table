import React, { useEffect, useState } from 'react'
import ArrowDown from '../../../assets/icons/down-arrow.svg?react'
import './ScrollDownButton.scss'

const ScrollDownButton = () => {
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10
      setIsAtBottom(scrolledToBottom)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight / 2,
      behavior: 'smooth',
    })
  }

  return (
    <button
      className={`scroll-down-button ${isAtBottom ? 'at-bottom' : ''}`}
      onClick={scrollDown}
      aria-label="Scroll down"
    >
      <ArrowDown className="scroll-down-button__icon" />
    </button>
  )
}

export default ScrollDownButton

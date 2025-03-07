import React, { useEffect, useState } from 'react'
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

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }

  return (
    <button
      className={`scroll-down-button ${isAtBottom ? 'at-bottom' : ''}`}
      onClick={scrollToBottom}
      aria-label="Scroll down"
    >
      ↓
    </button>
  )
}

export default ScrollDownButton

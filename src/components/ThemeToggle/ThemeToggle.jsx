import React, { useState } from 'react'

const getPreferredTheme = () => {
  // return theme from local storage
  // OR system settings
  return (
    localStorage.getItem('theme') ??
    (window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light')
  )
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getPreferredTheme())

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <button onClick={toggleTheme} aria-label="Toggle Dark/Light Mode">
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}

export default ThemeToggle

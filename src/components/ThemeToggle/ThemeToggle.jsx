import React, { useState } from 'react'

const setInitialTheme = () => {
  // get theme from local storage OR system settings
  const initialTheme =
    localStorage.getItem('theme') ??
    (window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light')
  // set initial theme on document
  document.documentElement.setAttribute('data-theme', initialTheme)
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState(setInitialTheme())

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

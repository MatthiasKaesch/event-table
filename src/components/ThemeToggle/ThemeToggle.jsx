import React, { useEffect, useState } from 'react'
import './ThemeToggle.scss'

const ThemeToggle = () => {
  const getInitialTheme = () => {
    // get theme from local storage OR system settings
    return (
      localStorage.getItem('theme') ??
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light')
    )
  }

  const [theme, setTheme] = useState(getInitialTheme())

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)

    const buttonElement = document.querySelector('.toggle')
    if (buttonElement) {
      buttonElement.classList.add(theme === 'light' ? 'light' : 'dark')
      buttonElement.classList.remove(theme === 'light' ? 'dark' : 'light')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className="toggle" onClick={toggleTheme}>
      <button
        aria-label="Toggle Dark/Light Mode"
        className="toggle_button"
      ></button>
    </div>
  )
}

export default ThemeToggle

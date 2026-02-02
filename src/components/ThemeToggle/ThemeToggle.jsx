"use client"

import { useEffect, useState } from 'react'
import styles from './ThemeToggle.module.scss'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    return localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button
      className={styles.toggle}
      onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
      aria-label="Toggle theme"
      aria-pressed={theme === 'dark'}
    >
      {theme === 'light' ? <FiSun aria-hidden size={18} /> : <FiMoon aria-hidden size={18} />}
    </button>
  )
}

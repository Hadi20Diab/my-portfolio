"use client"

import { useEffect, useState } from 'react'
import styles from './ThemeToggle.module.scss'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light')
  const [mounted, setMounted] = useState(false)

  // Read the persisted / preferred theme on mount (client-side only)
  useEffect(() => {
    const preferred = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(preferred)
    setMounted(true)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button
      className={styles.toggle}
      onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
      aria-label="Toggle theme"
      aria-pressed={mounted ? theme === 'dark' : false}
    >
      {mounted ? (theme === 'light' ? <FiSun aria-hidden size={18} /> : <FiMoon aria-hidden size={18} />) : <span aria-hidden style={{display:'inline-block',width:18,height:18}} />}
    </button>
  )
}

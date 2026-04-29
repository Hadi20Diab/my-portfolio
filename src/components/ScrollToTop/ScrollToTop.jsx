"use client"

import { useEffect, useState } from 'react'
import './ScrollToTop.scss'
import { FiArrowUp } from 'react-icons/fi'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`scrollToTop${visible ? ' show' : ''}`}
      onClick={scrollUp}
      aria-label="Scroll to top"
    >
      <FiArrowUp />
    </button>
  )
}

"use client"

import { useEffect, useState } from 'react'

// Simple useInView hook using IntersectionObserver
export default function useInView(ref, options = { root: null, rootMargin: '0px', threshold: 0.1 }) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref?.current) return
    const node = ref.current

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      })
    }, options)

    observer.observe(node)

    return () => observer.disconnect()
  }, [ref, JSON.stringify(options)])

  return inView
}

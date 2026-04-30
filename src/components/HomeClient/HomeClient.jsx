"use client"

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'

const HeroSection = dynamic(() => import('../HeroSection/HeroSection'), { ssr: false })
const AboutSection = dynamic(() => import('../AboutSection/AboutSection'), { ssr: false })
const StatsSection = dynamic(() => import('../StatsSection/StatsSection'), { ssr: false })
const SkillsSection = dynamic(() => import('../SkillsSection/SkillsSection'), { ssr: false })
const ProjectsSection = dynamic(() => import('../ProjectsSection/ProjectsSection'), { ssr: false })
const ExperienceSection = dynamic(() => import('../ExperienceSection/ExperienceSection'), { ssr: false })

/** Only renders children once the element is scrolled into proximity */
function LazySection({ children, minHeight = '400px', id }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px', threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} id={id} style={{ minHeight: visible ? undefined : minHeight }}>
      {visible && children}
    </div>
  )
}

export default function HomeClient() {
  return (
    <>
      <HeroSection />
      <LazySection minHeight="520px"><AboutSection /></LazySection>
      <LazySection minHeight="160px"><StatsSection /></LazySection>
      <LazySection minHeight="400px"><SkillsSection /></LazySection>
      <LazySection minHeight="400px"><ProjectsSection /></LazySection>
      <LazySection minHeight="400px"><ExperienceSection /></LazySection>
    </>
  )
}


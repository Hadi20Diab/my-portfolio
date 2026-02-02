"use client"

import { useEffect, useRef, useState } from 'react'
import './SkillsSection.scss'
import { getPortfolioData } from '../../utils/data'
import Loading from '../Loading/Loading'
import useInView from '../../hooks/useInView'
import TitleBox from '../TitleBox/TitleBox'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function SkillsSection() {
  const [data, setData] = useState(null)
  const containerRef = useRef(null)
  const trackRef = useRef(null)
  const inView = useInView(containerRef, { rootMargin: '0px', threshold: 0.1 })
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!inView || data) return
    let mounted = true
    async function load() {
      const d = await getPortfolioData()
      if (mounted) setData(d)
    }
    load()
    return () => { mounted = false }
  }, [inView, data])

  useEffect(() => {
    if (!autoplay || !trackRef.current) return
    const id = setInterval(() => {
      if (!trackRef.current) return
      // smooth scroll by width of one chip (approx)
      const chip = trackRef.current.querySelector('.skillChip')
      const step = (chip ? chip.offsetWidth + 12 : 120)
      trackRef.current.scrollBy({ left: step, behavior: 'smooth' })
      // if reached end, go back to start
      if (trackRef.current.scrollLeft + trackRef.current.clientWidth >= trackRef.current.scrollWidth - 10) {
        trackRef.current.scrollTo({ left: 0, behavior: 'smooth' })
      }
    }, 3000)
    return () => clearInterval(id)
  }, [autoplay])

  function scrollBy(step) {
    if (!trackRef.current) return
    trackRef.current.scrollBy({ left: step, behavior: 'smooth' })
  }

  if (!data) {
    return (
      <section className="skillsSection" ref={containerRef}>
        <div className="skillsInner">
          <Loading text="Loading skills" />
        </div>
      </section>
    )
  }

  const skills = data.skills.technical || []

  return (
    <section className="skillsSection" ref={containerRef}>
      <div className="skillsInner">
        <TitleBox><h2>Skills</h2></TitleBox>

        <div className="skillsControls">
          <button aria-label="Previous" className="ctrl left" onClick={() => scrollBy(-240)}><FiChevronLeft /></button>
          <div className="skillsTrack" ref={trackRef} onMouseEnter={() => setAutoplay(false)} onMouseLeave={() => setAutoplay(true)}>
            {skills.map((s, i) => (
              <div key={i} className="skillChip">{s}</div>
            ))}
          </div>
          <button aria-label="Next" className="ctrl right" onClick={() => scrollBy(240)}><FiChevronRight /></button>
        </div>

      </div>
    </section>
  )
}

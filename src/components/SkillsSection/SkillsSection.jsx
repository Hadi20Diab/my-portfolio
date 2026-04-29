"use client"

import { useEffect, useRef, useState } from 'react'
import './SkillsSection.scss'
import { getPortfolioData } from '../../utils/data'
import Loading from '../Loading/Loading'
import useInView from '../../hooks/useInView'
import TitleBox from '../TitleBox/TitleBox'
import { FiCode } from 'react-icons/fi'

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import SwiperCore from 'swiper'

// initialize required modules for this Swiper instance
SwiperCore.use([Navigation, Autoplay])

// icons for skills
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
  SiAdobexd,
} from 'react-icons/si'

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

  // We'll use Swiper for the sliding behavior (see JSX below)
  function scrollBy(step) {
    if (!trackRef.current) return
    trackRef.current.swiper.slideNext()
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

  const iconMap = {
    javascript: SiJavascript,
    reactjs: SiReact,
    react: SiReact,
    nextjs: SiNextdotjs,
    nodejs: SiNodedotjs,
    node: SiNodedotjs,
    expressjs: SiExpress,
    html5: SiHtml5,
    css3: SiCss3,
    scss: SiSass,
    tailwindcss: SiTailwindcss,
    bootstrap: SiBootstrap,
    mongodb: SiMongodb,
    mysql: SiMysql,
    git: SiGit,
    github: SiGithub,
    figma: SiFigma,
    adobexd: SiAdobexd,
  }

  const normalizeKey = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '')

  return (
    <section className="skillsSection" ref={containerRef}>
      <div className="skillsInner">
        <TitleBox><h2>Skills</h2></TitleBox>

        <div className="skillsControls">
          <Swiper
            navigation
            autoplay={{ delay: 2800, disableOnInteraction: true }}
            spaceBetween={12}
            slidesPerView={4}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              900: { slidesPerView: 4 },
              1200: { slidesPerView: 6 },
            }}
            onSwiper={(sw) => { trackRef.current = { swiper: sw } }}
            className="skillsSwiper"
          >
            {skills.map((s, i) => {
              const key = normalizeKey(s)
              const Icon = iconMap[key] || FiCode
              return (
                <SwiperSlide key={i} className="skillSlide">
                  <div className="skillChip">
                    <span className="skillIcon"><Icon /></span>
                    <span className="skillLabel">{s}</span>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>

      </div>
    </section>
  )
}

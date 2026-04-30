"use client"

import { useEffect, useRef, useState } from 'react'
import { getPortfolioData } from '../../utils/data'
import Loading from '../Loading/Loading'
import useInView from '../../hooks/useInView'
import TitleBox from '../TitleBox/TitleBox'
import { FiCode, FiZap, FiSearch } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

SwiperCore.use([Navigation, Autoplay])

import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiAngular,
  SiNodedotjs, SiExpress, SiPython, SiDjango, SiFastapi,
  SiHtml5, SiCss3, SiSass, SiTailwindcss, SiBootstrap,
  SiMongodb, SiMysql, SiPostgresql, SiSupabase, SiFirebase,
  SiGit, SiGithub, SiDocker, SiVercel, SiFigma, SiAdobexd,
  SiGraphql, SiPostman, SiOpenai, SiGooglegemini,
} from 'react-icons/si'

const iconMap = {
  javascript: SiJavascript, typescript: SiTypescript,
  reactjs: SiReact, react: SiReact,
  nextjs: SiNextdotjs, angular: SiAngular,
  nodejs: SiNodedotjs, node: SiNodedotjs,
  expressjs: SiExpress, express: SiExpress,
  python: SiPython, django: SiDjango, fastapi: SiFastapi,
  html5: SiHtml5, css3: SiCss3, scss: SiSass,
  tailwindcss: SiTailwindcss, bootstrap: SiBootstrap,
  mongodb: SiMongodb, mysql: SiMysql, postgresql: SiPostgresql,
  postgres: SiPostgresql, supabase: SiSupabase, firebase: SiFirebase,
  git: SiGit, github: SiGithub, docker: SiDocker, vercel: SiVercel,
  figma: SiFigma, adobexd: SiAdobexd,
  graphql: SiGraphql, postman: SiPostman,
  openaiapi: SiOpenai, openai: SiOpenai,
  langchain: FiZap,
  pinecone: FiSearch,
  vectorsearch: FiSearch,
  promptengineering: FiZap,
  embeddings: FiZap,
  gemini: SiGooglegemini,
}
const normalizeKey = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '')

export default function SkillsSection() {
  const [data, setData] = useState(null)
  const [activeTab, setActiveTab] = useState(0)
  const containerRef = useRef(null)
  const inView = useInView(containerRef, { rootMargin: '0px', threshold: 0.1 })

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

  if (!data) {
    return (
      <section className="skillsSection" ref={containerRef}>
        <div className="skillsInner"><Loading text="Loading skills" /></div>
      </section>
    )
  }

  const categories = data.skills.categories || []
  const activeItems = categories[activeTab]?.items || []

  return (
    <section className="skillsSection" id="skillsSection" ref={containerRef}>
      <div className="skillsInner">
        <TitleBox><h2>Skills</h2></TitleBox>

        <div className="skillsTabs">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`skillsTab${activeTab === i ? ' active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="skillsControls">
          <Swiper
            navigation
            autoplay={{ delay: 2000, disableOnInteraction: true }}
            spaceBetween={12}
            breakpoints={{
              320: { slidesPerView: 2 },
              480: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
            className="skillsSwiper"
          >
            {activeItems.map((s, i) => {
              const Icon = iconMap[normalizeKey(s)] || FiCode
              return (
                <SwiperSlide key={`${activeTab}-${i}`} className="skillSlide">
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

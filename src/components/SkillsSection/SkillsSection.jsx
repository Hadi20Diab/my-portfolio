"use client"

import { useEffect, useRef, useState } from 'react'
import { getPortfolioData } from '../../utils/data'
import Loading from '../Loading/Loading'
import useInView from '../../hooks/useInView'
import TitleBox from '../TitleBox/TitleBox'
import { FiCode, FiZap, FiSearch } from 'react-icons/fi'

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

const categoryDescriptions = {
  frontend: 'Interfaces, component systems, and modern web app experiences.',
  backend: 'APIs, server architecture, authentication, and application logic.',
  database: 'Structured and realtime data layers for scalable products.',
  toolsdevops: 'Workflow, deployment, collaboration, and developer tooling.',
  design: 'Interface thinking, responsive systems, and product polish.',
  aiml: 'LLM integrations, retrieval pipelines, and practical AI product work.',
}

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
  const activeCategory = categories[activeTab] || null
  const activeItems = activeCategory?.items || []
  const totalSkills = categories.reduce((count, category) => count + (category.items?.length || 0), 0)
  const activeDescription = categoryDescriptions[normalizeKey(activeCategory?.label || '')] || 'A focused set of tools I use to design, build, and ship production work.'

  return (
    <section className="skillsSection" id="skillsSection" ref={containerRef}>
      <div className="skillsInner">
        <TitleBox><h2>Skills</h2></TitleBox>

        <div className="skillsIntro">
          <p className="skillsEyebrow">Focused toolkit</p>
          <p className="skillsLead">
            A practical stack shaped by product work across frontend, backend, AI, and delivery.
          </p>
          <div className="skillsMeta" aria-label="Skills overview">
            <span className="skillsMetaItem">{categories.length} categories</span>
            <span className="skillsMetaItem">{totalSkills} core skills</span>
            <span className="skillsMetaItem">Production-ready stack</span>
          </div>
        </div>

        <div className="skillsTabs">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`skillsTab${activeTab === i ? ' active' : ''}`}
              onClick={() => setActiveTab(i)}
              type="button"
              aria-pressed={activeTab === i}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="skillsPanel">
          <div className="skillsPanelHeader">
            <div className="skillsPanelCopy">
              <p className="skillsPanelLabel">Active category</p>
              <h3>{activeCategory?.label}</h3>
              <p>{activeDescription}</p>
            </div>
            <div className="skillsCount" aria-label={`${activeItems.length} skills in ${activeCategory?.label}`}>
              <strong>{activeItems.length}</strong>
              <span>skills</span>
            </div>
          </div>

          <div className="skillsGrid" role="list" aria-label={`${activeCategory?.label} skills`}>
            {activeItems.map((skill, i) => {
              const Icon = iconMap[normalizeKey(skill)] || FiCode
              return (
                <div key={`${activeTab}-${i}`} className="skillCard" role="listitem">
                  <span className="skillIcon"><Icon /></span>
                  <span className="skillLabel">{skill}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

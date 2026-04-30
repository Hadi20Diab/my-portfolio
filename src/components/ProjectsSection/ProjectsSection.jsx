"use client"

import { useEffect, useRef, useState } from 'react'
import { getPortfolioData } from '../../utils/data'
import Loading from '../Loading/Loading'
import useInView from '../../hooks/useInView'
import TitleBox from '../TitleBox/TitleBox'
import Link from 'next/link'
import { FiExternalLink, FiGithub, FiCode, FiStar } from 'react-icons/fi'

export default function ProjectsSection() {
  const [data, setData] = useState(null)
  const ref = useRef(null)
  const inView = useInView(ref, { rootMargin: '0px', threshold: 0.05 })

  useEffect(() => {
    if (!inView || data) return
    let mounted = true
    async function loadData() {
      const d = await getPortfolioData()
      if (mounted) setData(d)
    }
    loadData()
    return () => { mounted = false }
  }, [inView, data])

  if (!data) {
    return (
      <section className="projectsSection" ref={ref}>
        <div className="projectsContainer">
          <Loading text='Loading Projects' />
        </div>
      </section>
    )
  }

  return (
    <section className="projectsSection" ref={ref}>
      <div className="projectsContainer">
        <TitleBox><h2>Featured Projects</h2></TitleBox>
        
        <div className="projectsGrid">
          {data.projects.filter(p => p.featured).map((project, i) => (
            <article key={i} className={`projectCard${project.featured ? ' featured' : ''}`}>
              <div className="projectCardTop">
                <div className="projectHeader">
                  <div className="projectIcon">
                    <FiCode />
                  </div>
                  <div>
                    <h3>{project.name}</h3>
                    {project.tagline && <span className="projectTagline">{project.tagline}</span>}
                  </div>
                  {project.featured && <span className="featuredBadge"><FiStar /> Featured</span>}
                </div>
                {project.category && <span className="categoryBadge">{project.category}</span>}
              </div>

              <p className="projectDescription">{project.description}</p>

              <div className="techStack">
                {project.technologies.map((tech, j) => (
                  <span key={j} className="techBadge">{tech}</span>
                ))}
              </div>

              <div className="projectActions">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projectLink primary"
                  >
                    <FiExternalLink /> View Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projectLink secondary"
                  >
                    <FiGithub /> Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="projectsFooter">
          <Link href="/projects" className="viewAllButton">View all projects</Link>
        </div>
      </div>
    </section>
  )
}
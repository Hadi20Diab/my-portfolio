"use client"

import { useEffect, useRef, useState } from 'react'
import './ProjectsSection.scss'
import { getPortfolioData } from '../../utils/data'
import Loading from '../Loading/Loading'
import useInView from '../../hooks/useInView'
import TitleBox from '../TitleBox/TitleBox'
import { FiExternalLink, FiGithub, FiCode } from 'react-icons/fi'

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
          {data.projects.map((project, i) => (
            <article key={i} className="projectCard">
              <div className="projectHeader">
                <div className="projectIcon">
                  <FiCode />
                </div>
                <h3>{project.name}</h3>
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

        {/* Brief experience mention */}
        <div className="experienceMention">
          <p>
            Currently working as <strong>Full Stack Developer</strong> at{' '}
            <a href="http://efendim.io" target="_blank" rel="noopener noreferrer">
              Efendim.io
            </a>
            {' '}• Building modern web applications with React.js and Node.js
          </p>
        </div>
      </div>
    </section>
  )
}
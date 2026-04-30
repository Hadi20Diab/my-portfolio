"use client"

import { useEffect, useState } from 'react'
import TitleBox from '../../../components/TitleBox/TitleBox'
import Loading from '../../../components/Loading/Loading'
import { getPortfolioData } from '../../../utils/data'
import { FiExternalLink, FiGithub, FiCode, FiStar } from 'react-icons/fi'

export default function ProjectsPage() {
  const [data, setData] = useState(null)

  useEffect(() => {
    let mounted = true
    async function load() {
      const d = await getPortfolioData()
      if (mounted) setData(d)
    }
    load()
    return () => { mounted = false }
  }, [])

  if (!data) return <div style={{ padding: '4rem 0' }}><Loading text="Loading projects" /></div>

  return (
    <main className="projectsSection" style={{ padding: '4rem 0' }}>
      <div className="projectsContainer">
        <TitleBox><h2>All Projects</h2></TitleBox>

        <div className="projectsGrid">
          {data.projects.map((project, i) => (
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
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="projectLink primary">
                    <FiExternalLink /> View Live
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="projectLink secondary">
                    <FiGithub /> Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

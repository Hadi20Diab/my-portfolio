"use client"

import { useEffect, useRef, useState } from 'react'
import './ExperienceSection.scss'
import { getPortfolioData } from '../../utils/data'
import useInView from '../../hooks/useInView'
import TitleBox from '../TitleBox/TitleBox'
import { FiBriefcase, FiBook, FiExternalLink } from 'react-icons/fi'

export default function ExperienceSection() {
  const [data, setData] = useState(null)
  const containerRef = useRef(null)
  const inView = useInView(containerRef, { rootMargin: '0px', threshold: 0.1 })

  useEffect(() => {
    if (!inView || data) return
    let mounted = true
    getPortfolioData().then(d => { if (mounted) setData(d) })
    return () => { mounted = false }
  }, [inView, data])

  if (!data) return <section className="experienceSection" ref={containerRef} />

  const { experience, education } = data

  return (
    <section className="experienceSection" ref={containerRef}>
      <div className="experienceContainer">
        <TitleBox><h2>Experience</h2></TitleBox>

        <div className="experienceGrid">
          {/* Work column */}
          <div className="timelineColumn">
            <div className="columnHeader">
              <FiBriefcase />
              <span>Work History</span>
            </div>
            <div className="timeline">
              {experience.map((job, i) => (
                <div key={i} className="timelineItem">
                  <div className="timelineDot" />
                  <div className="timelineCard">
                    <div className="timelineHeader">
                      <div>
                        <h3>{job.title}</h3>
                        <span className="company">
                          {job.website
                            ? <a href={job.website} target="_blank" rel="noopener noreferrer">{job.company} <FiExternalLink /></a>
                            : job.company
                          }
                        </span>
                      </div>
                      <span className="period">{job.period}</span>
                    </div>
                    <p>{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education column */}
          <div className="timelineColumn">
            <div className="columnHeader">
              <FiBook />
              <span>Education</span>
            </div>
            <div className="timeline">
              <div className="timelineItem">
                <div className="timelineDot" />
                <div className="timelineCard">
                  <div className="timelineHeader">
                    <div>
                      <h3>{education.degree}</h3>
                      <span className="company">{education.institution}</span>
                    </div>
                    <span className="period">{education.period}</span>
                  </div>
                  <p>{education.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import './ExperienceSection.scss'
import { FiBriefcase } from 'react-icons/fi'

export default function ExperienceSection({ experience = [] }) {
  if (!experience || experience.length === 0) return null

  return (
    <div className="experienceSection">
      <h3 className="sectionTitle"><FiBriefcase /> EXPERIENCE</h3>
      <div className="experienceGrid">
        {experience.map((exp, i) => (
          <div key={i} className="experienceCard">
            <h4>{exp.title}</h4>
            <p className="company">{exp.company}</p>
            <p className="period">{exp.period}</p>
            <p className="description">{exp.description}</p>
            {exp.website && (
              <a href={exp.website} target="_blank" rel="noreferrer" className="companyLink">Visit Website</a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

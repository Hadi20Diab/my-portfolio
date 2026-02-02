"use client"

import './EducationSection.scss'
import { FiBookOpen } from 'react-icons/fi'

export default function EducationSection({ education = {} }) {
  if (!education) return null

  return (
    <div className="educationSection">
      <h3 className="sectionTitle"><FiBookOpen /> EDUCATION</h3>
      <div className="educationCard">
        <h4>{education.degree}</h4>
        <p className="institution">{education.institution}</p>
        <p className="period">{education.period}</p>
        <p className="description">{education.description}</p>
      </div>
    </div>
  )
}

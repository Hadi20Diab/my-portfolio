"use client"

import { useEffect, useState } from 'react'
import './AboutSection.scss'
import { FiPenTool, FiCode, FiSettings, FiBriefcase, FiBookOpen } from 'react-icons/fi'
import { getPortfolioData } from '../../utils/data'

export default function AboutSection() {
    const [data, setData] = useState(null)

    useEffect(() => {
        async function loadData() {
            const portfolioData = await getPortfolioData()
            setData(portfolioData)
        }
        loadData()
    }, [])

    if (!data) {
        return (
            <section className="aboutSection">
                <div className="aboutContainer">
                    <p>Loading...</p>
                </div>
            </section>
        )
    }

    const iconMap = {
        'FiPenTool': FiPenTool,
        'FiCode': FiCode,
        'FiSettings': FiSettings
    }

    return (
        <section className="aboutSection">
            <div className="aboutContainer">
                <div className="aboutHeader">
                    <div className="titleBox">
                        <h2>ABOUT ME</h2>
                    </div>
                    <p className="aboutDescription">
                        {data.personal.bio}
                    </p>
                    <div className="contactInfo">
                        <p><strong>Email:</strong> {data.personal.email}</p>
                        <p><strong>Phone:</strong> {data.personal.phone}</p>
                        <p><strong>Location:</strong> {data.personal.location}</p>
                    </div>
                    <a href={data.resume.path} target="_blank" className="exploreButton">
                        DOWNLOAD CV
                    </a>
                </div>

                <div className="decorativeDivider">
                    <div className="dividerLine"></div>
                    <div className="dividerPattern"></div>
                    <div className="dividerLine"></div>
                </div>

                <div className="servicesGrid">
                    {data.services.map((service, index) => {
                        const IconComponent = iconMap[service.icon]
                        return (
                            <div key={index} className="serviceCard">
                                <div className="serviceIcon" aria-hidden>
                                    <IconComponent />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        )
                    })}
                </div>

                <div className="experienceSection">
                    <h3 className="sectionTitle">
                        <FiBriefcase /> EXPERIENCE
                    </h3>
                    <div className="experienceGrid">
                        {data.experience.map((exp, index) => (
                            <div key={index} className="experienceCard">
                                <h4>{exp.title}</h4>
                                <p className="company">{exp.company}</p>
                                <p className="period">{exp.period}</p>
                                <p className="description">{exp.description}</p>
                                {exp.website && (
                                    <a href={exp.website} target="_blank" rel="noreferrer" className="companyLink">
                                        Visit Website
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="educationSection">
                    <h3 className="sectionTitle">
                        <FiBookOpen /> EDUCATION
                    </h3>
                    <div className="educationCard">
                        <h4>{data.education.degree}</h4>
                        <p className="institution">{data.education.institution}</p>
                        <p className="period">{data.education.period}</p>
                        <p className="description">{data.education.description}</p>
                    </div>
                </div>

                <div className="bottomDivider">
                    <div className="dividerLine"></div>
                    <div className="dividerPattern"></div>
                    <div className="dividerLine"></div>
                </div>
            </div>
        </section>
    )
}

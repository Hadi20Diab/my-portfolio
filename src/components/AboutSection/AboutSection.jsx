"use client"

import { useEffect, useRef, useState } from 'react'
import './AboutSection.scss'
import { FiPenTool, FiCode, FiSettings } from 'react-icons/fi'
import { getPortfolioData } from '../../utils/data'
import Loading from '../Loading/Loading'
import DecorativeDivider from '../DecorativeDivider/DecorativeDivider'
import useInView from '../../hooks/useInView'

export default function AboutSection() {
    const [data, setData] = useState(null)
    const containerRef = useRef(null)
    const inView = useInView(containerRef, { rootMargin: '0px', threshold: 0.05 })

    useEffect(() => {
        if (!inView || data) return
        let mounted = true
        async function loadData() {
            const portfolioData = await getPortfolioData()
            if (mounted) setData(portfolioData)
        }
        loadData()
        return () => { mounted = false }
    }, [inView, data])

    if (!data) {
        return (
            <section id="aboutSection" className="aboutSection scroll-offset" ref={containerRef}>
                <div className="aboutContainer">
                    <Loading />
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
        <section id="aboutSection" className="aboutSection" ref={containerRef}>
            <div className="aboutContainer">
                <div className="aboutHeader">
                    <div className="titleBox">
                        <h2>ABOUT ME</h2>
                    </div>
                    <p className="aboutDescription">
                        {data.personal.bio}
                    </p>
                    <a href={data.resume.path} target="_blank" className="exploreButton">
                        DOWNLOAD CV
                    </a>
                </div>

                <DecorativeDivider />

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

                <DecorativeDivider />
            </div>
        </section>
    )
}
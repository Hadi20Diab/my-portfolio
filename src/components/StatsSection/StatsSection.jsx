"use client"

import { useEffect, useRef, useState } from 'react'
import { getPortfolioData } from '../../utils/data'
import useInView from '../../hooks/useInView'
import DecorativeDivider from '../DecorativeDivider/DecorativeDivider'

export default function StatsSection() {
    const [data, setData] = useState(null)
    const [counted, setCounted] = useState(false)
    const containerRef = useRef(null)
    const inView = useInView(containerRef, { rootMargin: '0px', threshold: 0.3 })

    useEffect(() => {
        if (!inView || data) return
        let mounted = true
        getPortfolioData().then(d => { if (mounted) setData(d) })
        return () => { mounted = false }
    }, [inView, data])

    useEffect(() => {
        if (inView && data) setCounted(true)
    }, [inView, data])

    const stats = data?.stats || [
        { value: '3+', label: 'Years of Experience' },
        { value: '10+', label: 'Projects Delivered' },
        { value: '15+', label: 'Technologies' },
        { value: '100%', label: 'Client Satisfaction' },
    ]

    return (
        <>
            <section className="statsSection" ref={containerRef}>
                <div className="statsInner">
                    {stats.map((stat, i) => (
                        <div key={i} className={`statCard${counted ? ' visible' : ''}`} style={{ '--delay': `${i * 0.1}s` }}>
                            <span className="statValue">{stat.value}</span>
                            <span className="statLabel">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>
            <DecorativeDivider />
        </>
    )
}

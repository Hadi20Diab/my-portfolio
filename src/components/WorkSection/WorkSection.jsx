"use client"

import { useEffect, useRef, useState } from 'react'
import './WorkSection.scss'
import { getPortfolioData } from '../../utils/data'
import Loading from '../Loading/Loading'
import useInView from '../../hooks/useInView'
import TitleBox from '../TitleBox/TitleBox'

export default function WorkSection() {
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
      <section className="workSection" ref={ref}>
        <div className="workInner">
          <Loading text='Loading Work...' />
        </div>
      </section>
    )
  }

  return (
    <section className="workSection" ref={ref}>
      <div className="workInner">
        <TitleBox><h2>Experience & Education</h2></TitleBox>

        <div className="workColumns">
          <div className="leftCol">
            <h3 className="subTitle">Experience</h3>
            <div className="timeline">
              {data.experience.map((exp, i) => (
                <article key={i} className="timelineItem">
                  <div className="meta">
                    <span className="company">{exp.company}</span>
                    <span className="period">{exp.period}</span>
                  </div>
                  <div className="body">
                    <h4>{exp.title}</h4>
                    <p>{exp.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="rightCol">
            <h3 className="subTitle">Education</h3>
            <div className="eduCard">
              <h4>{data.education.degree}</h4>
              <p className="institution">{data.education.institution}</p>
              <p className="period">{data.education.period}</p>
              <p className="description">{data.education.description}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

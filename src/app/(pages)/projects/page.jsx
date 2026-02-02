"use client"

import { useEffect, useState } from 'react'
import TitleBox from '../../../components/TitleBox/TitleBox'
import './projects.scss'
import { getPortfolioData } from '../../../utils/data'
import Loading from '../../../components/Loading/Loading'
import { FiExternalLink, FiGithub, FiCode } from 'react-icons/fi'

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

  if (!data) return <div style={{padding: '4rem 0'}}><Loading text="Loading projects" /></div>

  return (
    <main style={{padding: '4rem 0'}}>
      <div style={{maxWidth: 1100, margin: '0 auto', padding: '0 1rem'}}>
        <TitleBox><h2>All Projects</h2></TitleBox>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem'}}>
          {data.projects.map((p, i) => (
            <article key={i} style={{background: 'var(--card-bg)', border: '1px solid var(--card-border)', padding: '1rem', borderRadius: '8px'}}>
              <div style={{display:'flex', gap: '0.75rem', alignItems: 'center'}}>
                <div style={{width:40,height:40,background:'var(--brand)',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',color:'#fff'}}><FiCode /></div>
                <h3 style={{margin:0}}>{p.name}</h3>
              </div>

              <p style={{color:'var(--muted)'}}>{p.description}</p>

              <div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:8}}>
                {p.technologies.map((t, j) => <span key={j} style={{background:'rgba(0,0,0,0.04)',padding:'4px 8px',borderRadius:6}}>{t}</span>)}
              </div>

              <div style={{marginTop:12, display:'flex', gap:8}}>
                {p.url && <a href={p.url} target="_blank" rel="noreferrer" style={{padding:'6px 10px',borderRadius:6,background:'var(--brand)',color:'#fff',textDecoration:'none'}}>View Live</a>}
                {p.github && <a href={p.github} target="_blank" rel="noreferrer" style={{padding:'6px 10px',borderRadius:6,border:'1px solid var(--border)',textDecoration:'none'}}>Code</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

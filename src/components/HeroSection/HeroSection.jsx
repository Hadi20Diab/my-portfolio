"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import './HeroSection.scss'
import Link from 'next/link'
import { FiMail } from 'react-icons/fi'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { getPortfolioData } from '../../utils/data'

export default function HeroSection() {
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
            <section className="heroContainer">
                <div className="heroContant">
                    <p>Loading...</p>
                </div>
            </section>
        )
    }

    return (
        <>
            <section className="heroContainer">
                <div className="heroContant">
                    <p>{data.personal.tagline}</p>
                    <h1 className="heroTitle">
                        <span className="hightlightName">{data.personal.name.split(' ')[0]}</span> {data.personal.name.split(' ')[1]}
                    </h1>
                    <p>{data.personal.title}</p>

                    <div className="heroButtons">
                        {/* <a href="#about" className="ctaOutline" aria-label="About me">ABOUT ME</a>
                        <a href="#contact" className="ctaPrimary" aria-label="Contact me">CONTACT ME</a> */}
                    </div>

                    <div className="socials" aria-label="Social links">
                        <a className="icon" href={data.socialLinks.email} aria-label="Email"><FiMail size={18} /></a>
                        <a className="icon" href={data.socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub"><SiGithub size={18} /></a>
                        <a className="icon" href={data.socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><SiLinkedin size={18} /></a>
                    </div>
                </div>
                <div className="heroImage">
                    <div className="portrait">
                        <Image src="/hero-Image.png" alt="Hero" fill style={{ objectFit: 'contain' }} />
                    </div>
                </div>
            </section>
            <section className="heroFeature">
                <div className="featureInner">
                    <div className="featureContent">
                        <h2>IT BERRIES</h2>
                        <p>
                            {data.personal.bio}
                        </p>

                        <a className="readMore" href={data.resume.path} target="_blank" aria-label="Download Resume">
                            DOWNLOAD CV
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

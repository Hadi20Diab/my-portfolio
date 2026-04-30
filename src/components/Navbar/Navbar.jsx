"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

export default function Navbar() {
    const [theme, setTheme] = useState('light')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        if (typeof document === 'undefined') return
        const getTheme = () => document.documentElement.getAttribute('data-theme') || 'light'
        setTheme(getTheme())

        const observer = new MutationObserver(() => setTheme(getTheme()))
        observer.observe(document.documentElement, { attributes: true })

        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()

        return () => {
            observer.disconnect()
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    // In light mode at top: logo should be light (visible on dark hero panel side)
    // but we're on left side (light bg), so keep dark logo. Always correct.
    const atTop = !scrolled
    const logoSrc = theme === 'dark' ? '/logo-light.png' : '/logo-dark.png'

    return (
        <section className={`navContainer${scrolled ? ' scrolled' : ''}${atTop && theme === 'light' ? ' atTop' : ''}`}>
            <div className="logoDiv">
                <Link href="/">
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <Image src={logoSrc} fill alt="Hadi Diab" />
                    </div>
                </Link>
            </div>
            <nav className="navLinks">
                <ul className="navList">
                    <li><Link href="#aboutSection">About me</Link></li>
                    <li><Link href="#skillsSection">Skills</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li className="navButton"><Link href="/contact">CONTACT ME</Link></li>
                    <ThemeToggle />
                </ul>
            </nav>
        </section>
    )
}

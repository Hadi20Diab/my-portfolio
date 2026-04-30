"use client"

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

export default function Navbar() {
    const [theme, setTheme] = useState('light')
    const [scrolled, setScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    const isHome = pathname === '/'

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

    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    const atTop = !scrolled
    const logoSrc = theme === 'dark' ? '/logo-light.png' : '/logo-dark.png'

    // Only hide links at top in light mode AND on the home page
    const hideLinks = isHome && atTop && theme === 'light'

    // Anchor links: if not on home page, navigate to home then anchor
    const aboutHref = isHome ? '#aboutSection' : '/#aboutSection'
    const skillsHref = isHome ? '#skillsSection' : '/#skillsSection'

    return (
        <section className={`navContainer${scrolled ? ' scrolled' : ''}${hideLinks ? ' atTop' : ''}${isMenuOpen ? ' menuOpen' : ''}`}>
            <div className="logoDiv">
                <Link href="/">
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <Image src={logoSrc} fill alt="Hadi Diab" />
                    </div>
                </Link>
            </div>
            <nav className={`navLinks${isMenuOpen ? ' open' : ''}`}>
                <button
                    type="button"
                    className="menuToggle"
                    aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
                <ul className="navList">
                    <li><Link href={aboutHref}>About me</Link></li>
                    <li><Link href={skillsHref}>Skills</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li className="navButton"><Link href="/contact">CONTACT ME</Link></li>
                    <ThemeToggle />
                </ul>
            </nav>
        </section>
    )
}

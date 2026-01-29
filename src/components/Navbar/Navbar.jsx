"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import './Navbar.scss'
import Link from 'next/link'

export default function Navbar() {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        if (typeof document === 'undefined') return
        const getTheme = () => document.documentElement.getAttribute('data-theme') || 'light'
        setTheme(getTheme())

        const observer = new MutationObserver(() => {
            setTheme(getTheme())
        })
        observer.observe(document.documentElement, { attributes: true })

        return () => observer.disconnect()
    }, [])

    return (
        <>
            <section className="navContainer">
                <div className="logoDiv">
                    <Link href="/">
                        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                            {theme === 'dark' ? (
                                <Image src="/logo-light.png" fill alt="Hadi Diab" />
                            ) : (
                                <Image src="/logo-dark.png" fill alt="Hadi Diab" />
                            )}
                        </div>
                    </Link>
                </div>
                <nav className="navLinks">
                    <ul className="navList">
                        <li><Link href="/">About me</Link></li>
                        <li><Link href="/">Skills</Link></li>
                        <li><Link href="/">Portfolio</Link></li>
                        <li className="navButton"><Link href="/">CONTACT ME</Link></li>
                    </ul>
                </nav>
            </section>
        </>
    )
}

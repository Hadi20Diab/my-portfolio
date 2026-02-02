"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import './Loading.scss'

export default function Loading({ text = 'Loading...', size = 64, fullScreen = false }) {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        if (typeof document === 'undefined') return
        const getTheme = () => document.documentElement.getAttribute('data-theme') || 'light'
        setTheme(getTheme())

        const observer = new MutationObserver(() => setTheme(getTheme()))
        observer.observe(document.documentElement, { attributes: true })
        return () => observer.disconnect()
    }, [])

    const logoSrc = theme === 'dark' ? '/logo-light.png' : '/logo-dark.png'

    return (
        <div className={`site-loading ${fullScreen ? 'fullscreen' : ''}`} role="status" aria-live="polite">
            <div className="spinner" style={{ width: `${size}px`, height: `${size}px` }} aria-hidden>
                <div className="logoWrap">
                    <Image src={logoSrc} alt="logo" fill style={{ objectFit: 'contain' }} />
                </div>
            </div>
            {text && <span className="loadingText">{text}</span>}
        </div>
    )
}

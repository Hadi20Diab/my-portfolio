"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FiMail, FiHeart } from 'react-icons/fi'
import { SiGithub, SiLinkedin } from 'react-icons/si'

const NAV_LINKS = [
  { label: 'About', href: '#aboutSection' },
  { label: 'Skills', href: '#skillsSection' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  const [theme, setTheme] = useState('light')
  const year = new Date().getFullYear()

  useEffect(() => {
    if (typeof document === 'undefined') return
    const getTheme = () => document.documentElement.getAttribute('data-theme') || 'light'
    setTheme(getTheme())
    const observer = new MutationObserver(() => setTheme(getTheme()))
    observer.observe(document.documentElement, { attributes: true })
    return () => observer.disconnect()
  }, [])

  return (
    <footer className="siteFooter">
      <div className="footerInner">

        <div className="footerTop">
          {/* Brand */}
          <div className="footerBrand">
            <Link href="/" className="footerLogo">
              <div className="logoWrap">
                <Image
                  src={theme === 'dark' ? '/logo-light.png' : '/logo-dark.png'}
                  fill
                  alt="Hadi Diab"
                  style={{ objectFit: 'contain', objectPosition: 'left' }}
                />
              </div>
            </Link>
            <p className="footerTagline">
              Full Stack Developer based in Lebanon.<br />
              Building fast, beautiful and scalable web products.
            </p>
            <div className="footerSocials">
              <a href="mailto:hadidiab33@gmail.com" aria-label="Email"><FiMail /></a>
              <a href="https://github.com/Hadi20Diab" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><SiGithub /></a>
              <a href="https://www.linkedin.com/in/hadi-diab-view/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><SiLinkedin /></a>
            </div>
          </div>

          {/* Nav */}
          <nav className="footerNav">
            <span className="footerNavTitle">Navigation</span>
            <ul>
              {NAV_LINKS.map(l => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div className="footerCta">
            <span className="footerNavTitle">Let&apos;s Connect</span>
            <p>Have a project or idea? I&apos;m always open to new opportunities.</p>
            <Link href="/contact" className="footerCtaBtn">Get in touch</Link>
          </div>
        </div>

        <div className="footerBottom">
          <span>© {year} Hadi Diab. All rights reserved.</span>
          <span className="footerMade">
            Made with <FiHeart className="heartIcon" /> using Next.js
          </span>
        </div>
      </div>
    </footer>
  )
}

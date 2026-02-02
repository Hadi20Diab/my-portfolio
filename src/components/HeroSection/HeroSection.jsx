import Image from 'next/image'
import './HeroSection.scss'
import Link from 'next/link'

export default function HeroSection() {
    return (
        <>
            <section className="heroContainer">
                
                <div className="heroContant">
                    <p>Hi, I am</p>
                    <h1>Hadi Diab</h1>
                    <p>Front-end Developer / UI Designer</p>

                    <div className="heroButtons">
                        {/* <a href="#about" className="ctaOutline" aria-label="About me">ABOUT ME</a>
                        <a href="#contact" className="ctaPrimary" aria-label="Contact me">CONTACT ME</a> */}
                    </div>

                    <div className="socials" aria-label="Social links">
                        <a className="icon" href="mailto:you@example.com" aria-label="Email">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                <path d="M3 7.5L12 13L21 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                        </a>
                        <a className="icon" href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6.7 2 1.1.1-.8.4-1.4.8-1.7-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.3a11.8 11.8 0 016.1 0c2.4-1.6 3.4-1.3 3.4-1.3.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.5-5.3 5.8.4.4.7 1 .7 2v3c0 .3.2.7.8.6A12 12 0 0012 .5z"/>
                            </svg>
                        </a>
                        <a className="icon" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                <path d="M4.98 3.5a2.25 2.25 0 11-.001 4.501A2.25 2.25 0 014.98 3.5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-.9 1.6-1.8 3.2-1.8 3.4 0 4 2.2 4 5.1V21h-4v-5.2c0-1.2 0-2.8-1.8-2.8-1.8 0-2.1 1.4-2.1 2.7V21H9V9z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="heroImage">
                    <div className="portrait">
                        {/* Place your hero portrait in `public/hero.jpg` (or change the path below) */}
                        <Image src="/hero-Image.png" alt="Hero" fill style={{ objectFit: 'contain' }} />
                    </div>
                </div>
            </section>
        </>
    )
}

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
                        <a className="btn btn-primary" href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <span className="btn-icon" aria-hidden="true">
                                {/* GitHub mark */}
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 .5C5.73.5.75 5.48.75 11.77c0 4.92 3.18 9.09 7.59 10.56.56.1.77-.24.77-.54 0-.27-.01-1-.02-1.97-3.09.67-3.74-1.49-3.74-1.49-.51-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .17 1.54-1.08 1.54-1.08.9-1.54 2.36-1.09 2.94-.83.09-.65.35-1.09.64-1.34-2.47-.28-5.07-1.24-5.07-5.53 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.12 1.14a10.8 10.8 0 0 1 2.84-.38c.96 0 1.93.13 2.84.38 2.17-1.44 3.12-1.14 3.12-1.14.61 1.54.23 2.68.11 2.96.72.79 1.16 1.78 1.16 3 0 4.3-2.6 5.25-5.08 5.52.36.31.69.92.69 1.86 0 1.34-.01 2.42-.01 2.75 0 .3.2.64.78.53 4.41-1.47 7.59-5.64 7.59-10.56C23.25 5.48 18.27.5 12 .5z" fill="currentColor"/>
                                </svg>
                            </span>
                            <span className="btn-text">GitHub</span>
                        </a>

                        <a className="btn" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <span className="btn-icon" aria-hidden="true">
                                {/* LinkedIn mark */}
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4zM8.5 8h3.8v2.2h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.7 2.6 4.7 6V24h-4v-7.2c0-1.7 0-3.8-2.3-3.8-2.3 0-2.6 1.8-2.6 3.6V24h-4z" fill="currentColor"/>
                                </svg>
                            </span>
                            <span className="btn-text">LinkedIn</span>
                        </a>
                    </div>

                    <div className="socials">
                        <a className="icon" href="mailto:you@example.com" aria-label="Email">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15zM4 6v.01M12 13l8-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                        <a className="icon" href="https://github.com" aria-label="GitHub">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 .5C5.73.5.75 5.48.75 11.77c0 4.92 3.18 9.09 7.59 10.56.56.1.77-.24.77-.54 0-.27-.01-1-.02-1.97-3.09.67-3.74-1.49-3.74-1.49-.51-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .17 1.54-1.08 1.54-1.08.9-1.54 2.36-1.09 2.94-.83.09-.65.35-1.09.64-1.34-2.47-.28-5.07-1.24-5.07-5.53 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.12 1.14a10.8 10.8 0 0 1 2.84-.38c.96 0 1.93.13 2.84.38 2.17-1.44 3.12-1.14 3.12-1.14.61 1.54.23 2.68.11 2.96.72.79 1.16 1.78 1.16 3 0 4.3-2.6 5.25-5.08 5.52.36.31.69.92.69 1.86 0 1.34-.01 2.42-.01 2.75 0 .3.2.64.78.53 4.41-1.47 7.59-5.64 7.59-10.56C23.25 5.48 18.27.5 12 .5z" fill="currentColor"/>
                            </svg>
                        </a>
                        <a className="icon" href="https://linkedin.com" aria-label="LinkedIn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4zM8.5 8h3.8v2.2h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.7 2.6 4.7 6V24h-4v-7.2c0-1.7 0-3.8-2.3-3.8-2.3 0-2.6 1.8-2.6 3.6V24h-4z" fill="currentColor"/>
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

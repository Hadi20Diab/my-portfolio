import Image from 'next/image'
import './HeroSection.scss'
import Link from 'next/link'
import { FiMail } from 'react-icons/fi'
import { SiGithub, SiLinkedin } from 'react-icons/si'

export default function HeroSection() {
    return (
        <>
            <section className="heroContainer">
                
                <div className="heroContant">
                    <p>Hi, I am</p>
                    <h1><span className="hightlightName">Hadi</span> Diab</h1>
                    <p>Front-end Developer / UI Designer</p>

                    <div className="heroButtons">
                        {/* <a href="#about" className="ctaOutline" aria-label="About me">ABOUT ME</a>
                        <a href="#contact" className="ctaPrimary" aria-label="Contact me">CONTACT ME</a> */}
                    </div>

                    <div className="socials" aria-label="Social links">
                        <a className="icon" href="mailto:you@example.com" aria-label="Email"><FiMail size={18} /></a>
                        <a className="icon" href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><SiGithub size={18} /></a>
                        <a className="icon" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><SiLinkedin size={18} /></a>
                    </div>
                </div>
                <div className="heroImage">
                    <div className="portrait">
                        {/* Place your hero portrait in `public/hero.jpg` (or change the path below) */}
                        <Image src="/hero-Image.png" alt="Hero" fill style={{ objectFit: 'contain' }} />
                    </div>
                </div>
            </section>
            <section className="heroFeature">
                <div className="featureInner">
                    <div className="featureContent">
                        <h2>IT BERRIES</h2>
                        <p>
                            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus.
                        </p>

                        <a className="readMore" href="#" aria-label="Read more">
                            READ MORE
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

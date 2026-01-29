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
                        <a href="https://github.com" target="_blank" rel="noreferrer"><button aria-label="GitHub">GitHub</button></a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><button aria-label="LinkedIn">Linkedin</button></a>
                    </div>

                    <div className="socials">
                        <a className="icon" href="#" aria-label="Email">@</a>
                        <a className="icon" href="#" aria-label="GitHub">GH</a>
                        <a className="icon" href="#" aria-label="LinkedIn">in</a>
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

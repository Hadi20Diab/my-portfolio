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
                        <button>GitHub</button>
                        <button>Linkedin</button>
                    </div>
                </div>
                <div className="heroImage">
                    {/* <Image src="/logo.png" fill /> */}
                </div>
            </section>
        </>
    )
}

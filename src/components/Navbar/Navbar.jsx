import Image from 'next/image'
import './Navbar.scss'
import Link from 'next/link'

export default function Navbar() {
    return (
        <>
            <section className="navContainer">
                <div className="logoDiv">
                    <Image src="/logo.png" fill />
                </div>
                <nav className="navLinks">
                    <ul className="navList">
                        <li><Link href="/" />About me</li>
                        <li><Link href="/" />Skills</li>
                        <li><Link href="/" />Portfolio</li>
                        <li className="navButton"><Link href="/" />CONTACT ME</li>
                    </ul>
                </nav>
            </section>
        </>
    )
}

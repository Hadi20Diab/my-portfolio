import Image from 'next/image'
import './Navbar.scss'
import Link from 'next/link'

export default function Navbar() {
    return (
        <>
            <section className="navContainer">
                <div className="logoDiv">
                    <Link href="/" >
                        <Image src="/logo-dark.png" fill alt="Hadi Diab" />
                    </Link>
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

import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import '../styles/globals.scss'

export const metadata = {
    title: 'Hadi Diab — Full Stack Developer',
    description: 'Full Stack Developer based in Lebanon specialising in Next.js, React, Node.js, Django and AI integrations.'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />
                <ScrollToTop />
            </body>
        </html>
    )
}

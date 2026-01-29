import Navbar from '../components/Navbar/Navbar'
import '../styles/globals.scss'

export const metadata = {
    title: 'My Portfolio',
    description: 'Welcome to my Next.js app directory!'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}

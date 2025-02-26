import { GeistSans } from 'geist/font/sans'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Pravah - Your Personal Growth Journey',
  description: 'Connect with mentors who understand your challenges and guide your growth journey.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${GeistSans.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shwetansh Srivastava - Software Engineer',
  description: 'Portfolio of Shwetansh Srivastava, a passionate Software Engineer specializing in full-stack development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${spaceGrotesk.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}


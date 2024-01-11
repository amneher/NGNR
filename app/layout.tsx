import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans';
import '@/app/globals.css';
import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';

let title = 'NGNR';
let description = 'Join Me On My Learning Journey';

export const metadata: Metadata = {
  title,
  description,
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  metadataBase: new URL('https://ngnr.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="night" lang="en">
      <body className={GeistSans.variable}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

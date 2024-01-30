import type { Metadata } from 'next'
import { Chivo_Mono, MuseoModerno } from "next/font/google";
import './globals.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const chivoMono = Chivo_Mono({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-chivo-mono'
})
const moderno = MuseoModerno({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-moderno',
});

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
    <html data-theme="retro" lang="en" className={`${moderno.variable} ${chivoMono.variable}`}>
      <body className={`bg-base-100 dark:bg-base-300 text-base-content dark:text-neutral-content`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

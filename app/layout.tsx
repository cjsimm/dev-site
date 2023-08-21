import './globals.css'
import Image from '@/node_modules/next/image';
import Link from '@/node_modules/next/link';
import type { Metadata } from 'next';
import { Noto_Sans_Mono } from 'next/font/google';

const noto_mono = Noto_Sans_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400','500'],
})

export const metadata: Metadata = {
  title: `Dev Site`,
  description: '...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={noto_mono.className}>
      <body>
        <header className='site-header'>
{/*           <div className="logo-container">
            <Image
              src="/header-logo.png"
              width={500}
              height={500}
              alt="Site Logo"
            />
          </div> */}
          <h1>cSimm.dev</h1>
          <nav className='navbar-above'>
            <ul className='navbar-container'>
              <li><Link className="header-link" href="/">About</Link></li>
              <li><Link className="header-link" href="/blog">Blog</Link></li>
              <li><a className="header-link" href="https://github.com/cjsimm" target='_blank'>GitHub</a></li>
              <li><Link className="header-link" href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        {children}
        {/* <footer className="siteFooter">
          <p>Copyright BlahBlah</p>
        </footer> */}
      </body>
    </html>
  )
}

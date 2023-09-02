import '../globals.css'
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
  title: `cSimm`,
  description: 'Development site and blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={noto_mono.className}>
      <body>
        <div className='header-container'>
          <header className='site-header'>
            <div className="logo-container">
              <Image 
                priority
                src={"/logo.svg"}
                height={100}
                width={100}
                alt="C"
              />   
            </div>  
            <nav className='navbar-above'>
              <ul className='navbar-container'>
                <li><Link className="header-link" href="/">About</Link></li>
                <li><Link className="header-link" href="/blog">Blog</Link></li>
                <li><a className="header-link" href="https://github.com/cjsimm" target='_blank'>GitHub</a></li>
                <li><Link className="header-link" href="/contact">Contact</Link></li>
              </ul>
            </nav>
          </header>
        </div>
        {children}
      </body>
    </html>
  )
}

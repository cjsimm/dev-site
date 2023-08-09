import Image from 'next/image';
import styles from './page.module.css';
import Link from '@/node_modules/next/link';
import type { Metadata } from 'next';

const page = 'Home';

export const metadata: Metadata = {
  title: `Dev Site - ${page}`,
  description: '...',
}

export default function Home() {
  return (
    <main>
      <section className={`sectionBlock flexCentered bgGreen`}>
        <h1>Hello.</h1>
        <div className="sectionContent">
          <p>This is placeholder text to test the section styles</p>
        </div>
      </section>
      <section className={`sectionBlock flexCentered bgGrey`}>
        <div className="sectionContent">
          <h1>Find out more</h1>
          <button>Interactive CV</button>
          <p>Also available in <Link href="/cv/static">PDF Format</Link></p>
        </div>
      </section>
      <section className={`sectionBlock flexCentered bgBlue`}>
        <h1>Latest Blog Posts</h1>
        <p>This is placeholder text to test the section styles</p>
      </section>
    </main>
  )
}

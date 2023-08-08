import Image from 'next/image';
import styles from './page.module.css';
import type { Metadata } from 'next';

const page = 'Home';

export const metadata: Metadata = {
  title: `Dev Site - ${page}`,
  description: '...',
}

export default function Home() {
  return (
    <main>
      <section className={`sectionBlock flexCentered`} style={{'background-color':'green'}}>
        <h1>Hello.</h1>
        <p>This is placeholder text to test the section styles</p>
      </section>
    </main>
  )
}

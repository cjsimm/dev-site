import Image from 'next/image';
import styles from './page.module.css';
import Link from '@/node_modules/next/link';
import type { Metadata } from 'next';
import BlogPostLink from './_components/blogPostLink';
import { getPostMetadata, sortPosts } from './_lib/blogPosts';

const page = 'Home';

export const metadata: Metadata = {
  title: `Dev Site - ${page}`,
  description: '...',
}

export default async function Home() {
  const latestBlogPost = await getPostMetadata()
  .then((result) => {
    return sortPosts(result)[0];
  });
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
          <Link className="largeButton" href="/contact/cv-non-interactive.html">Curriculum Vitae</Link>
          <p>Also available in <Link href="/contact/cv-non-interactive.pdf">PDF Format</Link></p>
        </div>
      </section>
      <section className={`sectionBlock flexCentered bgBlue`}>
        <h1>Latest Blog Post</h1>
        <BlogPostLink data={latestBlogPost} />
      </section>
    </main>
  )
}

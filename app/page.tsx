import Image from 'next/image';
import styles from './page.module.css';
import Link from '@/node_modules/next/link';
import type { Metadata } from 'next';
import BlogPostLink from './_components/blogPostLink';
import { getPostMetadata, sortPosts } from './_lib/blogPosts';

const page = 'Home';

export const metadata: Metadata = {
  title: `cSimm - ${page}`,
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
          <p>I'm a freelance data and machine learning engineer with an interest in web development and linux. This is a space to host my blog and anything else useful 
            that I'd like to share.
          </p>
        </div>
      </section>
      <section className={`sectionBlock flexCentered bgGrey`}>
        <div className="sectionContent sectionContentCentered">
          <h1>Find out more</h1>
          <Link className="largeButton" target="_blank" href="/contact/cv-non-interactive.html">Curriculum Vitae</Link>
          <p>Also available in <Link target="_blank" href="/contact/cv-non-interactive.pdf">PDF Format</Link></p>
        </div>
      </section>
      <section className={`sectionBlock flexCentered bgBlue`}>
        <h1>Latest Blog Post</h1>
        <div className='sectionContent'>
          <BlogPostLink data={latestBlogPost} />
        </div>
      </section>
    </main>
  )
}

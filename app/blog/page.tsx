import { blogPostMetadata, getPostMetadata, sortPosts } from "../_lib/blogPosts";
import BlogPostLink from "../_components/blogPostLink";
import Link from "next/link";
import { Metadata } from "next";

const page = 'Blog';
export const metadata: Metadata = {
  title: `cSimm - ${page}`,
  description: '...',
}
export default async function Directory() {
  //retrieve blogpost metadata and sort by date descending
  const blogPostMetadata = await getPostMetadata()
    .then((result) => {
      return sortPosts(result)
    });

  return (
    <main>
      <section className="flexCentered sectionFillPage bgBlue">
        <h1>Blog</h1>
          {blogPostMetadata.map((item, index) => (
            <div className="sectionContent" key={index}>
              <BlogPostLink data={item} />
            </div>          
          ))}
      </section>
    </main>
  )
}
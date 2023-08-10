import { blogPostMetadata, getPostMetadata, sortPosts } from "../_lib/blogPosts";
import BlogPostLink from "../_components/blogPostLink";
import Link from "next/link";

export default async function Directory() {
  //retrieve blogpost metadata and sort by date descending
  const blogPostMetadata = await getPostMetadata()
    .then((result) => {
      return sortPosts(result)
    });

  return (
    <main>
      <section className="flexCentered sectionFillPage">
        <h1>Blogpost</h1>
          {blogPostMetadata.map((item, index) => (
            <div key={index}>
              <BlogPostLink data={item} />
              {/* <Link href={`/blog/${item.id}`}>
                <p>{item.title}</p>
                <p>{item.summary}</p>
                <p>{item.date}</p>
              </Link> */}
            </div>          
          ))}
      </section>
    </main>
  )
}
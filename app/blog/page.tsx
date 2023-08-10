import { blogPostMetadata, getPostMetadata } from "../_lib/blogPosts";
import Link from "next/link";

export default async function Directory() {
  //retrieve blogpost metadata and sort by date descending
  const blogPostMetadata = await getPostMetadata()
  .then((result): blogPostMetadata[] => {
    return result.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  });

  return (
    <main>
      <section className="flexCentered sectionFillPage">
        <h1>Blogpost</h1>
          {blogPostMetadata.map((item, index) => (
            <div key={index}>
              <Link href={`/blog/${item.id}`}>
                <p>{item.title}</p>
                <p>{item.summary}</p>
                <p>{item.date}</p>
              </Link>
            </div>          
          ))}
      </section>
    </main>
  )
}
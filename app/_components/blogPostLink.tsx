import Link from "next/link";
import { blogPostMetadata } from "../_lib/blogPosts";

export default function BlogPostLink( { data }: { data: blogPostMetadata } ) {
    return (
        <Link className="blogPostLink" href={`/blog/${data.id}`}>
            <div className="blogTitle">
                <p>{data.date}</p>
                <p>-</p>
                <p>{data.title}</p>
            </div>
            <p>{data.summary}</p>
            <p>{"Read More ->"}</p>
        </Link>
    )
}

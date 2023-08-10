import Link from "next/link";
import { blogPostMetadata } from "../_lib/blogPosts";

export default function BlogPostLink( { data }: { data: blogPostMetadata } ) {
    return (
        <Link href={`/blog/${data.id}`}>
            <p>{data.title}</p>
            <p>{data.summary}</p>
            <p>{data.date}</p>
        </Link>
    )
}
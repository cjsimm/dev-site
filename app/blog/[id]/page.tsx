import Link from "next/link";
import { getPostIDs, getPost } from "@/app/_lib/blogPosts";
import styles from './page.module.css';
export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
    const postData = await getPostIDs();
    console.log(postData);
    return postData.map((data) => ({
        id: data.id,
    }))
}

export const generateMetadata = async ({ params }: { params: { id: string } }) => {
    const post = await getPost(params.id);
    return {
        title: `${post.title}`,
        description: post.summary,
    }
};  


export default async function Post({ params }: { params: { id: string } }) {
    //retrieve post content to populate component
    const post = await getPost(params.id);
    return (
        <main>
                <Link className={styles.blogBack} href="/blog">{"/ Blog /"}</Link>
                <div className={styles.blogContainer}>
                    <div className={styles.blogHeader}>
                        <h1>{post.title}</h1>
                        <p>Posted {post.date}</p>
                        <p>By Christopher Simmons</p>
                    </div>
                    <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: post.text}} />
                </div>
       </main>
    )
}

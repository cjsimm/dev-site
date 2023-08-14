import { getPostIDs, getPost, blogPostMetadata, blogPost } from "@/app/_lib/blogPosts";
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

export default async function Post({ params }: { params: { id: string } }) {
    //retrieve post content to populate component
    const post = await getPost(params.id);
    return (
        <>
        <div className="sectionFillPage bgBlue">
            <div className={styles.blogContainer}>
                <div className={styles.blogHeader}>
                    <h1>{post.title}</h1>
                    <p>{post.date}</p>
                </div>
                <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: post.text}} />
            </div>
       </div>
       </>
    )
}
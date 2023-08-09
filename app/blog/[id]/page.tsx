import { getPostIDs, getPost, blogPostMetadata, blogPost } from "@/app/_lib/blogPosts";

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
        {/* <div className="sectionFillPage flexCentered bgBlue"> */}
            <h1>{post.title}</h1>
            <h2>{post.date}</h2>
            <h1>{post.summary}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.text}} />
       </>
    )
}
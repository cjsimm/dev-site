import path from "path";
import fs from "fs";
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export type blogPostID = string;

export interface blogPostMetadata {
    id: blogPostID,
    title: string,
    summary: string,
    date: string,
}
export interface blogPost extends blogPostMetadata {
    text: string
}

/* export type blogPost = {
    title: string,
    summary: string,
    date: string,
    text?: string
} */

const blogPostDirectory = path.join(process.cwd(), 'app/_blogposts');

//gets all ids (filenames) for all blogposts in the _blogposts directory
export async function getPostIDs(): Promise<{id: blogPostID}[]> {
    const filenames = fs.readdirSync(blogPostDirectory);
    return filenames.map((filename) => {
        return {
            id: filename.replace(/\.md$/, ''),
        };
    });
}

//gets metadata for all blogposts in file directory
export async function getPostMetadata(): Promise<blogPostMetadata[]> {
    return [{}]
}

//takes a blogpost title returned as an argument from getPostMetadata and retrieves/parses the blogpost for display on its generated dynamic route 
export async function getPost(id: string): Promise<blogPost> {
    const fullPath = path.join(blogPostDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // Use gray-matter to parse the post metadata section
     const matterResult = matter(fileContents);
    //convert markdown into html string
    const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
    const contentHtml = processedContent.toString();
    return { 
        id,
        text: contentHtml,
        ...matterResult.data as {title: string, summary: string, date: string}
    }
}


/* export async function getPostMeta() {
    return [{
        title: 'hello',
        date: '02-06-92',
        text: 'gay gay gay'
    },
    {
        title: 'lilya',
        date: '02-06-92',
        text: 'gay gay gay'
    }]
}

export function getPostContent(title: string): blogPost {
    //code here to return content based on passed title (will be same 
    //as dynamicpath)
    let data: blogPost;
    if (title === 'lilya') {
        data = {title: 'lilya', date: '02-06-92', text: 'gay gay gay'}
    } else if (title === 'hello') {
       data = {title: 'hello', date: '02-06-92', text: 'gay gay gay'}
    } else {
        data = {title: 'hello', date: '02-06-92', text: 'gay gay gay'}
    }
    return data;
} */
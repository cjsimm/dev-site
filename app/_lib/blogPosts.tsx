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

const blogPostDirectory = path.join(process.cwd(), 'app/_blogposts');

//gets all ids (filenames) for all blogposts in the _blogposts directory
export async function getPostIDs(): Promise<{id: blogPostID}[]> {
    const filenames = fs.readdirSync(blogPostDirectory);
    return filenames.map((filename): { id: blogPostID } => {
        return {
            id: filename.replace(/\.md$/, ''),
        };
    });
}

//gets metadata for all blogposts in file directory
export async function getPostMetadata(): Promise<blogPostMetadata[]> {
    const fileNames = fs.readdirSync(blogPostDirectory);
    return fileNames.map((fileName): blogPostMetadata => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');
        // Read markdown file as string
        const fullPath = path.join(blogPostDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
        // Combine the data with the id
        return {
        id,
        ...matterResult.data as {date: string, title: string, summary: string},
        };
    });
    // return posts sorted by date
/*     return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
        return 1;
        } else {
        return -1;
        }
    }); */
}

//sorts blogposts by date (can be expanded later to sort by other values)
export function sortPosts(postMetadata: blogPostMetadata[]): blogPostMetadata[] {
    return postMetadata.sort(
        (a, b) => {
            if (a.date < b.date) {
            return 1;
            } else {
            return -1;
            }
        }
    );
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

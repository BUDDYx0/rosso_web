import {PostMetadata} from "./PostMetadata";
import fs from "fs";
import matter from "gray-matter";

const getPostMetadata = () : PostMetadata[] => {
    const folder = "src/posts";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`src/posts/${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: new Date(matterResult.data.date), // Convert date string to Date object
            subtitle: matterResult.data.subtitle,
            type: matterResult.data.type,
            slug: fileName.replace(".md", ""),
        };
    });

    // Sort posts by date in descending order
    posts.sort((a, b) => b.date.getTime() - a.date.getTime());

    // Slice the array to get only the first 8 posts
    const limitedPosts = posts.slice(0, 8);

    return limitedPosts.map(post => ({
        ...post,
        date: post.date.toLocaleDateString(), // Format date to string
    }));
};

export default getPostMetadata;
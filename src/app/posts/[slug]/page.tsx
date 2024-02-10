import React from 'react';
import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from "gray-matter";

const getPostContent = (slug: string) => {
    const folder = "src/posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
}

const PostPage = (props: any) => {
    const slug  = props.params.slug;
    const post = getPostContent(slug);

    return (
        <section className={'flex justify-center m-auto text-neutral-200 py-32 px-3'}>
            <div
                className={'p-6 bg-neutral-950 rounded-lg outline outline-2 min-w-96 max-w-postContent outline-neutral-700 shadow-2xl drop-shadow-white-shadow prose prose-neutral prose-invert prose-images:rounded-lg list-disc'}>
                <p className={'text-4xl font-bold text-center'}>{post.data.title}</p>
                <div>
                    <Markdown>{post.content}</Markdown>
                </div>
            </div>
        </section>
    );
};

export default PostPage;
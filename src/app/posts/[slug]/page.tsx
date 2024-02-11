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
        <section className={'bg-post-bg bg-fixed bg-top flex justify-center m-auto text-neutral-200 py-32 px-3'}>
            <div
                className={'p-9 bg-neutral-950/85 backdrop-blur rounded-lg min-w-96 shadow-2xl ' +
                    'list-disc'}>
                <p className={'text-4xl font-bold text-center mb-9'}>{post.data.title}</p>
                <hr/>
                <div className={'prose-hr:border-white prose-a:text-rose-600 prose-img:rounded-lg prose-h1:text-rose-400 prose-h2:text-rose-500 prose prose-neutral prose-invert max-w-postContent'}>
                    <Markdown>{post.content}</Markdown>
                </div>
            </div>
        </section>
    );
};

export default PostPage;
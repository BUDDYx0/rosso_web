import React from 'react';
import fs from 'fs';
import Markdown from 'markdown-to-jsx';

const getPostContent = (slug: string) => {
    const folder = "src/posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    return content
}

const PostPage = (props: any) => {
    const slug  = props.params.slug;
    const content = getPostContent(slug);

    return (
        <section className={'flex justify-center m-auto text-neutral-200 py-32'}>
            <div className={'p-6 bg-neutral-950 rounded-lg outline outline-2 max-w-postContent outline-neutral-700 prose prose-neutral prose-invert prose-images:rounded-lg'}>
                <p className={'text-4xl font-bold'}>Test {slug}</p>
                <Markdown>{content}</Markdown>
            </div>
        </section>
    );
};

export default PostPage;
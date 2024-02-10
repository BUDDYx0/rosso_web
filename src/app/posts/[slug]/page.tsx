import React from 'react';
import fs from 'fs';

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
        <section className={'text-neutral-200 py-32'}>
            <p>Test {slug}</p>
            <p>{content}</p>
        </section>
    );
};

export default PostPage;
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import fs from 'fs';
import matter from 'gray-matter';
import {PostMetadata} from "../../../components/PostMetadata";

const getPostMetadata = () : PostMetadata[] => {
    const folder = "src/posts";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`src/posts/${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            type: matterResult.data.type,
            slug: fileName.replace(".md", ""),
        };
    });

    return posts;
};

const HomeNews = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        // eslint-disable-next-line react/jsx-key
        <Link href={`/posts/${post.slug}`}>
            <div className={'transition-all duration-300 w-80 h-96 max-h-96 relative rounded-lg bg-neutral-950 outline outline-2 outline-neutral-700 hover:shadow-2xl hover:drop-shadow-white-shadow hover:scale-95 hover:opacity-70 overflow-hidden'}>
                <div>
                    <Image
                        src={"/images/ban_events.png"}
                        alt={''}
                        width={700}
                        height={200}
                        quality={50}
                        className={'object-cover'}
                    />
                </div>
                <div className={'p-4'}>
                    <h5 className={'font-semibold text-lg'}>{post.title}</h5>
                    <p className={'text-neutral-400'}>{post.date}</p>
                    <p>{post.subtitle}</p>
                    <div className={'mt-3 absolute bottom-4'}>
                        <span className={'bg-rose-600 font-semibold p-1 rounded-lg'}>{post.type}</span>
                    </div>
                </div>
            </div>
        </Link>

    ))

    return (
        <section className={'text-neutral-200 py-32'}>
            <div className={'max-w-content w-auto m-auto'}>
                <h2 className={'text-center md:text-left font-bold text-4xl mb-6'}>Latest Updates</h2>
                <div className={'w-80 m-auto md:w-full sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-16 gap-y-5'}>
                    {postPreviews}
                </div>
            </div>
        </section>
    );
};

export default HomeNews;
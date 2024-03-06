import React from 'react';
import Image from "next/image";
import Link from "next/link";
import getPostMetadata from "../../../components/getPostMetadata";

interface ImageSources {
    [key: string]: string;
}

const imageSources : ImageSources = {
    EVENT: '/images/ban_events.png',
    INFO: '/images/ban_info.png',
    REVAMP: '/images/ban_revamp.png',
    TEASER: '/images/ban_teaser.png',
    UPDATE: '/images/ban_update.png',
    DEV: '/images/ban_dev.png',
}

interface TypeColors {
    [key: string]: string;
}

const typeColors : TypeColors = {
    EVENT: 'bg-rose-600',
    INFO: 'bg-blue-500',
    REVAMP: 'bg-amber-500',
    TEASER: 'bg-emerald-500',
    UPDATE: 'bg-pink-400',
    DEV: 'bg-purple-500',
}


const HomeNews = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <Link key={post.slug} href={`/posts/${post.slug}`}>
            <div className={'transition-all duration-300 my-6 md:my-0 w-80 h-96 max-h-96 relative rounded-lg bg-neutral-950/50 outline outline-2 outline-neutral-700 active:scale-95 active:opacity-70 md:hover:shadow-2xl md:hover:drop-shadow-white-shadow md:hover:scale-95 md:hover:opacity-70 overflow-hidden'}>
                <div>
                    <Image
                        src={imageSources[post.type] || '/images/ban_revamp.png'}
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
                        <span className={`${typeColors[post.type]} font-semibold p-1 rounded-lg`}>{post.type}</span>
                    </div>
                </div>
            </div>
        </Link>
    ))

    return (
        <section className={'text-neutral-200 py-16'}>
            <div className={'flex justify-center'}>
                <div className={'bg-neutral-950/60 border border-b-0 border-r-0 border-neutral-300 border-opacity-10 backdrop-blur-lg rounded-lg shadow-2xl p-12'}>
                    <h2 className={'text-center md:text-left font-bold text-4xl mb-6'}>Latest Updates</h2>
                    <div
                        className={'w-80 m-auto md:w-full sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-8'}>
                        {postPreviews}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeNews;
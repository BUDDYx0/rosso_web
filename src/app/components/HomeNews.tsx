import React from 'react';
import Image from "next/image";
import Link from "next/link";
import fs from 'fs';

const getPostMetadata = () => {
    const folder = "E:/rosso_web/src/posts";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
    const slugs = markdownPosts.map((file) => file.replace(".md", ""));
    return slugs;
};

const HomeNews = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((slug) => (
        <div>
            <h1>{slug}</h1>
        </div>
    ))

    return (
        <section className={'bg-main text-neutral-200 py-32'}>
            {postPreviews}
            <div className={'max-w-content w-auto m-auto'}>
                <h2 className={'text-center md:text-left font-bold text-4xl mb-6'}>Latest Updates</h2>
                <div className={'w-80 m-auto md:w-full sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-16 gap-y-5'}>
                    <div className={'transition-all duration-300 w-80 rounded-lg bg-neutral-950 outline outline-2 outline-neutral-700 hover:shadow-2xl hover:drop-shadow-white-shadow hover:scale-95 hover:opacity-70 overflow-hidden\t'}>
                        <div>
                            <Image
                                src="/img/ban_events.png"
                                alt={''}
                                width={700}
                                height={200}
                                className={'object-cover'}
                            />
                        </div>
                        <div className={'p-4'}>
                            <h5 className={'font-semibold text-lg'}>Winner, Winner, Chicken Dinner - PvP Tournament</h5>
                            <p className={'text-neutral-400'}>1/15/2024 3:07 PM</p>
                            <p className={''}>
                                It's time to slaughter! Participate at our GM's hosted tournament and receive some juicy
                                rewards!
                            </p>
                            <div className={'mt-3'}>
                                <span className={'bg-rose-600 font-semibold p-1 rounded-lg'}>EVENT</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeNews;
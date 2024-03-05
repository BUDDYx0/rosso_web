'use client'

import React from 'react';
import Image from "next/image";
import Link from "next/link";

const HomeEvents = () => {
    return (
        <section className={'py-32 text-white'}>
            <div className={'flex justify-center'}>
                <div className={'m-auto w-navbar-width bg-neutral-950/85 rounded-lg p-6'}>
                    <h2 className={'text-3xl font-bold mb-5 text-center md:text-left'}>JOIN US NOW</h2>
                    <div className={'flex justify-center'}>
                        <div className={'sm:grid grid-rows-2 lg:grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-5'}>
                            <div className={'relative col-span-2'}>
                                <Link href={'https://discord.gg/7qeatFqpjm'}
                                      target={'_blank'}>
                                    <Image src={'/images/download.png'}
                                           layout={'fill'}
                                           width={0}
                                           height={0}
                                           quality={70}
                                           sizes={'100vw'}
                                           className={'transition-all duration-300 hover:scale-95 rounded-lg object-cover w-full h-auto hover:brightness-75 hover:saturate-50 shadow-lg'}
                                           alt={'Download Client'}
                                    />
                                </Link>
                            </div>
                            <Link href={'https://discord.gg/7qeatFqpjm'}
                                  target={'_blank'}>
                                <Image src={'/images/discord_big.png'}
                                       width={300}
                                       height={300}
                                       quality={50}
                                       className={'transition-all duration-300 active:scale-95 md:hover:scale-95 mb-3 md:mb-0 rounded-lg object-cover' +
                                           'active:brightness-75 active:saturate-50 md:hover:brightness-75 md:hover:saturate-50 shadow-lg'}
                                       alt={'Join Discord'}
                                />
                            </Link>
                            <Link href={'https://discord.com/channels/1040290955330326528/1112657368883417108'}
                                  target={'_blank'}>
                                <Image src={'/images/donate_big.png'}
                                       width={300}
                                       height={300}
                                       quality={70}
                                       className={'transition-all duration-300 active:scale-95 md:hover:scale-95 mb-3 md:mb-0 rounded-lg object-cover' +
                                           'active:brightness-75 active:saturate-50 md:hover:brightness-75 md:hover:saturate-50 shadow-lg'}
                                       alt={'Donate now'}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeEvents;
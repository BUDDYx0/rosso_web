'use client'

import React from 'react';
import {motion} from 'framer-motion'
import Image from "next/image";
import Link from "next/link";

const HomeEvents = () => {
    return (
        <section className={'bg-main-bg py-32 text-white'}>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{
                    duration: 2
                }}
                className={'m-auto max-w-content'
            }>
                <div className={'p-3 rounded-lg'}>
                    <h2 className={'text-3xl font-bold mb-5'}>EVENTS & MORE</h2>
                    <div className={'flex justify-center'}>
                        <div className={'sm:grid grid-rows-2 lg:grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-5'}>
                            <div className={'relative col-span-2'}>
                                <Link href={'https://discord.gg/7qeatFqpjm'}
                                      target={'_blank'}>
                                    <Image src={'/img/download.png'}
                                           layout={'fill'}
                                           width={0}
                                           height={0}
                                           sizes={'100vw'}
                                           className={'transition-all duration-300 hover:scale-95 rounded-lg object-cover w-full h-auto hover:brightness-75 hover:saturate-50 shadow-lg'}
                                           alt={'Download Client'}
                                    />
                                </Link>
                            </div>
                            <Link href={'https://discord.gg/7qeatFqpjm'}
                                  target={'_blank'}>
                                <Image src={'/img/discord_big.png'}
                                       width={300}
                                       height={300}
                                       className={'transition-all duration-300 hover:scale-95 rounded-lg object-cover hover:brightness-75 hover:saturate-50 shadow-lg'}
                                       alt={'Join Discord'}
                                />
                            </Link>
                            <Link href={'https://discord.com/channels/1040290955330326528/1112657368883417108'}
                            target={'_blank'}>
                                <Image src={'/img/donate_big.png'}
                                       width={300}
                                       height={300}
                                       className={'transition-all duration-300 hover:scale-95 rounded-lg object-cover hover:brightness-75 hover:saturate-50 shadow-lg'}
                                       alt={'Donate now'}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default HomeEvents;
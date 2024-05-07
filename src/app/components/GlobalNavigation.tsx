'use client';

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import GlobalNavigationDownloadButton from "@/app/components/Buttons/GlobalNavigationDownloadButton";
import Image from "next/image";

const GlobalNavigation = () => {
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setIsNavVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <div
            className={`fixed w-auto max-w-navbar-width m-auto xl:mt-4 xl:w-[1165px] xl:rounded-lg bg-neutral-950/60 text-neutral-200 backdrop-blur-lg z-50 border border-b-0 border-r-0 border-neutral-300 border-opacity-10 shadow-2xl transition-transform duration-300 transform ${isNavVisible ? 'translate-y-0' : '-translate-y-96'}`}
            style={{left: '0', right: '0', display: 'flex', justifyContent: 'center'}}>
            <nav className={'flex justify-evenly h-auto items-center py-5 md:py-3 font-semibold space-x-64'}>
                <Link href={"../"} className={'invisible md:visible'}>
                    <Image src="/images/icon_solace_game_s_2-2.png" width={60} height={60} objectFit='contain' quality={100} alt={'PRLOGO'}
                           className={'w-0 md:w-auto'} style={{objectFit: "contain"}}/>
                </Link>
                <ul className={'flex justify-center gap-5 text-lg'}>
                    <Link href={"../"} legacyBehavior passHref>
                        <a>
                            <li>HOME</li>
                        </a>
                    </Link>
                    <Link href={"../"} legacyBehavior passHref>
                        <a>
                            <li>DONATE</li>
                        </a>
                    </Link>
                    <Link href={'https://discord.gg/7qeatFqpjm'} legacyBehavior passHref>
                        <a>
                            <li>COMMUNITY</li>
                        </a>
                    </Link>
                </ul>
                <div className={'invisible w-0 md:w-auto xl:visible'}>
                    <GlobalNavigationDownloadButton/>
                </div>
            </nav>
            <style jsx>{`
                ul {
                    display: flex;
                    justify-content: center;
                    text-align: center;
                }

                a {
                    position: relative;
                    color: inherit;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                a::before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #fff;
                    transition: width 0.3s ease;
                }

                a:hover::before {
                    width: 100%;
                }
            `}</style>
        </div>
    );
};

export default GlobalNavigation;

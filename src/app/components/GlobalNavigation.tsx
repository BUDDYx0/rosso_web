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
            className={`fixed w-auto max-w-navbar-width m-auto sm:mt-4 sm:rounded-lg bg-neutral-950/60 text-neutral-200 backdrop-blur-lg z-50 border border-b-0 border-r-0 border-neutral-300 border-opacity-10 shadow-2xl transition-transform duration-300 transform ${isNavVisible ? 'translate-y-0' : '-translate-y-96'}`}
            style={{left: '0', right: '0', display: 'flex', justifyContent: 'center'}}>
            <nav className={'flex justify-evenly h-auto items-center py-5 md:py-3 font-semibold space-x-64'}>
                <Link href={"../"} className={'invisible md:visible'}>
                    <Image src="/images/PR_short_logo.png" width={60} height={60} objectFit='contain' alt={'PRLOGO'}
                           className={'w-0 md:w-auto'}/>
                </Link>
                <ul className={'flex justify-center gap-5 text-lg'}>
                    <Link href={"../"}>
                        <li>HOME</li>
                    </Link>
                    <Link href={"../"}>
                        <li>DONATE</li>
                    </Link>
                    <Link href={'https://discord.gg/7qeatFqpjm'}>
                        <li>COMMUNITY</li>
                    </Link>
                </ul>
                <div className={'invisible w-0 md:w-auto md:visible'}>
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

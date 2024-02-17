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
        <div className={`fixed w-full bg-black/50 text-neutral-200 backdrop-blur-lg z-50 transition-transform duration-300 transform ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <nav className={'flex justify-evenly h-auto items-center py-3 font-semibold'}>
                <Link href={"../"} className={'invisible md:visible'}>
                    <Image src="/images/PR_short_logo.png" width={60} height={60} objectFit='contain' alt={'PRLOGO'} className={'w-0 md:w-auto'}/>
                </Link>
                <ul className={'flex justify-center gap-5 text-lg'}>
                    <Link href={"../"}><li>HOME</li></Link>
                    <Link href={"../"}><li>DONATE</li></Link>
                    <Link href={'https://discord.gg/7qeatFqpjm'}><li>COMMUNITY</li></Link>
                </ul>
                <div className={'invisible w-0 md:w-auto md:visible'}>
                    <GlobalNavigationDownloadButton/>
                </div>
            </nav>
        </div>
    );
};

export default GlobalNavigation;

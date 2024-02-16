import React from 'react';
import Link from "next/link";
import GlobalNavigationDownloadButton from "@/app/components/Buttons/GlobalNavigationDownloadButton";
import Image from "next/image";

const GlobalNavigation = () => {
    return (
        <div className={'w-full fixed bg-main/80 z-50 shadow-md'}>
            <nav className={'flex md:justify-around text-white h-auto items-center backdrop-blur px-16 shadow-xl py-2'}>
                <div className={'invisible md:visible'}>
                    <Link href={'../'}>
                        <Image src="/images/PR_short_logo.png" width={60} height={60}
                               objectFit='contain' alt={'PRLOGO'}/>
                    </Link>
                </div>
                <ul className={'flex -ml-5 md:-ml-0 space-x-10 md:gap-10 font-semibold py-4 px-8 rounded-3xl'}>
                    <Link href={'../'}
                          className={'transition-all duration-200 drop-shadow-lg hover:text-gray-300 hover:scale-95'}>
                        <li>HOME</li>
                    </Link>
                    <Link href={'https://discord.com/channels/1040290955330326528/1112657368883417108'}
                          className={'transition-all duration-200 drop-shadow-lg hover:text-gray-300 hover:scale-95'}
                          target={"_blank"}>
                        <li>DONATE</li>
                    </Link>
                    <Link href={'https://discord.gg/7qeatFqpjm'}
                          className={'transition-all duration-200 drop-shadow-lg hover:text-gray-300 hover:scale-95'}
                    target={'_blank'}>
                        <li>COMMUNITY</li>
                    </Link>
                </ul>
                <GlobalNavigationDownloadButton/>
            </nav>
        </div>
    );
};

export default GlobalNavigation;
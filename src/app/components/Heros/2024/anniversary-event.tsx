import React from 'react';
import Image from "next/image";
import Link from "next/link";

const AinRelease = () => {
    return (
        <div className={'flex justify-center'}>
            <Image
                src="/images/banner.png"
                alt={''}
                width={1920}
                height={900}
                quality={100}
                className={'rounded-lg max-w-content'}
            />
        </div>
    );
};

export default AinRelease;
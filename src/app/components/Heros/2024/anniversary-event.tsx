import React from 'react';
import Image from "next/image";
import Link from "next/link";

const AinRelease = () => {
    return (
        <div className={'w-full flex justify-center'}>
            <Image
                src="/images/banner.png"
                alt={''}
                width={5500}
                height={500}
                quality={80}
                className={'rounded-lg'}
            />
        </div>
    );
};

export default AinRelease;
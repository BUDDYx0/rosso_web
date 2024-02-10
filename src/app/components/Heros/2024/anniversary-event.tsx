import React from 'react';
import Image from "next/image";
import Link from "next/link";

const AinRelease = () => {
    return (
        <div className={'w-full flex justify-center pt-[72px]'}>
            <Image
                src="/img/anniversary_design_banner.png"
                alt={''}
                width={10000}
                height={500}
                className={'md:object-fill'}
            />
        </div>
    );
};

export default AinRelease;
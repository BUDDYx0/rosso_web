'use client';
import React from 'react';
import Image from "next/image";

const HomeHero = () => {
    return (
        <section className="flex justify-center pt-32">
            <Image src={'/images/project_zero_logo_rosso.png'} width={586} height={487} alt={'pr-logo'}/>
        </section>
    );
};

export default HomeHero;
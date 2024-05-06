'use client';
import React from 'react';
import Image from "next/image";

const HomeHero = () => {
    return (
        <section className="flex justify-center pt-32">
            <Image src={'/images/banner_launcher_solace_logo.png'} width={598} height={424} quality={100} alt={'solace-logo'}/>
        </section>
    );
};

export default HomeHero;
'use client';
import React, {useState} from 'react';
import Image from 'next/image'
import {motion, useScroll} from 'framer-motion'
import AinRelease from "@/app/components/Heros/2024/ain_release";
import AnniversaryEvent from "@/app/components/Heros/2024/anniversary-event";

const HomeHero = () => {
    const { scrollYProgress } = useScroll();

    return (
        <AnniversaryEvent/>
    );
};

export default HomeHero;
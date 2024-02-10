import React from 'react';
import {motion} from "framer-motion";
import Image from "next/image";

const AinRelease = () => {
    return (
        <div className={''}>
            <div className={'py-32 md:flex justify-evenly items-center h-screen overflow-hidden bg-ain-hero-bg bg-center bg-cover'}>
                <div className={'text-center drop-shadow-white-shadow'}>
                    <motion.h1
                        initial={{y: -100, opacity: 0}}
                        animate={{y: 0, opacity: 100}}
                        transition={{
                            type: 'tween',
                            duration: 2
                        }}
                        className={'text-5xl font-bold text-transparent bg-gradient-to-br from-teal-900 via-emerald-600 to-white bg-clip-text'}>
                        <span className={''}>Ain</span><br/>
                        The Emissary of the Goddess<br/>
                        <span className={'flex justify-center text-white text-2xl pt-4'}>
                            Coming Soon
                        </span>
                    </motion.h1>
                </div>
                <motion.div
                    initial={{y: -20}}
                    animate={{y: 0}}
                    transition={{
                        ease: "easeInOut",
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}>
                    <motion.div
                        initial={{y: 100, opacity: 0}}
                        animate={{y: 0, opacity: 100}}
                        transition={{
                            type: 'tween',
                            duration: 2
                        }}>
                        <Image src="/img/hero_ain.png"
                               width={700} height={700} alt={'Hero'}
                               className={'drop-shadow-hero-avatar'}/>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default AinRelease;
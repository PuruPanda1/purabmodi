import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

const socials = [
    { id: 0, link: "https://www.linkedin.com/in/purab-modi-4b1081209/" },
    { id: 1, link: "https://github.com/PuruPanda1" },
    { id: 2, link: "https://www.instagram.com/purab_here/" },
]

export default function Header() {
    return (
        <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 p-5 xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center'>

                {socials.map((item) => {
                    return (
                        <SocialIcon key={item.id} className='cursor-pointer' url={item.link}
                            fgColor='gray'
                            bgColor='transparent' />
                    )
                })}
            </motion.div>

            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className='flex flex-row items-center text-gray-400 cursor-pointer'>
                <SocialIcon network='email'
                    fgColor='gray'
                    bgColor='transparent' />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p>
            </motion.div >

        </header>
    );
}

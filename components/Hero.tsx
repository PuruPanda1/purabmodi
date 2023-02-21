import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

export default function Hero() {
    const [text, count] = useTypewriter({
        words: [
            "Purab Modi",
            "an Android Developer",
            "a FreeLancer :)",
            // "Software Engineer",
        ],
        loop: true,
        delaySpeed: 2000,
    }
    )
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img
                className='relative rounded-full h-32 w-32 mx-auto object-cover' 
                src="https://firebasestorage.googleapis.com/v0/b/bitsplease-c45fa.appspot.com/o/images%2Fpurabmodi.jpg?alt=media&token=49e97aac-6134-4bcb-9bff-7f0ca4046d84" alt="profile_photot" />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>
                    Software Engineer
                </h2>
                <h1 className='text-4xl lg:text-5xl font-semibold px-10'>
                    <span className='mr-1'>
                        {`Hi, I am ${text}`}
                    </span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>

                <div className='pt-5'>
                    <Link href='#about'>
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href='experience'>
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href='skills'>
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href='projects'>
                        <button className='heroButton'>Projects</button>
                    </Link>

                </div>
            </div>
        </div>
    );
}

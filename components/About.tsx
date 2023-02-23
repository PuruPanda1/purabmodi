import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}
            viewport={{
                once: true
            }}
            className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About
            </h3>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1.2,
                }}
                className='mb-10 mt-32 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg
                md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]'
                src='https://firebasestorage.googleapis.com/v0/b/bitsplease-c45fa.appspot.com/o/images%2Fpurabmodi.jpg?alt=media&token=49e97aac-6134-4bcb-9bff-7f0ca4046d84'
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-2xl md:text-4xl font-semibold text-center'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4>
                <p
                    className='text-[12px] text-center md:text-xl'>I am Purab Modi, You might also know me as PuruPanda1! I am currently pursuing my bachelors in Computer Science Engineering. I am looking forward to Mobile App Development as my main nice, as an mobile app developer and software engineer, I have a passion for technology and a love for problem-solving. I have a natural curiosity about how things work and enjoy exploring new technologies. <br /> In addition, I am a team player, with good communication and collaboration skills. I am able to work effectively with other developers, designers, product managers, and stakeholders to deliver successful projects. I am committed to continuous learning and staying up-to-date with the latest mobile development trends and best practices. </p>
            </div>

        </motion.div>
    );
}
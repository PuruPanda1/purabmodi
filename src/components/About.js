import React from 'react';
import ImageCarousel from './ImageCarousel';

import { motion } from 'framer-motion';
import { upAnimation,leftAnimation } from './Constant';

function About(props) {
  const images = [
    "/images/hero_image.jpg",
    "/images/pm_image_1.jpg",
    "/images/pm_image_2.jpg",
    "/images/pm_image_3.jpg",
  ]
  return (
    <div id='about' className='h-auto md:h-screen'>
      <motion.h1
        {...upAnimation}
        className=' font-sans pt-5 text-5xl from-stone-800 dark:text-white uppercase tracking-[20px] text-xl'>
        About
      </motion.h1>
      <div
        className='pt-6 flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center'
      >

        <ImageCarousel images={images} isAnimated={true} />


        <motion.div
          {...leftAnimation}
          className='space-y-6 px-0 md:px-10'>
          <h4 className='text-2xl md:text-4xl font-semibold text-center dark:text-white'>Here is a <span className='underline decoration-blue-500'>little</span> background</h4>
          <p
            className='font-sans dark:text-white text-[12px] md:text-base text-justify'>I am Purab Modi, a passionate software developer with expertise in Android development, Kotlin, Java, and full-stack development. Currently pursuing a Bachelor's in Computer Science Engineering at SAIT (CGPA: 9.0) and holding a diploma in Information Technology from Parul University (CGPA: 9.06).
            <br />
            <br />
            With over 2 years of experience in designing, developing, and launching mobile and web applications, I thrive on solving complex problems and delivering user-centric solutions. My portfolio includes conducting technical workshops, migrating legacy systems to modern frameworks, and optimizing applications for better performance and scalability.
            <br />
            <br />
            I am also keen on continuous learning, currently improving my skills in JavaScript and React, while bringing my creativity to life through technical projects like QuickHire and College Connect which you can checkout in my projects section.
            <br />
            <br />
            Beyond coding, I enjoy reading self-growth books and diving into finance content. I value teamwork, communication, and lifelong learning in every project I undertake.
            <br />
            <br />
            Let’s connect and create something incredible together!</p>
        </motion.div>
      </div>
    </div>
  )
}

About.propTypes = {

}

export default About


import React from 'react';
import ImageCarousel from './ImageCarousel';

import { motion } from 'framer-motion';
import { upAnimation, leftAnimation } from './Constant';

function About({ aboutText }) {
  const images = [
    "/images/hero_image.jpg",
    "/images/pm_image_1.jpg",
    "/images/pm_image_2.jpg",
    "/images/pm_image_3.jpg",
    "/images/pm_image_4.jpg",
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
          <p style={{ whiteSpace: "pre-line" }}
            className='font-sans dark:text-white text-[12px] md:text-base text-justify'>
            {aboutText}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

About.propTypes = {

}

export default About


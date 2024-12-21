import React from 'react'
import AboutBannerImage from './AboutBannerImage'
import FAQ from './FAQ'

function About(props) {
  return (
    <div>
      <AboutBannerImage/>
      <h1 className='font-sans pt-5 pb-5 text-5xl from-stone-800 dark:text-white'>FAQs</h1>
      <FAQ/>
    </div>
  )
}

About.propTypes = {

}

export default About


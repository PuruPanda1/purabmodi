import React from 'react'
import Hero from './Hero'
import Contact from './Contact';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
function Home({ data }) {
    return (
        <div className='bg-sky-50 dark:bg-gray-900'>
            <Hero heroData={data.hero} />

            <div className="container mx-auto ">
                <About aboutText={data.hero.about_me} />
                <Education educationData={data.education} />
                <Experience experienceData={data.experience} />
                <Projects />
                <Skills />
                <Contact />
            </div>
        </div>
    )
}



export default Home


import React from 'react'
import Hero from './Hero'
import Contact from './Contact';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
function Home() {
    return (
        <div className='bg-sky-50 dark:bg-gray-900'>
            <Hero />
  
            <div className="container mx-auto ">
                <About />
                <Education />
                <Experience />
                <Projects/>
                <Skills/>
                <Contact />
            </div>
        </div>
    )
}



export default Home


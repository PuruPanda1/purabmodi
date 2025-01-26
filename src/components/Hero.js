import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll'; // Importing from react-scroll
import InteractiveDiv from './InteractiveImage';
import HeroText from './HeroText';

function Hero({heroData}) {
    return (
        <div id='home' className="pt-16 bg-sky-50 dark:bg-gray-900 grid md:grid-cols-2 grid-cols-1 w-full mx-auto h-auto md:h-screen ">
            <div className="md:ml-40 sm:px-4 flex flex-col justify-center items-start p-4 leading-normal w-auto">
                <HeroText text_list={heroData.typewriter_text}/>
                <p className="mb-3 mt-2 text-start font-normal text-gray-700 dark:text-gray-400">
                    {heroData.hero_bio}
                </p>
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 mt-2">
                    {/* Get In Touch Button */}
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        type="button"
                        className="cursor-pointer text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-800 flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
                    >
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        Get In Touch
                    </Link>

                    {/* Download Resume Button */}
                    <a
                        href={heroData.resume_link} // Replace with your resume URL
                        download="My_Resume"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-3 text-center dark:text-black dark:bg-white dark:hover:bg-white dark:focus:ring-gray-600 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                    >
                        <FontAwesomeIcon icon={faDownload} className="mr-2" />
                        Download Resume
                    </a>
                </div>


                {/* Social Media Links */}
                <div className="flex space-x-6 mt-4">
                    {/* GitHub Link Icon */}
                    <a
                        href={heroData.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 dark:text-gray-200 transition transform duration-300 ease-in-out hover:scale-125"
                    >
                        <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
                    </a>

                    {/* LinkedIn Link Icon */}
                    <a
                        href={heroData.linkedin_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 dark:text-blue-400 transition transform duration-300 ease-in-out hover:scale-125"
                    >
                        <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
                    </a>

                    {/* Instagram Link Icon */}
                    <a
                        href={heroData.instagram_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-600 dark:text-pink-400 transition transform duration-300 ease-in-out hover:scale-125"
                    >
                        <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
                    </a>
                </div>



            </div>

            <InteractiveDiv imageLink={heroData.image_address}/>


        </div>
    )
}

export default Hero


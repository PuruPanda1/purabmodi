import React from 'react'
import { useNavigate } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Hero() {
    const navigate = useNavigate();
    return (
        <div className="bg-sky-50 dark:bg-gray-900 grid md:grid-cols-2 grid-cols-1 w-full mx-auto">
            <div className="md:ml-40 sm:px-4 flex flex-col justify-center items-start p-4 leading-normal w-auto">
                <h5 className="mb-2 text-5xl mt-5 md:mt-0 md:text-6xl text-start font-bold tracking-tight leading-tight text-gray-900 dark:text-white">Hello, I'm Purab Modi, a Software Engineer & Trainer</h5>
                <p className="mb-3 mt-2 text-start font-normal text-gray-700 dark:text-gray-400">I am a Freelance Software Engineer with 2+ years of experience, helping local businesses and startups bring their visions to life.</p>
                <div className="flex space-x-4 mt-2">
                    {/* Get In Touch Button */}
                    <button
                        onClick={() => navigate("/contact")}
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center"
                    >
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        Get In Touch
                    </button>

                    {/* Download Resume Button */}
                    <button
                        type="button"
                        className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-black dark:bg-white dark:hover:bg-gray-200 dark:focus:ring-gray-700"
                    >
                        <a
                            href="https://drive.google.com/file/d/1WtzsvLBRqVLG1RnCB_RRSltEieYqApYN/view?usp=drive_link"  // Replace with the path to your resume
                            download="My_Resume"  // The name the file will have when downloaded
                            style={{ textDecoration: 'none', color: 'inherit' }}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center"
                        >
                            <FontAwesomeIcon icon={faDownload} className="mr-2" />
                            Dowload Resume
                        </a>
                    </button>
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-6 mt-4">
                    {/* GitHub Link Icon */}
                    <a
                        href="https://github.com/PuruPanda1" // Replace with your GitHub profile URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                    >
                        <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
                    </a>

                    {/* LinkedIn Link Icon */}
                    <a
                        href="https://www.linkedin.com/in/purab-modi-4b1081209/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300"
                    >
                        <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
                    </a>

                    {/* Instagram Link Icon */}
                    <a
                        href="https://www.instagram.com/purab_here" // Replace with your Instagram profile URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-600 dark:text-pink-400 hover:text-pink-500 dark:hover:text-pink-300"
                    >
                        <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
                    </a>
                </div>


            </div>

            <div className='flex flex-col justify-start align-middle lg:p-10 md:p-5'>
                {/* Image Carousel Section */}
                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    transitionTime={500}
                    emulateTouch={true}
                    dynamicHeight={false}>

                    <div className="carousel-image-container rounded-lg overflow-hidden shadow-lg">
                        <img src={require(`../images/pm_image_1.jpg`)} alt="Image 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="carousel-image-container rounded-lg overflow-hidden shadow-lg">
                        <img src={require(`../images/pm_image_2.jpg`)} alt="Image 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="carousel-image-container rounded-lg overflow-hidden shadow-lg">
                        <img src={require(`../images/pm_image_3.jpg`)} alt="Image 3" className="w-full h-full object-cover" />
                    </div>
                </Carousel>
            </div>


        </div>
    )
}

export default Hero


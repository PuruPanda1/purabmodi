import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState } from 'react';
import { projects } from '../components/Constant';
import Slider from 'react-slick';
import Modal from './Modal';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

function CardLayout({isLargeScreen}) {

 

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    // Toggle modal visibility
    const openModal = (n) => {
        document.body.style.overflow = 'hidden';
        setIsModalOpen(true);
        setSelectedProject(projects[n]);
    };

    const closeModal = () => {
        document.body.style.overflow = '';
        setIsModalOpen(false);
    };

    const [selectedProject, setSelectedProject] = useState(projects[0]);

    return (
        <section className='container mx-auto mt-4 mb-4' >
            {isLargeScreen ? (
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-10'>
                    {projects.map((project, index) => (
                        <div>
                            <div key={index} className="cursor-pointer max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" onClick={() => { openModal(index) }}>
                                <div className="flex justify-center items-center">
                                    <DotLottieReact
                                        src={project.animation}
                                        loop
                                        autoplay
                                        style={{ height: '125px', width: '125px' }}
                                    />
                                </div>
                                <div className="pb-5 px-5">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>

                                    {/* Tech Stack */}
                                    {project.techStack && (
                                        <div className="mt-2">
                                            <strong className="text-sm text-gray-700 dark:text-gray-300">Tech Stack:</strong>
                                            <div className="flex flex-wrap gap-2 mt-1">
                                                {project.techStack.map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium py-1 px-3 rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>)
                : (
                    <Slider {...sliderSettings} >
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="cursor-pointer max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                                onClick={() => openModal(index)}
                            >
                                <div className="flex justify-center items-center">
                                    <DotLottieReact
                                        src={project.animation}
                                        loop
                                        autoplay
                                        style={{ height: '125px', width: '125px' }}
                                    />
                                </div>
                                <div className="pb-5 px-5">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {project.title}
                                    </h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>

                                    {/* Tech Stack */}
                                    {project.techStack && (
                                        <div className="mt-2">
                                            <strong className="text-sm text-gray-700 dark:text-gray-300">Tech Stack:</strong>
                                            <div className="flex flex-wrap gap-2 mt-1">
                                                {project.techStack.map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium py-1 px-3 rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </Slider>
                )}
                
            {/* Modal Sheet for details */}
            {isModalOpen && selectedProject && (
                <Modal selectedProject={selectedProject} closeModal={closeModal} />
            )}

        </section>

    )
}


export default CardLayout


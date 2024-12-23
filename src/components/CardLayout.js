import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState } from 'react';
import { projects } from '../components/Constant';
import ImageCarousel from './ImageCarousel';


function CardLayout(props) {

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
        <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-10">
            {/* Loop around the projects variable and generate cards */}
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
                    {/* Modal Sheet for details */}
                    {isModalOpen && selectedProject && (
                        <div
                            className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50 "
                            onClick={closeModal} // Close modal when clicking outside
                        >
                            <div
                                className="bg-white p-8 rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto relative"
                                onClick={(e) => e.stopPropagation()} // Prevent click propagation
                            >
                                <button
                                    className="absolute top-4 right-4 text-gray-500 dark:text-gray-400"
                                    onClick={closeModal}
                                >
                                    ×
                                </button>
                                <div className="flex flex-col md:flex-row gap-8">
                                    {/* Conditionally render carousel and text based on orientation */}
                                    {selectedProject.orientation === 'potrait' ? (
                                        <div className="flex flex-row gap-8">
                                            <div className="w-1/2">
                                                <ImageCarousel images={selectedProject.images} contain={true} />
                                            </div>
                                            <div className="w-1/2">

                                                <h3 className="text-4xl font-bold mt-6 text-center text-gray-900 dark:text-white relative inline-block">
                                                    {selectedProject.title}
                                                    <span className="absolute bottom-[-6px] left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></span>
                                                </h3>

                                                {/* Project Description */}
                                                <p className="text-lg text-gray-700 dark:text-gray-400 mt-4 leading-relaxed text-center max-w-3xl mx-auto">{selectedProject.long_desc}</p>

                                                {/* Project Objectives */}
                                                <div className="mt-6">
                                                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Project Objectives</h2>
                                                    <ul className="list-disc list-inside mt-4 space-y-2">
                                                        {selectedProject.objectives.map((objective, index) => (
                                                            <li key={index} className="text-gray-700 dark:text-gray-400 text-lg">{objective}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                {/* Tech Stack */}
                                                <div className="mt-4">
                                                    {selectedProject.techStack && (
                                                        <div className="mt-2">
                                                            <strong className="text-sm text-gray-700 dark:text-gray-300">Tech Stack:</strong>
                                                            <div className="flex flex-wrap justify-center gap-2 mt-1">
                                                                {selectedProject.techStack.map((tech, index) => (
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
                                    ) : (
                                        <div>
                                            <ImageCarousel images={selectedProject.images} contain={true} />

                                            {/* Project Title */}
                                            <h3 className="text-4xl font-bold mt-6 text-center text-gray-900 dark:text-white relative inline-block">
                                                {selectedProject.title}
                                                <span className="absolute bottom-[-6px] left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></span>
                                            </h3>

                                            {/* Project Description */}
                                            <p className="text-lg text-gray-700 dark:text-gray-400 mt-4 leading-relaxed text-center max-w-3xl mx-auto">{selectedProject.long_desc}</p>

                                            {/* Project Objectives */}
                                            <div className="mt-6">
                                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Project Objectives</h2>
                                                <ul className="list-disc list-inside mt-4 space-y-2">
                                                    {selectedProject.objectives.map((objective, index) => (
                                                        <li key={index} className="text-gray-700 dark:text-gray-400 text-lg">{objective}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Tech Stack */}
                                            <div className="mt-6">
                                                {selectedProject.techStack && (
                                                    <div className="mt-2">
                                                        <strong className="text-sm text-gray-700 dark:text-gray-300">Tech Stack:</strong>
                                                        <div className="flex flex-wrap justify-center gap-2 mt-1">
                                                            {selectedProject.techStack.map((tech, index) => (
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
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}

        </section>

    )
}


export default CardLayout


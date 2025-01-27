import React from "react";
import ImageCarousel from './ImageCarousel';

const Modal = ({ selectedProject, closeModal }) => {
    return (
        <div
            className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50"
            onClick={closeModal} // Close modal when clicking outside
        >
            <div
                className="bg-white p-8 rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto relative dark:bg-gray-800 dark:border-gray-700"
                onClick={(e) => e.stopPropagation()} // Prevent click propagation
            >
                <button
                    className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    onClick={closeModal}
                >
                    ×
                </button>
                <div className="flex flex-col md:flex-row gap-8">
                    {selectedProject.orientation === 'potrait' && window.innerWidth >= 1024
                        ? (
                            <div className="flex flex-row gap-8">
                                <div className="w-1/2">
                                    <ImageCarousel images={selectedProject.photos} contain={true} />
                                </div>
                                <div className="w-1/2">
                                    <h3 className="text-4xl font-bold mt-6 text-center text-gray-900 dark:text-white relative inline-block">
                                        {selectedProject.title}
                                        <span className="absolute bottom-[-6px] left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></span>
                                    </h3>

                                    <div className="mt-6">
                                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Project Objectives</h2>
                                        <ul className="list-disc list-inside mt-4 space-y-2">
                                            {selectedProject.objectives.map((objective, index) => (
                                                <li key={index} className="text-gray-700 dark:text-gray-400 text-lg">
                                                    {objective}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mt-4">
                                        {selectedProject.tech_stack && (
                                            <div className="mt-2">
                                                <strong className="text-sm text-gray-700 dark:text-gray-300">Tech Stack:</strong>
                                                <div className="flex flex-wrap justify-center gap-2 mt-1">
                                                    {selectedProject.tech_stack.map((tech, index) => (
                                                        <span
                                                            key={index}
                                                            className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium py-1 px-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
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
                                <ImageCarousel images={selectedProject.photos} contain={true} />

                                <h3 className="text-4xl font-bold mt-6 text-center text-gray-900 dark:text-white relative inline-block">
                                    {selectedProject.title}
                                    <span className="absolute bottom-[-6px] left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></span>
                                </h3>

                                <p className="text-lg text-gray-700 dark:text-gray-400 mt-4 leading-relaxed text-center max-w-3xl mx-auto">
                                    {selectedProject.long_desc}
                                </p>

                                <div className="mt-6">
                                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Project Objectives</h2>
                                    <ul className="list-disc list-inside mt-4 space-y-2">
                                        {selectedProject.objectives.map((objective, index) => (
                                            <li key={index} className="text-gray-700 dark:text-gray-400 text-lg">
                                                {objective}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-6">
                                    {selectedProject.tech_stack && (
                                        <div className="mt-2">
                                            <strong className="text-sm text-gray-700 dark:text-gray-300">Tech Stack:</strong>
                                            <div className="flex flex-wrap justify-center gap-2 mt-1">
                                                {selectedProject.tech_stack.map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium py-1 px-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
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
    );
};

export default Modal;

import React from "react";
import { motion } from "framer-motion";
import { upAnimation, leftAnimation } from "./Constant";
const Experience = ({ experienceData }) => {

    const len = experienceData.length;
    const experience1 = experienceData.slice(0, len / 2)
    const experience2 = experienceData.slice(len / 2, len)

    return (
        <div id='experience' className="h-auto md:h-screen">
            <motion.h1
                {...upAnimation}
                className=' font-sans pt-5 text-5xl from-stone-800 dark:text-white uppercase tracking-[20px] text-xl'>
                Experience
            </motion.h1>

            <div className="container mx-auto p-8 flex flex-col lg:flex-row gap-8">
                <div className="section flex-1">
                    <div className="timeline relative border-l-2 border-gray-300 mx-auto w-3/4">
                        {experience1.map((item, index) => (
                            <div className="timeline-item mb-6 relative" key={index}>
                                <div className="dot w-4 h-4 bg-blue-500 rounded-full border-2 border-white absolute -left-2.5 top-1"></div>
                                <motion.div
                                    {...leftAnimation}
                                    className="ml-8 card bg-white shadow-lg rounded-lg p-4 dark:bg-gray-800 dark:border-gray-700">
                                    <span className="year text-sm text-gray-500 block mb-2">{item.duration}</span>
                                    <h3 className="font-semibold text-lg text-black dark:text-white"><span className="text-blue-500">{item.title}</span> | {item.company}</h3>
                                    <div className="text-left text-black dark:text-gray-300">
                                        <ul className="list-disc ml-5 text-sm ">
                                            {item.description.map((desc, index) => (
                                                <li className="mb-2" key={index}>{desc}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="section flex-1">
                    <div className="timeline relative border-l-2 border-gray-300 mx-auto w-3/4">
                        {experience2.map((item, index) => (
                            <div className="timeline-item mb-6 relative" key={index}>
                                <div className="dot w-4 h-4 bg-blue-500 rounded-full border-2 border-white absolute -left-2.5 top-1"></div>
                                <motion.div
                                    {...leftAnimation}
                                    className=" ml-8 card bg-white shadow-lg rounded-lg p-4 dark:bg-gray-800 dark:border-gray-700">
                                    <span className="year text-sm text-gray-500 block mb-2">{item.duration}</span>
                                    <h3 className="font-semibold text-lg text-black dark:text-white"><span className="text-blue-500">{item.title}</span> | {item.company}</h3>
                                    <div className="text-left text-black dark:text-gray-300">
                                        <ul className="list-disc ml-5 text-sm ">
                                            {item.description.map((desc, index) => (
                                                <li className="mb-2" key={index}>{desc}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Experience;

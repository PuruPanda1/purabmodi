import React from "react";
import { motion } from "framer-motion";
import { upAnimation, leftAnimation } from "./Constant";

const Education = ({ educationData }) => {


    return (
        <div id='education' className="h-auto md:h-screen">
            <motion.h1
                {...upAnimation}
                className=' font-sans pt-5 text-5xl from-stone-800 dark:text-white uppercase tracking-[20px] text-xl'>
                Education
            </motion.h1>

            <div className="container lg:w-1/2 mx-auto p-8 flex flex-col lg:flex-row gap-8">
                <div className="section flex-1">
                    <div className="timeline relative border-l-2 border-gray-300 mx-auto w-3/4">
                        {educationData.map((item, index) => (
                            <div className="timeline-item mb-6 relative" key={index}>
                                <div className="dot w-4 h-4 bg-blue-500 rounded-full border-2 border-white absolute -left-2.5 top-1"></div>
                                <motion.div
                                    {...leftAnimation}
                                    className="ml-8 card bg-white shadow-lg rounded-lg p-4 dark:bg-gray-800 dark:border-gray-700">
                                    <span className="year text-sm text-gray-500 block mb-2">{item.duration}</span>
                                    <h3 className="font-semibold text-lg  "><span className="text-blue-500">{item.title}</span></h3>
                                    <div className="text-black dark:text-white">{item.school}</div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Education;

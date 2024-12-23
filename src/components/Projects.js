import React from "react";
import CardLayout from "./CardLayout";

const Projects = () => {

    return (
        <div id='projects' className="h-auto md:min-h-screen">
                <h1 id='projects' className='font-sans pt-5 pb-2 text-5xl from-stone-800 dark:text-white uppercase tracking-[20px] text-xl '>Projects</h1>
                <p className="font-light text-center font-sans text-gray-500 dark:text-gray-400 sm:text-xl">Click on Project for <span className='underline decoration-blue-500 decoration-4'>more details</span></p>
                <CardLayout/>
        </div>

    );
};

export default Projects;

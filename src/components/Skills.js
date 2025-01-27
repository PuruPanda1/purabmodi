import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";
import { upAnimation } from "./Constant";
const Skills = ({skillData}) => {

    return (
        <div id='skills' className="h-auto md:h-screen lg:w-1/2 mx-auto ">
            <motion.h1
                {...upAnimation}
                className=' font-sans pt-5 text-5xl from-stone-800 dark:text-white uppercase tracking-[20px] text-xl'>
                Skills
            </motion.h1>
            <p className="mt-1 font-light text-center font-sans text-gray-500 dark:text-gray-400 sm:text-xl">
                Hover on the skill for proficiency.</p>
            <div className="pt-4 grid grid-cols-3 md:grid-cols-4 gap-5">
                {skillData.map((item) => {
                    return (
                        <Skill key={item.id} skill={item} />
                    )
                })}

            </div>
        </div>

    );
};

export default Skills;

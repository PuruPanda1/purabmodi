import React from "react";
import Skill from "./Skill";
import { skills } from "./Constant";
const Skills = () => {

    return (
        <div className="h-auto md:h-screen lg:w-1/2 mx-auto ">
                <h1 id='skills' className='font-sans pt-5 pb-5 text-5xl from-stone-800 dark:text-white uppercase tracking-[20px] text-xl'>Skills</h1>
                <div className=" pt-2 grid grid-cols-3 md:grid-cols-4 gap-5">
                {skills.map((item) => {
                    return (
                        <Skill key={item.id} skill={item} />
                    )
                })}

            </div>
        </div>

    );
};

export default Skills;

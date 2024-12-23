import React from "react";

const Skill = ({skill}) => {

    return (
        <div className="group relative flex cursor-pointer:">
            <div
                className="rounded-full border border-gray-500 w-20 h-20 xl:w-28 xl:h-28 filter group-hover:grayscale items-center flex justify-center transition duration-300 ease-in-out">
                <img

                    className="object-contain p-4 w-16 h-16 xl:w-20 xl:h-20"
                    src={skill.photo}
                    alt="skill"
                />
                </div>
            <div className="justify-center items-center flex opacity-0 absolute  group-hover:opacity-70 w-20 h-20 xl:w-28 xl:h-28 rounded-full cursor-pointer duration-300 ease-in-out z-0 group-hover:bg-white">
                <p className="text-3xl font-bold text-black opacity-100">{skill.rate}</p>
            </div>
        </div>

    );
};

export default Skill;

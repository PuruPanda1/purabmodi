import React from "react";
import { motion } from "framer-motion";

export interface paramType {
    skillName: string,
    skillImage: string,
    rate: String,
    isLeft: Boolean,
}

export default function Skill(params: paramType) {
    return (
        <div className="group relative flex cursor-pointer:">
            <motion.div
                initial={{
                    x: params.isLeft ? -200 : 200,
                    opacity: 0
                }}
                animate={{
                    x: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 1,
                }}
                className="rounded-full border border-gray-500 w-20 h-20 xl:w-32 xl:h-32 filter group-hover:grayscale items-center flex justify-center transition duration-300 ease-in-out">
                <motion.img

                    className="object-contain p-4 w-16 h-16 xl:w-24 xl:h-24"
                    src={params.skillImage}
                />
            </motion.div

            >
            <div className="justify-center items-center flex opacity-0 absolute  group-hover:opacity-70 w-20 h-20 xl:w-32 xl:h-32 rounded-full cursor-pointer duration-300 ease-in-out z-0 group-hover:bg-white">
                <p className="text-3xl font-bold text-black opacity-100">{params.rate}</p>
            </div>
        </div>
    )
}
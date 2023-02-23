import React from "react";
import { motion } from "framer-motion";

export interface IAppProps {
    companyLogo: string,
    jobRole: String,
    companyName: String,
    date: String,
    summary: Summary[],
    techUsed: Technology[]
}

export interface Technology {
    id: number,
    name: string
}

export interface Summary {
    id: number,
    name: string
}

export default function ExperienceCard(props: IAppProps) {
    return (
        <article className="flex flex-col rounded-lg space-y-7 flex-shrink-0 items-center w-[500px] md:w-[500px] xl:w-[500px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                viewport={{
                    once: true
                }}
                className="h-32 w-32 mx-auto object-cover xl:w-[100px] xl:h-[100px] rounded-full object-center"
                src={`${props.companyLogo}`}
                alt="MenDoFeel"
            />
            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">{props.jobRole}</h4>
                <p className="font-bold text-2xl mt-1">{props.companyName}</p>
                <div className="flex space-x-2 my-2 mt-5">
                    {/* tech used */}
                    {props.techUsed.map((item) => {
                        return (
                            <img
                                key={item.id}
                                className="h-6 w-10 rounded-full"
                                src={item.name} alt="" />
                        )
                    })}

                </div>
                <p className="uppercase py-5 md:py-2 text-gray-300">Started .. ended ..</p>
                <ul className="list-disc space-y-4 ml-5 text-lg">
                    {props.summary.map((item) => {
                        return (
                            <li key={item.id}>{item.name}</li>
                        )
                    })}
                </ul>
            </div>
        </article>
    )
}
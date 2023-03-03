import React from "react";
import { motion } from "framer-motion";

export interface IAppProps {
    experience: Experience
}

export interface Experience {
    id:number,
    companyLogo: string,
    jobRole: string,
    companyName: string,
    startDate: string,
    endDate: string,
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
        <article className="flex flex-col rounded-lg space-y-7 flex-shrink-0 items-center w-[400px] md:w-[700px] xl:w-[700px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
                src={`${props.experience.companyLogo}`}
                alt="MenDoFeel"
            />
            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">{props.experience.jobRole}</h4>
                <p className="font-bold text-2xl mt-1">{props.experience.companyName}</p>
                <div className="flex space-x-2 my-2 mt-5 justify-center">
                    {/* tech used */}
                    {props.experience.techUsed.map((item) => {
                        return (
                            <img
                                key={item.id}
                                className="h-8 w-12 rounded-full"
                                src={item.name} alt="" />
                        )
                    })}

                </div>
                <p className="uppercase py-5 text-gray-300">{props.experience.startDate + ' - ' + props.experience.endDate}</p>
                <ul className="list-disc space-y-4 ml-5 text-lg">
                    {props.experience.summary.map((item) => {
                        return (
                            <li key={item.id}>{item.name}</li>
                        )
                    })}
                </ul>
            </div>
        </article>
    )
}
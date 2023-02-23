import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

export default function Skills() {

    const skills = [
        { id: 0, name: "Android", photo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Android_logo_2019_%28stacked%29.svg", rate: '90%', isLeft: true },
        { id: 1, name: "Kotlin", photo: "https://upload.wikimedia.org/wikipedia/commons/0/06/Kotlin_Icon.svg", rate: '90%', isLeft: true },
        { id: 2, name: "React Js", photo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", rate: '90%', isLeft: true },
        { id: 3, name: "JavaScript", photo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", rate: '90%', isLeft: true },
        { id: 4, name: "TypeScript", photo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg", rate: '90%', isLeft: false },
        { id: 5, name: "C++", photo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg", rate: '90%', isLeft: false },
        { id: 6, name: "Java", photo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg", rate: '90%', isLeft: false },
        { id: 7, name: "PHP", photo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg", rate: '90%', isLeft: false },
        { id: 8, name: "TailwindCSS", photo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", rate: '90%', isLeft: true },
        { id: 9, name: "Firebase", photo: "https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png", rate: '90%', isLeft: true },
        { id: 10, name: "MySQL", photo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg", rate: '90%', isLeft: true },
        { id: 11, name: "Git", photo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg", rate: '90%', isLeft: true },
    ]

    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}

            className='h-screen flex realtive overflow-hidden flex-col text-center md:text-left md:flex-row max-w-full px-10 justify-center mx-auto items-center relative'>
            <h3 className='absolute top-24 pl-4 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

            <h3
                className="top-36 uppercase tracking-[3px] text-sm text-gray-500 absolute"
            >Hover over a skill for profieciency</h3>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-5">
                {skills.map((item) => {
                    return (
                        <Skill key={item.id} skillName={item.name} skillImage={item.photo} rate={item.rate} isLeft={item.isLeft} />
                    )
                })}

            </div>

        </motion.div>
    )
}

import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';


const experiences = [
    {
        id: 0,
        jobRole: "Android Internship",
        companyName: 'MenDoFeel',
        startDate: 'Oct 2022',
        endDate: 'Dec 2022',
        summary: [
            { id: 0, name: "I worked as Android Intern there" },
            { id: 1, name: "I worked on the News Feature which shows snapping news." }
        ],
        techUsed: [
            { id: 0, name: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
            { id: 1, name: "https://upload.wikimedia.org/wikipedia/commons/0/06/Kotlin_Icon.svg" },
            { id: 2, name: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
            { id: 3, name: "https://upload.wikimedia.org/wikipedia/commons/6/64/Android_logo_2019_%28stacked%29.svg" },
        ],
        companyLogo: 'https://media.licdn.com/dms/image/C4E0BAQFDmTySWDMLyg/company-logo_200_200/0/1634421533475?e=1685577600&v=beta&t=x-VA55_WdEsN1PxjuplTbB8bY80hKjlR3h8Wb5JFXZc'
    },
    {
        id: 1,
        jobRole: "CRM Specialist",
        companyName: 'Byjus',
        startDate: 'Oct 2021',
        endDate: 'Dec 2021',
        summary: [
            { id: 0, name: "I worked as CRM Intern there" },
            { id: 1, name: "We use to handle new potential customers." }
        ],
        techUsed: [
            { id: 0, name: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Microsoft_Word_2013-2019_logo.svg" },
            { id: 1, name: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" },
            // { id: 2, name: "" },
        ],
        companyLogo: 'https://media.licdn.com/dms/image/C560BAQFT0ygNCprpAA/company-logo_200_200/0/1635141411869?e=1686182400&v=beta&t=2hzSxjtJV_beQC35NXtjfABKSNIjNrjjTubo01GnVHE'
    },
    {
        id: 2,
        jobRole: "Accountant",
        companyName: 'Siren Electronics ',
        startDate: 'Mar 2021',
        endDate: 'Sep 2021',
        summary: [
            { id: 0, name: "handling the accounts." },
            { id: 1, name: "Sales bills using Tally." },
            { id: 2, name: "Managing Final Accounts." },
        ],
        techUsed: [
            { id: 0, name: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Microsoft_Word_2013-2019_logo.svg" },
            { id: 1, name: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" },
        ],
        companyLogo: 'https://firebasestorage.googleapis.com/v0/b/photobackup-d2951.appspot.com/o/blank.png?alt=media&token=a2a9b8af-2938-4844-b221-5893392b31d2'
    },
]

export default function WorkExperience() {
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

            className='h-screen flex realtive overflow-hidden flex-col text-center md:flex-row max-w-full px-10 justify-center
        mx-auto items-center relative'>
            <h3 className='absolute top-24 pl-4 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>

            <div className='w-full flex space-x-5 md:mt-20 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                {
                    experiences.map((item)=>{
                        return (
                            <ExperienceCard key={item.id} experience={item} />
                        )
                    })
                }
            </div>
        </motion.div>
    )
}
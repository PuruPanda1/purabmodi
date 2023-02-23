import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';


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

            className='h-screen flex realtive overflow-hidden flex-col text-center md:text-left md:flex-row max-w-full px-10 justify-evenly
        mx-auto items-center relative'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>

            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
                <ExperienceCard jobRole={"Android Internship"} companyName={"MenDoFeel"} date={'22-10-2021'} summary={[
                    {id:0,name:"I worked as Android Intern there"},
                    {id:1,name:"Hey my name is Purab Modi"}
                ]}
                    techUsed={[
                        {id:0,name:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"},
                    ]}
                    companyLogo={'https://lh5.googleusercontent.com/-RFU4aC_MzWU/AAAAAAAAAAI/AAAAAAAAAAA/uQZsaAqp_a4/s48-p-k-no-ns-nd/photo.jpg'}
                />
                <ExperienceCard jobRole={"Accountant"} companyName={"Siren Electronics"} date={'22-10-2021'} summary={[
                    {id:0,name:"handling the accounts."},
                    {id:1,name:"Sales bills using Tally."},
                    {id:2,name:"Managing Final Accounts."},
                ]}
                    techUsed={[
                        {id:0,name:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"},
                    ]}
                    companyLogo={'https://lh5.googleusercontent.com/-RFU4aC_MzWU/AAAAAAAAAAI/AAAAAAAAAAA/uQZsaAqp_a4/s48-p-k-no-ns-nd/photo.jpg'}
                />
            </div>
        </motion.div>
    )
}
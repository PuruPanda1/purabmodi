import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
    const projects = [
        { id: 0, name: "BudgetWise", desc: "This is one of the best money management apps which you can find in playstore. Whether you are a student, a salaried employee, a business person or a person who wants to manage their expenses then this application will help you to manage and track your expenses on the go", link: "https://play.google.com/store/apps/details?id=com.purabmodi.payment&hl=en&gl=US", photo: "https://play-lh.googleusercontent.com/PKDcyN1UvmexM3yc37wB_BL9r6urewMlK2LMY-r3ZTKwWI2Fxvsocp2mmELmv0UXcg=w416-h235-rw" },
        { id: 1, name: "CovidSmasher", desc: "An android application to fight against Covid", link: "https://github.com/PuruPanda1/CovidSmasherAndroidApp", photo: "https://play-lh.googleusercontent.com/PKDcyN1UvmexM3yc37wB_BL9r6urewMlK2LMY-r3ZTKwWI2Fxvsocp2mmELmv0UXcg=w416-h235-rw" },
        { id: 2, name: "Food Canteen", desc: "a php based website made for food canteen to manage canteen orders.", link: "https://github.com/PuruPanda1/foodcanteen", photo: "https://play-lh.googleusercontent.com/PKDcyN1UvmexM3yc37wB_BL9r6urewMlK2LMY-r3ZTKwWI2Fxvsocp2mmELmv0UXcg=w416-h235-rw" },
        // {id:3,name:"CovidSmasher",desc:"An android application to fight against Covid",link:"https://github.com/PuruPanda1/CovidSmasherAndroidApp",photo:""},
        // {id:4,name:"CovidSmasher",desc:"An android application to fight against Covid",link:"https://github.com/PuruPanda1/CovidSmasherAndroidApp",photo:""},
        // {id:5,name:"CovidSmasher",desc:"An android application to fight against Covid",link:"https://github.com/PuruPanda1/CovidSmasherAndroidApp",photo:""},
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
            <h3 className='absolute pl-4 top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
                {projects.map((item) => {
                    return (
                        <div key={item.id} className="mt-10 w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                            <motion.img
                                initial={{
                                    opacity: 0,
                                    y: -200,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    duration: 1.2
                                }}
                                viewport={{
                                    once: true
                                }}
                                src={item.photo} alt="project image" />
                            <div className="space-y-5 px-0 md:px-10 max-w-6xl">
                                <h4 className="text-4xl font-semibold text-center underline decoration-[#F7AB0A]/50">
                                    {item.name}
                                </h4>
                                <p className="text-sm md:text-lg text-center md:text-left">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />

        </motion.div>
    )
}
import React from "react";

const Education = () => {
    const education = [
        {
            year: "2022 - 2025",
            title: "Bachelor's Degree in Computer Science & Engineering",
            description: "Sambhram Institute of Technology, Bangalore, India"
        },
        {
            year: "2019 - 2022",
            title: "Diploma in Information Technology",
            description: "Parul Polytechnic Institute, Vadodara, India"
        },
        {
            year: "2019",
            title: "Class 10th (WBSE)",
            description: "The Calcutta Anglo Gujarati School, Kolkata, India"
        }
    ];


    return (
        <div className="h-auto md:h-screen">
            <h1 id='education' className='font-sans pt-5 text-5xl from-stone-800 dark:text-white uppercase tracking-[20px] text-xl'>Education</h1>

            <div className="container lg:w-1/2 mx-auto p-8 flex flex-col lg:flex-row gap-8">
                <div className="section flex-1">
                    <div className="timeline relative border-l-2 border-gray-300 mx-auto w-3/4">
                        {education.map((item, index) => (
                            <div className="timeline-item mb-6 relative" key={index}>
                                <div className="dot w-4 h-4 bg-blue-500 rounded-full border-2 border-white absolute -left-2.5 top-1"></div>
                                <div className="ml-8 card bg-white shadow-lg rounded-lg p-4 dark:bg-gray-800 dark:border-gray-700">
                                    <span className="year text-sm text-gray-500 block mb-2">{item.year}</span>
                                    <h3 className="font-semibold text-lg  "><span className="text-blue-500">{item.title}</span></h3>
                                    <div className="text-black dark:text-white">{item.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Education;

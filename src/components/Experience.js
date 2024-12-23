import React from "react";

const Experience = () => {
    const experience1 = [
        {
            year: "Mar '19 - Present",
            title: "SOFTWARE DEVELOPER & TRAINER | Independent Contractor",
            description: (
                <ul className="list-disc ml-5 text-sm text-gray-600">
                    <li className="mb-2">Conducted a Full Stack Development workshop for 100+ diploma students, covering HTML, CSS, JavaScript, JSP.</li>
                    <li className="mb-2">Designed and launched over 10 custom websites and mobile applications for small businesses.</li>
                    <li className="mb-2">Developed projects for Final-year Indian Students and International Students.</li>
                    <li className="mb-2">Managed end-to-end project life-cycles, ensuring timely delivery within budget.</li>
                </ul>
            )
        },
        {
            year: "Mar '24 - Jun '24",
            title: "DIVE IN 2 DIGITAL | Android Developer Internship",
            description: (
                <ul className="list-disc ml-5 text-sm text-gray-600">
                    <li className="mb-2">Contributed to more than 4 android applications.</li>
                    <li className="mb-2">Increased client retention by 35% by optimizing API calls.</li>
                    <li className="mb-2">Integrated payment gateways for secure and seamless transactions.</li>
                </ul>
            )
        },

    ];
    const experience2 = [
        {
            year: "Oct '22 - Dec '22",
            title: "MENDOFEEL CO. | Android Developer Internship",
            description: (
                <ul className="list-disc ml-5 text-sm text-gray-600">
                    <li className="mb-2">Migrated 70% of code-base from Java to Kotlin code.</li>
                    <li className="mb-2">Developed Reels-like news feature to increase user time by 50%.</li>
                    <li className="mb-2">Implemented MVVM Architecture with Repository pattern for better performance.</li>
                </ul>
            )
        },
        {
            year: "Oct '21 - Dec '21",
            title: "BYJUS | Marketing Intern",
            description: (
                <ul className="list-disc ml-5 text-sm text-gray-600">
                    <li className="mb-2">Learned about generating leads</li>
                    <li className="mb-2">Generated more than 100+ leads during my internship.</li>
                </ul>
            )
        },
        {
            year: "Mar '21 - Aug '21",
            title: "SIREN ELECTRICALS CAL | Accountant",
            description: (
                <ul className="list-disc ml-5 text-sm text-gray-600">
                    <li className="mb-2">Prepared and analyzed monthly and annual financial statements</li>
                </ul>
            )
        },
    ];

    return (
        <div className="h-auto md:h-screen">
            <h1 id='experience' className='font-sans pt-5 text-5xl from-stone-800 dark:text-white uppercase tracking-[20px] text-xl'>Experience</h1>

            <div className="container mx-auto p-8 flex flex-col lg:flex-row gap-8">
                <div className="section flex-1">
                    <div className="timeline relative border-l-2 border-gray-300 mx-auto w-3/4">
                        {experience1.map((item, index) => (
                            <div className="timeline-item mb-6 relative" key={index}>
                                <div className="dot w-4 h-4 bg-blue-500 rounded-full border-2 border-white absolute -left-2.5 top-1"></div>
                                <div className="ml-8 card bg-white shadow-lg rounded-lg p-4">
                                    <span className="year text-sm text-gray-500 block mb-2">{item.year}</span>
                                    <h3 className="font-semibold text-lg">{item.title}</h3>
                                    <div className="text-left">{item.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="section flex-1">
                    <div className="timeline relative border-l-2 border-gray-300 mx-auto w-3/4">
                        {experience2.map((item, index) => (
                            <div className="timeline-item mb-6 relative" key={index}>
                                <div className="dot w-4 h-4 bg-blue-500 rounded-full border-2 border-white absolute -left-2.5 top-1"></div>
                                <div className="ml-8 ard bg-white shadow-lg rounded-lg p-4">
                                    <span className="year text-sm text-gray-500 block mb-2">{item.year}</span>
                                    <h3 className="font-semibold text-lg">{item.title}</h3>
                                    <div className="text-left">{item.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Experience;

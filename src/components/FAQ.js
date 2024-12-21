import React from 'react'
import { Link } from 'react-router-dom'

const faqs1 = [
    { id: 0, question: 'What is BitsPlease?', answer: 'BitsPlease Technical club is a community of passionate individuals who share a common interest in the field of technology. We strive to create a platform for members to learn, share ideas, and collaborate on various technical projects. Our mission is to foster an environment where members can hone their technical skills and develop a deep understanding of the latest trends and advancements in technology.' },
    { id: 1, question: 'Who can join BitsPlease?', answer: 'Our club is open to anyone who is interested in technology, regardless of their level of experience. We welcome beginners who are looking to learn and experts who are looking to share their knowledge and experience with others.' },
    { id: 2, question: 'How does BitsPlease work?', answer: 'Our club holds regular meetings and events where members can interact and network with each other. We also organize workshops, seminars, and training sessions on a range of technical topics. These sessions are designed to provide members with hands-on experience and practical knowledge that they can apply in their daily lives.' },
]

const faqs2 = [
    { id: 3, question: 'Does BitsPlease have an online portal?', answer: 'In addition to our regular meetings and events, our club is also working on an online community where members can connect, share ideas, and collaborate on projects. Our online platform would be designed to provide members with a seamless and interactive experience, allowing them to connect with each other from anywhere in the world.' },
    { id: 4, question: 'What is the main Goal of BitsPlease?', answer: 'At our club, we are committed to promoting diversity, inclusivity, and equality. We believe that everyone should have equal opportunities to learn and grow, and we strive to create an environment that is welcoming and supportive of all members.' },
    { id: 5, question: 'How can BitsPlease help me?', answer: 'BitsPlease will provide you a platform where you can discuss about your projects, goals and work on your skills which will help you to become a better Software developer. BitsPlease also helps you improve not only your technical skills but also your soft skills by introducing you to the open world.' },
]

function FAQ() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="pb-8 px-4 mx-auto max-w-screen-xl sm:pb-16 lg:px-6">
                <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                    <div>
                        {faqs1.map((item) => {
                            return (
                                <div key={item.id} className="mb-10">
                                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                                        {item.question}
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">{item.answer}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        {faqs2.map((item) => {
                            return (
                                <div key={item.id} className="mb-10">
                                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                                        {item.question}
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">{item.answer}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ


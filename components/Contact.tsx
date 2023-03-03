import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";
import { sendContactForm } from "@/utils/api";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function Contact() {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (formData) => {
        console.log(formData)
        await sendContactForm(formData)
        // window.location.href = `mailto:purabdev2002@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`
    };
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
            viewport={{
                once: true
            }}
            className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 pl-4 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

            <div className="mt-10 md:mt-0 flex flex-col space-y-5">
                <h4 className="text-2xl md:text-3xl font-semibold text-center">
                    I have got just what you need.{" "}
                    <span className="decoration-[#F7AB0A] underline">Lets Talk</span>
                </h4>

                <div className="space-y-1 md:space-y-2">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p>+91 9073893382</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p>purabdev2002@gmail.com</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p>Banglore, India</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                    <div className="space-y-2 space-x-0 md:space-y-0 md:space-x-2 flex flex-col md:flex-row">
                        <input {...register('name')} className="contactInput" type="text" placeholder="Name" />
                        <input {...register('email')} className="contactInput" type="email" placeholder="Email" />
                    </div>
                    <input {...register('subject')} className="contactInput" type="text" placeholder="Subject" />
                    <textarea {...register('message')} className="contactInput" placeholder="Message" />
                    <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
                </form>

            </div>

        </motion.div>
    )
}
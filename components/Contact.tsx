import React, { useEffect, useState } from "react";
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
    const [Loading, setLoading] = useState(false);
    const [isSubmit, setSubmit] = useState(false);
    const {
        register,
        reset,
        handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (formData) => {
        setLoading(true)
        await sendContactForm(formData)
        window.setTimeout(() => {
            setLoading(false)
            setSubmit(true);
        }, 1000)
        // window.location.href = `mailto:purabdev2002@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`
    };

    useEffect(()=>{
        if (isSubmit) {
          reset();
          setSubmit(false);
        }
      }, [isSubmit, reset]);
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

                <form onSubmit={handleSubmit(onSubmit)} id='contact-form' className="flex flex-col space-y-2 w-fit mx-auto">
                    <div className="space-y-2 space-x-0 md:space-y-0 md:space-x-2 flex flex-col md:flex-row">
                        <input {...register('name')} required className="contactInput" type="text" placeholder="Name" />
                        <input {...register('email')} required className="contactInput" type="email" placeholder="Email" />
                    </div>
                    <input {...register('subject')} required className="contactInput" type="text" placeholder="Subject" />
                    <textarea {...register('message')} required className="contactInput" placeholder="Message" />
                    <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
                        {Loading ?
                            <svg className="w-7 h-7 text-black animate-spin flex justify-center items-center text-center mx-auto" fill="none"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle className="opacity-25 " cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path className="opacity-75"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    fill="currentColor"></path>
                            </svg>
                            : 'Submit'}
                    </button>
                </form>

            </div>

        </motion.div>
    )
}
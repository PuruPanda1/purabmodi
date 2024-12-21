import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useNavigate } from 'react-router-dom';

function AboutBannerImage(props) {
    const navigate = useNavigate();
    return (
        <div className="w-full h-screen bg-sky-50 dark:bg-gray-900 flex items-start">
            <div className="dark:bg-gray-900 container mx-auto flex flex-col justify-between bg-sky-50 md:flex-col w-full p-10">
                <div className="sm:px-4 flex flex-col justify-center items-center p-4 leading-normal w-auto">
                    <h5 className="mb-2 text-3xl md:text-6xl w-auto text-center font-mono tracking-tight leading-tight text-gray-900 dark:text-white">BitsPlease - The Technical Club</h5>
                </div>
            </div>

        </div>
    )
}

export default AboutBannerImage


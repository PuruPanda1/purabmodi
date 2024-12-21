import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useNavigate } from 'react-router-dom';

function BannerImage() {
    const navigate = useNavigate();
    return (
        <div className="bg-sky-50 dark:bg-gray-900 grid md:grid-cols-2 grid-cols-1 w-full mx-auto">
            <div className="md:ml-40 sm:px-4 flex flex-col justify-center items-start p-4 leading-normal w-auto">
                <h5 className="mb-2 text-5xl mt-5 md:mt-0 md:text-6xl text-start font-bold tracking-tight leading-tight text-gray-900 dark:text-white">Grow your skillset <br /> by joining BitsPlease</h5>
                <p className="mb-3 text-start font-normal text-gray-700 dark:text-gray-400">The one and only Technical Club of Sambhram Institute of Technology</p>
                <button onClick={() => navigate("/join")} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Join Now</button>
            </div>

            <Player
                className='flex flex-col justify-start align-middle lg:p-10 md:p-5'
                autoplay
                loop
                src="https://assets7.lottiefiles.com/packages/lf20_ljotbiif.json"
            >

                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />

            </Player>
        </div>
    )
}

export default BannerImage


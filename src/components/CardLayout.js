import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player'

function CardLayout(props) {
    return (
        <section className='container mx-auto flex flex-col justify-center  md:flex-row w-full p-10 gap-5'>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#"  style={{marginBottom: '-20px'}}>
                    <Player
                        autoplay
                        loop
                        src="https://assets3.lottiefiles.com/packages/lf20_w51pcehl.json"
                        style={{ height: '125px', width: '100%' }}
                    >

                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />

                    </Player>
                </a>
                <div className="pb-5 px-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hands On Sessions</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <Player
                        autoplay
                        loop
                        src="https://assets8.lottiefiles.com/packages/lf20_UtkD3sPBCg.json"
                        style={{ height: '125px', width: '100%' }}
                    >

                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />

                    </Player>
                </a>
                <div className="pb-5 px-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">TedTalks/ Seminars</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <Player
                        autoplay
                        loop
                        src="https://assets3.lottiefiles.com/private_files/lf30_k0wpj0cx.json"
                        style={{ height: '125px', width: '100%' }}
                    >

                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />

                    </Player>
                </a>
                <div className="pb-5 px-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Workshops</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <Player
                        autoplay
                        loop
                        src="https://assets4.lottiefiles.com/packages/lf20_2glqweqs.json"
                        style={{ height: '125px', width: '100%' }}
                    >

                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />

                    </Player>
                </a>
                <div className="pb-5 px-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Certified Courses</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                </div>
            </div>

        </section>
    )
}


export default CardLayout


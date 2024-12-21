import React from 'react'
import CardLayout from './CardLayout';
import UpcomingEventLayout from './UpcomingEventLayout';
import OrganizerLayout from './OrganizerLayout';
import FAQ from './FAQ';
import Hero from './Hero'

function Home() {
    return (
        <div>
            <Hero />
            <div className="container mx-auto ">
                <h1 className='font-sans pt-10 text-5xl from-stone-800 dark:text-white'>Perks of Joining BitsPlease</h1>
                <CardLayout />
                <h1 className='font-sans pb-10 text-5xl from-stone-800 dark:text-white'>Upcoming Events</h1>
                <UpcomingEventLayout />
                <h1 className='font-sans pb-10 text-5xl from-stone-800 dark:text-white'>Organizers</h1>
                <OrganizerLayout />
                <h1 className='font-sans pt-5 pb-5 text-5xl from-stone-800 dark:text-white'>FAQs</h1>
                <FAQ />
            </div>
        </div>
    )
}



export default Home


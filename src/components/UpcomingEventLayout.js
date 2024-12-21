import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../config/firebase';
import EventCard from './EventCard'


function UpcomingEventLayout() {
    const [events, setEvents] = useState([]);
    const eventCollection = collection(db, "events");

    // useEffect(() => {
    //     const getEvents = async () => {
    //         const data = await getDocs(eventCollection);
    //         setEvents(data.docs.map((doc) => ({
    //             ...doc.data(),
    //             id: doc.id
    //         })));
    //     };
    //     getEvents();
    // });

    const eventComponent = events.map((event) => <EventCard key={event.id} name={event.name} date={event.date} photo={event.photo} desc={event.desc} />)

    return (
        <div>
            <section className='container mx-auto flex flex-col flex-wrap justify-start md:flex-row'>
                {eventComponent}
            </section>
        </div>
    )
}

export default UpcomingEventLayout


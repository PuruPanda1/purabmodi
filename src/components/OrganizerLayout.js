import React, { useState, useEffect } from 'react'
import { db, storage } from '../config/firebase';
import ProfileCard from './ProfileCard'
import { collection, getDocs } from "firebase/firestore";
import 'firebase/storage';
import { ref, getDownloadURL } from 'firebase/storage';
import { async } from '@firebase/util';

function OrganizerLayout() {
    const [members, setMembers] = useState([]);
    const memberDb = collection(db, "members");

    useEffect(() => {

        const getMembers = async () => {
            const data = await getDocs(memberDb);
            setMembers(data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            })));
        };

        getMembers();
    }, [])

    const organizersComponent = members.map((dev) => <ProfileCard key={dev.id} name={dev.name} link={dev.link} position={dev.position} photo={dev.photo} />)

    return (
        <section className='container mx-auto flex flex-col flex-wrap justify-center md:flex-row'>
            {organizersComponent}
        </section>
    )
}


export default OrganizerLayout


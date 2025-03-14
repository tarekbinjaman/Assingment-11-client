import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import { Helmet } from 'react-helmet-async';

const Service = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://server-side-cyan-beta.vercel.app/services', {
            method: 'GET',
            credentials: 'include', // Include credentials to send cookies
        })
        .then(res => res.json())
        .then(dat => {
            setData(dat)
            // console.log(dat)
        })
    },[])
    return (
        <div className='flex justify-center'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:p-24 lg:pt-0 p-10 place-items-center'>
            <Helmet><title>Services</title></Helmet>
            {
                data.map(services => <ServiceCard key={services._id} services={services}></ServiceCard>)
            }
        </div>
        </div>
    );
};

export default Service;
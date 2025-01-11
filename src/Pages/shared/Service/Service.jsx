import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import { Helmet } from 'react-helmet-async';

const Service = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(dat => {
            setData(dat)
            console.log(dat)
        })
    },[])
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:p-24 lg:pt-0 p-10 place-items-center'>
            <Helmet><title>Services</title></Helmet>
            {
                data.map(services => <ServiceCard key={services._id} services={services}></ServiceCard>)
            }
        </div>
    );
};

export default Service;
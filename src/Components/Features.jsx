import React, { useEffect, useState } from 'react';
import Card from '../Pages/shared/Home/cards/Card';

const Features = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://server-side-cyan-beta.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    const sortServices = [...services].sort((a, b) => b.price - a.price );
    const displayServicess = sortServices.slice(0, 8);
    return (
        <div>
            <h1 className='text-2xl font-bold text-center mt-16 mb-6'><span className=' border-r-4 border-l-4 border-blue-400 px-3'>Our best jobs</span></h1>
            <div className='flex justify-center'>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-x-4 gap-y-3 lg:p-24 lg:pt-0 p-10 place-items-center'>
                {
                    displayServicess.map(service => (
                        <div key={service._id} className="flex justify-center"> {/* Align cards in the center */}
                            <Card service={service} />
                        </div>
                    ))
                }
            </div>
            </div>
        </div>
    );
};

export default Features;
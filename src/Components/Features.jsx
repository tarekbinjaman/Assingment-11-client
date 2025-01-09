import React, { useEffect, useState } from 'react';
import Card from '../Pages/shared/Home/cards/Card';

const Features = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    const sortServices = [...services].sort((a, b) => b.price - a.price );
    const displayServicess = sortServices.slice(0, 6);
    return (
        <div className=''>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:p-24 lg:pt-0 p-10 place-items-center'>
                {
                    displayServicess.map(service => (
                        <div key={service._id} className="flex justify-center"> {/* Align cards in the center */}
                            <Card service={service} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Features;
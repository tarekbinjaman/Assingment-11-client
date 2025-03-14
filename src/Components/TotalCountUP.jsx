import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const TotalCountUP = () => {
    const [serviceCount, setServiceCount] = useState(0);
    const [reviewCount, setReviewCount] = useState(0);
    const [userCount, setUserCount] = useState(0);

    useEffect(() => {
        // Fetch service data
        fetch('https://server-side-cyan-beta.vercel.app/services')
            .then(response => response.json())
            .then(data => {
                setServiceCount(data.length);
                const uniqueUsers = new Set(data.map(service => service.userEmail));
                setUserCount(uniqueUsers.size);
            })
            .catch(error => console.error('Error fetching services:', error));

        // Fetch review data
        fetch('https://server-side-cyan-beta.vercel.app/review')
            .then(response => response.json())
            .then(data => {
                setReviewCount(data.length);
            })
            .catch(error => console.error('Error fetching reviews:', error));
    }, []);

    return (
        <div className="text-center mt-10 mb-6 px-4">
            <h2 className="font-bold text-3xl md:text-2xl "><span className='border-l-4 border-r-4 border-blue-300 px-2'>Our Platform Metrics</span></h2>
            <div className=' flex justify-center'>
            <div
                className="mt-8 grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1"
            >
                <div className="p-6 bg-blue-100 rounded-lg shadow-md w-[300px]">
                    <h3 className="font-bold text-2xl text-blue-600">Services</h3>
                    <CountUp end={serviceCount} duration={9} className="text-3xl font-bold" />
                </div>
                <div className="p-6 bg-green-100 rounded-lg shadow-md w-[300px]">
                    <h3 className="font-bold text-2xl text-green-600">Users</h3>
                    <CountUp end={userCount} duration={9} className="text-3xl font-bold" />
                </div>
                <div className="p-6 bg-red-100 rounded-lg shadow-md w-[300px]">
                    <h3 className="font-bold text-2xl text-red-600">Reviews</h3>
                    <CountUp end={reviewCount} duration={9} className="text-3xl font-bold" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default TotalCountUP;

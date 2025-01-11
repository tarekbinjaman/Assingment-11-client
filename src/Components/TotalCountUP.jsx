import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const TotalCountUP = () => {
    const [serviceCount, setServiceCount] = useState(0);
    const [reviewCount, setReviewCount] = useState(0);
    const [userCount, setUserCount] = useState(0);

    useEffect(() => {
        // Fetch service data
        fetch('http://localhost:5000/services')
            .then(response => response.json())
            .then(data => {
                setServiceCount(data.length);
                const uniqueUsers = new Set(data.map(service => service.userEmail));
                setUserCount(uniqueUsers.size);
            })
            .catch(error => console.error('Error fetching services:', error));

        // Fetch review data
        fetch('http://localhost:5000/review')
            .then(response => response.json())
            .then(data => {
                setReviewCount(data.length);
            })
            .catch(error => console.error('Error fetching reviews:', error));
    }, []);

    return (
        <div className="text-center my-8 px-4">
            <h2 className="font-bold text-3xl md:text-4xl">Our Platform Metrics</h2>
            <div
                className="mt-8 grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1"
            >
                <div className="p-6 bg-blue-100 rounded-lg shadow-md">
                    <h3 className="font-bold text-2xl text-blue-600">Services</h3>
                    <CountUp end={serviceCount} duration={9} className="text-3xl font-bold" />
                </div>
                <div className="p-6 bg-green-100 rounded-lg shadow-md">
                    <h3 className="font-bold text-2xl text-green-600">Users</h3>
                    <CountUp end={userCount} duration={9} className="text-3xl font-bold" />
                </div>
                <div className="p-6 bg-red-100 rounded-lg shadow-md">
                    <h3 className="font-bold text-2xl text-red-600">Reviews</h3>
                    <CountUp end={reviewCount} duration={9} className="text-3xl font-bold" />
                </div>
            </div>
        </div>
    );
};

export default TotalCountUP;
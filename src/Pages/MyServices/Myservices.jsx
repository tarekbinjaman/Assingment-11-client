import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../context/AuthProvider';
import ServicesCard from './ServicesCard';
import { Helmet } from 'react-helmet-async';
import { debounce } from 'lodash';

const Myservices = () => {
    const { user } = useContext(Authcontext);
    const [services, setServices] = useState([]);
    const [filteredService, setFilteredService] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/services?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setServices(data);
                    setFilteredService(data);
                })
                .catch((error) => console.error(error));
        }
    }, [user]);

    const handleSearch = debounce((value) => {
        const filtered = services.filter(service =>
            service.name.toLowerCase().includes(value) ||
            service.description.toLowerCase().includes(value)
        );
        setFilteredService(filtered);
    }, 300); // 300ms debounce delay

    const onSearchChange = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
        handleSearch(value);
    };

    const deleteService = (_id) => {
        const updatedServices = services.filter(service => service._id !== _id);
        setServices(updatedServices);
        setFilteredService(updatedServices);
    };

    return (
        <div className='w-[70%] mx-auto'>
            <Helmet><title>My services</title></Helmet>
            <div className='flex justify-end mb-4'>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={onSearchChange}
                    placeholder="Search..."
                    className="border-black border-2 p-2 rounded-md"
                />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {filteredService.length > 0 ? (
                    filteredService.map((service) => (
                        <ServicesCard
                            key={service._id}
                            services={service}
                            deleteService={deleteService}
                        />
                    ))
                ) : (
                    <p>No services found</p>
                )}
            </div>
        </div>
    );
};

export default Myservices;

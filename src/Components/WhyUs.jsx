import React from 'react';

const WhyUs = () => {
    return (
        <div className=' w-[80%] mx-auto'>
            <h2 className='text-4xl font-bold text-center mb-4'>Why us?</h2>
            <div className='flex justify-center mb-4'>
            <img className='lg:w-[70%] object-cover' src="https://images.unsplash.com/photo-1520950941352-a18d87382053?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <p className='text-center'>With years of experience in <span className='font-bold text-2xl bg-yellow-300 bg-opacity-40'>Job matcher</span> , we bring deep knowledge and innovative solutions tailored to meet your needs. Our team is driven by a passion for excellence and a commitment to delivering results.
            You are at the heart of everything we do. We prioritize understanding your unique goals and challenges to provide personalized <span className='font-bold text-xl bg-blue-300 bg-opacity-40'>experiences</span>  that exceed expectation.
            <br />
            <br />
            We believe in building relationships based on honesty, integrity, and open communication.
            <br />
             No hidden fees, no false promises—just genuine partnership.

            </p>
        </div>
    );
};

export default WhyUs;
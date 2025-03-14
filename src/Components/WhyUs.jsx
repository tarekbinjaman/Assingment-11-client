import React from 'react';
import why from '../assets/why.json'
import Lottie from 'lottie-react';

const WhyUs = () => {
    return (
        <div className=' w-[80%] mx-auto'>
            <h2 className='text-4xl font-bold text-center mb-4'>Why us?</h2>
            <div className='flex justify-center mb-4'>
            <div>
                        <Lottie animationData={why} loop={true} className="w-96 h-96" />
                    </div>
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
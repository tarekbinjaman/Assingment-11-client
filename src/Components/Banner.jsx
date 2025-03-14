import React from 'react';

import job from '../../../job-24-bd/src/assets/job.json'
import Lottie from 'lottie-react';

const Banner = () => {
    return (
        <div>
            {/* <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src="https://i.ibb.co.com/RzhrHHt/Untitled-1.jpg"
                        className="w-full object-cover" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src="https://i.ibb.co.com/8M0v5Qd/Untitled-3.png"
                        className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src="https://i.ibb.co.com/VxXSndd/Untitled-4.png"
                        className="w-full" />
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div> */}
            {/* <img src="https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1685346314/1685346313.jpg" className='w-full h-full object-top' alt="" />
            <div className="absolute inset-0 bg-black opacity-50"></div> */}
            <div className='flex justify-center'>
                {/* lottie and text area */}
                <div className='lg:flex items-center gap-6'>
                    <div>
                        <Lottie animationData={job} loop={true} className="w-96 h-96" />
                    </div>
                    <div>
                        <div>
                            <h1 className='text-xl font-bold text-blue-400'>Welcome to</h1>
                            <h2 className='text-7xl font-bold text-gray-500'>Job Matcher</h2>
                        </div>
                        <div className='mt-5 w-[400px]'>
                            <p className='text-justify' style={{fontSize: '14px'}}>Find your dream job with ease! Our platform connects job seekers with top employers, offering the best opportunities in various industries. Start your career today!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
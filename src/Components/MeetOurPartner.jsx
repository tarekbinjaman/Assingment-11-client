import React from 'react';

const MeetOurPartner = () => {
    return (
        <div className='lg:w-[60%] w-[90%] md:w-[70%] mx-auto bg-slate-300 p-10 rounded-2xl mb-10'>
            <h2 className='text-4xl font-bold text-center mb-10 text-gray-400'>Meet our partners</h2>
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-8 md:grid-cols-3 justify-between'>
                <div className='flex flex-col justify-center items-center'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFFjJLnwmsD4IbRvxYhFDh1Zr974VfXXRMkg&s" className='lg:w-[120px] md:w-[100px] w-[80px]' alt="" />
                    <div className='mt-4'>
                    <h2 className='lg:text-2xl md:text-xl text-base font-bold text-center'>google cloud</h2>
                    <p className='text-sm text-center w-[150px]'>For cloud services and scalable infrastructure.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src="https://www.pngmart.com/files/23/Slack-Logo-PNG-Pic.png" className='lg:w-[120px] md:w-[100px] w-[80px]' alt="" />
                    <div className='mt-4 items-center'>
                    <h2 className='lg:text-2xl md:text-xl text-base font-bold text-center'>Slack</h2>
                    <p className='text-sm w-[150px] text-center'>For team communication and productivity.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv71ArEKZ98-L-NzsCrxYrM7iIGAcAH2UY1jqnT5Olk8JlzCjJQk0710zJzY3gIC9Bg_0&usqp=CAU" className='lg:w-[120px] md:w-[100px] w-[80px]' alt="" />
                    <div className='mt-4'>
                    <h2 className='lg:text-2xl md:text-xl text-base font-bold text-center'>HubSpot</h2>
                    <p className='text-sm text-center w-[150px]'>Marketing, sales, and CRM platform.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src="https://www.irpcommerce.com/MyIRPWorld/Uploads/IRPAppLogos/3-Paypal.png" className='lg:w-[120px] md:w-[100px] w-[80px]' alt="" />
                    <div className='mt-4'>
                    <h2 className='lg:text-2xl md:text-xl text-base font-bold text-center'>Paypal</h2>
                    <p className='text-sm text-center w-[150px]'>Secure online payments.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetOurPartner;
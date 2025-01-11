import React from 'react';

const ContactUs = () => {
    return (
        <div className='w-[70%] mx-auto mt-10 mb-10'>
            <h2 className='font-bold text-4xl text-center mb-8'>Contact Us</h2>
            <div className='flex border-y-blue-200 border-2'>
                <img src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-[50%] object-cover hidden md:block' alt="" />
            <div className='lg:w-[50%] p-8 justify-center flex flex-col'>
                <h2 className='font-bold'>Contact Us</h2>
                <p className='mb-7'>At Job Matcher, we’re here to connect you with opportunities and answer any questions you may have. Whether you're a job seeker, employer, or just curious about what we do, we'd love to hear from you!</p>
                <h2 className='font-bold'>Get in touch:</h2>
                <p><span className=' font-bold'> Email Us: </span><span className='text-blue-500'>support@jobmatcher.com</span></p>
                <p><span className=' font-bold'> 📞 Call Us: </span><span className='text-orange-500'>+1 (123) 456-7890</span></p>
                <br />
                <br />
                <h2 className='font-bold'>Visit Us</h2>
                <p><span className='text-2xl font-bold'>🏢 Office Location:</span></p>
                <p className='text-base font-semibold mb-7'>123 Job Matcher Blvd, Opportunity City, State, 56789</p>
                <h2 className='font-bold'>Follow Us</h2>
                <p>Stay updated with the latest job trends and company news:</p>
                <ul>
                    <li>🌐 Facebook</li>
                    <li>📸 Instagram</li>
                    <li>🐦 Twitter</li>
                    <li>💼 LinkedIn</li>
                </ul>
                <p>Let’s work together to match dreams with opportunities!</p>
            </div>
            </div>
        </div>
    );
};

export default ContactUs;
import Lottie from 'lottie-react';
import contact from '../assets/contact.json'
const ContactUs = () => {
    return (
        <div id='contact' className='w-[70%] mx-auto mt-10 mb-10'>
            <h2 className='font-bold text-4xl text-center mb-8'>Contact Us</h2>
            <div className='lg:flex justify-between border-y-blue-200 border-2'>
                <div className='lg:w-50%'>
                    <Lottie animationData={contact} loop={true} className="lg:w-96 lg:h-96 w-full" />
                </div>
                <div className='lg:w-[50%] p-8 justify-center flex flex-col'>

                    <p><span className='text-2xl font-bold'>🏢 Office Location:</span></p>
                    <p className='text-base font-semibold mb-7'>123 Job Matcher Blvd, Opportunity City, State, 56789</p>
                    <p><span className=' font-bold'> Email Us: </span><span className='text-blue-500'>support@jobmatcher.com</span></p>
                    <p><span className=' font-bold'> 📞 Call Us: </span><span className='text-orange-500'>+1 (123) 456-7890</span></p>
                    <h2 className='font-bold'>Visit Us</h2>
                    <h2 className='font-bold'>Follow Us</h2>
                    <ul>
                        <li>🌐 Facebook</li>
                        <li>📸 Instagram</li>
                        <li>🐦 Twitter</li>
                        <li>💼 LinkedIn</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
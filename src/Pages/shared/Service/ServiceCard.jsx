import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({services}) => {
    const { _id, category, companyName, date, description, price, serviceImage, title, userEmail, website } = services;
    return (
        <div>
            <div className="card  bg-base-100 w-80 shadow-xl">
                <figure>
                    <div className='w-[350px] h-[150px]'>
                    <img
                        src={serviceImage}
                        alt="Shoes" 
                        className='w-full h-full object-cover'
                        />
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title" style={{fontSize: '14px'}}>{title}</h2>
                    <p style={{fontSize: '10px'}}>{description}</p>
                    <h3><strong style={{fontSize: '12px'}}>Category:</strong> <span style={{fontSize: '12px'}}>{category}</span></h3>
                    <h3><strong style={{fontSize: '12px'}}>Price:</strong> <span style={{fontSize: '12px'}}>{price}</span><span className='text-green-700'>$</span></h3>
                    <div className="card-actions justify-end">
                     <Link to={`/services/${_id}`}><button className="px-4 py-1 bg-slate-400 text-white rounded-xl">See details</button></Link>   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
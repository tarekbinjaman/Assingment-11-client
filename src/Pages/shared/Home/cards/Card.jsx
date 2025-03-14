import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ service }) => {
    const { _id, category, companyName, date, description, price, serviceImage, title, userEmail, website } = service;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <div className='w-[300px] h-[140px]'>
                    <img
                        src={serviceImage}
                        alt="Shoes" 
                        className='w-full h-full'
                        />
                    </div>
                </figure>
                <div className="card-body w-80px p-0 px-3 py-1">
                    <h2 className="card-title">{title}</h2>
                    <p style={{fontSize: '10px'}}>{description}</p>
                    <h3><strong style={{fontSize: '12px'}}>Price:</strong> <span style={{fontSize: '12px'}}>{price}</span><span className='text-green-700'>$</span></h3>
                    <h3><strong style={{fontSize: '12px'}}>Category:</strong> <span style={{fontSize: '12px'}}>{category}</span></h3>
                    <div className="card-actions justify-end">
                     <Link onClick={() => {console.log(_id)}} to={`services/${_id}`}><button className="px-4 py-2 bg-blue-600 rounded-xl text-[12px] text-white">See details</button></Link>   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
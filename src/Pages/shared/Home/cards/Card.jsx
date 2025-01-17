import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ service }) => {
    const { _id, category, companyName, date, description, price, serviceImage, title, userEmail, website } = service;
    return (
        <div>
            <div className="card  bg-base-100 w-80 shadow-xl">
                <figure>
                    <div className='w-[350px] h-[250]'>
                    <img
                        src={serviceImage}
                        alt="Shoes" 
                        className='w-full h-full'
                        />
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <h3><strong>Price:</strong> {price} $</h3>
                    <div className="card-actions justify-end">
                     <Link to={`services/${_id}`}><button className="btn btn-primary">See details</button></Link>   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
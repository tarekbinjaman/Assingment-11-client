import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className=" bg-slate-400 flex justify-center gap-4 text-white">
        <div className='flex flex-row gap-7'>
          <Link to={`https://assingment-11-bd947.web.app/addService`}><a className='link link-hover'>Add JOb</a></Link>
          <Link to={`https://assingment-11-bd947.web.app/service`}><a className='link link-hover'>All Job</a></Link>
          <Link to={`https://assingment-11-bd947.web.app/myReviews`}><a className='link link-hover'>My Reviews</a></Link>
        </div>
        <div className='flex flex-row gap-7'>
          <Link to={`https://assingment-11-bd947.web.app/`}><a className="link link-hover">Home</a></Link>
          <Link to={`https://assingment-11-bd947.web.app/service`}><a className="link link-hover">Services</a></Link>
          <Link to={`https://assingment-11-bd947.web.app/myServices`}><a className="link link-hover">My services</a></Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
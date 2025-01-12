import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-neutral text-neutral-content p-10">
  <nav>
    <img src="https://img.freepik.com/free-vector/user-with-magnifying-glass_78370-7010.jpg?semt=ais_hybrid" className="w-[40px] rounded-full"  alt="" />
    <h2 className='text-4xl font-bold'>JOb Matcher</h2>
  </nav>
  <nav>
  </nav>
  <nav>
    <h6 className="footer-title">====</h6>
    <Link to={`https://assingment-11-bd947.web.app`}><a className="link link-hover">Home</a></Link>
    <Link to={`https://assingment-11-bd947.web.app/service`}><a className="link link-hover">Services</a></Link>
  </nav>
</footer>
        </div>
    );
};

export default Footer;
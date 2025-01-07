// import React, { useContext } from 'react';
// import { NavLink, Outlet } from 'react-router-dom';
// import { Authcontext } from '../Provider/AuthProvider';
// import Footer from './Footer';

import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
    }
    const links = <>
    <li className='font-semibold'><NavLink to={`/`}>Home</NavLink></li>
    <li className='font-semibold'><NavLink to={`/login`}>Login</NavLink></li>
    <li className='font-semibold'><NavLink to={`/registration`}>Registration</NavLink></li>
    <li className='font-semibold'><NavLink to={`/service`}>Services</NavLink></li>
    <li className='font-semibold'><NavLink to={`/addService`}>Add service</NavLink></li>
    <li className='font-semibold'><NavLink to={`/myReviews`}>My reviews</NavLink></li>
    <li className='font-semibold'><NavLink to={`/myServices`}>My services</NavLink></li>
    </>
    return (
        <div className="flex flex-col min-h-screen">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Anime Zone</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    { user?.email ? <div className='flex items-center justify-center gap-3 '>
                        <p className='text-base hidden lg:block font-bold'>{user.displayName}</p>
                        <img className='w-[34px] h-[34px] rounded-full object-cover' src={user?.photoURL && user.photoURL} alt="profilePicture" />
                        <a onClick={handleLogout} className="btn">Logout</a>
                    
                    </div> :  <NavLink to="/login" className="btn">Login</NavLink> }
                </div>
            </div>
            <Outlet  className="flex-grow"></Outlet>
            <Footer className="mt-auto"></Footer>
        </div>
    );
};

export default Navbar;
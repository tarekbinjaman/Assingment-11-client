// import React, { useContext, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import AuthProvider, { Authcontext } from '../Provider/AuthProvider';

import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../../../context/AuthProvider"; // Correct import
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const Registraion = () => {
  const {userRegister, setUser, updateUser, googleSignin}  = useContext(Authcontext);
  const [passwordErrors, setPasswordErrors] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const googleClick = () => {
    googleSignin()
    .then((result) => {
      const user = result.user;
      setUser(user)
      toast.success("Google Registration successfull")

      navigate(location?.state ? location.state : "/")
    })
  }
    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.url.value;
        const password = e.target.password.value;
        const errors = []
        if (!/[A-Z]/.test(password)) {
          errors.push("Password must have at least one uppercase letter.");
        }
        if (!/[a-z]/.test(password)) {
          errors.push("Password must have at least one lowercase letter.");
        }
        if (password.length < 6) {
          errors.push("Password must be at least 6 characters long.");
        }

        if(errors.length > 0) {
          return setPasswordErrors(errors)
        }
        // console.log(name, email, photo, password)
        userRegister(email, password)
        .then(result => {
          const user = result.user;
          setUser(user);
          updateUser(user, {displayName: name, photoURL: photo})
          toast.success("Registration successfull")
          navigate(location?.state ? location.state : "/")
          // console.log(result)
        })
    }
    return (
        <div className='w-11/12 mx-auto flex flex-col items-center justify-center mt-24'>
          <Helmet><title>Register</title></Helmet>
            <h2 className='text-2xl font-bold'>Registration form</h2>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border-2 border-black mt-6">
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoUrl</span>
          </label>
          <input type="url" placeholder="www.photo.com" name='url' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          {passwordErrors.map(error =><li>{error}</li> )}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Already have an account? <Link to={`/login`}><span>Login now!</span></Link></a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Registration now</button>
        </div>
      </form>
        <div className='flex justify-center mb-4'>
          <button onClick={googleClick} className='bg-blue-400 text-white font-bold px-3 rounded-md'>Sign up google</button>
        </div>
    </div>
        </div>
    );
};

export default Registraion;
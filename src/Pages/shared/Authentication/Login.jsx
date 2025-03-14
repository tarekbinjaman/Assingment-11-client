import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Result } from 'postcss';
import { Authcontext } from '../../../context/AuthProvider';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

const Login = () => {
  const naviagte = useNavigate();
  const location = useLocation();
  const [error, setError] = useState(null);
  const {userLogin, setUser, googleSignin} = useContext(Authcontext);

  const googleClick = () => {
    googleSignin()
      .then((result) => {
        const user = result.user;
        setUser(user);
  
        // Sending user's email to jwt endpoint in backend
        // axios.post('https://server-side-cyan-beta.vercel.app/jwt', { email: user.email }, { withCredentials: true })
        //   // .then(res => console.log(res.data))
        //   .catch(err => console.error("Error generating token:", err));
  
        naviagte(location?.state ? location.state : "/");
      })
      .catch(err => {
        console.error("Google sign-in error:", err);
      });
  };

    const handleSubmit = e => {
      
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password)
        userLogin(email, password)
        .then(result => {
          const user = result.user;
          setUser(user)
          // sending users email to jwt in backend
          naviagte(location?.state ? location.state : "/")
          // console.log(result)
        })
        .catch(erro => {
          const err = erro.code;
          setError(err)
          // console.log(err)
        })

    }
    return (
        <div className='w-11/12 mx-auto flex flex-col items-center justify-center mt-24'>
          <Helmet>
            <title>Login</title>
          </Helmet>
            <h2 className='text-2xl font-bold'>Login form</h2>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border-2 border-black mt-6">
      <form onSubmit={handleSubmit} className="card-body">
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Don't have an account <Link to={`/registration`}><span>Registration now!</span></Link></a>
          </label>
        </div>
        {error && <p className='text-red-400 text-center'>{error}</p> }
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className='flex justify-center mb-4'>
          <button onClick={googleClick} className='bg-blue-400 text-white font-bold px-3 rounded-md'>Login with google</button>
        </div>
    </div>
        </div>
    );
};

export default Login;
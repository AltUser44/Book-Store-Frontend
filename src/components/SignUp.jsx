import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider';
import googleLogo from "../assets/google-logo.svg"; 

const SignUp = () => {
    const { createUser, loginWithGoogle } = useContext(AuthContext); 
    const [error, setError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    
    const from = location.state?.from?.pathname || '/';

    const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
    createUser(email, password).then((userCredentials) => {
        // signed up
        const user = userCredentials.user;
        alert("Sign up successfully!");
        navigate(from, {replace: true});
        //...
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
        });
    }

    // Sign Up with Google Button
    const handleRegister = () => {
        loginWithGoogle().then((result) => {
            const user = result.user;
            alert("Sign up with Google successfully!");
            navigate(from, {replace: true});
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
        });

    }
  return (
<div className="min-h-screen bg-gray-100 py-12 flex flex-col justify-center sm:py-20">
  <div className="relative py-6 sm:max-w-lg sm:mx-auto">
    {/* Animated Background */}
    <div
      className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-xl transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl transition-transform duration-500 hover:scale-105 hover:rotate-3"
    ></div>
    {/* Animated Form Card */}
    <div
      className="relative px-10 py-16 bg-white shadow-xl sm:rounded-3xl sm:p-24 transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
    >
      <div className="max-w-lg mx-auto">
        <div>
          <h1 className="text-3xl font-semibold text-center">Sign Up Form</h1>
        </div>
        <div className="divide-y divide-gray-300 mt-6">
          <form
            onSubmit={handleSignUp}
            className="py-10 text-lg leading-8 space-y-6 text-gray-700"
          >
            <div className="relative">
              <input
                id="email"
                name="email"
                type="text"
                className="peer h-12 w-full border-b-2 border-gray-400 text-gray-900 focus:outline-none focus:border-blue-500"
                placeholder="Email address"
              />
            </div>
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                className="peer h-12 w-full border-b-2 border-gray-400 text-gray-900 focus:outline-none focus:border-blue-500"
                placeholder="Password"
              />
            </div>
            <p className="text-center">
              Already have an account? Please{" "}
              <Link to="/login" className="text-blue-600 underline">
                Login
              </Link>
            </p>
            <div className="relative flex justify-center">
              <button className="bg-blue-500 text-white rounded-lg px-8 py-3 text-lg hover:scale-110 hover:shadow-lg transition-transform duration-300">
                Sign up
              </button>
            </div>
          </form>
        </div>
        <hr />
        <div className='flex w-full items-center flex-col mt-5 gap-3'>
            <button onClick={handleRegister} className='block'><img src={googleLogo} alt="" className='w-12 h-12 inline-block'/>Login via Google</button>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}

export default SignUp

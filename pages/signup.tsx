import React, { useState } from 'react';
import Footer from '@/components/Footer'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import PasswordStrengthMeter from '@/components/PasswordStrengthMeter';

const Signup: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Signup credentials:', { fullName, email, password });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="w-3/4 h-3/4 border border-gray-200 shadow-2xl flex flex-wrap relative">
        <div className="w-full md:w-1/2 relative p-20 bg-cover bg-center" style={{ backgroundImage: 'url(/images/LoginImage.jpg)' }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-3xl font-semibold">Welcome</h2>
            <p className="text-lg">One stop spot to Manage all your Vending Work</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-gradient-to-b from-sky-100 to-slate-400 p-8 flex items-center justify-center">
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-700 font-semibold">Full Name</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={handleFullNameChange}
                className="w-full px-4 py-2 border shadow-md rounded-md focus:outline-none focus:border-sky-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full px-4 py-2 border shadow-md rounded-md focus:outline-none focus:border-sky-500"
                required
              />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-gray-700 font-semibold">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2 border shadow-md rounded-md focus:outline-none focus:border-sky-500"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
                  onClick={handleTogglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-gray-600" />
                </button>
              </div>
              <PasswordStrengthMeter password={password} />
            </div>
            <button
              type="submit"
              className="w-full shadow-md bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 rounded-md focus:outline-none focus:ring focus:border-green-300"
            >
              Sign Up
            </button>
            <p className="text-center p-2 font-semibold"> or </p>
            <button className="mt- bg-white text-gray-800 font-semibold py-2 rounded-md shadow-md hover:bg-gray-100 w-full">
              <img src="/icons/google.svg" alt="Google Logo" className="w-5 h-5 inline-block mr-2" />
              Sign up with Google
            </button>
            <p className="mt-4 text-gray-600">Already have an account? <a href="login" className="font-semibold text-blue-700 hover:underline">Login</a></p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Signup;

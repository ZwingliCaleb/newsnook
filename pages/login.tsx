import Footer from '@/components/Footer';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
    console.log('Login credentials:', { email, password });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="w-3/4 h-3/4 border border-gray-200 shadow-2xl flex flex-wrap relative">
        <div className="w-full p-20 md:w-1/2 bg-cover bg-center relative" style={{ backgroundImage: 'url(/images/LoginImage.jpg)' }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-3xl font-bold">Welcome!</h2>
            <p className="text-lg">Are you a vendor?</p>
            <p className="text-md font-semibold">One stop spot to manage all your vending functions</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-gradient-to-t from-slate-200 to-sky-400 p-6 flex items-center justify-center">
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold text-gray-700">Email</label>
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
              <label htmlFor="password" className="block font-semibold text-gray-700">Password</label>
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
              <div className="mt-2">
                <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
              </div>
            </div>

            <div className="">
              <button
                type="submit"
                className="py-2 bg-blue-500 hover:bg-blue-600 text-white  font-semibold shadow-md rounded-md focus:outline-none focus:ring focus:border-green-300 w-full"
              >
               Login
              </button>
              <p className="mt-4 text-center font-bold">or</p>
              <button className="bg-white mt-4 text-gray-800 font-semibold w-full py-2 rounded-md shadow-md hover:bg-gray-100">
                <Image src="/icons/google.svg" alt="Google Logo" className="w-5 h-5 inline-block mr-2" width={40} height={40}/>
                Sign in with Google
              </button>
            </div>

            <div className="mt-4 flex p-2 gap-2">
              <p>Have no account yet? </p>
              <Link href="/signup" className="font-semibold text-blue-700 hover:underline"> Sign up</Link>
            </div>
            
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

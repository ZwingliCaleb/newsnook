import Footer from '@/components/Footer';
import React, {useState} from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login credentials:', { email, password });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="w-3/4 h-3/4 border border-gray-200 shadow-2xl flex flex-wrap relative">
        <div className="w-full md:w-1/2 bg-cover bg-center relative" style={{ backgroundImage: 'url(/images/LoginImage.jpg)' }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-3xl font-semibold">Welcome</h2>
            <p className="text-lg">Please login to access your account</p>
          </div>
        </div>
        {/* Add a form here */}
        <div className="w-full md:w-1/2 bg-green-300 p-8 flex items-center justify-center">
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            {/* Add email field here */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 ">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500"
                required
              />
            </div>
            {/* Add password field here */}
            <div className="mb-4 ">
              <label htmlFor="password" className="block text-gray-600">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500"
                required
                />
            </div>
            {/* Add a submit button here */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-green-300">
                Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

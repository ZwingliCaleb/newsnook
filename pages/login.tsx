import Footer from "@/components/Footer";
import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Login credentials:', { email, password });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <section className="bg-white rounded-lg px-6 py-8 md:px-12 md:py-16 md:max-w-4xl">
        <div className="flex flex-col md:flex-row rounded-2xl">
          {/* Left card */}
          <div className="md:w-1/2 bg-blue-500 text-white bg-cover bg-center relative" style={{ backgroundImage: "url('/images/LoginImage.jpg')"}}>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="text-center p-8 relative z-10">
              <h2 className="text-4xl font-semibold mb-4">Welcome</h2>
              <p className="text-lg p-2">Under construction thanks and please!</p>
            </div>
          </div>
          {/* Right card */}
          <div className="md:w-1/2 px-8 flex justify-center items-center bg-slate-300 mt-6 md:mt-0">
            <div className="w-full md:w-auto p-2">
              <h2 className="text-3xl font-semibold mb-4">Login</h2>
              <form onSubmit={handleSubmit} className="p-2">
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-600">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-600">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;

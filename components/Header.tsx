import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-6 px-10 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white relative">
      {/* Navigation links for larger screens */}
      <nav className="hidden sm:flex px-20 gap-10 space-x-3 justify-end">
        <ul className="flex gap-20">
          <li><a href="/" className="hover:text-gray-300 text-lg font-semibold">Home</a></li>
          <li><a href="/login" className="hover:text-gray-300 text-lg font-semibold">Log in</a></li>
        </ul>
      </nav>

      {/* Hamburger menu for smaller screens */}
      <div className="sm:hidden absolute right-10 top-6">
        <button className="text-white text-2xl" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Mobile menu */}
        <div className={`absolute top-full right-0 mt-2 w-48 bg-gray-800 rounded-lg ${isMenuOpen ? 'block' : 'hidden'} backdrop-filter backdrop-blur-lg bg-opacity-50`}>
          <ul className="px-4 py-4 space-y-4 ">
            <li><a href="/" className="hover:text-gray-300 text-lg font-semibold">Home</a></li>
            <li><a href="/login" className="hover:text-gray-300 text-lg font-semibold">Log in</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

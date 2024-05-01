import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-6 px-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      {/* Navigation links for larger screens */}
      <nav className="hidden sm:flex px-20 gap-10 space-x-3 justify-end">
      <Image src="/icons/NewsnookLogo.svg" alt="Newsnook Logo" width={100} height={100} />
        <ul className="flex gap-20">
          <li><a href="/" className="hover:text-gray-300 text-lg font-semibold">Home</a></li>
          <li><a href="/login" className="hover:text-gray-300 text-lg font-semibold">Log in</a></li>
        </ul>
      </nav>

      {/* Hamburger menu for smaller screens */}
      <div className="sm:hidden flex justify-end">
        <button className="text-white text-2xl" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-2 w-full`}>
        <ul className="px-4 py-4 bg-gray-800 space-y-4 ">
          <li><a href="/" className="hover:text-gray-300 text-lg font-semibold">Home</a></li>
          <li><a href="/login" className="hover:text-gray-300 text-lg font-semibold">Log in</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

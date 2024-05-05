import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-6 px-10 bg-gradient-to-r from-slate-400 via-sky-300 to-sky-800 text-white relative">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image src="icons/NewsnookLogo.svg" alt="Logo" width={70} height={70} />
          </Link>
        </div>
        
        {/* Navigation links for larger screens */}
        <nav className="hidden sm:flex gap-10 space-x-3 items-center px-12">
          <ul className="flex gap-20">
            <Link href="/" className="hover:text-gray-300 text-lg font-semibold">Home</Link>
            <Link href="/signup" className="hover:text-gray-300 text-lg font-semibold">Sign Up</Link>
          </ul>
        </nav>

        {/* Hamburger menu for smaller screens */}
        <div className="sm:hidden">
          <button className="text-white text-2xl" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden absolute top-full right-0 mt-0 mr-2 w-40 bg-sky-900 rounded-lg ${isMenuOpen ? 'block' : 'hidden'} backdrop-filter backdrop-blur-sm bg-opacity-70`}>
        <ul className="px-4 py-4 space-y-4 ">
          <Link href="/" className="hover:text-gray-300 text-lg font-semibold">Home</Link>
          <Link href="/signup" className="hover:text-gray-300 text-lg font-semibold">Sign Up</Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;

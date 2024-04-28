import React from 'react';

const Header: React.FC = () => {
  return (
    <header className=" py-6 px-10 bg-gray-800 text-white">
      <nav>
        {/*<a href='/'><img src={} alt="" className=""/></a> */}
        <ul className=" px-20 flex gap-10 space-x-3 justify-end">
          <li><a href="/" className="hover:text-gray-300 text-lg font-semibold">Home</a></li>
          <li><a href="#" className="hover:text-gray-300 text-lg font-semibold">Log in</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

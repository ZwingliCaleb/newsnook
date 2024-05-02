import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Search query:', searchQuery);
    // Add logic to handle form submission (e.g., fetching data from an API)
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Find in your area..."
            value={searchQuery}
            onChange={handleInputChange}
            className="pl-12 pr-44 py-2 rounded-full focus:outline-none font-semibold focus:ring focus:border-blue-300 w-full sm:w-auto sm:max-w-[600px] h-12"
          />
          <FontAwesomeIcon icon={faSearch} className="text-gray-500 hover:text-gray-400 absolute right-6 top-1/2 transform -translate-y-1/2" />
        </div>
        <div className="p-2">
          <button type="submit" className="mt-2 sm:mt-0 ml-0 sm:ml-2 bg-blue-600 hover:bg-blue-700 text-gray-200 font-semibold text-lg px-6 py-2 rounded-2xl focus:outline-none focus:ring focus:border-blue-300">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

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
    <form onSubmit={handleSubmit} className="relative gap-10">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
          className="pl-10 pr-3 py-2 rounded-full focus:outline-none font-semibold focus:ring focus:border-blue-300 w-[600px] h-14"
        />
        <FontAwesomeIcon icon={faSearch} className="text-gray-600 absolute left-[560px] top-1/2 transform -translate-y-1/2" />
      </div>
      <button type="submit" className="absolute top-1/2 transform -translate-y-1/2 right-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-2xl focus:outline-none focus:ring focus:border-blue-300">
        Search
      </button>
    </form>
  );
};

export default SearchBar;

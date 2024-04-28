import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // Do something with the searchQuery, such as fetching data from an API
      console.log('Search query:', searchQuery);
    };
  
    return (
      <form onSubmit={handleSubmit} className="flex items-center justify-center gap-6">
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleInputChange}
                className="px-10 py-2 rounded-full focus:outline-none focus:ring focus:border-blue-300 w-[600px] h-12"
            />
        </div>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
        </div>
        <div className="font-semibold gap-x-40">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300">
                Search
            </button>
        </div>
      </form>
    );
}

export default SearchBar

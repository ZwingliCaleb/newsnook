import React, { useState } from 'react';

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
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
          className="px-3 py-2 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md focus:outline-none focus:ring focus:border-blue-300">
          Search
        </button>
      </form>
    );
}

export default SearchBar

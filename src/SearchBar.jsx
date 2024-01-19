import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Handle input change
  const handleInputChange = (event) => {
    const newSearchQuery = event.target.value;
    setSearchQuery(newSearchQuery);
    // Call the onSearch prop with the updated search query
    onSearch(newSearchQuery);
  };

  return (
    <div className="search-div">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;

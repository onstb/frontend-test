// Import necessary dependencies
import React, { useState } from 'react';

// SearchBar component
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
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        {/* Remove the submit button */}
      </form>
    </div>
  );
}

export default SearchBar;

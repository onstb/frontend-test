// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContentList from './ContentList';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import './styles.css';
import WemapLogo from './assets/wemap.svg';

// Define the API URL
const apiUrl = 'https://api.getwemap.com/v3.0/pinpoints/search';
const itemsPerPage = 10; // Number of items to display per page

// App component
function App() {
  // State to store the fetched data
  const [contentData, setContentData] = useState([]);
  // State to store pagination data
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
  });

  // Function to fetch data from the Wemap API
  const fetchData = async (searchQuery, offset) => {
    try {
      const response = await axios.get(
        `${apiUrl}?query=${searchQuery}&offset=${offset}&limit=${itemsPerPage}`
      );
  
      // Update state using callback function
      setContentData((prevData) => [...prevData, ...response.data.results]);
      setPagination((prevPagination) => ({
        currentPage: Math.ceil((offset + 1) / itemsPerPage),
        totalPages: Math.ceil(response.data.count / itemsPerPage),
      }));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  // useEffect hook to fetch data when the component mounts or pagination changes
  useEffect(() => {
    fetchData('Musee', (pagination.currentPage - 1) * itemsPerPage);
  }, [pagination.currentPage]); // Re-fetch data when the currentPage changes

  // Function to handle search
  const handleSearch = (searchQuery) => {
    fetchData(searchQuery, 0); // Reset offset when performing a new search
  };

  // Function to handle page change
  const handlePageChange = (page) => {
    setPagination({ ...pagination, currentPage: page });
  };

  return (
    <div>

<div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={WemapLogo} alt="Wemap Logo" style={{ marginRight: '10px' }} />
        <h1 style={{ fontSize: '4em' }}>Les derniers pinpoinets Wemap</h1>
      </div>
      
      {/* Render the SearchBar component and pass handleSearch as prop */}
      <SearchBar onSearch={handleSearch} />
      {/* Render the ContentList component and pass contentData, currentPage, and itemsPerPage as props */}
      <ContentList contentData={contentData} currentPage={pagination.currentPage} itemsPerPage={itemsPerPage} />
      {/* Render the Pagination component and pass currentPage, totalPages, and handlePageChange as props */}
      <Pagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;

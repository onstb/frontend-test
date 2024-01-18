// Import necessary dependencies
import React from 'react';
import ContentItem from './ContentItem';

// ContentList component
function ContentList({ contentData, currentPage, itemsPerPage }) {
    // Calculate the start and end indices for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    // Get the content items for the current page
    const currentPageItems = contentData.slice(startIndex, endIndex);
  
    return (
      <div>
        <ul>
          {currentPageItems.map((item) => (
            <ContentItem key={item.id} data={item} />
          ))}
        </ul>
      </div>
    );
  }
  

export default ContentList;

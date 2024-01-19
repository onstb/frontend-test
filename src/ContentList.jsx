import React from 'react';
import ContentItem from './ContentItem';

function ContentList({ contentData, currentPage, itemsPerPage }) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    const currentPageItems = contentData.slice(startIndex, endIndex);
  
    return (
      <div>
        <h2>Content List</h2>
        <ul>
          {currentPageItems.map((item) => (
            <ContentItem key={item.id} data={item} />
          ))}
        </ul>
      </div>
    );
  }
  

export default ContentList;

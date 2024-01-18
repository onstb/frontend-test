// Pagination.js

import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        {'<'}
      </button>
      <span>Page {currentPage}</span>
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;

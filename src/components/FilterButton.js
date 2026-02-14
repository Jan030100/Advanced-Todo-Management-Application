import React from 'react';

function FilterButtons({ currentFilter, onFilterChange }) {
  // Define available filter options in one place for easy maintenance
  const filters = [
    { value: 'all', label: 'All' },
    { value: 'completed', label: 'Completed' },
    { value: 'uncompleted', label: 'Uncompleted' },
  ];

  return (
    <div className="filter_buttons">
      {filters.map((filter) => (
        <button
          key={filter.value} // Use value as key since it's unique
          className={`filter_btn ${currentFilter === filter.value ? 'active' : ''}`}
          onClick={() => onFilterChange(filter.value)} // Pass the selected filter value up
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

// Prevent re-renders when parent updates but props haven't changed
export default React.memo(FilterButtons);
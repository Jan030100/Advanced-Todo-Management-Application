import React from 'react';

function FilterButtons({ currentFilter, onFilterChange }) {
  const filters = [
    { value: 'all', label: 'All' },
    { value: 'completed', label: 'Completed' },
    { value: 'uncompleted', label: 'Uncompleted' },
  ];

  return (
    <div className="filter_buttons">
      {filters.map((filter) => (
        <button
          key={filter.value}
          className={`filter_btn ${currentFilter === filter.value ? 'active' : ''}`}
          onClick={() => onFilterChange(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default React.memo(FilterButtons); 
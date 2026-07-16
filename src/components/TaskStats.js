import React from 'react';

function TaskStats({ total, completed, uncompleted }) {
  return (
    <div className="stats_container">
      <div className="stat_card">
        <span className="stat_value">{total}</span>
        <span className="stat_label">Total</span>
      </div>
      <div className="stat_card">
        <span className="stat_value">{completed}</span>
        <span className="stat_label">Completed</span>
      </div>
      <div className="stat_card">
        <span className="stat_value">{uncompleted}</span>
        <span className="stat_label">Pending</span>
      </div>
    </div>
  );
}

export default React.memo(TaskStats);

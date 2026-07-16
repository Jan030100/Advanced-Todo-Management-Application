import React from 'react';

function EmptyState({ message, detail }) {
  return (
    <div className="empty_state">
      <p>{message}</p>
      {detail && <small>{detail}</small>}
    </div>
  );
}

export default React.memo(EmptyState);

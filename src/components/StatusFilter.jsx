import React from 'react';

const StatusFilter = ({ status, setStatus }) => {
  return (
    <div>
      Status Filter:
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Not Completed">Not Completed</option>
      </select>
    </div>
  );
};

export default StatusFilter;

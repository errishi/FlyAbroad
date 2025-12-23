import React from 'react';

const UniversityItem = ({ university, onSelect }) => {
  return (
    <div
      className="university-item"
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px 0'
      }}
    >
      <h3>{university.name}</h3>
      <p>{university.description}</p>

      {university.location && <p>Location: {university.location}</p>}
      {university.ranking && <p>Ranking: {university.ranking}</p>}

      <button onClick={() => onSelect(university.id)}>
        Select University
      </button>
    </div>
  );
};

export default UniversityItem;
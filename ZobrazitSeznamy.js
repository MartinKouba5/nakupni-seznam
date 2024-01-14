import React from 'react';
import { Link } from 'react-router-dom';

const ZobrazitSeznamy = ({ seznamy }) => {
  return (
    <div>
      <h2>Seznamy</h2>
      {seznamy.map((seznam) => (
        <div key={seznam.id}>
          <Link to={`/seznamy/${seznam.id}`}>
            {seznam.title} - Zobrazit detaily
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ZobrazitSeznamy;

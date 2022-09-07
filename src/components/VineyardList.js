import React from 'react';
import { Link } from 'react-router-dom';

 const VineyardList = ({ vineyard }) => {
  return (
    <div>
        <Link to={`/vineyards/${vineyard.id}`}>
            <h3>{vineyard.name}</h3>
        </Link>
    </div>
  )
}

export default VineyardList;

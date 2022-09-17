import React from 'react';
import { useParams } from 'react-router-dom'

const Wines = ({ vineyard, id, name, price, year, onUpdateWine, onDeleteWine }) => {

  console.log('into wines - vineyard = ', vineyard)

  const params = useParams();
  console.log('in wines - id = ', params.id);
  
  vineyardId = vineyard.id;
  

  return (
    <div>
      <h1>Wine Maintenance for </h1>
      <h1>{vineyard.name}</h1>
      <h2>Wines</h2>
      <div>
        {vywines === '' ? <h3>No Wines Exist</h3> : vywines}
      </div>
    </div>
  )
}

export default Wines;


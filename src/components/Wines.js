import React from 'react';
import { useParams } from 'react-router-dom'

const Wines = ({ vineyard, id, name, price, year, onUpdateWine, onDeleteWine }) => {

  console.log('into wines - vineyard = ', vineyard)

  const params = useParams();
  console.log('in wines - id = ', params.id);
  
  const vineyardId = vineyard.id;
  

  return (
      <div className="radio">
        <label>
          <input type="radio" value={id} />
           {year} {name} - ${price}
        </label>    
      </div>  
  )
}

export default Wines;


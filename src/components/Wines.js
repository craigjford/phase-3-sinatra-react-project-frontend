import React from 'react';
import { useParams } from 'react-router-dom'

const Wines = ({ vineyard, wine, id, name, price, year, onSelectedOption }) => {

  console.log('into wines - vineyard = ', vineyard)
  console.log('into wines - wine = ', wine)


  const params = useParams();
  console.log('in wines - id = ', params.id);

  const getSelectedOption = (e) => {
    console.log('getSelectedOption - id = ', e.target.value);
    const wineId = e.target.value;
    onSelectedOption(wineId);
  }

  return (
      <div className="radio">
        <label>
          <input type="radio" name="selected-wine" value={id} onChange={getSelectedOption} />
           {year} {name} - ${price}
        </label> 
        <br />   
      </div>  
  )
}

export default Wines;


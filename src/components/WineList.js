import React from 'react';
import { useParams } from 'react-router-dom';
import Wines from './Wines';

const WineList = ({ vineyards, onDeleteWine  }) => {

  const params = useParams();

  console.log('into winelist - vineyards = ', vineyards)
  console.log('in winelist - id = ', params.vineyard_id); 

  const vineyardArr = vineyards.filter((vineyard) => parseInt(vineyard.id) === parseInt(params.vineyard_id)); 
  
  const vineyard = vineyardArr[0];

  let vywines = "";

  let wineId;

  const handleSelectedOption = (id) => {
      wineId = parseInt(id)
      console.log('Bonanza - id = ', wineId) 
  }

  if (vineyard.wines.length !==  0) {
    vywines = vineyard.wines.map((wine) => {
      return (
          <Wines key={wine.id} wine={wine} id={wine.id} name={wine.name} price={wine.price} 
          year={wine.year} onSelectedOption={handleSelectedOption} />
      )
    })
  } 

  const handleWineDelete = () => {

    fetch(`http://localhost:9292/wines/${wineId}`, {
        method: 'DELETE'
    })
    .then(onDeleteWine(vineyard.id, wineId))
  }

  return (
    <div>
      <br />
      <br />  
      <h1>Wine Maintenance for </h1>
      <h1>{vineyard.name}</h1>
      <h2><u>Wines</u></h2>
      <br />
      <div>
        {vywines === '' ? <h3>No Wines Exist</h3> : vywines}
      </div> 
      <br />
      <br />
      <button className="submit-btn" type="button" onClick={handleWineDelete}>Delete</button> 
    </div>
  )
}

export default WineList;
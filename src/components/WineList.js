import React from 'react';
import { useParams } from 'react-router-dom';
import Wines from './Wines';

const WineList = ({ vineyards, onUpdateWine, onDeleteWine }) => {

  console.log('into winelist - vineyards = ', vineyards)

  const params = useParams();
  
  console.log('in winelist - id = ', params.id) 

  const vineyardArr = vineyards.filter((vineyard) => parseInt(vineyard.id) === parseInt(params.id)) 
  
  const vineyard = vineyardArr[0]

  let vywines = "";

  let wineId;

  const handleSelectedOption = (id) => {
      wineId = parseInt(id)
      console.log('Bonanza - id = ', wineId)
  }


  if (vineyard.wines.length !==  0) {
    vywines = vineyard.wines.map((wine) => {
      return (
          <Wines key={wine.id} vineyard={vineyard} wine={wine} id={wine.id} name={wine.name} price={wine.price} 
          year={wine.year} onSelectedOption={handleSelectedOption} />
      )
    })
  } 

  const handleWineDelete = () => {
    console.log('in wine delete id = ', wineId)
    // fetch(`http://localhost:9292/wines/${wineId}`, {
    //     method: 'DELETE'
    // })
    // // .then((res) => res.json())
    // .then(onDeleteWine(vineyard.id, wineId))
    onDeleteWine(vineyard.id, wineId)
}

  return (
    <div>
      <br />
      <br />  
      <h1>Wine Maintenance for </h1>
      <h1>{vineyard.name}</h1>
      <h2>Wines</h2>
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
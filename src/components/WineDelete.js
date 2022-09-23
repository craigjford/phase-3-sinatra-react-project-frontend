import React from 'react';
import { useParams } from 'react-router-dom';

const WineDelete = ({ vineyards, onDeleteWine }) => {

    const params = useParams();

    const vineyardArr = vineyards.filter((vineyard) => parseInt(vineyard.id) === parseInt(params.vineyard_id)) 

    const vineyard = vineyardArr[0];

    let wineId;
  
    const getSelectedOption = (e) => {
        wineId = e.target.value;
    }

    let vywines = "";
  
    if (vineyard.wines.length !==  0) {
        vywines = vineyard.wines.map((wine) => {
          return (
            <div>
                <label>
                    <input type="radio" name="selected-wine" value={wine.id} onChange={getSelectedOption} />
                {wine.year} {wine.name} - ${wine.price}
                </label> 
                <br /> 
            </div>
          )
        })
    }  

    const handleDeleteWine = () => {
        onDeleteWine(vineyard.id, wineId)
        fetch(`http://localhost:9292/wines/${wineId}`, {
            method: 'DELETE'
        })
        .then(onDeleteWine(vineyard.id, wineId))
      }


  return (
    <div>
      <h1>Delete Wine for </h1>
      <h1><i>{vineyard.name}</i></h1>
      <h2><u>Wines</u></h2>
      <br />
      <div>
        {vywines === '' ? <h3>No Wines Exist</h3> : vywines}
      </div> 
      <br />
      <br />
      <button className="submit-btn" type="button" onClick={handleDeleteWine}>Delete</button> 
    </div>
  )
}

export default WineDelete;
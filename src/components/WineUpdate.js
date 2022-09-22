import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const WineUpdate = (vineyards, onUpdateWine) => {
    const params = useParams();
    const [formData, setFormData] = useState({
      name: "",
      price: "",
      vineyard_id: parseInt(params.vineyard_id),
      year: ""
    });
  
    console.log("in wineUpdate -  vineyards = ", vineyards)
  
    console.log('in wineUpdate - vineyardid = ', params.vineyard_id) 

    const vineyardArr = vineyards.filter((vineyard) => parseInt(vineyard.id) === parseInt(params.vineyard_id)) 
    const vineyard = vineyardArr[0];
    let wineId;
  
    const getSelectedOption = (e) => {
        console.log('getSelectedOption - id = ', e.target.value);
        const wineId = e.target.value;
        // onSelectedOption(wineId);
      }

    let vywines = "";
  
    if (vineyard.wines.length !==  0) {
        vywines = vineyard.wines.map((wine) => {
          return (
            <label>
                <input type="radio" name="selected-wine" value={wine.id} onChange={getSelectedOption} />
             {wine.year} {wine.name} - ${wine.price}
            </label>  
          )
        })
    }  


  return (
    <div>
        <h1 className="formheader">Please Update A Wine for</h1>
        <h1>{vineyard.name}</h1>
        <h2><u>Wines</u></h2>
        <div>
            {vywines === '' ? <h3>No Wines Exist</h3> : vywines}
        </div>
    </div>
  )
}

export default WineUpdate;
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const WineUpdate = ({ vineyards, onUpdateWine }) => {
    const [formData, setFormData] = useState({
      id:   0,
      name: "",
      price: "",
      vineyard_id: 0,
      year: ""
    });

    const params = useParams();

    // console.log("in wineUpdate -  vineyards = ", vineyards)
  
    // console.log('in wineUpdate - vineyardid = ', params.vineyard_id) 

    const vineyardArr = vineyards.filter((vineyard) => parseInt(vineyard.id) === parseInt(params.vineyard_id)) 
    // console.log('in wineUpdate - array = ', vineyardArr);
    const vineyard = vineyardArr[0];
    // console.log('in wineUpdate - vineyard = ', vineyard);

    let wineId;
  
    const getSelectedOption = (e) => {
        console.log('getSelectedOption - wine = ', e.target.value);
        wineId = e.target.value;
        let wineArr = vineyard.wines.filter((wine) => { return wine.id === parseInt(wineId)});
        let formData = wineArr[0];
        setFormData(formData);
    }

    let vywines = "";
  
    if (vineyard.wines.length !==  0) {
        vywines = vineyard.wines.map((wine) => {
          return (
            <div>
                <label>
                    <input type="radio" name="selected-wine" value={wine.id} checked={false} onChange={getSelectedOption} />
                {wine.year} {wine.name} - ${wine.price}
                </label> 
                <br /> 
            </div>
          )
        })
    }  
 
    const handleChange = (event) => {
        const name = event.target.name;
        let value = event.target.value;
        console.log('in handleChange ', name, ' ', value)
        setFormData({
          ...formData,
          [name]: value,
        });
    }

    const handleUpdateWine = (e) => {
        e.preventDefault();
        console.log('in handleUpdateWine - formData = ', formData);
        wineId = formData.id;
        

        fetch(`http://localhost:9292/wines/${wineId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ 
                name: formData.name,
                price: formData.price,
                year: formData.year
            }),
        })
            .then((res) => res.json())
        //     .then((updatedWine) => console.log('updatedWine = ', updatedWine));
            .then((updatedWine) => onUpdateWine(updatedWine));   

        const clearInput = {
            id: 0,
            name: "",
            price: "",
            vineyard_id: 0,
            year: ""
        }
          
        setFormData(clearInput);    
    }

  return (
    <div>
        <h1 className="formheader">Please Update A Wine for</h1>
        <h1><i>{vineyard.name}</i></h1>
        <h2><u>Wines</u></h2>
        <form onSubmit={handleUpdateWine}>
            <label id="formlabel" htmlFor="year">Year </label>
                <input
                type="number"
                id="update-intfield"
                name="year"
                required
                onChange={handleChange}
                value={formData.year}
                />
            <label id="formlabel" htmlFor="name">Name  </label>
                <input
                type="text"
                id="update-field"
                name="name"
                required
                onChange={handleChange}
                value={formData.name}
                />
            <label id="formlabel" htmlFor="price">Price </label>
                <input
                type="number"
                id="update-intfield"
                name="price"
                required
                onChange={handleChange}
                value={formData.price}
                />
            <button type="submit" className="submit-btn">Update</button>
        </form>
        <br />
        <div>
            {vywines === '' ? <h3>No Wines Exist</h3> : vywines}
        </div>
    </div>
  )
}

export default WineUpdate;
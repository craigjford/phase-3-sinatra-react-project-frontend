import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const WineForm = ({ vineyards, onSubmitWine }) => {
  const params = useParams();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    vineyard_id: parseInt(params.vineyard_id),
    year: ""
  });

  const vineyardArr = vineyards.filter((vineyard) => parseInt(vineyard.id) === parseInt(params.vineyard_id)) 
  const vineyard = vineyardArr[0];

  let vywines = "";

  if (vineyard.wines.length !==  0) {
      vywines = vineyard.wines.map((wine) => {
        return ( 
            <h3>{wine.year} {wine.name} - ${wine.price}</h3>
        )
      })
  }  

  const handleChange = (event) => {
    
    let name = event.target.name;
    let value = event.target.value;

    if (name === "price") {
      value = parseInt(value)
    } 

    if (name === "year") {
      value = parseInt(value)
    }
 
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (event) => {

    event.preventDefault();

    fetch(`http://localhost:9292/vineyards/${formData.vineyard_id}/wines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        price: formData.price,
        year: formData.year
      })
    })   
    .then(res => res.json())
    .then(data => onSubmitWine(data))

    const clearInput = {
      name: "",
      price: "",
      vineyard_id: parseInt(vineyard.id),
      year: ""
    }

    setFormData(clearInput);
  }
    
  return (
    <div>
    <h1 className="formheader">Please Enter A Wine for</h1>
    <h1><i>{vineyard.name}</i></h1>
    <h2><u>Wines</u></h2>
    <div>
      {vywines === '' ? <h3>No Wines Exist</h3> : vywines}
    </div>
    <form onSubmit={handleSubmit}>
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
      <br />
      <br /> 
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  </div>
  )
}

export default WineForm;

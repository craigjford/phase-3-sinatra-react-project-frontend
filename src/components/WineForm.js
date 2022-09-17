import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const WineForm = ({ vineyards, onSubmitWine }) => {
  console.log("in wineForm -  vineyards = ", vineyards)
  const params = useParams();
  console.log('in wineform - id = ', params.id) 
  console.log('in wineform - params = ', params.params)

  const vineyardArr = vineyards.filter((vineyard) => parseInt(vineyard.id) === parseInt(params.id)) 
  
  const vineyard = vineyardArr[0];
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    vineyard_id: vineyard.id,
    year: ""
  });

  let vywines = "";

  if (vineyard.wines.length !==  0) {
      vywines = vineyard.wines.map((wine) => {
        return (
            <h3>{wine.year} {wine.name} - ${wine.price}</h3>
        )
      })
  }  

  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('wineform - formData = ', formData)
    fetch("http://localhost:9292/wines", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        price: formData.price,
        vineyard_id: formData.vineyard_id,
        year: formData.year
      })
    })    
    onSubmitWine(formData);

    const clearInput = {
      name: "",
      price: "",
      vineyard_id: vineyard.id,
      year: ""
    }

    setFormData(clearInput);
  }
    
  return (
    <div>
    <h1 className="formheader">Please Enter A Wine for</h1>
    <h1>{vineyard.name}</h1>
    <h2>Wines</h2>
    <div>
      {vywines === '' ? <h3>No Wines Exist</h3> : vywines}
    </div>
    <form onSubmit={handleSubmit}>
      <label id="formlabel" htmlFor="name">Name  </label>
        <input
          type="text"
          id="input-field"
          name="name"
          required
          onChange={handleChange}
          value={formData.name}
        />
      <br />
      <br />  
      <label id="formlabel" htmlFor="address">Price </label>
        <input
          type="number"
          id="input-field"
          name="price"
          required
          onChange={handleChange}
          value={formData.price}
        />
      <br />
      <br /> 
      <label id="formlabel" htmlFor="year">Year </label>
        <input
          type="text"
          id="input-field"
          name="year"
          required
          onChange={handleChange}
          value={formData.year}
        />
      <br />
      <br /> 
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  </div>
  )
}

export default WineForm;

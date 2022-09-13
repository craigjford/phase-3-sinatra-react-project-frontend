import React, { useState } from 'react'

const VineyardForm = ({ onSubmitVineyard }) => {
  console.log('got into vineyardform')

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    image_url: ""
  });

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    fetch("http://localhost:9292/vineyards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })    
    onSubmitVineyard(formData);

    const clearInput = {
      name: "",
      address: "",
      city: "",
      state: "",
      image_url: ""
    }

    setFormData(clearInput);
  }  
    
  return (
    <div>
    <h1 className="formheader">Please Enter A Premier Vineyard</h1>
    <form className="course-form" onSubmit={handleSubmit}>
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
      <label id="formlabel" htmlFor="address">Address </label>
        <input
          type="text"
          id="input-field"
          name="address"
          required
          onChange={handleChange}
          value={formData.address}
        />
      <br />
      <br /> 
      <label id="formlabel" htmlFor="city">City </label>
        <input
          type="text"
          id="input-field"
          name="city"
          required
          onChange={handleChange}
          value={formData.city}
        />
      <br />
      <br /> 
      <label id="formlabel" htmlFor="state">State </label>
        <input
          type="text"
          id="input-field"
          name="state"
          required
          onChange={handleChange}
          value={formData.state}
        />
      <br />
      <br /> 
      <label id="formlabel" htmlFor="image_url">Vineyard Image </label>
        <input
          type="text"
          id="input-field"
          name="image_url"
          required
          value={formData.image_url}
          onChange={handleChange}
        />
      <br />
      <br /> 
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  </div>
  )
}

export default VineyardForm;
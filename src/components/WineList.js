import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import Wines from './Wines';

const WineList = ({ vineyards, onDeleteWine, onUpdateWine  }) => {
  const [updateMode, setUpdateMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    vineyard_id: 0,
    year: ""
  });


  console.log('into winelist - vineyards = ', vineyards)

  const params = useParams();
  
  console.log('in winelist - id = ', params.id); 

  const vineyardArr = vineyards.filter((vineyard) => parseInt(vineyard.id) === parseInt(params.id)); 
  
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
          <Wines key={wine.id} vineyard={vineyard} wine={wine} id={wine.id} name={wine.name} price={wine.price} 
          year={wine.year} onSelectedOption={handleSelectedOption} />
      )
    })
  } 

  const handleWineDelete = () => {
    console.log('in wine delete id = ', wineId)
    console.log(`http://localhost:9292/wines/${wineId}`)
    fetch(`http://localhost:9292/wines/${wineId}`, {
        method: 'DELETE'
    })
    .then((res) => res.json())
    .then(onDeleteWine(vineyard.id, wineId))
  }

  const handleWineUpdate = (e) => {
    e.preventDefault();
    console.log('in wine update id = ', wineId)
    console.log(`http://localhost:9292/wines/${wineId}`)
    fetch(`http://localhost:9292/wines/${wineId}`, {
         method: 'PATCH',
         headers: { 'Content-Type': 'application/json'},
         body: JSON.stringify({ 
              name: formData.name,
              price: formData.price,
              vineyard_id: params.id,
              year: formData.year
          }),
        })      
    .then((res) => res.json())
    .then(onUpdateWine(formData))

    const clearInput = {
      name: "",
      price: "",
      vineyard_id: 0,
      year: ""
    }

    setFormData(clearInput);
  }

  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    if (name === "price") {
        value = parseInt(value)
    } 

    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
    <div>
      <br />
      <br />  
      <h1>Wine Maintenance for </h1>
      <h1>{vineyard.name}</h1>
      <h2>Wines</h2>
      <form onSubmit={handleWineUpdate}>
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
          id="update-field"
          name="price"
          required
          onChange={handleChange}
          value={formData.price}
        />
      <label id="formlabel" htmlFor="year">Year </label>
        <input
          type="text"
          id="update-field"
          name="year"
          required
          onChange={handleChange}
          value={formData.year}
        />
      <button type="submit" className="submit-btn">Update</button>
      </form>
      <br />
      <div>
        {vywines === '' ? <h3>No Wines Exist</h3> : vywines}
      </div> 
      <br />
      <br />
      <button className="submit-btn" type="button" onClick={handleWineDelete}>Delete</button> 
      <br />
      <br />
      <button className="submit-btn" type="button" onClick={() => setUpdateMode(true)}>Update</button>
    </div>
  )
}

export default WineList;
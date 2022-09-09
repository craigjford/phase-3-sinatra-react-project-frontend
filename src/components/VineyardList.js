import React from 'react';

const VineyardList = ({ id, name, address, city, state,
  vineyardUrl, onSubmitVineyard, onDeleteVineyard, onUpdateVineyard }) => {

  console.log('got into vineyardList')

  function handleVineyardDelete(id) {
    fetch(`http://localhost:9292/vineyards/${id}`, {
        method: 'DELETE'
    })
    .then((res) => res.json())
    .then(onDeleteVineyard(id))
  }

  function handleVineyardUpdate(id) {

    fetch(`http://localhost:9292/vineyards/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ 
            name: name
        }),
    })
        .then((res) => res.json())
        .then((updatedVineyard) => onUpdateVineyard(updatedVineyard));

  }

  return (
    <div className="vine-yard">
      <h1 className="vyname">{name}</h1> 
      <img className="vyimg" src={vineyardUrl} alt="Infamous Vineyards" height="500px" width="500px"></img>
      <br></br>
      <div className="center-lis">
        <h4>Address: {address}</h4>
        <h4>City: {city}</h4>
        <h4>State: {state}</h4>
      </div>
      <button className="vy-btn" type="button" onClick={() => handleVineyardDelete(id)}>Delete</button>
      <button className="vy-btn" type="button" onClick={() => handleVineyardUpdate(id)}>See Wines</button>
    </div>
  )

}

export default VineyardList;

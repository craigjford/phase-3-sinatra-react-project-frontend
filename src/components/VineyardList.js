import React from 'react';

const VineyardList = ({ vineyard, onDeleteVineyard, onUpdateVineyard }) => {

  console.log('got into vineyardList vineyard = ', vineyard)

  const handleVineyardDelete = (id) => {
    fetch(`http://localhost:9292/vineyards/${id}`, {
        method: 'DELETE'
    })
    .then((res) => res.json())
    .then(onDeleteVineyard(id))
}

  const handleVineyardUpdate = (id) => {

      fetch(`http://localhost:9292/vineyards/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({ 
              name: vineyard.name
          }),
      })
          .then((res) => res.json())
          .then((updatedCourse) => onUpdateVineyard(updatedCourse));

  }

  return (
    <div className="vine-yard">
      <h2 className="vyname">{vineyard.name}</h2> 
      <img className="vyimg" src={vineyard.image_url} alt="Infamous Vineyards" height="150px" width="150px"></img>
      <button className="vy-btn" type="button" onClick={() => handleVineyardDelete(vineyard.id)}>Delete</button>
      <button className="vy-btn" type="button" onClick={() => handleVineyardUpdate(vineyard.id)}>Update</button>
    </div>
  )

}

export default VineyardList;

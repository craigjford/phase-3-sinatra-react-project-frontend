import React from 'react';
import { Link } from 'react-router-dom'

const VineyardList = ({ vineyard, onDeleteVineyard }) => {

  console.log('got into vineyardList vineyard = ', vineyard)
  console.log('vineyardList - wines = ', vineyard.wines)

  const handleVineyardDelete = (id) => {
    fetch(`http://localhost:9292/vineyards/${id}`, {
        method: 'DELETE'
    })
    .then((res) => res.json())
    .then(onDeleteVineyard(id))
}

  return (
    <div className="vine-yard">
      <h2 className="vyname">{vineyard.name}</h2> 
      <img className="vyimg" src={vineyard.image_url} alt="Infamous Vineyards" height="150px" width="150px"></img>
      <br />
      <br />
      <button className="vy-btn" type="button" onClick={() => handleVineyardDelete(vineyard.id)}>Delete Vineyard</button>
      {/* <button className="vy-btn" type="button" onClick={() => handleVineyardUpdate(vineyard.id)}>Update</button> */}
      <div>
        <Link to={`/vineyards/${vineyard.id}`}>Details</Link>
      </div>
      <br />
    </div>
  )

}

export default VineyardList;

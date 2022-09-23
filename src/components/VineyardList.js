import React from 'react';
import { Link } from 'react-router-dom'

const VineyardList = ({ vineyard, onDeleteVineyard }) => {

  const handleVineyardDelete = (id) => {
    fetch(`http://localhost:9292/vineyards/${id}`, {
        method: 'DELETE'
    })
    .then(onDeleteVineyard(id))
}

  return (
    <div className="vine-yard">
      <h2 className="vyname">{vineyard.name}</h2> 
      <img className="vyimg" src={vineyard.image_url} alt="Infamous Vineyards" height="150px" width="150px"></img>
      <br />
      <br />
      <button className="vy-btn" type="button" onClick={() => handleVineyardDelete(vineyard.id)}>Delete Vineyard</button>
      <div>
        <Link to={`/vineyards/new`}>Add Vineyard</Link>
      </div>
      <br />
      <div>
        <Link to={`/vineyards/${vineyard.id}`}>Details</Link>
      </div>
      <br />
    </div>
  )

}

export default VineyardList;

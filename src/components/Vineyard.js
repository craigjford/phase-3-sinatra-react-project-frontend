
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const Vineyard = () => {
  const [vineyard, setVineyard] = useState({
    wines: []
  })
  // const [createWineForm, setCreateWineForm] = useState(false)

  const params = useParams();
  console.log('in vineyard - id = ', params.id)

  useEffect(() => {
    fetch(`http://localhost:9292/vineyards/${params.id}`)
       .then(res => res.json())
       .then(data => {
           console.log(data)
           setVineyard(data)
       })   
  }, [params.id])

  console.log('in Vineyard - vinyard = ', vineyard)

  const handleUpdateWines = (id) => {

  }


  const vywines = vineyard.wines.map((wine) => {
    return (
        <h4>{wine.year} {wine.name} - ${wine.price}</h4>
    )
  })

  return (
    <div>
      <br />
      <div className="vine-yard">
        <h1>{vineyard.name}</h1>
        <br />
        <br />
        <img className="vyimg" src={vineyard.image_url} alt="Infamous Vineyards" height="600px" width="600px"></img>
        {/* <button className="vy-btn" type="button" onClick={() => handleVineyardDelete(vineyard.id)}>Delete Vineyard</button> */}
        <br />
        <h3>Address: {vineyard.address}</h3>
        <h3>City: {vineyard.city}</h3>
        <h3>State: {vineyard.state}</h3>
        <h2>Wines</h2>
        <div>
          {vywines}
        </div>
        <button className="vy-btn" type="button" onClick={() => handleUpdateWines(vineyard.id)}>Update Wines</button>
      </div>
    </div>  
    )
}

export default Vineyard;

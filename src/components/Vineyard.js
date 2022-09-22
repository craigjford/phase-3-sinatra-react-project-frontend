
import React from 'react'
import { useParams, Link } from 'react-router-dom'

const Vineyard = ({ vineyards }) => {

  const params = useParams();
  console.log('in vineyard - id = ', params.id)

  const vineyardArr = vineyards.filter((vineyard) => parseInt(vineyard.id) === parseInt(params.id)) 
  console.log('in vineyard - vineyardArr = ', vineyardArr)
  const vineyard = vineyardArr[0];
  console.log('in vineyard - vineyard = ', vineyard)
  let vywines = "";

  if (vineyard.wines.length !==  0) {
      vywines = vineyard.wines.map((wine) => {
        return (
            <h3>{wine.year} {wine.name} - ${wine.price}</h3>
        )
      })
  }  

  console.log('in Vineyard - vinyardcjfcjfcjf = ', vineyard)
  console.log("vineyard.wines = ", vineyard.wines)

  return (
    <div>
      <br />
      <div className="vine-yard">
        <h1>{vineyard.name}</h1>
        <br />
        <br />
        <img className="vyimg" src={vineyard.image_url} alt="Infamous Vineyards" height="600px" width="600px"></img>
        <br />
        <h3>Address: {vineyard.address}</h3>
        <h3>City: {vineyard.city}</h3>
        <h3>State: {vineyard.state}</h3>
        <h2><u>Wines</u></h2>
        <div>
          {vywines === '' ? <h3>No Wines Exist</h3> : vywines}
        </div>
        <br />
        <div>
          <Link to={`/vineyards/${vineyard.id}/wines/new`}>Add Wines</Link>
        </div>
        <br />
        <div>
          <Link to={`/vineyards/${vineyard.id}/wines/update`}>Update Wines</Link>
        </div>
        <br />
        <div>
          {vywines === '' ? "" : <Link to={`/vineyards/${vineyard.id}/wines/delete`}>Delete Wines</Link>}
        </div>
        <br />
        <br />
      </div>
    </div>  
    )
}

export default Vineyard;

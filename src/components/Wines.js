import React from 'react';
import { useParams } from 'react-router-dom'

const Wines = ({ vineyards }) => {

  console.log('into wines - vineyards = ', vineyards)

  const params = useParams();
  console.log('in wines - id = ', params.id) 
  

  const vineyardArr = vineyards.filter((vineyard) => parseInt(vineyard.id) === parseInt(params.id)) 
  
  const vineyard = vineyardArr[0]

  const vywines = vineyard.wines.map((wine) => {
    return (
        <h3>{wine.year} {wine.name} - ${wine.price}</h3>
    )

  })

  return (
    <div>
      <h1>Wine Maintenance for </h1>
      <h1>{vineyard.name}</h1>
      <h2>Wines</h2>
      <div>
        {vywines}
      </div>
    </div>
  )
}

export default Wines;


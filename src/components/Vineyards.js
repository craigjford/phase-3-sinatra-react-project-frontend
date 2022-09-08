import React, {useState, useEffect } from 'react';
import VineyardList from './VineyardList'


const Vineyards = () => {
  const [vineyards, setVineyards] = useState([])  
  console.log('got into Vineyards')
  useEffect(() => {
    fetch ("http://localhost:9292/vineyards")
    .then (res => res.json())
    .then (data => setVineyards(data))
  }, [])

  const vineyardList = vineyards.map(vineyard => {
    return (<VineyardList key={vineyard.id} vineyard={vineyard} />)
  })

  return (
    <div>
      <ul>  
        {vineyardList}
      </ul>  
    </div>
  )
}

export default Vineyards;
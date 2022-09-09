import React, {useState, useEffect } from 'react';
import VineyardList from './VineyardList'


const Vineyards = () => {
  const [vineyards, setVineyards] = useState([]); 

  console.log('got into Vineyards');

  useEffect(() => {
    fetch ("http://localhost:9292/vineyards")
    .then (res => res.json())
    .then (data => setVineyards(data))
  }, [])

  console.log('vineyards = ', vineyards)

  function handleSubmitVineyard(newVineyard) {
    setVineyards([...vineyards, newVineyard])
  }
 
  function handleDeleteVineyard(id) {
    const updatedVineyards = vineyards.filter((vineyard) => vineyard.id !== id);
    setVineyards(updatedVineyards); 
  }
  
  function handleUpdateVineyard(updatedVineyardObj) {
    const updatedVineyards = vineyards.map((vineyard) => {
      if (vineyard.id === updatedVineyardObj.id) {
        return updatedVineyardObj;
      } else {
        return vineyard;
      }
    });
    setVineyards(updatedVineyards);  
  }

  const vineyardList = vineyards.map((vineyard) => {
    return (<VineyardList key={vineyard.id} id={vineyard.id} name={vineyard.name} 
                address={vineyard.address} city={vineyard.city} state={vineyard.state}
                vineyardUrl={vineyard.image_url} onSubmitVineyard={handleSubmitVineyard} 
                onDeleteForm={handleDeleteVineyard} onUpdateVineyard={handleUpdateVineyard} />)
  })

  console.log('vineyardList = ', vineyardList)
  
  return (
    <div>
      <ul>  
        {vineyardList}
      </ul>  
    </div>
  )
}

export default Vineyards;
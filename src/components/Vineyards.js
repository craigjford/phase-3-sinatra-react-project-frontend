import React from 'react';
import VineyardList from './VineyardList'

const Vineyards = ({ vineyards, onDeleteVineyard, onUpdateVineyard }) => {

  const vineyardList = vineyards.map((vineyard) => {
    return (<VineyardList key={vineyard.id} vineyard={vineyard}
                onDeleteVineyard={onDeleteVineyard} onUpdateVineyard={onUpdateVineyard} />)
  })

  return (
    <div>
      {vineyardList}
    </div>
  )
}

export default Vineyards;
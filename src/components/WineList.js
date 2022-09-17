import React from 'react';
import { useParams } from 'react-router-dom';
import Wines from './Wines';

const WineList = ({ vineyards, onUpdateWine, onDeleteWine }) => {

  console.log('into winelist - vineyards = ', vineyards)

  const params = useParams();
  
  console.log('in winelist - id = ', params.id) 

  const vineyardArr = vineyards.filter((vineyard) => parseInt(vineyard.id) === parseInt(params.id)) 
  
  const vineyard = vineyardArr[0]

  let vywines = "";

  // if (vineyard.wines.length !==  0) {
  //   vywines = vineyard.wines.map((wine) => {
  //     return (
  //         <h3>{wine.year} {wine.name} - ${wine.price}</h3>
  //     )
  //   })
  // } 

  if (vineyard.wines.length !==  0) {
    vywines = vineyard.wines.map((wine) => {
      return (
          <Wines key={wine.id} vineyard={vineyard} id={wine.id} name={wine.name} price={wine.price} year={wine.year}
                onupdateWine={onUpdateWine}  onDeleteWine={onDeleteWine} />
      )
    })
  } 

  return (
    <div>
        {vywines}
    </div>
  )
}

export default WineList;
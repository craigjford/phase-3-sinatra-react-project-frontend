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

  // const wines = vineyard.wines.map(wine => <Wines key={wine.id} wine={wine} />)

  //   function handleVineyardDelete(id) {
//     fetch(`http://localhost:9292/vineyards/${id}`, {
//         method: 'DELETE'
//     })
//     .then((res) => res.json())
//     .then(onDeleteVineyard(id))
//   }

//   function handleVineyardUpdate(id) {

//     fetch(`http://localhost:9292/vineyards/${id}`, {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json'},
//         body: JSON.stringify({ 
//             name: name
//         }),
//     })
//         .then((res) => res.json())
//         .then((updatedVineyard) => onUpdateVineyard(updatedVineyard));

//   const addWineForm = (wine) => {
//       fetch(`http://localhost:9292/wines`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify ({
//             name: wine.name,
//             price: wine.price,
//             vineyard_id: params[:vineyard_id],
//             year: wine.year
//           })
//       })
//   }


  return (
    <div>
        <br />
        <h1>Vineyard</h1>
        <hr/>
        <h3>Wines:</h3>
        <br />
        <h3>Hello</h3>
        <br />
    </div>
  )
}

export default Vineyard;

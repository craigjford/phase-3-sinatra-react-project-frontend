
import React from 'react'
import { useParams, Link } from 'react-router-dom'


const Vineyard = ({ vineyards }) => {


  const params = useParams();
  console.log('in vineyard - id = ', params.id)

  const vineyardArr = vineyards.filter((vineyard) => parseInt(vineyard.id) === parseInt(params.id)) 
  
  const vineyard = vineyardArr[0]

  const vywines = vineyard.wines.map((wine) => {
    return (
        <h3>{wine.year} {wine.name} - ${wine.price}</h3>
    )
  })

  // useEffect(() => {
  //   fetch(`http://localhost:9292/vineyards/${params.id}`)
  //      .then(res => res.json())
  //      .then(data => {
  //          console.log(data)
  //          setVineyard(data)
  //      })   
  // }, [params.id])

  console.log('in Vineyard - vinyardcjfcjfcjf = ', vineyard)
  console.log("vineyard.wines = ", vineyard.wines)

  // const vywines = vineyard.wines.map((wine) => {
  //   return (
  //       <h4>{wine.year} {wine.name} - ${wine.price}</h4>
  //   )
  // })

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
        <h2>Wines</h2>
        <div>
          {vywines}
        </div>
        <div>
          <Link to={`/wineform/${vineyard.id}`}>Add Wines</Link>
        </div>
        <br />
        <div>
          <Link to={`/wines/${vineyard.id}`}>Update Wines</Link>
        </div>
        <br />
      </div>
    </div>  
    )
}

export default Vineyard;

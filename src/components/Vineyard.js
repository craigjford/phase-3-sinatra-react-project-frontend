import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Wines from './Wines';

const Vineyard = () => {
  const [vineyard, setVineyard] = useState({
    wines: []
  })
  const [createWineForm, setCreateWineForm] = useState(false)

  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/vineyards/${params.id}`)
       .then(res => res.json())
       .then(data => {
           console.log(data)
           setVineyard(data)
       })   
  }, [params.id])

  const wines = vineyard.wines.map(wine => <Wines key={wine.id} wine={wine} />)

  return (
    <div>
        <br />
        <h2>{vineyard.name}</h2>
        <hr/>
        <h3>Wines:</h3>
        <br />
        {wines}
        <br />
    </div>
  )
}

export default Vineyard;

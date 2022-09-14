import React from 'react';
// import WineList from './WineList';

const Wines = ({ vineyards }) => {

  console.log('into wines - vineyards = ', vineyards)
  // const [wines, setWines] = useState([]);

  // useEffect(() => {
  //   fetch ("http://localhost:9292/wines")
  //   .then (res => res.json())
  //   .then (data => setWines(data))
  // }, [])

  // console.log('in wines - wines = ', wines);

  // const wineList = wines.map((wine) => {
  //   return(
  //     <WineList key={wine.id} id={wine.id} name={wine.name} price={wine.price} />
  //   )
  // })
  return (
    <div>
      <h1>Wines</h1>
    </div>
  )
}

export default Wines;


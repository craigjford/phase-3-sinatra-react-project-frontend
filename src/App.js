import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Vineyards from "./components/Vineyards";
import Vineyard from "./components/Vineyard";
import VineyardForm from "./components/VineyardForm";
import WineList from "./components/WineList";
import WineForm from "./components/WineForm";


const App = () => {
  const [vineyards, setVineyards] = useState([{
    wines: []
  }])

  console.log('got into App vineyards = ', vineyards);

  useEffect(() => {
    fetch ("http://localhost:9292/vineyards")
    .then (res => res.json())
    .then (data => setVineyards(data))
  }, [])

  const handleSubmitVineyard = (newVineyard) => {
    setVineyards([...vineyards, newVineyard])
  }
 
  const handleDeleteVineyard = (id) => {
    const updatedVineyards = vineyards.filter((vineyard) => vineyard.id !== id);
    setVineyards(updatedVineyards); 
  }
  
  const handleUpdateVineyard = (updatedVineyardObj) => {
    const updatedVineyards = vineyards.map((vineyard) => {
      if (vineyard.id === updatedVineyardObj.id) {
        return updatedVineyardObj;
      } else {
        return vineyard;
      }
    });
    setVineyards(updatedVineyards);  
  }

  const handleSubmitWine = (newWineObj) => {

    const updatedVineyards = vineyards.map((vineyard) => {
      if (vineyard.id === newWineObj.vineyard_id) {
          vineyard.wines.push(newWineObj)
          return vineyard;
      } else {
          return vineyard;
      }
    });
    setVineyards(updatedVineyards); 
  }

  const handleUpdateWine = (newWineObj) => {
    console.log('123 newWineObj = ', newWineObj);

    const updatedVineyards = vineyards.map((vineyard) => {
      if (vineyard.id === newWineObj.vineyard_id) {
          vineyard.wines.push(newWineObj)
          console.log('456 vineyard = ', vineyard)
          return vineyard;
      } else {
          return vineyard;
      }
    });
    console.log('789 updatedVineyards = ', updatedVineyards)
    // setVineyards(updatedVineyards); 

  }

  const handleDeleteWine = (vineyardId, wineId) => {

    const updatedVineyards = vineyards.map((vineyard) => {
      if (vineyard.id === vineyardId) {
          const newWineArr = vineyard.wines.filter((wine) => wine.id !== wineId)
          vineyard.wines = newWineArr;
          return vineyard;
      } else {
          return vineyard;
      }
    });
    setVineyards(updatedVineyards); 

  }

 console.log('in App heading into JSX')
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route exact="true" path="/vineyards" element={<Vineyards vineyards={vineyards} onDeleteVineyard={handleDeleteVineyard} onUpdateVineyard={handleUpdateVineyard}/>} />
        <Route exact="true" path="/vineyards/new" element={<VineyardForm onSubmitVineyard={handleSubmitVineyard} />} />
        <Route path="/vineyards/:id" element={<Vineyard vineyards={vineyards} />} />
        <Route path="/vineyards/wines/add/:id" element={<WineForm vineyards={vineyards} onSubmitWine={handleSubmitWine} />} />
        <Route path="/vineyards/wines/update/:id" element={<WineList vineyards={vineyards} onDeleteWine={handleDeleteWine} onUpdateWine={handleUpdateWine} onSubmitWine={handleSubmitWine} />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Vineyards from "./components/Vineyards";
import Vineyard from "./components/Vineyard";
import VineyardForm from "./components/VineyardForm";
import Wines from "./components/Wines";
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

  const handleSubmitWine = (newVineyard) => {
    setVineyards([...vineyards, newVineyard])
  }

  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route exact="true" path="/vineyards" element={<Vineyards vineyards={vineyards} onDeleteVineyard={handleDeleteVineyard} onUpdateVineyard={handleUpdateVineyard}/>} />
        <Route exact="true" path="/vineyards/new" element={<VineyardForm onSubmitVineyard={handleSubmitVineyard} />} />
        <Route path="/vineyards/:id" element={<Vineyard vineyards={vineyards} />} />
        <Route exact="true" path="/wines" element={<Wines vineyards={vineyards} />} />
        <Route path="/vineyards/:id/wines/new" element={<WineForm vineyards={vineyards} onSubmitWine={handleSubmitWine} />} />
        <Route path="/wines/:id/edit" element={<Wines vineyards={vineyards} />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

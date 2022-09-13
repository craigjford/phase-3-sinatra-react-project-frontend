import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Vineyards from "./components/Vineyards";
import Vineyard from "./components/Vineyard";
import VineyardForm from "./components/VineyardForm";


function App() {
  const [vineyards, setVineyards] = useState([]);
  // const [vineyards, setVineyards] = useState([{
  //   wines: []
  // }])

  console.log('got into App vineyards = ', vineyards);

  useEffect(() => {
    fetch ("http://localhost:9292/vineyards")
    .then (res => res.json())
    .then (data => setVineyards(data))
  }, [])

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

  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route exact="true" path="/vineyards" element={<Vineyards vineyards={vineyards} onDeleteVineyard={handleDeleteVineyard} onUpdateVineyard={handleUpdateVineyard}/>} />
        <Route exact="true" path="/vineyardform" element={<VineyardForm onSubmitVineyard={handleSubmitVineyard} />} />
        <Route path="/vineyards/:id" element={<Vineyard />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

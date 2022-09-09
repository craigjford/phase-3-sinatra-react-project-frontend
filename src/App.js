
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Vineyards from "./components/Vineyards";
import Vineyard from "./components/Vineyard";


function App() {
  
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route exact="true" path="/vineyards" element={<Vineyards />} />
        {/* <Route exact path="/vineyardform" element={<VineyardForm onFormSubmit={handleVineyardSubmit} />} /> */}
        <Route path="/vineyards/:id" element={<Vineyard />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

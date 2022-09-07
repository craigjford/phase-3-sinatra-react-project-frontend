import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Vineyards from "./components/Vineyards";
import Vineyard from "./components/Vineyard";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/vinyards" element={<Vineyards />} />
        <Route path="/vineyards/:id" element={<Vineyard />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;

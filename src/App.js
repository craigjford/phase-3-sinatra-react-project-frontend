import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import VineyardList from "./components/VineyardList";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/vinyards" element={<VineyardList />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;

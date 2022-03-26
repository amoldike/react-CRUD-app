import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Categore from "./Components/Categore";
import Navbar from "./Components/Navbar";
import Schedule from "./Components/Schedule.jsx";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Schedule />} />
          <Route path="category" element={<Categore />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

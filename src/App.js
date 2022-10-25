import Collection from "./pages/Collection";
import Home from "./pages/Home";
import Chart from "./pages/Chart";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </Router>
  );
}

export default App;

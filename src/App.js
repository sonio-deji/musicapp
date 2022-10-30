import Collection from "./pages/Collection";
import Home from "./pages/Home";
import Chart from "./pages/Chart";
import AudioPlayer from "./component/AudioPlayer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <AudioPlayer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </Router>
  );
}

export default App;

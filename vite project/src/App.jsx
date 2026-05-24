import { Routes, Route, Link } from "react-router-dom";

import Home from "./page/Home";
import Agence from "./page/Agence";
import Project from "./page/Project";

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/project" element={<Project />} />
      </Routes>

    </div>
  );
}

export default App;
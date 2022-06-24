/** @jsxImportSource @emotion/react */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Resume from "./components/Resume";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

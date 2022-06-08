/** @jsxImportSource @emotion/react */
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Gradient from "./components/shared/Gradient";
import "./index.css";
// import { colors } from "./constants.js";

function App() {
  return (
    <>
      <Navbar />
      <Gradient class="orange-to-blue" />
      <Hero />
    </>
  );
}

export default App;

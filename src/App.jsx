/** @jsxImportSource @emotion/react */
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Gradient from "./components/shared/Gradient";
import "./index.css";
// import { colors } from "./constants.js";

function App() {
  return (
    <>
      <Navbar />
      <Gradient class="orange-to-blue" />
      <Hero />
      <Gradient class="blue-to-orange" />
      <About />
      <Gradient class="orange-to-blue" />
      <Projects />
    </>
  );
}

export default App;

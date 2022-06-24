/** @jsxImportSource @emotion/react */
import Hero from "../Hero";
import Navbar from "../Navbar";
import About from "../About";
import Projects from "../Projects";
import Gradient from "../shared/Gradient";

function Home() {
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

export default Home;

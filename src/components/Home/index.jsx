/** @jsxImportSource @emotion/react */
import Hero from "../Hero";
import Navbar from "../Navbar";
import About from "../About";
import Projects from "../Projects";
import Gradient from "../shared/Gradient";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Gradient class="orange-to-blue" />
      <Hero />
      <Gradient class="blue-to-orange" />
      <About />
      <Gradient class="orange-to-blue" />
      <Projects />
    </div>
  );
}

export default Home;

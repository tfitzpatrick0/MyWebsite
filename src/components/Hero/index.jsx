/** @jsxImportSource @emotion/react */
import "./style.css";
import { colors } from "../../constants.js";
import ndPic from "../../images/nd_winter.jpeg";

function Intro() {
  return (
    <div className="hero-container" css={{ backgroundColor: colors.honey }}>
      <div className="hero-text-block" css={{ backgroundColor: colors.orange }}>
        <h1>Tim Fitzpatrick</h1>
        <h2>Computer Science Student</h2>
        <h3>at the University of Notre Dame</h3>
      </div>
      <div className="hero-background">
        <div className="hero-background-image"></div>
        <img src={ndPic} alt="ND" />
      </div>
    </div>
  );
}

export default Intro;

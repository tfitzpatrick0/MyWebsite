/** @jsxImportSource @emotion/react */
import "./style.css";
import Link from "../shared/Link";
import { colors } from "../../constants.js";
import ndPic from "../../images/nd_winter.png";

function Hero() {
  return (
    <div className="hero-container" css={{ backgroundColor: colors.honey }}>
      <div className="hero-text-block" css={{ backgroundColor: colors.orange }}>
        <h1 className="hero-name" css={{ color: colors.white }}>
          Tim Fitzpatrick
        </h1>
        <h2 className="hero-subtext" css={{ color: colors.white }}>
          <Link
            href="https://cse.nd.edu/"
            primary={colors.white}
            hover={colors.skyBlue}
          >
            Computer Science
          </Link>
          <br />
          at
          <br />
          <Link
            href="https://nd.edu/"
            primary={colors.white}
            hover={colors.skyBlue}
          >
            The University of Notre Dame
          </Link>
        </h2>
      </div>
      <div className="img-container">
        <img className="background-img" src={ndPic} alt="ND" />
      </div>
    </div>
  );
}

export default Hero;

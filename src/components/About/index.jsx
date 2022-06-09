/** @jsxImportSource @emotion/react */
import "./style.css";
import { colors } from "../../constants.js";

function About() {
  return (
    <div
      id="about"
      className="about-container"
      css={{ backgroundColor: colors.skyBlue }}
    >
      <div className="about-header-block">
        <div
          className="about-header"
          css={{ color: colors.white, backgroundColor: colors.blue }}
        >
          <h1 className="about-header-text">About Me</h1>
        </div>
      </div>
      <div className="about-info-block">
        <h2 className="about-info-text" css={{ color: colors.black }}>
          Hey there bro
        </h2>
      </div>
    </div>
  );
}

export default About;
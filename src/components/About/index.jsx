/** @jsxImportSource @emotion/react */
import "./style.css";
import Link from "../shared/Link";
import { colors } from "../../constants.js";

function About() {
  return (
    <div
      id="about"
      className="about-container"
      css={{ backgroundColor: colors.skyBlue }}
    >
      <div className="about-header-block">
        <div className="about-header" css={{ backgroundColor: colors.blue }}>
          <h1 className="about-header-text" css={{ color: colors.white }}>
            About Me
          </h1>
        </div>
        <div className="about-divider">
          <div className="about-divider-img" css={{ color: colors.black }}>
            <span className="fas fa-code" aria-hidden="true"></span>
          </div>
        </div>
        <div className="about-link" css={{ backgroundColor: colors.blue }}>
          <div className="about-link-text">
            <Link
              href="https://www.linkedin.com/in/tfitzpatrick3/"
              primary={colors.white}
              hover={colors.orange}
            >
              <span className="fab fa-linkedin" aria-hidden="true"></span>
            </Link>
          </div>
        </div>
      </div>
      <div className="about-info-block">
        <h2 className="about-info-text" css={{ color: colors.black }}>
          I am a rising senior undergraduate student in the College of
          Engineering at Notre Dame. I am majoring in Computer Science, an area
          of interest and excitement that I want to continuing exploring further
          through my courses, extracurricular involvement, and internship/job
          opportunities. I am particularly interested in the field of front-end
          software and web application development.
          <br />
          <br />
          Some of my other interests include lifting, gaming, business and
          sports.
        </h2>
      </div>
    </div>
  );
}

export default About;

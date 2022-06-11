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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </h2>
      </div>
    </div>
  );
}

export default About;

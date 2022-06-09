/** @jsxImportSource @emotion/react */
import "./style.css";
import { colors } from "../../constants.js";

// import facerec from "../../images/facerec.png";
// import filesys from "../../images/filesys.png";
import muse from "../../images/muse.png";

function Projects() {
  return (
    <div
      id="projects"
      className="projects-container"
      css={{ backgroundColor: colors.honey }}
    >
      <div className="projects-header-block">
        <div
          className="projects-header"
          css={{ color: colors.white, backgroundColor: colors.orange }}
        >
          <h1 className="projects-header-text">My Projects</h1>
        </div>
      </div>
      <div className="projects-info-block">
        <div className="project-info-regular">
          <div className="project-info-text">
            <h4 css={{ color: colors.black }}>Databases Project</h4>
            <h3 css={{ color: colors.blue }}>Muse Web App</h3>
            <p
              className="project-overlay"
              css={{ color: colors.white, backgroundColor: colors.orange }}
            >
              Description of the project...{" "}
              <a href="https://github.com/tfitzpatrick0/Databases-MuseWebApp">
                Check it out
              </a>
              . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h4 css={{ color: colors.black }}>Technologies used include:</h4>
            <ul css={{ color: colors.black }}>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>MySQL</li>
            </ul>
          </div>
          <img className="project-image" src={muse} alt="Lil Muse Code." />
        </div>
      </div>
    </div>
  );
}

export default Projects;

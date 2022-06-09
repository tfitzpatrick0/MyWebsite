/** @jsxImportSource @emotion/react */
import "./style.css";
import { colors } from "../../constants.js";

import facerec from "../../images/facerec.png";
import filesys from "../../images/filesys.png";
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
      <article>
        <div class="text">
          <h4>Databases Project</h4>
          <h3>Muse Web App</h3>
          <p class="blackbox">
            Description of the project...{" "}
            <a href="https://github.com/tfitzpatrick0/Databases-MuseWebApp">
              Check it out
            </a>
            . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h4>Technologies used include:</h4>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>MySQL</li>
          </ul>
        </div>
        <img src={muse} alt="Lil Muse Code." />
      </article>
    </div>
  );
}

export default Projects;

/** @jsxImportSource @emotion/react */
import "./style.css";
import Link from "../shared/Link";
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
          css={{ backgroundColor: colors.orange }}
        >
          <h1 className="projects-header-text" css={{ color: colors.white }}>
            My Projects
          </h1>
        </div>
        <div className="projects-divider">
          <div className="projects-divider-img" css={{ color: colors.black }}>
            <span className="fas fa-code" aria-hidden="true"></span>
          </div>
        </div>
        <div className="projects-link" css={{ backgroundColor: colors.orange }}>
          <div className="projects-link-text">
            <Link
              href="https://github.com/tfitzpatrick0/"
              primary={colors.white}
              hover={colors.skyBlue}
            >
              <span className="fab fa-github" aria-hidden="true"></span>
            </Link>
          </div>
        </div>
      </div>
      <div className="projects-info-block">
        <div className="project-info-regular">
          <div className="project-info-text">
            <h4 css={{ color: colors.black }}>Databases Project</h4>
            <h2>
              <Link
                href="https://github.com/tfitzpatrick0/Databases-MuseWebApp"
                primary={colors.blue}
                hover={colors.coral}
              >
                Muse Web App
              </Link>
            </h2>
            <p
              className="project-overlay"
              css={{ color: colors.white, backgroundColor: colors.orange }}
            >
              This was the semester project for my Databases Concepts course.
              For this project, my group and I created a web app that interacts
              with a MySQL database containing information about music, and
              utilizes the free Spotify API to implement additional features
              using this data. Users are able to search the database for a song,
              and upon selection the user is presented with additional
              information, new recommendations, and the ability to interact with
              their Spotify account in-app. This project was created using basic
              HTML/CSS and JavaScript to design the frontend, and PHP to design
              MySQL queries for our database.
            </p>
            <h4 css={{ color: colors.black }}>Technologies used include:</h4>
            <ul css={{ color: colors.black }}>
              <li>HTML/CSS</li>
              <li>~</li>
              <li>JavaScript</li>
              <li>~</li>
              <li>PHP</li>
              <li>~</li>
              <li>MySQL</li>
            </ul>
          </div>
          <img className="project-image" src={muse} alt="Muse Code." />
        </div>
        <div className="project-info-reverse">
          <div className="project-info-text">
            <h4 css={{ color: colors.black }}>Computer Vision Project</h4>
            <h2>
              <Link
                href="https://github.com/tfitzpatrick0/CV-FaceRecognition"
                primary={colors.blue}
                hover={colors.coral}
              >
                Face Recognition System
              </Link>
            </h2>
            <p
              className="project-overlay"
              css={{ color: colors.white, backgroundColor: colors.orange }}
            >
              Description - Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <h4 css={{ color: colors.black }}>Technologies used include:</h4>
            <ul css={{ color: colors.black }}>
              <li>Python</li>
              <li>~</li>
              <li>Machine Learning</li>
            </ul>
          </div>
          <img
            className="project-image"
            src={facerec}
            alt="Face Recognition Code."
          />
        </div>
        <div className="project-info-regular">
          <div className="project-info-text">
            <h4 css={{ color: colors.black }}>Operating Systems Project</h4>
            <h2>
              <Link
                href="https://github.com/tfitzpatrick0/OS-FileSystem"
                primary={colors.blue}
                hover={colors.coral}
              >
                Simple File System
              </Link>
            </h2>
            <p
              className="project-overlay"
              css={{ color: colors.white, backgroundColor: colors.orange }}
            >
              Description - Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <h4 css={{ color: colors.black }}>Technologies used include:</h4>
            <ul css={{ color: colors.black }}>
              <li>C</li>
              <li>~</li>
              <li>Linux</li>
            </ul>
          </div>
          <img
            className="project-image"
            src={filesys}
            alt="File System Code."
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;

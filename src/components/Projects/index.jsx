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
              For this project in my Databases Concepts course, my group and I
              created a web app that interacts with a MySQL database containing
              information about music, and utilizes the free Spotify API to
              implement additional features using this data. Users are able to
              search the database for a song, and upon selection the user is
              presented with additional information, new recommendations, and
              the ability to interact with their Spotify account in-app. This
              project was created using basic HTML/CSS and JavaScript to design
              the frontend, and PHP to design MySQL queries for our database.
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
              For this project in my Computer Vision course, my partner and I
              developed a facial recognition system. The first iteration of the
              program was only focused on recognizing and detecting faces within
              a dataset. After reaching a high level of success, we added the
              ability for our system to detect and recognize faces in real time.
              This works by taking around 100 photos of someone's face using the
              webcam, detecting the facial region, and adding them to our
              dataset and model.
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
              This is the fourth project for my Operating Systems course. In
              this project, my partner and I developed a library in C that
              emulated the Unix file system by first loading a disk image into
              memory and efficiently performing file system operations on the
              image. In order to develop this program, we needed to learn about
              proper system calls and the structure of the Unix filesystem. In
              addition to this, we needed to continuously maintain proper memory
              allocation, which was the cause of the majority of errors during
              our development process.
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

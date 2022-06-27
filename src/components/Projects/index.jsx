/** @jsxImportSource @emotion/react */
import "./style.css";
import Link from "../shared/Link";
import Project from "./Project";
import { colors, projectsList } from "../../constants.js";

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
        {projectsList.map((project, index) =>
          index % 2 === 0 ? (
            <Project layout="project-info-regular" project={project} />
          ) : (
            <Project layout="project-info-reverse" project={project} />
          )
        )}
      </div>
    </div>
  );
}

export default Projects;

/** @jsxImportSource @emotion/react */
import "./style.css";
import Link from "../shared/Link";
import { colors } from "../../constants.js";

function Project(props) {
  return (
    <div className={props.layout}>
      <div className="project-info-text">
        <h4 css={{ color: colors.black }}>{props.project.title}</h4>
        <h2>
          <Link href={props.href} primary={colors.blue} hover={colors.coral}>
            {props.project.name}
          </Link>
        </h2>
        <p
          className="project-overlay"
          css={{ color: colors.white, backgroundColor: colors.orange }}
        >
          {props.project.description}
        </p>
        <h4 css={{ color: colors.black }}>Technologies used include:</h4>
        <ul css={{ color: colors.black }}>
          {props.project.technologies.map((tech) => (
            <li>{tech}</li>
          ))}
        </ul>
      </div>
      <img className="project-image" src={props.image} alt="" />
    </div>
  );
}

export default Project;

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Project from "./Project";
import { colors, projectsList } from "../../constants";

const sectionStyles = css`
  padding: 3rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const labelStyles = css`
  font-family: "JetBrains Mono", monospace;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${colors.accent};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.5rem;
`;

const dividerStyles = css`
  width: 40px;
  height: 2px;
  background: ${colors.border};
  margin-bottom: 3rem;
`;

const gridStyles = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`;

function Projects() {
  return (
    <section id="projects" css={sectionStyles}>
      <p css={labelStyles}>Projects</p>
      <div css={dividerStyles} />
      <div css={gridStyles}>
        {projectsList.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;

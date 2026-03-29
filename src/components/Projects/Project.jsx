/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../constants";

const cardStyles = css`
  background: ${colors.surface};
  border: 1px solid ${colors.border};
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: rgba(99, 102, 241, 0.3);
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  }
`;

const imageWrapperStyles = css`
  width: 100%;
  height: 240px;
  overflow: hidden;
  background: ${colors.surfaceLight};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const bodyStyles = css`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const metaStyles = css`
  font-family: "JetBrains Mono", monospace;
  font-size: 0.7rem;
  color: ${colors.accent};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.5rem;
`;

const titleStyles = css`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${colors.textPrimary};
  letter-spacing: -0.01em;
  margin-bottom: 0.75rem;
`;

const descStyles = css`
  font-size: 0.875rem;
  color: ${colors.textSecondary};
  line-height: 1.7;
  margin-bottom: 1.25rem;
  flex: 1;
`;

const techStyles = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  span {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.7rem;
    padding: 0.25rem 0.6rem;
    border-radius: 6px;
    background: ${colors.accentDim};
    color: ${colors.accentLight};
    font-weight: 500;
  }
`;

function Project({ project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      css={cardStyles}
    >
      <div css={imageWrapperStyles}>
        <img src={project.image} alt={project.name} />
      </div>
      <div css={bodyStyles}>
        <span css={metaStyles}>{project.title}</span>
        <h3 css={titleStyles}>{project.name}</h3>
        <p css={descStyles}>{project.description}</p>
        <div css={techStyles}>
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default Project;

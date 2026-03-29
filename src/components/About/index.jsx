/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../constants";

const sectionStyles = css`
  padding: 3rem 2rem;
  max-width: 800px;
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

const headingStyles = css`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  color: ${colors.textPrimary};
  letter-spacing: -0.02em;
  line-height: 1.4;
  margin-bottom: 1.5rem;
`;

const bodyStyles = css`
  font-size: 1.05rem;
  color: ${colors.textSecondary};
  line-height: 1.8;
  max-width: 640px;
`;

const dividerStyles = css`
  width: 40px;
  height: 2px;
  background: ${colors.border};
  margin-bottom: 2rem;
`;

function About() {
  return (
    <section id="about" css={sectionStyles}>
      <p css={labelStyles}>About</p>
      <div css={dividerStyles} />
      <h2 css={headingStyles}>
        I build things for the web and beyond.
      </h2>
      <p css={bodyStyles}>
        I studied Computer Science at the University of Notre Dame, where I got
        into front-end development, computer vision, and systems programming.
        I'm drawn to building software that people actually interact with —
        whether that's a full-stack web app, a real-time CV system, or a mobile
        fitness tracker.
      </p>
      <p
        css={[
          bodyStyles,
          css`
            margin-top: 1rem;
          `,
        ]}
      >
        Outside of code: lifting, gaming, business, and sports.
      </p>
    </section>
  );
}

export default About;

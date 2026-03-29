/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { colors, socials } from "../../constants";

const float = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -20px) scale(1.05); }
  66% { transform: translate(-20px, 15px) scale(0.95); }
`;

const containerStyles = css`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2rem;
`;

const orbStyles = css`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  animation: ${float} 20s ease-in-out infinite;
  pointer-events: none;
`;

const contentStyles = css`
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 700px;
`;

const nameStyles = css`
  font-size: clamp(3rem, 7vw, 5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: ${colors.textPrimary};
  margin-bottom: 1rem;
`;

const subtitleStyles = css`
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: ${colors.textSecondary};
  font-weight: 400;
  margin-bottom: 2.5rem;
  line-height: 1.6;

  a {
    color: ${colors.accent};
    transition: color 0.2s;
    &:hover {
      color: ${colors.accentLight};
    }
  }
`;

const socialsStyles = css`
  display: flex;
  gap: 1rem;
  justify-content: center;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1.25rem;
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s ease;
    border: 1px solid ${colors.border};
    color: ${colors.textSecondary};

    &:hover {
      border-color: ${colors.accent};
      color: ${colors.textPrimary};
      background: ${colors.accentDim};
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

function Hero() {
  return (
    <section css={containerStyles}>
      <div
        css={[
          orbStyles,
          css`
            width: 500px;
            height: 500px;
            background: ${colors.accent};
            top: -10%;
            right: -10%;
          `,
        ]}
      />
      <div
        css={[
          orbStyles,
          css`
            width: 400px;
            height: 400px;
            background: ${colors.green};
            bottom: -5%;
            left: -5%;
            animation-delay: -7s;
          `,
        ]}
      />
      <div css={contentStyles}>
        <h1 css={nameStyles}>Tim Fitzpatrick</h1>
        <p css={subtitleStyles}>
          Software Engineer.{" "}
          <a href="https://cse.nd.edu/">CS</a> grad from{" "}
          <a href="https://nd.edu/">Notre Dame</a>.
        </p>
        <div css={socialsStyles}>
          <a href={socials.github} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

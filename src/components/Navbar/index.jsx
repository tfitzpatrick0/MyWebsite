/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import { colors } from "../../constants";

const navStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all 0.3s ease;
`;

const innerStyles = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`;

const logoStyles = css`
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: -0.02em;
  color: ${colors.textPrimary};
  font-family: "JetBrains Mono", monospace;

  span {
    color: ${colors.accent};
  }
`;

const linksStyles = css`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    font-size: 0.875rem;
    font-weight: 500;
    color: ${colors.textSecondary};
    transition: color 0.2s ease;
    letter-spacing: 0.01em;

    &:hover {
      color: ${colors.textPrimary};
    }
  }
`;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      css={[
        navStyles,
        css`
          background: ${scrolled ? "rgba(10, 10, 11, 0.85)" : "transparent"};
          backdrop-filter: ${scrolled ? "blur(12px)" : "none"};
          border-bottom: 1px solid
            ${scrolled ? colors.border : "transparent"};
        `,
      ]}
    >
      <div css={innerStyles}>
        <a href="/" css={logoStyles}>
          tf<span>.</span>
        </a>
        <div css={linksStyles}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="/resume">Resume</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

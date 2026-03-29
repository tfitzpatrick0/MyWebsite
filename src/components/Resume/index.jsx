/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Document, Page } from "react-pdf";
import { colors } from "../../constants";
import resume from "../../assets/resume.pdf";

const containerStyles = css`
  min-height: 100vh;
  padding: 5rem 2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const backStyles = css`
  font-family: "JetBrains Mono", monospace;
  font-size: 0.85rem;
  font-weight: 500;
  color: ${colors.textSecondary};
  margin-bottom: 2rem;
  transition: color 0.2s;
  align-self: center;

  &:hover {
    color: ${colors.accent};
  }

  &::before {
    content: "← ";
  }
`;

const pdfWrapperStyles = css`
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${colors.border};
  background: #fff;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

  .react-pdf__Page__canvas {
    display: block !important;
    max-width: 100%;
    height: auto !important;
  }
`;

function Resume() {
  return (
    <div css={containerStyles}>
      <a href="/" css={backStyles}>
        Back to Home
      </a>
      <div css={pdfWrapperStyles}>
        <Document file={resume} options={{ workerSrc: "pdf.worker.js" }}>
          <Page pageNumber={1} scale={2.0} />
        </Document>
      </div>
    </div>
  );
}

export default Resume;

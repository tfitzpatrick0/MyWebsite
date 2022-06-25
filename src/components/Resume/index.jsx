/** @jsxImportSource @emotion/react */
import "./style.css";
import { Document, Page } from "react-pdf";
import Link from "../shared/Link";
import Gradient from "../shared/Gradient";
import { colors } from "../../constants.js";
import resume from "../../images/resume.pdf";

function Resume() {
  return (
    <div className="resume">
      <header css={{ backgroundColor: colors.skyBlue }}>
        <Link href="/" primary={colors.orange} hover={colors.coral}>
          Back to Home
        </Link>
      </header>
      <Gradient class="orange-to-blue" />
      <div className="resume-container" css={{ backgroundColor: colors.honey }}>
        <Document file={resume} options={{ workerSrc: "pdf.worker.js" }}>
          <Page pageNumber={1} scale={2.0} />
        </Document>
      </div>
    </div>
  );
}

export default Resume;

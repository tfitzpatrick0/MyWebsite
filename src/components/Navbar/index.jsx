/** @jsxImportSource @emotion/react */
import "./style.css";
import Link from "../shared/Link";
import { colors } from "../../constants.js";

function Navbar() {
  return (
    <nav css={{ backgroundColor: colors.skyBlue }}>
      <ul>
        <li css={{ backgroundColor: colors.blue }}>
          <Link href="#about" primary={colors.white} hover={colors.orange}>
            About
          </Link>
        </li>
        <li css={{ backgroundColor: colors.blue }}>
          <Link href="#projects" primary={colors.white} hover={colors.orange}>
            Projects
          </Link>
        </li>
        <li css={{ backgroundColor: colors.blue }}>
          <Link
            href="../../resume.pdf"
            primary={colors.white}
            hover={colors.orange}
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

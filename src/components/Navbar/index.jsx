/** @jsxImportSource @emotion/react */
import "./style.css";
import Link from "../shared/Link";
import { colors } from "../../constants.js";

function Navbar() {
  return (
    <nav css={{ backgroundColor: colors.skyBlue }}>
      <ul>
        <li>
          <Link href="#about" primary={colors.orange} hover={colors.coral}>
            About
          </Link>
        </li>
        <li>
          <Link href="#projects" primary={colors.orange} hover={colors.coral}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/resume" primary={colors.orange} hover={colors.coral}>
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

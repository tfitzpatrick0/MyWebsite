/** @jsxImportSource @emotion/react */
import Link from "../shared/Link";
import "./style.css";
import { colors } from "../../constants.js";

function Navbar() {
  return (
    <nav css={{ backgroundColor: colors.skyBlue }}>
      <ul>
        <li css={{ backgroundColor: colors.blue }}>
          <Link
            href="projects.html"
            primary={colors.white}
            hover={colors.orange}
          >
            Projects
          </Link>
        </li>
        <li css={{ backgroundColor: colors.blue }}>
          <Link href="#about" primary={colors.white} hover={colors.orange}>
            About
          </Link>
        </li>
        <li css={{ backgroundColor: colors.blue }}>
          <Link
            href="contact.html"
            primary={colors.white}
            hover={colors.orange}
          >
            Contact
          </Link>
        </li>
        <li css={{ backgroundColor: colors.blue }}>
          <Link
            href="https://www.linkedin.com/in/tfitzpatrick3/"
            primary={colors.white}
            hover={colors.orange}
          >
            <span class="fab fa-linkedin" aria-hidden="true"></span> LinkedIn
          </Link>
        </li>
        <li css={{ backgroundColor: colors.blue }}>
          <Link
            href="https://github.com/tfitzpatrick0/"
            primary={colors.white}
            hover={colors.orange}
          >
            <span class="fab fa-github-square" aria-hidden="true"></span> Github
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
